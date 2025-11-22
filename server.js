import dotenv from "dotenv";
dotenv.config();
import { app } from "./app.js";
const PORT = app.get("port");
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=server.js.map