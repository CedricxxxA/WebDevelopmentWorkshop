const customer = class {
    constructor(KundenNummer, Vorname, Nachname, Firma, Projekt){
        this.KundenNummer = KundenNummer,
        this.Vorname = Vorname,
        this.Nachname = Nachname,
        this.Firma = Firma,
        this.Projekt = Projekt
    }
}

const customerList = [];

customerList.push(new customer("KN-00-00-01", "David", "Michailis", "PlanB.", "Krumbacher"));
customerList.push(new customer("KN-00-00-02", "Cedric", "Achatz", "PlanB.", "RedBull"));
customerList.push(new customer("KN-00-00-03", "Hans", "Wurst", "PlanB.", "Fanta"));

export function GetAllCustomers(){
    return customerList;
}

export function CreateCustomer(KundenNummer, Vorname, Nachname, Firma, Projekt){
    let newCustomer = new customer(KundenNummer, Vorname, Nachname, Firma, Projekt);
    customerList.push(newCustomer);
}

export function DeleteCustomer(kundennr) {
    const indexToDelete = customerList.findIndex(customer => customer.KundenNummer === kundennr);
    const customer = customerList[indexToDelete];
    if (indexToDelete !== -1) {
        customerList.splice(indexToDelete, 1);
        console.log(`Kunde mit der Kundennummer ${kundennr} wurde gelöscht.`);
    } else {
        console.log(`Kunde mit der Kundennummer ${kundennr} wurde nicht gefunden.`);
    }
    return customer;
}

export function GetCustomerById(kundennr) {
    const customer = customerList.filter((c) => c.KundenNummer === kundennr);
    return customer;
}

