import React, { useState, useEffect } from 'react';
import '../App.css'; // Asegúrate de que este archivo exista en la carpeta 'src'
import type { Channel } from '../../public/tipos/types';


const Menu: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // reloj en tiempo real 
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);    
  }, []);

  // formato de hora y fecha 
  const timestring = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const datestring = currentTime.toLocaleDateString([], { year: 'numeric', month: 'long', day: 'numeric' }); 

  // configuracion de boton de sonido y tema 
  const [themas, setThemas] = useState<boolean>(false);
  const [sonido, setSonido] = useState<boolean>(true);

  const toggleThemas = () => setThemas(prev => !prev);
  const toggleSonido = () => setSonido(prev => !prev);

  // mis canales (Se deben personalizar los canales)
  const channels: Channel[] = [
    { id: 1, title: 'sobre mi', icon: '' },
    { id: 2, title: 'habilidades', icon: '' },
    { id: 3, title: 'Stack tecnico', icon: '' },
    { id: 4, title: 'proyectos', icon: '' },
    { id: 5, title: 'educacion', icon: '' },    
    { id: 6, title: 'contacto', icon: '' }
  ];

  return (
    <div className="wii-menu">
      <div className="wii-header">
        <span>{datestring}</span>
        <span>{timestring}</span>
        <button onClick={toggleThemas}>
          Tema: {themas ? 'Oscuro' : 'Claro'}
        </button>
        <button onClick={toggleSonido}>
          Sonido: {sonido ? 'Activado' : 'Desactivado'}
        </button>
      </div>
      <div className="wii-channels">
        {channels.map(channel => (
          <div className="wii-channel" key={channel.id}>
            {/* para un futuro poner fotos de proyecto  */}
            <div className="wii-channel-icon">{channel.icon && <img src={channel.icon} alt={channel.title} />}</div>
            <div className="wii-channel-title">{channel.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;