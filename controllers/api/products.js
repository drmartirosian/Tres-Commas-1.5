const Product = require('../../models/product');
const User = require('../../models/user');

module.exports = {
  index,
  show,
  create,
  delete: deleteOne,
  update
};

async function create(req, res) {
  // req.body.user = req.user
  console.log(req.body)
  const product = await Product.create(req.body);
    try {
      res.status(200).json(product);
    }
    catch (err) {
      res.status(400).json(err);
    }
}
// async function create(req, res) {
//   const token = req.headers.authorization;
//   const loggedInUser = JSON.parse(atob(token.split(".")[1]));
//   const email = loggedInUser.user.email;
//   const user = await User.findOne({ email: email });
//   const product = new Product(req.body);
//   try {
//     await prouct.userRef.push(user);
//     await product.save();
//     await user.save();
//     res.json({ product });
//   }
//   catch (err) {
//     res.status(400).json(err);
//   }
// }


async function index(req, res) {
  const products = await Product.find({});
  try{
    res.status(200).json(products);
  }
  catch (err) {
    res.status(400).json(err);
  }
}

async function show(req, res) {
  const product = await Product.findById(req.params.id);
  try {
    res.status(200).json(product);
  }
  catch (err) {
    res.status(400).json(err);
  }
}


async function deleteOne(req, res) {
  const deletedProduct = await Product.findByIdAndRemove(req.params.id);
  try {
    res.status(200).json(deletedProduct);
  }
  catch (err) {
    res.status(400).json(err);
  }
}

async function update(req, res) {
  const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
  try{
    res.status(200).json(updatedProduct);
  }
  catch {
    res.status(400).json(err);
  }
}
