//deifnir los tipos para el canla de wii 


  //tipos de datos para los canales
export interface Channel {
    id: number;
    title: string;
    icon: string;
    link?: string;
    isEmpty?: boolean;
}

//tipos de datos para la configuración en la parte izquierda 
export interface Configuracion {
    themas: boolean;   // true para modo oscuro, false para modo claro
    sonido: boolean;   // true para sonido activado, false para sonido desactivado   
}


//tipos para la parte de corrreo  

export interface Email {
    id: number;
    from: string;
    subject: string;
    body: string;
    date: Date;
    isRead: boolean;
}





 