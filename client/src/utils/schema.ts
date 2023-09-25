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

export {
    loginSchema, registerSchema
}