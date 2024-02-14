// Beispiel Kundennummern
const validCustomerNumbers = ['123456', '789012', '345678'];

document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var customerNumber = document.getElementById('customerNumber').value;

  const validCustomer = validCustomerNumbers.includes(customerNumber);
  if (validCustomer) {
    window.location.href = 'C:\\Users\\DavidM\\source\\repos\\WebDevelopmentWorkshop\\src\\websites\\Dashboard\\dashboard.html';
  } else {
    document.getElementById('error-message').innerText = 'Ungültige Kundennummer. Bitte versuchen Sie es erneut.';
  }
});
