import { act, renderHook } from "@testing-library/react"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { Observable } from "zen-observable-ts"
import type { PromiseState } from "../../lib/promise-to-observable"
import { ActionsDefinition } from "./actions"
import type { FiltersState } from "./Filters/types"
import type {
  BaseDataAdapter,
  BaseFetchOptions,
  BaseResponse,
  DataSource,
  PaginatedDataAdapter,
  PaginatedResponse,
  RecordType,
} from "./types"
import { useData } from "./useData"

interface TestRecord extends RecordType {
  id: number
  name: string
}

// Define a proper FiltersDefinition with a search filter
type TestFilters = {
  search: {
    type: "search"
    label: string
  }
}

const mockData: TestRecord[] = [
  { id: 1, name: "Test 1" },
  { id: 2, name: "Test 2" },
]

const createMockDataSource = (
  fetchData: (
    options: BaseFetchOptions<TestFilters>
  ) =>
    | BaseResponse<TestRecord>
    | Promise<BaseResponse<TestRecord>>
    | Observable<PromiseState<BaseResponse<TestRecord>>>,
  paginationType?: "pages"
): DataSource<TestRecord, TestFilters, ActionsDefinition<TestRecord>> => {
  const baseAdapter: BaseDataAdapter<TestRecord, TestFilters> = {
    fetchData,
  }

  const paginatedAdapter: PaginatedDataAdapter<TestRecord, TestFilters> = {
    fetchData: async (options) => {
      const result = await Promise.resolve(fetchData(options))
      if (result instanceof Observable) {
        throw new Error("Observable not supported in paginated mode")
      }
      return {
        records: result,
        total: result.length,
        currentPage: options.pagination.currentPage,
        perPage: options.pagination.perPage,
        pagesCount: Math.ceil(result.length / options.pagination.perPage),
      }
    },
    paginationType: "pages",
    perPage: 10,
  }

  return {
    dataAdapter: paginationType === "pages" ? paginatedAdapter : baseAdapter,
    currentFilters: {},
    setCurrentFilters: vi.fn(),
  }
}

describe("useData", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe("with synchronous data", () => {
    it("should handle synchronous data immediately", () => {
      const source = createMockDataSource(() => mockData)

      const { result } = renderHook(() => useData(source))

      expect(result.current.data).toEqual(mockData)
      expect(result.current.isLoading).toBe(false)
      expect(result.current.isInitialLoading).toBe(false)
      expect(result.current.error).toBe(null)
    })

    it("should handle synchronous paginated data", async () => {
      const source = createMockDataSource(() => mockData, "pages")

      const { result } = renderHook(() => useData(source))

      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 0))
      })

      expect(result.current.data).toEqual(mockData)
      expect(result.current.paginationInfo).toEqual({
        total: 2,
        currentPage: 1,
        perPage: 10,
        pagesCount: 1,
      })
    })
  })

  describe("with async data", () => {
    it("should handle async data with loading states", async () => {
      const source = createMockDataSource(async () => {
        await new Promise((resolve) => setTimeout(resolve, 0))
        return mockData
      })

      const { result } = renderHook(() => useData(source))

      expect(result.current.isInitialLoading).toBe(true)

      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 0))
      })

      expect(result.current.data).toEqual(mockData)
      expect(result.current.isLoading).toBe(false)
      expect(result.current.isInitialLoading).toBe(false)
    })

    it("should handle async errors", async () => {
      const error = new Error("Test error")
      const source = createMockDataSource(async () => {
        throw error
      })

      const { result } = renderHook(() => useData(source))

      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 0))
      })

      expect(result.current.error).toEqual({
        message: "Error fetching data",
        cause: error,
      })
    })
  })

  describe("with observable data", () => {
    it("should handle observable data with loading states", async () => {
      type ObservableState = {
        loading: boolean
        data: TestRecord[] | null
        error: Error | null
      }
      const source = createMockDataSource(() => {
        return new Observable<ObservableState>((subscriber) => {
          subscriber.next({ loading: true, data: null, error: null })
          setTimeout(() => {
            subscriber.next({ loading: false, data: mockData, error: null })
            subscriber.complete()
          }, 0)
        })
      })

      const { result } = renderHook(() => useData(source))

      expect(result.current.isLoading).toBe(true)

      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 0))
      })

      expect(result.current.data).toEqual(mockData)
      expect(result.current.isLoading).toBe(false)
    })

    it("should handle observable errors", async () => {
      const error = new Error("Test error")
      type ObservableState = {
        loading: boolean
        data: TestRecord[] | null
        error: Error | null
      }
      const source = createMockDataSource(() => {
        return new Observable<ObservableState>((subscriber) => {
          subscriber.next({ loading: true, data: null, error: null })
          setTimeout(() => {
            subscriber.next({ loading: false, data: null, error })
            subscriber.complete()
          }, 0)
        })
      })

      const { result } = renderHook(() => useData(source))

      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 0))
      })

      expect(result.current.error).toEqual({
        message: "Error fetching data",
        cause: error,
      })
    })
  })

  describe("with filters", () => {
    it("should apply filters to synchronous data", () => {
      const filters: Partial<FiltersState<TestFilters>> = {
        search: "Test 1",
      }
      const source = createMockDataSource(
        ({ filters }: { filters: FiltersState<TestFilters> }) =>
          mockData.filter((item) =>
            filters.search ? item.name.includes(filters.search) : true
          )
      )

      const { result } = renderHook(() => useData(source, { filters }))

      expect(result.current.data).toEqual([mockData[0]])
    })

    it("should apply filters to synchronous data", () => {
      const filters: Partial<FiltersState<TestFilters>> = {
        search: "Test 1",
      }
      const source = createMockDataSource(
        ({ filters }: { filters: FiltersState<TestFilters> }) =>
          mockData.filter((item) =>
            filters.search ? item.name.includes(filters.search) : true
          )
      )

      const { result } = renderHook(() => useData(source, { filters }))

      expect(result.current.data).toEqual([mockData[0]])
    })
  })

  describe("subscription cleanup", () => {
    it("should clean up previous subscription when filters change", async () => {
      // Create a mock implementation for Observable.subscribe that we can track
      let subscriptionCount = 0
      let unsubscribeCalls = 0

      // Create a source with a fetchData function that returns an observable
      const source = createMockDataSource(() => {
        return new Observable<PromiseState<TestRecord[]>>((subscriber) => {
          subscriptionCount++
          subscriber.next({ loading: true, data: null, error: null })

          // Simulate async data loading
          setTimeout(() => {
            subscriber.next({ loading: false, data: mockData, error: null })
            subscriber.complete()
          }, 10)

          // Return unsubscribe function that tracks when it's called
          return () => {
            unsubscribeCalls++
          }
        })
      })

      // Render the hook with initial filters
      const { rerender } = renderHook(
        (props) => useData(props.source, { filters: props.filters }),
        {
          initialProps: {
            source,
            filters: { search: "initial" } as Partial<
              FiltersState<TestFilters>
            >,
          },
        }
      )

      // Wait for initial data to load
      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 20))
      })

      // Record the current counts before changing filters
      const initialSubscriptionCount = subscriptionCount
      const initialUnsubscribeCalls = unsubscribeCalls

      // Change filters to trigger a re-fetch
      rerender({
        source,
        filters: { search: "new search" } as Partial<FiltersState<TestFilters>>,
      })

      // Wait for the new data to load
      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 20))
      })

      // Verify that a new subscription was created and the old one was cleaned up
      expect(subscriptionCount).toBe(initialSubscriptionCount + 1)
      expect(unsubscribeCalls).toBe(initialUnsubscribeCalls + 1)
    })

    it("should clean up previous subscription when changing pages", async () => {
      // Create a mock implementation for Observable.subscribe that we can track
      let subscriptionCount = 0
      let unsubscribeCalls = 0

      // Create a paginated source with a fetchData function that returns an observable
      const source = {
        dataAdapter: {
          fetchData: () => {
            return new Observable<PromiseState<PaginatedResponse<TestRecord>>>(
              (subscriber) => {
                subscriptionCount++
                subscriber.next({
                  loading: true,
                  data: null,
                  error: null,
                })

                // Simulate async data loading
                setTimeout(() => {
                  subscriber.next({
                    loading: false,
                    data: {
                      records: mockData,
                      total: mockData.length,
                      currentPage: 1,
                      perPage: 10,
                      pagesCount: 1,
                    },
                    error: null,
                  })
                  subscriber.complete()
                }, 10)

                // Return unsubscribe function that tracks when it's called
                return () => {
                  unsubscribeCalls++
                }
              }
            )
          },
          paginationType: "pages" as const,
          perPage: 10,
        },
        currentFilters: {},
        setCurrentFilters: vi.fn(),
      }

      // Render the hook
      const { result } = renderHook(() =>
        useData(
          source as DataSource<
            TestRecord,
            TestFilters,
            ActionsDefinition<TestRecord>
          >
        )
      )

      // Wait for initial data to load
      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 20))
      })

      // Record the current counts before changing page
      const initialSubscriptionCount = subscriptionCount
      const initialUnsubscribeCalls = unsubscribeCalls

      // Change page to trigger a re-fetch
      act(() => {
        result.current.setPage(2)
      })

      // Wait for the new data to load
      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 20))
      })

      // Verify that a new subscription was created and the old one was cleaned up
      expect(subscriptionCount).toBe(initialSubscriptionCount + 1)
      expect(unsubscribeCalls).toBe(initialUnsubscribeCalls + 1)
    })
  })
})
