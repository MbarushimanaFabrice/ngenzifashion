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
Products.belongsTo(Categories, {
  foreignKey: "category_id",
  as: "category"
});
Categories.hasMany(Products, {
  foreignKey: "category_id",
  as: "products"
});

// ================================
// User ↔ Orders association
// ================================
Orders.belongsTo(User, {
  foreignKey: "user_id",
  as: "user"
});
User.hasMany(Orders, {
  foreignKey: "user_id",
  as: "orders"
});

// ================================
// User ↔ Customer_addresses association
// ================================
User.hasMany(Customer_addresses, {
  foreignKey: "user_id",
  as: "addresses"
});
Customer_addresses.belongsTo(User, {
  foreignKey: "user_id",
  as: "user"
});

// ================================
// Orders ↔ Shipping/Billing addresses
// ================================

// Order → Shipping Address
Orders.belongsTo(Customer_addresses, {
  foreignKey: "shipping_address_id",
  as: "shipping_address"
});
Customer_addresses.hasMany(Orders, {
  foreignKey: "shipping_address_id",
  as: "ShippingOrders"
});

// Order → Billing Address
Orders.belongsTo(Customer_addresses, {
  foreignKey: "billing_address_id",
  as: "billing_address"
});
Customer_addresses.hasMany(Orders, {
  foreignKey: "billing_address_id",
  as: "BillingOrders"
});

// Relationships between Reviews, User, and Products
// User ↔ Reviews
User.hasMany(Reviews, { foreignKey: "user_id", as: "reviews" });
Reviews.belongsTo(User, { foreignKey: "user_id", as: "user" });

// Product ↔ Reviews
Products.hasMany(Reviews, { foreignKey: "product_id", as: "reviews" });
Reviews.belongsTo(Products, { foreignKey: "product_id", as: "product" });

// // Relationships between  Order_items, Orders, Products, and Product_variants
// Orders ↔ Order_items
Orders.hasMany(Order_items, { foreignKey: "order_id", as: "order_items" });
Order_items.belongsTo(Orders, { foreignKey: "order_id", as: "order" });
// Products ↔ Order_items
Products.hasMany(Order_items, { foreignKey: "product_id", as: "order_items" });
Order_items.belongsTo(Products, { foreignKey: "product_id", as: "product" });
// Product_variants ↔ Order_items
Product_variants.hasMany(Order_items, {
  foreignKey: "variant_id",
  as: " order_items"
});
Order_items.belongsTo(Product_variants, {
  foreignKey: "variant_id",
  as: "variant"
});

//  Product_variants and Products association
Products.hasMany(Product_variants, {
  foreignKey: "product_id",
  as: "variants"
});
Product_variants.belongsTo(Products, {
  foreignKey: "product_id",
  as: "product"
});
