// --
import app from "./app"; //let app = require("./app")

import './database';

app.listen(app.get("port"));

console.log("Server on port", app.get('port'));
