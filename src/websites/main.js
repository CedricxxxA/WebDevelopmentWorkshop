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

async function OpenInfoCard(target) {
    let card = document.getElementById("InfoCard");

    if (card.classList.contains("CustomerInfo")) {
        card.classList.remove("CustomerInfo");
        card.classList.add("CustomerInfoInvis");
    } else {
        card.classList.remove("CustomerInfoInvis");
        card.classList.add("CustomerInfo");

        try {
            console.log(target.id)
            const response = await fetch(`http://127.0.0.1:3000/customers/${target.id}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            const data = await response.json();
            let name = document.getElementById("Vorname")
            name.textContent = `Vorname : ${data[0].Vorname}`

            let nachname = document.getElementById("Nachname")
            nachname.textContent = `Nachname : ${data[0].Nachname}`

            let firma = document.getElementById("Firma")
            firma.textContent = `Firma : ${data[0].Firma}`

            let projekt = document.getElementById("Projekt")
            projekt.textContent = `Projekt : ${data[0].Projekt}`

            let knNr = document.getElementById("Kundennummer")
            knNr.textContent = `KunenNr : ${data[0].KundenNummer}`


            console.log(data);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
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

  async function createCustomerCard(customer) {
    const customersList = document.getElementById("customer-list");
    const customerDiv = document.createElement("div");

    customerDiv.id = `${customer.KundenNummer}`
    customerDiv.classList.add("item");
    customerDiv.onclick = function(event) {
        OpenInfoCard(event.target);
    };
  
    customerDiv.textContent = `${customer.Vorname} ${customer.Nachname} | ${customer.Firma}`;
    customersList.appendChild(customerDiv);
  }