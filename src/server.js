const app = require("./app.js");

const PORT = process.env.PORT || 9500;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
