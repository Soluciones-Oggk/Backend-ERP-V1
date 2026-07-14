import "dotenv/config";

import { AppServer } from "./app.js";

const app = new AppServer();

app.listen();