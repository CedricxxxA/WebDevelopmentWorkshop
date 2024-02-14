// Beispiel Kundennummern

const validCustomerNumbers = ['123456', '789012', '345678'];


document.getElementById('login-form').addEventListener('submit', async function(event) {
  event.preventDefault();
  
  const customerNumber = document.getElementById('customerNumber').value;

  const data = await fetchData();
  const validCustomer = data.find((element) => element.KundenNummer === customerNumber);
  if (validCustomer) {
    localStorage.setItem("User", `${validCustomer.KundenNummer}`);
    window.location.href = '../Dashboard/dashboard.html';
  } else {
    document.getElementById('error-message').innerText = 'Ungültige Kundennummer. Bitte versuchen Sie es erneut.';
  }
});

async function fetchData() {
    try {
      const response = await fetch(`http://127.0.0.1:3000/customers`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();



    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
