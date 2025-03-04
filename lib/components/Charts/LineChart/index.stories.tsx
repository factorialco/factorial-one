import type { Meta } from "@storybook/react"
import React, { useState } from "react"
import {
  CartesianGrid,
  Customized,
  Line,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { LineChart } from "."

const singleDataConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
}

const meta: Meta<typeof LineChart<typeof singleDataConfig>> = {
  component: LineChart,
  title: "Charts/LineChart",
  argTypes: {
    lineType: {
      control: { type: "select", options: ["natural", "linear"] },
      description: "Determines the type of line curve",
      defaultValue: "natural",
    },
  },
  decorators: [
    (Story) => (
      <div className="h-52 w-full">
        <Story />
      </div>
    ),
  ],
}

export default meta

export const Default: Meta<typeof LineChart<typeof singleDataConfig>> = {
  args: {
    dataConfig: singleDataConfig,
    xAxis: {
      tickFormatter: (value: string) => value.slice(0, 3),
    },
    yAxis: {
      hide: true,
      tickFormatter: (value: string) =>
        `${Number.isNaN(parseFloat(value)) ? value : (parseFloat(value) / 100).toFixed(2) + " €"}`,
    },
    data: [
      { label: "January", values: { desktop: 186 } },
      { label: "February", values: { desktop: 305 } },
      { label: "March", values: { desktop: 237 } },
      { label: "April", values: { desktop: 73 } },
      { label: "May", values: { desktop: 209 } },
      { label: "June", values: { desktop: 214 } },
    ],
  },
}

const multiDataConfig = {
  desktop: {
    label: "Desktop",
  },
  mobile: {
    label: "Mobile",
    dashed: true,
  },
}

export const MultipleLines: Meta<typeof LineChart<typeof multiDataConfig>> = {
  args: {
    dataConfig: multiDataConfig,
    xAxis: {
      hide: false,
      tickFormatter: (value: string) => value.slice(0, 3),
    },
    data: [
      { label: "January", values: { desktop: 186, mobile: 120 } },
      { label: "February", values: { desktop: 305, mobile: 180 } },
      { label: "March", values: { desktop: 237, mobile: 150 } },
      { label: "April", values: { desktop: 73, mobile: 90 } },
      { label: "May", values: { desktop: 209, mobile: 160 } },
      { label: "June", values: { desktop: 214, mobile: 200 } },
    ],
  },
}

/* -------------------------------------------------------------------
   New Story: EventCard with Aggregated Labels Outside the Graph
   This story demonstrates a Recharts LineChart with custom event markers.
   - Event markers are grouped by date.
   - Aggregated labels (the names of events) are rendered directly 
     above each vertical line (outside the main chart area) using CSS
     line clamping so that overflowing text shows an ellipsis.
   - Markers are highlighted on hover/click, and clicking a marker
     displays a details "card" with the event info.
------------------------------------------------------------------- */

// Sample performance data and event markers
const chartData = [
  { date: "2023-01-01", performance: 70 },
  { date: "2023-02-01", performance: 72 },
  { date: "2023-03-01", performance: 68 },
  { date: "2023-04-01", performance: 75 },
]

// Individual events. Multiple events can share the same date.
const events = [
  {
    date: "2023-02-01",
    label: "Change of manager",
    meta: (
      <a href="http://example.com" target="_blank" rel="noopener noreferrer">
        John Doe
      </a>
    ),
  },
  {
    date: "2023-03-01",
    label: "Change of project",
    meta: <span>Project X</span>,
  },
  {
    date: "2023-03-01",
    label: "Change in role",
    meta: <span>Promoted to Senior Developer</span>,
  },
  {
    date: "2023-03-01",
    label: "Change in role",
    meta: <span>Promoted to Senior Developer</span>,
  },
  {
    date: "2023-03-01",
    label: "Change in role",
    meta: <span>Promoted to Senior Developer</span>,
  },
]

interface GroupedEvent {
  date: string
  events: typeof events
}

interface CustomEventMarkersProps {
  xScale: (value: any) => number
  height: number
  offset: { top: number; left: number }
  selectedGroup: GroupedEvent | null
  onSelectGroup: (group: GroupedEvent | null) => void
}

const CustomEventMarkers: React.FC<CustomEventMarkersProps> = ({
  xScale,
  height,
  offset,
  selectedGroup,
  onSelectGroup,
}) => {
  const [hoveredGroup, setHoveredGroup] = useState<GroupedEvent | null>(null)

  // Group events by date.
  const grouped = events.reduce(
    (acc, event) => {
      if (!acc[event.date]) acc[event.date] = []
      acc[event.date].push(event)
      return acc
    },
    {} as { [date: string]: typeof events }
  )

  const groups: GroupedEvent[] = Object.keys(grouped).map((date) => ({
    date,
    events: grouped[date],
  }))

  return (
    <>
      {groups.map((group, index) => {
        const x = xScale(group.date)
        const isHighlighted =
          (selectedGroup && selectedGroup.date === group.date) ||
          (hoveredGroup && hoveredGroup.date === group.date)
        const aggregatedLabel = group.events.map((e) => e.label).join(", ")

        return (
          <g key={index}>
            {/* Vertical dashed event line */}
            <line
              x1={x}
              y1={offset.top}
              x2={x}
              y2={offset.top + height}
              stroke={isHighlighted ? "blue" : "red"}
              strokeDasharray="3 3"
              strokeWidth={isHighlighted ? 3 : 1}
            />
            {/* Invisible rectangle for a broader hover/click area */}
            <rect
              x={x - 5}
              y={offset.top}
              width={10}
              height={height}
              fill="transparent"
              style={{ cursor: "pointer" }}
              onMouseEnter={() => setHoveredGroup(group)}
              onMouseLeave={() => setHoveredGroup(null)}
              onClick={() => onSelectGroup(group)}
            />
            {/* Aggregated event labels displayed directly above the line (outside the chart) */}
            <foreignObject
              x={x - 50}
              y={offset.top - 45}
              width={100}
              height={45}
            >
              <div
                style={{
                  fontSize: "12px",
                  lineHeight: "1.2",
                  maxHeight: "45px",
                  overflow: "hidden",
                  textAlign: "center",
                  whiteSpace: "normal",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {aggregatedLabel}
              </div>
            </foreignObject>
          </g>
        )
      })}
    </>
  )
}

const LineChartWithEventCard: React.FC = () => {
  const [selectedGroup, setSelectedGroup] = useState<GroupedEvent | null>(null)

  return (
    <div style={{ display: "flex" }}>
      {/* Chart Container */}
      <div style={{ flex: 1 }}>
        <ResponsiveContainer width="100%" height={200}>
          <RechartsLineChart
            data={chartData}
            margin={{ top: 50, right: 20, left: 20, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="performance"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Customized
              component={({ xAxisMap, height, offset }) => {
                const xAxis = Object.values(xAxisMap)[0]
                const xScale = xAxis.scale
                return (
                  <CustomEventMarkers
                    xScale={xScale}
                    height={height}
                    offset={offset}
                    selectedGroup={selectedGroup}
                    onSelectGroup={setSelectedGroup}
                  />
                )
              }}
            />
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
      {/* Event Details Card */}
      <div
        style={{
          width: "300px",
          marginLeft: "10px",
          padding: "10px",
          borderLeft: "1px solid #ccc",
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "16px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            minHeight: "150px",
          }}
        >
          {!selectedGroup ? (
            <div style={{ textAlign: "center", color: "#777" }}>
              <h3>Event Details</h3>
              <p>
                Select an event line on the chart to see details and actions.
              </p>
            </div>
          ) : (
            <div>
              <h3>{selectedGroup.date}</h3>
              {selectedGroup.events.map((ev, index) => (
                <div key={index} style={{ marginBottom: "12px" }}>
                  <strong>{ev.label}</strong>
                  <div>{ev.meta}</div>
                </div>
              ))}
              <button onClick={() => setSelectedGroup(null)}>
                Clear Selection
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export const EventCard = () => <LineChartWithEventCard />
