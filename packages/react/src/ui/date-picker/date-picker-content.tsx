import React from "react"
import CalendarGrid from "./calendar-grid" // Import CalendarGrid
import { Preset, PresetsPanel } from "./presets-panel" // Import the new PresetsPanel and Preset
import { DatePickerContentProps } from "./types" // Import Preset along with DatePickerContentProps

export const DatePickerContent: React.FC<DatePickerContentProps> = ({
  presets,
  onSelectPreset,
  onApply,
  onCancel,
  // CalendarGrid props from DatePickerContentProps
  viewDate,
  selectedDate,
  onDateSelect,
  minDate,
  maxDate,
  locale,
  selectionMode,
  // className, // Assuming className might be part of DatePickerContentProps in types.ts, if not, remove
}) => {
  // Adapter function for PresetsPanel's onSelectPreset
  const handlePresetPanelSelect = (preset: Preset) => {
    const range = preset.getRange()
    onSelectPreset(range) // Call the onSelectPreset received from DatePicker
  }

  return (
    <div
      style={{
        display: "flex",
        border: "1px solid #ccc",
        marginTop: "4px" /* className can be applied here if needed */,
      }}
    >
      {presets && presets.length > 0 && (
        <PresetsPanel
          presets={presets}
          onSelectPreset={handlePresetPanelSelect}
        />
      )}
      <div style={{ flexGrow: 1, padding: "10px" }}>
        {/* Placeholder for Calendar Header (Month/Year navigation) */}
        <div style={{ textAlign: "center", marginBottom: "10px" }}>
          Calendar Header (e.g., &lt; June 2024 &gt;)
        </div>

        <CalendarGrid
          viewDate={viewDate}
          selectedDate={selectedDate} // This comes from DatePickerContentProps
          onDateSelect={onDateSelect}
          minDate={minDate}
          maxDate={maxDate}
          locale={locale}
          selectionMode={selectionMode} // This comes from DatePickerContentProps
        />

        {/* Footer with Apply/Cancel buttons */}
        <div style={{ marginTop: "10px", textAlign: "right" }}>
          <button onClick={onCancel} style={{ marginRight: "8px" }}>
            Cancel
          </button>
          <button onClick={onApply}>Apply</button>
        </div>
      </div>
    </div>
  )
}

// Default export if preferred, or named export is fine.
// export default DatePickerContent;
