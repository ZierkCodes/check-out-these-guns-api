import { Firearm } from "../models/firearm.js";

export {
    findOne,
    findAll,
    create,
    update,
    deleteFirearm as delete
}

function findOne(req, res) {
    Firearm.findById(req.params.id)
    .then(firearm => {
        if(!firearm) {
            return res.status(404).send('Firearm not found.')
        }

        return res.status(200).json(firearm)
    })
    .catch(error => {
        return res.json(error)
    })
}

function findAll(req, res) {
    Firearm.find({})
    .then(firearms => {
        return res.status(200).json(firearms)
    })
    .catch(error => {
        return res.json(error)
    })
}

function create(req, res) {
    Firearm.create(req.body)
    .then(firearm => {
        return res.status(200).json(firearm)
    })
    .catch(error => {
        return res.json(error)
    })
}

function update(req, res) {
    Firearm.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(firearm => {
        return res.status(200).json(firearm)
    })
    .catch(error => {
        return res.json(error)
    })
}

function deleteFirearm(req, res) {
    Firearm.findByIdAndDelete(req.params.id)
    .then(firearm => {
        return res.status(200).json(firearm)
    })
    .catch(error => {
        return res.json(error)
    })
}