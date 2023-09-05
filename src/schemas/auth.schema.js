import { z } from 'zod';

export const registerSchema = z.object({
    username : z.string({
        required_error: "Username is a required field"
    }),
    email : z.string({
        required_error: "Email address is a required field"
    }).email({
        massage: 'Invalid Email Address'
    }),
    password : z.string({
        required_error: 'Password is required fiels'
    }).min(6, {
        massage: 'Password must be at least characters long'
    })
})

export const loginSchema = z.object({
    email : z.string({
        required_error: "Email address is a required field"
    }).email({
        massage: 'Invalid Email Address'
    }),
    password : z.string({
        required_error: 'Password is required fiels'
    }).min(6, {
        massage: 'Password must be at least characters long'
    })
})