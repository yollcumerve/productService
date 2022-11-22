const Joi = require('joi')

exports.productCreate = async (req,res,next) => {
    const joiObject = Joi.object({
        productname: Joi.string().min(1).max(255).required(),
        price: Joi.string().min(1).max(255).required(),
        description: Joi.string().min(1).max(255).required()
    })
    const {body} = req
    const validateObject = {
        productname: body.productname,
        price: body.price,
        description: body.description
    }
    const joiValidate = joiObject.validate(validateObject)
    if (joiValidate.error) {
        res.status(406).send(joiValidate.error)
    } else {
        req.vabody = validateObject
        next()
    }
}

exports.productPatch = async (req,res,next) => {
    const joiObject = Joi.object({
        productname: Joi.string().min(1).max(255),
        price: Joi.string().min(1).max(255),
        description: Joi.string().min(1).max(255)
    })
    const {body} = req
    const validateObject = {
        productname: body.productname,
        price: body.price,
        description: body.description
    }
    const joiValidate = joiObject.validate(validateObject)
    if (joiValidate.error) {
        res.status(406).send(joiValidate.error)
    } else {
        req.vabody = validateObject
        next()
    }
}

exports.productAll = async (req,res,next) => {
    const joiObject = Joi.object({
        productname: Joi.string().min(1).max(255),
        price: Joi.string().min(1).max(255),
        description: Joi.string().min(1).max(255)
    })
    const {body} = req
    const validateObject = {
        productname: body.productname,
        price: body.price,
        description: body.description
    }
    const joiValidate = joiObject.validate(validateObject)
    if (joiValidate.error) {
        res.status(406).send(joiValidate.error)
    } else {
        req.vabody = validateObject
        next()
    }
}

exports.productOne = async (req,res,next) => {
    const joiObject = Joi.object({
        productname: Joi.string().min(1).max(255),
        price: Joi.string().min(1).max(255),
        description: Joi.string().min(1).max(255)
    })
    const {body} = req
    const validateObject = {
        productname: body.productname,
        price: body.price,
        description: body.description
    }
    const joiValidate = joiObject.validate(validateObject)
    if (joiValidate.error) {
        res.status(406).send(joiValidate.error)
    } else {
        req.vabody = validateObject
        next()
    }
}

exports.productDelete = async (req,res,next) => {
    const joiObject = Joi.object({
        productname: Joi.string().min(1).max(255),
        price: Joi.string().min(1).max(255),
        description: Joi.string().min(1).max(255)
    })
    const {body} = req
    const validateObject = {
        productname: body.productname,
        price: body.price,
        description: body.description
    }
    const joiValidate = joiObject.validate(validateObject)
    if (joiValidate.error) {
        res.status(406).send(joiValidate.error)
    } else {
        req.vabody = validateObject
        next()
    }
}