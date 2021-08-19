const router = require("express").Router();
const { Category, Product } = require("../../models");
const { restore } = require("../../models/Tag");
// const { restore } = require('../../models/Tag');

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const allCategories = Category.findAll({
      include: [
        {
          model: Product,
          attributes: ["id", "product_name", "price", "stock"],
        },
      ],
    });
    if (!allCategories) {
      res.status(404).json({ message: "No category" });
      return;
    }
    res.status(200).json(allCategories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const allCategories = Category.findByPk(req.params.id, {
      include: [
        { model: Product, attributes: ["product_name", "price", "stock"] },
      ],
    });
    res.status(200).json(allCategories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", (req, res) => {
  // create a new category
  try {
    const allCategories = Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(allCategories);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  try {
    const update = Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    console.log(update);
    if (!update[0]) {
      res.status(404).json({ message: "No category" });
      return;
    } else {
      return res.status(200).json(update);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  try {
    const allCategories = Category.destroy({
      where: { id: req.params.id },
    });
    console.log(allCategories);
    if (!allCategories) {
      res.status(404).json({ message: "No category" });
      return;
    }
    res.status(200).json(allCategories);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
