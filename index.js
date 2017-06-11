const backend = require('monolith-backend');

const server = backend.Server.create();

server.open(5000);
server.serveStaticBundle('public');
