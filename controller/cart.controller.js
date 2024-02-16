import { validationResult } from "express-validator";
import Cart from "../model/cart.model.js";
import sequelize from "../db/dbConfig.js";
import CartItems from "../model/cartiteam.model.js";
import Product from "../model/product.model.js";

export const fetchCartItems = (request, response, next) => {
    Cart.findAll({
        raw: true, where: { userId: request.body.userId * 1 },
        include: [{ model: Product, required: true }]
    })
        .then(result => {
            return response.status(200).json({ data: result });
        }).catch(err => {
            console.log(err);
            return response.status(500).json({ error: "Internal Server error", err });
        });
}

export const addToCart = async (request, response, next) => {
    let transaction = await sequelize.transaction();
    try {
        const error = validationResult(request);
        if (!error.isEmpty())
            return response.status(401).json({ error: "Bad request" });
        let { userId, productId } = request.body;
        let cart = await Cart.findOne({ raw: true, where: { userId: userId * 1 } });
        if (cart) {
            let isExists = !! await CartItems.findOne({ raw: true, where: { cartId: cart.id, productId } });
            if (isExists)
                return response.status(200).json({ message: "Product succesffuly add into cart", data: cart });

            await CartItems.create({ cartId: cart.id, productId }, { transaction });
            await transaction.commit();
            return response.status(201).json({ message: "Product successfully added into cart-items" });
        }
        else {
            cart = await Cart.create({ userId: userId * 1 }, { transaction })
                .then(result => { return result.dataValues });

            await transaction.commit();
            return response.status(201).json({ message: "Item successfully added into cart" });
        }
    }
    catch (err) {
        await transaction.rollback();
        console.log(err);
        return response.status(500).json({ error: "Internal Server Error", err });
    }
}