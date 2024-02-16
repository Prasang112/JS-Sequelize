import sequelize from "../db/dbConfig.js";

const CartItems = sequelize.define("cartItem", {});

sequelize.sync()
    .then(res => {
        console.log('CartItem table created');
    })
    .catch(err => {
        console.log('Problem in cartitem table', err);
    })
export default CartItems;