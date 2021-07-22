// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  foreign_key: "category_id",
});

// Categories have many Products
Category.belongsToMany(Product, {
  foreign_key: "category_id",
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  foreign_key: "product_id",
  through: {
    model: ProductTag,
    unique: false,
  },
  as: "tags",
});
// Tags belongToMany Products (through ProductTag)
Tags.belongsToMany(Products, {
  foreign_key: "tag_id",
  through: {
    model: ProductTag,
    unique: false,
  },
  as: "tags",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
