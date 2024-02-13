import  Fastify  from "fastify";
import cors from '@fastify/cors'
import { DeleteCustomer, GetAllCustomers, CreateCustomer, routes } from "./customers.js";



// CreateCustomer("KN-55-00-00","Spongebob","Schwammkopf","Krosse Krabbe", "Krabbenburger");
// CreateCustomer("KN-56-00-00","Patrik","Star","Arbeitsamt", "Arbeitslos");
// DeleteCustomer("KN-55-00-00");
console.log(GetAllCustomers());

const fastify = Fastify({
    logger: true
  });

  fastify.register(cors, {
    origin: '*'
  });

fastify.register(routes);

// Run the server!
try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }