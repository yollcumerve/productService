const app = require('express')()
const PORT = 8080
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/productS", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //useCreateIndex : true
});

const { json, urlencoded } = require('body-parser')
app.use(json({ limit: '100kb' }))
app.use(urlencoded({ limit: '100kb', extended: true }))

app.use(require('./modules/security'))
app.use(require('./routes/productR'))

app.listen(PORT, () => {
  console.log(`App Listening on port ${PORT}`);
});

  