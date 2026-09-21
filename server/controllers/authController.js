import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken"
import Customer from '../models/Customer.js'

export async function register (req, res) {
    try {
        const {name, email, password} = req.body
        
        const existingCustomer = await Customer.findOne({email})
        if (existingCustomer) {
            return res.status(400).json({
                message: "Customer with this email already exists"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        
        const customer = await Customer.create({
            name,
            email,
            password: hashedPassword,
            points: 0
        })

        res.status(200).json({
            message: "Customer registered successfully",
            customer: {
                id: customer._id,
                name: customer.name,
                email: customer.email,
                points: customer.points,
            }
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: error.message
        })
    }
}

export async function login (req, res) {
    try {
    const {email, password} = req.body

    const customer = await Customer.findOne({email})
    if (!customer) {
        res.status(401).json({
            message: "Invaild email or password"
        })
    }

    const isPwCorrect = await bcrypt.compare(
        password,
        customer.password
    )

    if(!isPwCorrect) {
        res.status(401).json({
            message: "Invalid email or password"
        })
    }

    const token = jwt.sign(
        {
            id: customer._id,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '1d',
        }
    )
    res.status(200).json({
        message: "Login Succesfull",
        token,
        customer: {
            id: customer._id,
            name: customer.name,
            email: customer.email,
            points: customer.points,
        }
    })
    } catch(error) {
        console.error(error);
        res.status(500).json({
            message: error.message
        })
    }
}

