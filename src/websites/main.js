function OpenCustCard(){
    let card = document.getElementById("CustCard");

    if(card.classList.contains("CustomerCard")){
        card.classList.remove("CustomerCard");
        card.classList.add("CustomerCardInvis");
    }
    else{
        card.classList.remove("CustomerCardInvis");
        card.classList.add("CustomerCard");

        const form = document.getElementById('createButton');
        
        form.addEventListener("click", (event) => {
            const inputFirstnameValue = document.getElementById('inputFirstname').value;
            const inputLastnameValue = document.getElementById('inputLastname').value;
            const inputCompanyValue = document.getElementById('inputCompany').value;
            const inputProjectValue = document.getElementById('inputProject').value;
            CreateCustomer(inputFirstnameValue, inputLastnameValue, inputCompanyValue, inputProjectValue);
        });
        
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
};

async function CreateCustomer(inputFirstnameValue, inputLastnameValue, inputCompanyValue, inputProjectValue) {
    const data = {
      Vorname: inputFirstnameValue,
      Nachname: inputLastnameValue,
      Firma: inputCompanyValue,
      Projekt: inputProjectValue
    };
  
    try {
      const response = await fetch("http://localhost:3000/customers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      console.error(error);
    }
    window.location.reload();
  }