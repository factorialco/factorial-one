import {
  addWeeks,
  endOfDay,
  endOfMonth,
  endOfWeek,
  endOfYear,
  formatDate,
  isAfter,
  isBefore,
  isEqual,
  startOfDay,
  startOfMonth,
  startOfWeek,
  startOfYear,
} from "date-fns"

import { addDays, addMonths, addYears, differenceInDays } from "date-fns"

import {
  DateNavigationGranularityHandler,
  DateNavigationOptions,
  DateRange,
} from "./types"

type GranularityHandlers = {
  day: DateNavigationGranularityHandler<Date>
  week: DateNavigationGranularityHandler<Date>
  fortnight: DateNavigationGranularityHandler<Date>
  month: DateNavigationGranularityHandler<Date>
  year: DateNavigationGranularityHandler<Date>
  custom: DateNavigationGranularityHandler<DateRange>
}

const isBeforeOrEqual = (date: Date, min: Date | undefined) =>
  !min || isBefore(date, min) || isEqual(date, min)

const isAfterOrEqual = (date: Date, max: Date | undefined) =>
  !max || isAfter(date, max) || isEqual(date, max)

export const granularityHandlers: GranularityHandlers = {
  day: {
    toDateRange: (date: Date) => [startOfDay(date), endOfDay(date)],
    getPrevNext: (value: DateRange, options: DateNavigationOptions) => {
      const [start, end] = value

      const [prevStart, prevEnd] = [addDays(start, -1), addDays(end, -1)]
      const [nextStart, nextEnd] = [addDays(start, 1), addDays(end, 1)]

      const minWithGranularity = options.min && startOfDay(options.min)
      const maxWithGranularity = options.max && endOfDay(options.max)

      return [
        isAfterOrEqual(prevStart, minWithGranularity)
          ? [prevStart, prevEnd]
          : false,
        isBeforeOrEqual(nextEnd, maxWithGranularity)
          ? [nextStart, nextEnd]
          : false,
      ]
    },
    toString: (date: DateRange) => {
      const [start] = date
      return `${formatDate(start, "yyyy-MM-dd")}`
    },
  },
  week: {
    toDateRange: (date: Date) => [startOfWeek(date), endOfWeek(date)],
    getPrevNext: (value: DateRange, options: DateNavigationOptions) => {
      const [start, end] = value
      const [prevStart, prevEnd] = [addDays(start, -7), addDays(end, -7)]
      const [nextStart, nextEnd] = [addDays(start, 7), addDays(end, 7)]

      const minWithGranularity = options.min && startOfWeek(options.min)
      const maxWithGranularity = options.max && endOfWeek(options.max)

      return [
        isAfterOrEqual(prevStart, minWithGranularity)
          ? [prevStart, prevEnd]
          : false,
        isBeforeOrEqual(nextEnd, maxWithGranularity)
          ? [nextStart, nextEnd]
          : false,
      ]
    },
    toString: (date: DateRange) => {
      const [start] = date
      return `Week ${formatDate(start, "ww")} ${formatDate(start, "yyyy")}`
    },
  },
  fortnight: {
    toDateRange: (date: Date) => [
      startOfWeek(date),
      endOfWeek(addWeeks(date, 2)),
    ],
    getPrevNext: (value: DateRange, options: DateNavigationOptions) => {
      const [start, end] = value
      const [prevStart, prevEnd] = [addDays(start, -14), addDays(end, -14)]
      const [nextStart, nextEnd] = [addDays(start, 14), addDays(end, 14)]

      const minWithGranularity = options.min && startOfWeek(options.min)
      const maxWithGranularity = options.max && endOfWeek(options.max)

      return [
        isAfterOrEqual(prevStart, minWithGranularity)
          ? [prevStart, prevEnd]
          : false,
        isBeforeOrEqual(nextEnd, maxWithGranularity)
          ? [nextStart, nextEnd]
          : false,
      ]
    },
    toString: (date: DateRange) => {
      const [start, end] = date
      return `Week ${formatDate(start, "ww")} ${formatDate(start, "yyyy")} -> Week ${formatDate(endOfWeek(end), "ww")} ${formatDate(endOfWeek(end), "yyyy")}`
    },
  },
  month: {
    toDateRange: (date: Date) => [startOfMonth(date), endOfMonth(date)],
    getPrevNext: (value: DateRange, options: DateNavigationOptions) => {
      const [start, end] = value
      const [prevStart, prevEnd] = [addMonths(start, -1), addMonths(end, -1)]
      const [nextStart, nextEnd] = [addMonths(start, 1), addMonths(end, 1)]

      const minWithGranularity = options.min && startOfMonth(options.min)
      const maxWithGranularity = options.max && endOfMonth(options.max)

      return [
        isAfterOrEqual(prevStart, minWithGranularity)
          ? [prevStart, prevEnd]
          : false,
        isBeforeOrEqual(nextEnd, maxWithGranularity)
          ? [nextStart, nextEnd]
          : false,
      ]
    },
    toString: (date: DateRange) => {
      const [start] = date
      return `${formatDate(start, "MMMM yyyy")}`
    },
  },
  year: {
    toDateRange: (date: Date) => [startOfYear(date), endOfYear(date)],
    getPrevNext: (value: DateRange, options: DateNavigationOptions) => {
      const [start, end] = value
      const [prevStart, prevEnd] = [addYears(start, -1), addYears(end, -1)]
      const [nextStart, nextEnd] = [addYears(start, 1), addYears(end, 1)]

      const minWithGranularity = options.min && startOfYear(options.min)
      const maxWithGranularity = options.max && endOfYear(options.max)

      return [
        isAfterOrEqual(prevStart, minWithGranularity)
          ? [prevStart, prevEnd]
          : false,
        isBeforeOrEqual(nextEnd, maxWithGranularity)
          ? [nextStart, nextEnd]
          : false,
      ]
    },
    toString: (date: DateRange) => {
      const [start] = date
      return `${formatDate(start, "yyyy")}`
    },
  },
  custom: {
    toDateRange: (dates: DateRange) => dates,
    getPrevNext: (value: DateRange, options: DateNavigationOptions) => {
      const [start, end] = value
      const delta = differenceInDays(end, start)
      const [nextStart, nextEnd] = [addDays(start, delta), addDays(end, delta)]

      const minWithGranularity = options.min && startOfDay(options.min)
      const maxWithGranularity = options.max && endOfDay(options.max)

      return [
        isAfterOrEqual(nextStart, minWithGranularity)
          ? [nextStart, nextEnd]
          : false,
        isBeforeOrEqual(nextEnd, maxWithGranularity)
          ? [nextStart, nextEnd]
          : false,
      ]
    },
    toString: (date: DateRange) => {
      const [start, end] = date
      return `${formatDate(start, "yyyy-MM-dd")} -> ${formatDate(end, "yyyy-MM-dd")}`
    },
  },
} as const
