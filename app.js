import express from "express";
import bodyParser from "body-parser";
import UserRouter from "./routes/user.routes.js";
import CategoryRouter from "./routes/category.routes.js";
import ProductRouter from "./routes/product.router.js";
import "./model/association.js";
import CartRouter from "./routes/cart.router.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/user", UserRouter);
app.use("/product", ProductRouter);
app.use("/category", CategoryRouter);
app.use("/cart", CartRouter);

app.listen(3000, () => {
    console.log("Server started");
});