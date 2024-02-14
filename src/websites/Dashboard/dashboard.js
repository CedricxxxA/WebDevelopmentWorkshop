let user = 1234;

// Funktion zum Erstellen einer Kachel
function createTile(data) {
  const tile = document.createElement('div');
  tile.classList.add('tile');
  tile.innerHTML = `
    <h2>${data.state}</h2>
    <p>_______________</p>
    <br>
    <p>${data.category}</p>
  `;
  return tile;
}

// Funktion zum Anzeigen der Kacheln
function renderTiles(data) {
  const dashboard = document.getElementById('dashboard');
  dashboard.innerHTML = ''; // Clear existing content
  data.forEach(item => {
    const tile = createTile(item);
    dashboard.appendChild(tile);
  });
}

async function fetchData() {
  try {
    const response = await fetch(`http://127.0.0.1:3000/reports/customers/${user}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    renderTiles(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();