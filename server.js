import getPort from "get-port";

const requestedPort = 1234;
const port = await getPort({port:requestedPort});

console.log(`Requested port:${requestedPort} | Accepted port:${port}`);