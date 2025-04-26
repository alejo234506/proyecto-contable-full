document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('menu');
    const contenidoPantalla = document.getElementById("contenidoPantalla");
    const mainContainer = document.getElementById("mainContainer");
  
    
    // Función para manejar la navegación entre pantallas
    window.toggleMenu = function() {
        menu.style.display = (menu.style.display === "none" || menu.style.display === "") ? "block" : "none";
    };
  
  
  
    // Llamada inicial a cargar los usuarios y empleados cuando la página está lista
    cargarUsuarios();
    cargarEmpleados();
    cambiarPantalla(''); // Cargar la pantalla inicial
  });
  function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = (menu.style.display === "none" || menu.style.display === "") ? "block" : "none";
  }
  document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const rightMenu = document.querySelector('.right-menu');
  
    menuToggle.addEventListener('click', () => {
        rightMenu.style.display = rightMenu.style.display === 'none' ? 'block' : 'none';
    });
  
    // You would add JavaScript functionality here to:
    // 1. Handle clicks on employee names in the left sidebar to display details in the main content area.
    // 2. Implement the download functionality for the download icons.
    // 3. Implement the actions for the right sidebar menu items and the profile button.
  });
  const button = document.getElementById('button-desplegable');
  const dropdown = document.getElementById('dropdown-menu');
  
button.addEventListener('click', () => {
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
});

// Opcional: Ocultar el menú si se da click fuera de él
window.addEventListener('click', (e) => {
    if (!button.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.style.display = 'none';
    }
});