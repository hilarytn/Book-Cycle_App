import * as yup from 'yup';


const loginSchema = yup
    .object({
        email: yup.string().email().required(),
        password: yup.string().required()
    })


const registerSchema = yup
    .object({
        email: yup.string().email().required(),
        username: yup.string().required(),
        password: yup.string().required(),
        confirmPassword: yup.string().required().oneOf([yup.ref('password')], 'Passwords must match'),
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        phoneNumber: yup.string().required(),
        address: yup.string().required(),
    })

const editProfileSchema = yup
    .object({
        email: yup.string().email().required(),
        username: yup.string().required(),
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        phoneNumber: yup.string().required(),
        address: yup.string().required(),
    })

const BookSchema = yup
    .object({
        title: yup.string().required().min(3),
        author: yup.string().required().min(3).max(50),
        genre: yup.string().required().min(3).max(50),
        description: yup.string().required().max(250),
        condition: yup.string().required(),
        availableStatus: yup.string().required(),
        coverArtUrl: yup.string().required(),
    })

export {
    loginSchema, registerSchema, editProfileSchema, BookSchema
}