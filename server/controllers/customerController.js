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

export async function getCustomerById (req, res) {
    try{
        const customer = await Customer.findById(req.params.id)
        
        if(!customer) {
            return res.status(404).json({
                message: 'Customer not found'
            })
        }

        res.status(200).json(customer)

    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: error.message
        })
    }
}