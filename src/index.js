import App from "./app.js";
import Route from "./routers/post.routes.js";
import { PORT } from "./config.js"

App.use(Route)
App.listen(PORT)

console.log('server on port', PORT)
