import "dotenv/config";

import { AppServer } from "./app";

const app = new AppServer();

app.listen();