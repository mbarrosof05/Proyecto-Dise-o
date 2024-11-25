document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');
    const results = document.getElementById('results');
    const mainContent = document.getElementById('mainContent'); // Contenedor del contenido principal
  
    searchButton.addEventListener('click', async () => {
      const query = searchInput.value.toLowerCase();
  
      if (!query) {
        results.innerHTML = '<p>Por favor, ingresa un término de búsqueda.</p>';
        return;
      }
  
      try {
  
        // Cargar el índice JSON
        const response = await fetch('locales/busqueda.json');
        const pages = await response.json();
  
        // Filtrar páginas que contienen el término
        const filteredPages = pages.filter(page =>
          page.content.toLowerCase().includes(query)
        );
  
        // Mostrar resultados
        if (filteredPages.length > 0) {
          results.innerHTML = filteredPages
            .map(
              page =>
                `<div>
                  <a href="${page.url}">${page.url}</a>
                  <p>${page.content.slice(0, 150)}...</p>
                </div>`
            )
            .join('<hr>');
        } else {
          results.innerHTML = '<p>No se encontraron resultados.</p>';
        }
      } catch (error) {
        console.error('Error al cargar el índice:', error);
        results.innerHTML = '<p>Error al realizar la búsqueda.</p>';
      }
    });
  
    // Agregar evento para mostrar el contenido principal al borrar el término
    searchInput.addEventListener('input', () => {
      if (!searchInput.value) {
        results.innerHTML = '';
        mainContent.classList.remove('hidden');
      }
    });
  });
  