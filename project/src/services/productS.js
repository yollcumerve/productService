const productM = require('../models/productM')


exports.productCreate = async (req,res) => {
  try {
    const createdProduct = await productM.create(req.body)
    res.status(200).send(createdProduct)
    
  } catch (e) {
    console.log(e)
    resizeBy.status(400).send(e)
  }

}

exports.productAll = async (req,res) => {
  try {
    const all = await productM.find({})
    .sort({$natural: -1})
    res.status(200).send(all)
  } catch (e) {
    console.log(e)
    res.status(400).send(e)
  }
}

exports.productOne = async (req,res) => {
  try {
    const one = await productM.findOne({id: req.params.id})
    res.status(200).send(one)
  } catch (e) {
    console.log(e)
    res.status(400).send(e)
  }
}

exports.productPatch = async (req,res) => {
  try {
    const update = await productM.findByIdAndUpdate({_id:req.params.id},{
      productname: req.body.productname,
      price: req.body.price,
      description: req.body.description
    })
    res.status(200).send(update)
  } catch (e) {
    console.log(e)
    res.status(400).send(e)
  }
}

exports.productDelete = async (req,res) => {
  try {
    const deleted = await productM.deleteOne({id: req.params.id})
    res.status(200).send('deleted')
  } catch (e) {
    console.log(e)
    res.status(400).send(e)
  }
}