import './VolumeSlider.css'

interface VolumeSliderProps {
  value: number
  onChange: (value: number) => void
  label: string
}

export function VolumeSlider({ value, onChange, label }: VolumeSliderProps) {
  return (
    <label className="volume-slider">
      <span className="volume-slider__label">{label}</span>
      <input
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="volume-slider__input"
      />
      <span className="volume-slider__value">{Math.round(value * 100)}%</span>
    </label>
  )
}
