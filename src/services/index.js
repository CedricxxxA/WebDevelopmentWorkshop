import { DeleteCustomer, GetAllCustomers, GetCustomerById, CreateCustomer } from "./customers.js";

CreateCustomer("KN-55-00-00","Spongebob","Schwammkopf","Krosse Krabbe", "Krabbenburger");
CreateCustomer("KN-56-00-00","Patrik","Star","Arbeitsamt", "Arbeitslos");
DeleteCustomer("KN-55-00-00");
console.log(GetAllCustomers());