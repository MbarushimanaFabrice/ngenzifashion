import User from "./User";
import Shop from "./Shop";
import Categories from "./Categories";
import Products from "./Products";
import Product_images from "./Product_images";
import Product_variants from "./Product_variants";
 import Customer_addresses from "./Customer_addresses";
import Orders from "./Orders";
import Order_items from "./Order_items";
import Payments from "./Payments";
import Discounts from "./Discounts";
import Reviews from "./Reviews";
import Report_requests from "./Report_requests";

export {
  User,
  Shop,
  Categories,
  Products,
  Product_images,
  Product_variants,
  Customer_addresses,
  Orders,
  Order_items,
  Payments,
  Discounts,
  Reviews,
  Report_requests
};

// Associations
// User and Shop association
User.hasMany(Shop, {
  foreignKey: "owner_id",
  as: "shop"
});
Shop.belongsTo(User, {
  foreignKey: "owner_id",
  as: "users"
});

// Shop and Products association
Shop.hasMany(Products, {
  foreignKey: "shop_id",
  as: "products"
});
Products.belongsTo(Shop, {
  foreignKey: "shop_id",
  as: "shop"
});

// Products and Categories association
Products.belongsTo(Categories, { foreignKey: "category_id",as: "category" });
Categories.hasMany(Products, { foreignKey: "category_id", as: "products" });
