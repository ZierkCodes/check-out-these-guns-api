import mongoose from 'mongoose'
const Schema = mongoose.Schema

export {
    Firearm
}

const FirearmSchema = new Schema ({
    model: {type: String, required: true},
    manufacturer: {type: String, required: true},
    type: {type: String, required: true},
    caliber: {type: String},
    action: {type: String, required: true},
    effective_range: {type: String}
})

const Firearm = mongoose.model('Firearm', FirearmSchema)