const express = require("express");
const routes = require("../../../../../Desktop/homework/ORM_E-commerceBackend_VGUTIERREZ/routes/api");
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
