import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import * as middleware from "./src/middlewares/index.js";

// @config dotenv
dotenv.config();

// @create express app
const app = express();

// @use body-parser
app.use(bodyParser.json());
app.use(cors({ exposedHeaders : "Authorization" }))
app.use(middleware.requestLogger)

// @expose public folder
app.use("/public", express.static("public"))

// @root route
app.get("/", (req, res) => {
    res.status(200).send("<h1>Wellcome to my REST-API</h1>")
})

// @use router
import AuthRouters from "./src/controllers/auth/routers.js"
import AdminCashierRouters from "./src/controllers/admin/m-cashier/routers.js"
import AdminCategoryRouters from "./src/controllers/admin/m-category/routers.js"
import AdminProductRouters from "./src/controllers/admin/m-product/routers.js"
// import AdminReportRouters from "./src/controllers/admin/m-report/routers.js"
import CashierRouters from "./src/controllers/cashier/routers.js"

app.use("/api/auth", AuthRouters)
app.use("/api/admin/m-cashier", AdminCashierRouters)
app.use("/api/admin/m-category", AdminCategoryRouters)
app.use("/api/admin/m-product", AdminProductRouters)
// app.use("/api/admin/m-report", AdminReportRouters)
app.use("/api/cashier", CashierRouters)

// @global error handler
app.use(middleware.errorHandler)

// @listen to port
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));