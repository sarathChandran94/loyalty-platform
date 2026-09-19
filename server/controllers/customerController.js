import Customer from "../models/Customer.js";

// export const createCustomer = async((req, res) => {
//     try{
//         const{name, email, points} = req.body
//         const customer = await Customer.create ({
//             name,
//             email,
//             points,
//         })

//         res.status(201).json(customer)

//     } catch (error) {
//         res.status(500).json({
//             message: error.message
//         })
//     }
// })

export async function  createCustomer(req, res) {
    try{
        const{name, email, points} = req.body
        const customer = await Customer.create ({
            name,
            email,
            points,
        })

        res.status(201).json(customer)

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export async function getCustomers(req, res) {
    try {
        const customers = await Customer.find()
        res.status(200).json(customers)
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error.message
        })
    }
}