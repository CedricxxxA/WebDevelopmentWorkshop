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

export function GetAllCustomers(){
    return customerList;
}