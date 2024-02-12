import { DeleteCustomer, GetAllCustomers, GetCustomerById } from "./customers.js";

console.log(GetAllCustomers());
console.log(DeleteCustomer("KN-00-00-02"));
console.log(GetAllCustomers());
console.log(GetCustomerById("KN-00-00-03"));