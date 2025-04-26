document.addEventListener('DOMContentLoaded', function () {
    console.log("El documento está listo.");

    // Cargar el archivo header.html
    fetch('../components/header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error("No se pudo cargar el header");
            }
            return response.text();
        })
        .then(data => {
            console.log("Header cargado exitosamente");

            // Inserta el contenido del header en el contenedor
            const headerContainer = document.getElementById('header-container');
            if (headerContainer) {
                headerContainer.innerHTML = data;
            } else {
                console.error('El contenedor del header no se encontró');
                return;
            }

            // Asegúrate de que los elementos existan antes de agregarles eventos
            const button = document.getElementById('button-desplegable');
            const dropdown = document.getElementById('dropdown-menu');

            if (button && dropdown) {
                // Evento para mostrar/ocultar el dropdown
                button.addEventListener('click', () => {
                    dropdown.classList.toggle('show');
                });

                // Evento para cerrar el dropdown si se hace clic fuera de él
                window.addEventListener('click', (e) => {
                    if (!button.contains(e.target) && !dropdown.contains(e.target)) {
                        dropdown.classList.remove('show');
                    }
                });
            } else {
                console.error('El botón o el menú desplegable no se encontraron');
            }
        })
        .catch(error => {
            console.error("Error al cargar el header:", error);
        });
});
