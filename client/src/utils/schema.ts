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
        email: yup.string().email(),
        username: yup.string(),
        firstName: yup.string(),
        lastName: yup.string(),
        phoneNumber: yup.string(),
        address: yup.string(),
    })

export {
    loginSchema, registerSchema, editProfileSchema
}