import {
  FilterDefinition,
  FiltersDefinition,
  FiltersState,
} from "@/components/OneFilterPicker/types"
import { renderHook, waitFor } from "@testing-library/react"
import { beforeEach, describe, expect, it, vi } from "vitest"
import type {
  InfiniteScrollPaginatedResponse,
  LaneDataSource,
  PageBasedPaginatedResponse,
  RecordType,
} from "../types"
import { useData } from "../useData"

// Test record type - must extend RecordType constraint
interface TestRecord extends RecordType {
  id: string
  name: string
  department: "Engineering" | "Design" | "Product" | "Marketing"
}

// Test data
const testRecords: TestRecord[] = [
  { id: "1", name: "Alice", department: "Engineering" },
  { id: "2", name: "Bob", department: "Engineering" },
  { id: "3", name: "Charlie", department: "Design" },
  { id: "4", name: "Diana", department: "Design" },
  { id: "5", name: "Eve", department: "Product" },
  { id: "6", name: "Frank", department: "Product" },
  { id: "7", name: "George", department: "Marketing" },
  { id: "8", name: "Hannah", department: "Marketing" },
  { id: "9", name: "Ivy", department: "Marketing" },
  { id: "10", name: "Jack", department: "Marketing" },
  { id: "11", name: "Kate", department: "Marketing" },
  { id: "12", name: "Liam", department: "Marketing" },
  { id: "13", name: "Mia", department: "Marketing" },
  { id: "14", name: "Noah", department: "Marketing" },
  { id: "15", name: "Olivia", department: "Marketing" },
  { id: "16", name: "Patrick", department: "Marketing" },
  { id: "17", name: "Quinn", department: "Marketing" },
  { id: "18", name: "Ryan", department: "Marketing" },
  { id: "19", name: "Sarah", department: "Marketing" },
  { id: "20", name: "Thomas", department: "Marketing" },
  { id: "21", name: "Uma", department: "Marketing" },
  { id: "22", name: "Victor", department: "Marketing" },
  { id: "23", name: "William", department: "Marketing" },
  { id: "24", name: "Xavier", department: "Marketing" },
  { id: "25", name: "Yara", department: "Marketing" },
  { id: "26", name: "Zara", department: "Marketing" },
  { id: "27", name: "Alice", department: "Marketing" },
  { id: "28", name: "Bob", department: "Marketing" },
  { id: "29", name: "Charlie", department: "Marketing" },
  { id: "30", name: "Diana", department: "Marketing" },
  { id: "31", name: "Eve", department: "Marketing" },
  { id: "32", name: "Frank", department: "Marketing" },
  { id: "33", name: "George", department: "Marketing" },
]

// Create a simple data adapter for testing
const createTestAdapter = (records: TestRecord[], perPage = 10) => ({
  paginationType: "infinite-scroll" as const,
  perPage,
  async fetchData({
    filters,
    pagination,
  }: {
    filters?: Record<keyof TestRecord, string[]>
    pagination?: {
      cursor?: string | null
      perPage?: number
      currentPage?: number
    }
  }): Promise<InfiniteScrollPaginatedResponse<TestRecord>> {
    console.log("🔍 TestAdapter.fetchData called with:", {
      filters,
      pagination,
    })

    // Filter records based on department filter
    let filteredRecords = records
    if (
      filters?.department &&
      Array.isArray(filters.department) &&
      filters.department.length > 0
    ) {
      filteredRecords = records.filter((r) =>
        filters.department.includes(r.department)
      )
    }

    // Handle pagination
    const cursor = pagination?.cursor || "0"
    const startIndex = parseInt(cursor, 10)
    const endIndex = startIndex + (pagination?.perPage || perPage)
    const paginatedRecords = filteredRecords.slice(startIndex, endIndex)

    const response: InfiniteScrollPaginatedResponse<TestRecord> = {
      type: "infinite-scroll",
      records: paginatedRecords,
      total: filteredRecords.length,
      perPage: pagination?.perPage || perPage,
      cursor: endIndex < filteredRecords.length ? endIndex.toString() : null,
      hasMore: endIndex < filteredRecords.length,
    }

    console.log("📤 TestAdapter.fetchData response:", {
      recordsCount: response.records.length,
      total: response.total,
      cursor: response.cursor,
      hasMore: response.hasMore,
    })

    return response
  },
})

const createTestAdapterWithPageBasedPagination = (
  records: TestRecord[],
  perPage = 10
) => ({
  paginationType: "pages" as const,
  perPage,
  async fetchData({
    filters,
    pagination,
  }: {
    filters?: Record<string, unknown>
    pagination?: {
      currentPage?: number
    }
  }): Promise<PageBasedPaginatedResponse<TestRecord>> {
    console.log(
      "🔍 TestAdapterWithPageBasedPagination.fetchData called with:",
      {
        filters,
        pagination,
      }
    )

    const { currentPage = 1 } = pagination || {}
    const pageSize = perPage || 10
    const startIndex = (currentPage - 1) * pageSize
    const endIndex = startIndex + pageSize
    const paginatedRecords = records.slice(startIndex, endIndex)

    return {
      type: "pages",
      records: paginatedRecords,
      total: records.length,
      currentPage,
      perPage: pageSize,
      pagesCount: Math.ceil(records.length / pageSize),
    }
  },
})

// Helper function to create a mock data source with all required properties
const createMockDataSource = (
  adapter: ReturnType<typeof createTestAdapter>,
  lanes?: ReadonlyArray<{
    id: string
    filters: FiltersState<Record<string, FilterDefinition>>
  }>
) => ({
  dataAdapter: adapter,
  lanes,
  // Mock all the required properties with proper typing
  currentFilters: {} as Record<string, unknown>,
  setCurrentFilters: vi.fn(),
  currentSortings: { field: "", order: "asc" as const },
  setCurrentSortings: vi.fn(),
  currentSearch: undefined,
  debouncedCurrentSearch: undefined,
  setCurrentSearch: vi.fn(),
  isLoading: false,
  setIsLoading: vi.fn(),
  currentNavigationFilters: {} as Record<string, unknown>,
  setCurrentNavigationFilters: vi.fn(),
  currentGrouping: undefined as Record<string, unknown> | undefined,
  setCurrentGrouping: vi.fn(),
  currentSummaries: undefined,
  setCurrentSummaries: vi.fn(),
})

const createMockDataSourceWithPageBasedPagination = (
  adapter: ReturnType<typeof createTestAdapterWithPageBasedPagination>,
  lanes?: ReadonlyArray<LaneDataSource<FiltersDefinition>>
) => ({
  dataAdapter: adapter,
  lanes,
  currentFilters: {},
  setCurrentFilters: vi.fn(),
  currentSortings: { field: "", order: "asc" as const },
  setCurrentSortings: vi.fn(),
  currentSearch: undefined,
  debouncedCurrentSearch: undefined,
  setCurrentSearch: vi.fn(),
  isLoading: false,
  setIsLoading: vi.fn(),
  currentNavigationFilters: {} as Record<string, unknown>,
  setCurrentNavigationFilters: vi.fn(),
  currentGrouping: undefined as Record<string, unknown> | undefined,
  setCurrentGrouping: vi.fn(),
  currentSummaries: undefined,
  setCurrentSummaries: vi.fn(),
})

describe("useData Hook", () => {
  let testAdapter: ReturnType<typeof createTestAdapter>

  beforeEach(() => {
    testAdapter = createTestAdapter(testRecords)
    vi.clearAllMocks()
  })

  describe("Basic functionality (without lanes)", () => {
    it("should fetch initial data successfully", async () => {
      const dataSource = createMockDataSource(testAdapter)

      // Type assertion to bypass strict typing for testing
      const { result } = renderHook(() => useData(dataSource as never))

      // Initially loading
      expect(result.current.isInitialLoading).toBe(true)
      expect(result.current.data).toEqual({ type: "flat", records: [] }) // Other option would be grouped

      // Wait for data to load
      await waitFor(() => {
        expect(result.current.isInitialLoading).toBe(false)
      })

      // Check loaded data
      expect(result.current.data.records).toHaveLength(6) // All records
      expect(result.current.error).toBeNull()
      expect(result.current.paginationInfo?.total).toBe(6)

      // Should not have lanes data
      expect(result.current.lanesData).toBeUndefined()
      expect(result.current.laneLoadMore).toBeUndefined()
    })

    it("should apply filters correctly", async () => {
      const dataSource = createMockDataSource(testAdapter)

      const { result } = renderHook(() =>
        useData(dataSource as never, {
          filters: { department: ["Engineering"] },
        })
      )

      await waitFor(() => {
        expect(result.current.isInitialLoading).toBe(false)
      })

      // Should only show Engineering records
      expect(result.current.data.records).toHaveLength(2)
      expect(
        result.current.data.records.every((r) => r.department === "Engineering")
      ).toBe(true)
      expect(result.current.paginationInfo?.total).toBe(2)
    })
  })

  describe("Lanes functionality", () => {
    it("should initialize lanes data correctly", async () => {
      const dataSource = createMockDataSource(testAdapter, [
        {
          id: "engineering",
          filters: { department: ["Engineering"] },
        },
        { id: "design", filters: { department: ["Design"] } },
        { id: "product", filters: { department: ["Product"] } },
        { id: "marketing", filters: { department: ["Marketing"] } },
      ])

      const { result } = renderHook(() => useData(dataSource as never))

      // Initially loading
      expect(result.current.isInitialLoading).toBe(false)
      // lanesData should be initialized immediately with empty structures
      expect(result.current.lanesData).toBeDefined()
      expect(Object.keys(result.current.lanesData!)).toEqual([
        "engineering",
        "design",
        "product",
        "marketing",
      ])
      // All lanes should start with empty records
      expect(result.current.lanesData!.engineering.isInitialLoading).toBe(true)
      expect(result.current.lanesData!.design.isInitialLoading).toBe(true)
      expect(result.current.lanesData!.product.isInitialLoading).toBe(true)
      expect(result.current.lanesData!.marketing.isInitialLoading).toBe(true)
      expect(result.current.lanesData!.engineering.data.records).toHaveLength(0)
      expect(result.current.lanesData!.design.data.records).toHaveLength(0)
      expect(result.current.lanesData!.product.data.records).toHaveLength(0)
      expect(result.current.lanesData!.marketing.data.records).toHaveLength(0)

      // Wait for lanes to load
      await waitFor(() => {
        expect(result.current.lanesData).toBeDefined()
        expect(result.current.lanesData!.engineering.isInitialLoading).toBe(
          false
        )
        expect(result.current.lanesData!.design.isInitialLoading).toBe(false)
        expect(result.current.lanesData!.product.isInitialLoading).toBe(false)
        expect(result.current.lanesData!.marketing.isInitialLoading).toBe(false)
      })

      const lanesData = result.current.lanesData!

      // Check that all lanes are loaded
      expect(Object.keys(lanesData)).toEqual([
        "engineering",
        "design",
        "product",
        "marketing",
      ])

      // Check engineering lane
      expect(lanesData.engineering.data.records).toHaveLength(2)
      expect(
        lanesData.engineering.data.records.every(
          (r) => r.department === "Engineering"
        )
      ).toBe(true)
      expect(lanesData.engineering.paginationInfo?.total).toBe(2)
      expect(lanesData.engineering.isLoadingMore).toBe(false)

      // Check design lane
      expect(lanesData.design.data.records).toHaveLength(2)
      expect(
        lanesData.design.data.records.every((r) => r.department === "Design")
      ).toBe(true)
      expect(lanesData.design.paginationInfo?.total).toBe(2)

      // Check product lane
      expect(lanesData.product.data.records).toHaveLength(2)
      expect(
        lanesData.product.data.records.every((r) => r.department === "Product")
      ).toBe(true)
      expect(lanesData.product.paginationInfo?.total).toBe(2)

      // Check marketing lane
      expect(lanesData.marketing.data.records).toHaveLength(10)
      expect(
        lanesData.marketing.data.records.every(
          (r) => r.department === "Marketing"
        )
      ).toBe(true)
      expect(lanesData.marketing.paginationInfo?.total).toBe(27)
      expect(lanesData.marketing.paginationInfo?.hasMore).toBe(true)
      expect(lanesData.marketing.isLoadingMore).toBe(false)
      expect(lanesData.marketing.isInitialLoading).toBe(false)

      // Should have lanes functions available
      expect(result.current.laneLoadMore).toBeDefined()
      expect(result.current.laneLoadMore?.("engineering")).toBeDefined()
      expect(result.current.laneLoadMore?.("design")).toBeDefined()
      expect(result.current.laneLoadMore?.("product")).toBeDefined()
      expect(result.current.laneLoadMore?.("marketing")).toBeDefined()
    })

    it("should handle errors in initial lane fetch", async () => {
      // Create an adapter that throws an error
      const errorAdapter = {
        paginationType: "infinite-scroll" as const,
        perPage: 10,
        async fetchData(): Promise<
          InfiniteScrollPaginatedResponse<TestRecord>
        > {
          throw new Error("Initial fetch failed")
        },
      }

      // Mock the onLaneError callback
      const onLaneError = vi.fn()

      const dataSource = createMockDataSource(errorAdapter, [
        { id: "engineering", filters: { department: ["Engineering"] } },
      ])

      renderHook(() => useData(dataSource as never, { onLaneError }))

      // Wait for the error to be called
      await waitFor(() => {
        expect(onLaneError).toHaveBeenCalledWith(
          "engineering",
          expect.objectContaining({
            message: "Failed to fetch data for lane engineering",
            cause: expect.any(Error),
          })
        )
      })
    })

    describe("Edge cases", () => {
      it("should handle empty lanes array", async () => {
        const dataSource = createMockDataSource(testAdapter, [])

        const { result } = renderHook(() => useData(dataSource as never))

        await waitFor(() => {
          expect(result.current.isInitialLoading).toBe(false)
        })

        // Should behave like no lanes
        expect(result.current.lanesData).toBeUndefined()
        expect(result.current.laneLoadMore).toBeUndefined()
      })

      it("should handle lanes with no matching records", async () => {
        const dataSource = createMockDataSource(testAdapter, [
          { id: "marketing", filters: { department: ["Marketing"] } }, // No Marketing records
        ])

        const { result } = renderHook(() => useData(dataSource as never))

        await waitFor(() => {
          expect(result.current.lanesData?.marketing).toBeDefined()
        })

        const marketingLane = result.current.lanesData!.marketing
        expect(marketingLane.data.records).toHaveLength(0)
        expect(marketingLane.paginationInfo?.total).toBe(0)
        expect(marketingLane.paginationInfo?.hasMore).toBe(false)
        expect(marketingLane.isLoadingMore).toBe(false)
      })

      it("should load more data until there are no more records", async () => {
        const dataSource = createMockDataSource(testAdapter, [
          { id: "marketing", filters: { department: ["Marketing"] } },
        ])

        const { result } = renderHook(() => useData(dataSource as never))

        await waitFor(() => {
          expect(result.current.lanesData!.marketing.isInitialLoading).toBe(
            false
          )
        })

        const marketingLane = result.current.lanesData!.marketing
        expect(marketingLane.paginationInfo?.total).toBe(27)
        expect(marketingLane.paginationInfo?.hasMore).toBe(true)

        testAdapter.fetchData({
          filters: { department: ["Marketing"] },
          pagination: {
            cursor: marketingLane.paginationInfo?.cursor,
          },
        })
      })
    })
  })
})

describe("useData Hook with page-based pagination", () => {
  let testAdapter: ReturnType<typeof createTestAdapterWithPageBasedPagination>

  beforeEach(() => {
    testAdapter = createTestAdapterWithPageBasedPagination(testRecords)
    vi.clearAllMocks()
  })

  describe("Basic functionality (without lanes)", () => {
    it("should fetch initial data successfully", async () => {
      const dataSource =
        createMockDataSourceWithPageBasedPagination(testAdapter)

      // Type assertion to bypass strict typing for testing
      const { result } = renderHook(() => useData(dataSource as never))

      // Initially loading
      expect(result.current.isInitialLoading).toBe(true)
      expect(result.current.data).toEqual({ type: "flat", records: [] }) // Other option would be grouped
      expect(result.current.lanesData).toBeUndefined()

      // Wait for all lanes to load
      await waitFor(() => {
        expect(result.current.isInitialLoading).toBe(false)
      })

      // Check loaded data
      expect(result.current.data.records).toHaveLength(6) // All records
      expect(result.current.error).toBeNull()
      expect(result.current.paginationInfo?.total).toBe(6)

      // Should not have lanes data
      expect(result.current.lanesData).toBeUndefined()
      expect(result.current.laneLoadMore).toBeUndefined()
    })

    it("should apply filters correctly", async () => {
      const dataSource =
        createMockDataSourceWithPageBasedPagination(testAdapter)

      const { result } = renderHook(() =>
        useData(dataSource as never, {
          filters: { department: ["Engineering"] },
        })
      )

      await waitFor(() => {
        expect(result.current.isInitialLoading).toBe(false)
      })

      // Should only show Engineering records
      expect(result.current.data.records).toHaveLength(2)
      expect(
        result.current.data.records.every((r) => r.department === "Engineering")
      ).toBe(true)
      expect(result.current.paginationInfo?.total).toBe(2)
    })
  })
})
