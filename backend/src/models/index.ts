import User from "./User";
import Shop from "./Shop";
import Categories from "./Categories";
import Products from "./Products";
import Product_categories from "./Product_categories";
import Product_images from "./Product_images";
import Product_variants from "./Product_variants";
import Customers from "./Customers";
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
  Product_categories,
  Product_images,
  Product_variants,
  Customers,
  Customer_addresses,
  Orders,
  Order_items,
  Payments,
  Discounts,
  Reviews,
  Report_requests
};

// User.hasMany(Shop,{
//   foreignKey: 'owner_id',
//   as: 'shops'
// })

// Shop.belongsTo(User,{
//   foreignKey: 'owner_id',
//   as: 'owner'
// })
// Categories.belongsToMany(Products, {
//   through: Product_categories,
//   foreignKey: 'category_id',
//   otherKey: 'product_id'
// });
// Products.belongsToMany(Categories, {
//   through: Product_categories,
//   foreignKey: 'product_id',
//   otherKey: 'category_id'
// });

// Product_images.belongsTo(Products, {
//   foreignKey: 'product_id',
//   as: 'product'
// });
