import { useNavigate, useLocation } from 'react-router-dom'
import './WiiButton.css'

export function WiiButton() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleClick = () => {
    if (location.pathname === '/') {
      navigate('/configuracion')
    } else {
      navigate('/')
    }
  }

  return (
    <button className="wii-button" onClick={handleClick} aria-label="Inicio">
      <span className="wii-button__text">Wii</span>
    </button>
  )
}
