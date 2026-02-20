import './ToggleSwitch.css'

interface ToggleSwitchProps {
  checked: boolean
  onChange: () => void
  label: string
}

export function ToggleSwitch({ checked, onChange, label }: ToggleSwitchProps) {
  return (
    <label className="toggle-switch">
      <span className="toggle-switch__label">{label}</span>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        className={`toggle-switch__track ${checked ? 'toggle-switch__track--on' : ''}`}
        onClick={onChange}
      >
        <span className="toggle-switch__thumb" />
      </button>
    </label>
  )
}
