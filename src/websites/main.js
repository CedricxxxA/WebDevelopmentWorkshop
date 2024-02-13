function OpenCustCard(){
    let card = document.getElementById("CustCard");

    if(card.classList.contains("CustomerCard")){
        card.classList.remove("CustomerCard");
        card.classList.add("CustomerCardInvis");
    }
    else{
        card.classList.remove("CustomerCardInvis");
        card.classList.add("CustomerCard")
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch("http://localhost:3000/customers");
    if (response.ok) {
      const data = await response.json();
      data.forEach((customer) => {
        createCustomerCard(customer);
      });
    }
  });

  function createCustomerCard(customer) {
    const customersList = document.getElementById("customer-list");
    const customerDiv = document.createElement("div");
    customerDiv.classList.add("item");
  
    customerDiv.textContent = `${customer.Vorname} ${customer.Nachname} | ${customer.Firma}`;
    customersList.appendChild(customerDiv);
  }