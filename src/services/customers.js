const customer = class {
    constructor(KundenNummer, Vorname, Nachname, Firma, Projekt){
        this.KundenNummer = KundenNummer,
        this.Vorname = Vorname,
        this.Nachname = Nachname,
        this.Firma = Firma,
        this.Projekt = Projekt
    }
}

const customerSchema = {
    schema: {
      body: {
        type: 'object',
        properties: {
          KundenNummer: { type: 'string' },
          Vorname: { type: 'string'},
          Nachname: { type: 'string' },
          Firma: {type: 'string'},
          Projekt: {type: 'string'}
        },
        required: ['name', 'description', 'id']
      }
    }
  }

const pattern = /^KN-\d{2}-\d{2}-\d{2}$/;

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

export function ValidateCustomerNumber(customerNumber){
    if (pattern.test(customerNumber)) {
        console.log("String matches the pattern");
        return true;
      } else {
        console.log("String does not match the pattern");
        return false;
      }
}

export function ValidateCustomerInList(kundennr) {
    const  hasCustomer = customerList.some((customer) => customer.KundenNummer === kundennr);
    return hasCustomer;
}

export async function routes (fastify, options) {
    fastify.get('/', async (request, reply) => {
        // do something ´
    });
    fastify.get('/customers', async (request, reply) => {
        return GetAllCustomers();
    });
    fastify.get('/customers/:Id', async (request, reply) => {
        return GetCustomerById(request.params.Id);
    });
    fastify.post('/customers', customerSchema, async (request, reply) => {
        CreateCustomer(request.body);
    });
    fastify.delete('/customers/:Id', async (request, reply) => {
        DeleteCustomer(request.params.Id);
    });
}