import { describe, expect, it } from "vitest"
import { CLOCK_IN_COLORS, ClockInStatus } from "./index"
import { getLabels, normalizeData } from "./helpers"

describe("ClockInGraph helpers", () => {
  describe("normalizeData", () => {
    it("should return array with empty entry when no data provided", () => {
      const result = normalizeData()
      expect(result).toEqual([
        {
          value: 1,
          color: CLOCK_IN_COLORS.empty,
        },
      ])
    })

    it("should handle remaining minutes > 0", () => {
      const result = normalizeData([], 30)
      expect(result).toEqual([
        {
          value: 30,
          color: CLOCK_IN_COLORS.empty,
        },
      ])
    })

    it("should handle overtime (remaining minutes < 0)", () => {
      const result = normalizeData([], -30)
      expect(result).toEqual([
        {
          value: 30,
          color: CLOCK_IN_COLORS.overtime,
        },
      ])
    })

    it("should calculate correct duration for clock entries", () => {
      const result = normalizeData(
        [
          {
            from: new Date("2024-03-20T09:00:00"),
            to: new Date("2024-03-20T10:30:00"),
            variant: "clocked-in" satisfies ClockInStatus,
          },
        ],
        30
      )
      expect(result).toEqual([
        {
          value: 90, // 90 minutes difference
          color: CLOCK_IN_COLORS["clocked-in"],
        },
        {
          value: 30,
          color: CLOCK_IN_COLORS.empty,
        },
      ])
    })
  })

  describe("getLabels", () => {
    const createMockEntry = (
      fromTime: string,
      toTime: string,
      variant: "clocked-in" | "clocked-out"
    ) => ({
      from: new Date(`2024-03-20T${fromTime}`),
      to: new Date(`2024-03-20T${toTime}`),
      variant,
    })

    it("should return empty labels when no data provided", () => {
      const result = getLabels({ data: [] })
      expect(result).toEqual({
        primaryLabel: "--:--",
        secondaryLabel: "--:--",
        time: "00:00",
      })
    })

    it("should return correct labels for clock in/out sequence", () => {
      const mockData = [
        createMockEntry("09:00", "12:00", "clocked-in"),
        createMockEntry("12:00", "12:30", "clocked-out"),
      ]

      const result = getLabels({ data: mockData })
      expect(result).toEqual({
        primaryLabel: "09:00",
        secondaryLabel: "--:--",
        time: "03:00",
      })
    })

    it("should calculate total time for active clock-in", () => {
      const mockData = [
        createMockEntry("09:00", "12:00", "clocked-in"),
        createMockEntry("13:00", "15:00", "clocked-in"),
      ]

      const result = getLabels({ data: mockData })
      expect(result).toEqual({
        primaryLabel: "09:00",
        secondaryLabel: "--:--",
        time: "05:00", // Total of all clocked-in periods
      })
    })

    it("should handle overtime scenario", () => {
      const mockData = [createMockEntry("09:00", "17:00", "clocked-in")]

      const result = getLabels({
        data: mockData,
        remainingMinutes: -30,
      })

      expect(result).toEqual({
        primaryLabel: "09:00",
        secondaryLabel: "17:00", // Last clocked-in end time
        time: "08:00",
      })
    })

    it("should show correct time when clocked out of past clock-ins", () => {
      const mockData = [
        createMockEntry("09:00", "12:00", "clocked-in"),
        createMockEntry("12:00", "12:00", "clocked-out"),
      ]

      const result = getLabels({ data: mockData, remainingMinutes: 0 })

      expect(result).toEqual({
        primaryLabel: "09:00",
        secondaryLabel: "12:00",
        time: "03:00",
      })
    })

    it("should not show secondary label when clocked out but has remaining minutes", () => {
      const mockData = [
        createMockEntry("09:00", "12:00", "clocked-in"),
        createMockEntry("12:00", "12:00", "clocked-out"),
      ]

      const result = getLabels({ data: mockData, remainingMinutes: 30 })

      expect(result).toEqual({
        primaryLabel: "09:00",
        secondaryLabel: "--:--",
        time: "03:00",
      })
    })
  })
})
