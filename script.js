// Definimos la clase para nuestro custom element
class MiBoton extends HTMLElement {
    constructor() {
        super();

        // Creamos un shadow root
        const shadow = this.attachShadow({ mode: 'open' });

        // Creamos un botón
        const boton = document.createElement('button');
        boton.textContent = 'Haz clic aquí';

        // Añadimos estilos al botón
        const estilo = document.createElement('style');
        estilo.textContent = `
            button {
                padding: 10px 20px;
                font-size: 1em;
                color: white;
                background-color: #007BFF;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            }
            button:hover {
                background-color: red;
            }
        `;

        // Añadimos el estilo y el botón al shadow root
        shadow.appendChild(estilo);
        shadow.appendChild(boton);

        // Evento 1: Click en el botón
        boton.addEventListener('click', () => {
            const mensaje = document.getElementById('mensaje');
            mensaje.textContent = '¡Has hecho clic en el botón!';
        });

        // Evento 2: Pasar el mouse sobre el botón
        boton.addEventListener('mouseover', () => {
            const mensaje = document.getElementById('mensaje');
            mensaje.textContent = 'El mouse está sobre el botón...';
        });

        // Evento 3: Quitar el mouse del botón
        boton.addEventListener('mouseout', () => {
            const mensaje = document.getElementById('mensaje');
            mensaje.textContent = 'El mouse ha salido del botón.';
        });
    }
}

// Registramos el custom element
customElements.define('mi-boton', MiBoton);