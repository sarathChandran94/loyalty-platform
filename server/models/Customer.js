import mongoose from 'mongoose'

const customerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            minlenth: 6
        },
        points: {
            type: Number,
            default: 0,
            min: 0,
        }
    },
    {
        timestamps: true,
    }
)

const Customer = mongoose.model('Customer', customerSchema)

export default Customer