import User from "./User";
import Shop from "./Shop";
import Categories from "./Categories";
import Products from "./Products";
import Product_categories from "./Product_categories";
import Product_images from "./Product_images";
import Product_variants from "./Product_variants";
import Customers from "./Customers";

export {
  User,
  Shop,
  Categories,
  Products,
  Product_categories,
  Product_images,
  Product_variants,
  Customers
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
