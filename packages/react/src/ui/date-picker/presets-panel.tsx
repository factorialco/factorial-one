import React from "react"

export interface Preset {
  id: string
  label: string
  getRange: () => [Date, Date]
}

interface PresetsPanelProps {
  presets: Preset[]
  onSelectPreset: (preset: Preset) => void
  activePresetId?: string
  className?: string
}

export const PresetsPanel: React.FC<PresetsPanelProps> = ({
  presets,
  onSelectPreset,
  activePresetId,
  className,
}) => {
  return (
    <div className={className}>
      <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
        {presets.map((preset) => (
          <li
            key={preset.id}
            onClick={() => onSelectPreset(preset)}
            style={{
              padding: "8px",
              cursor: "pointer",
              backgroundColor:
                preset.id === activePresetId ? "#e0e0e0" : "transparent",
            }}
          >
            {preset.label}
          </li>
        ))}
      </ul>
    </div>
  )
}
