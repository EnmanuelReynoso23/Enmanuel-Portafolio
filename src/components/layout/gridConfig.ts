/** Ajustes de la cuadrícula de canales del menú principal. */
export const GRID_CONFIG = {
  columnas: 3,                // Número de tarjetas a lo ancho (ej. 3 o 4)
  filas: 2,                   // Número de tarjetas a lo alto (ej. 2 o 3)
  anchoMaximo: 1150,          // Ancho máximo total de la cuadrícula en px
  alturaMinimaTarjeta: 175,   // Altura mínima de cada tarjeta (px)
  alturaMaximaTarjeta: 225,   // Altura máxima de cada tarjeta (px)
  espaciado: 25,              // Espacio (gap) gris entre canales (px)
}

export const CHANNELS_PER_PAGE = GRID_CONFIG.columnas * GRID_CONFIG.filas
