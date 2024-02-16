import Cart from "./cart.model.js";
import CartItems from "./cartiteam.model.js";
import Category from "./category.model.js";
import Product from "./product.model.js";
import User from "./user.model.js";
console.log("Association Executed.......");

Category.hasMany(Product, {
  foreignKey: "categoryname"
});

Product.belongsTo(Category, {
  foreignKey: "categoryname", targetKey: "categoryName"
});

User.hasOne(Cart);
Cart.belongsTo(User);

Cart.belongsToMany(Product, { through: CartItems });
Product.belongsToMany(Cart, { through: CartItems });

export { Category, Product, User, Cart, CartItems };