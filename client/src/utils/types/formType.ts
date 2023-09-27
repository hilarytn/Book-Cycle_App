
type LoginForm = {
    email: string;
    password: string;
}

type RegisterForm = {
    email: string
    username: string
    password: string
    confirmPassword: string
    firstName: string
    lastName: string
    phoneNumber: string
    address: string
}


type EditFormType = {
    email: string
    username: string
    firstName: string
    lastName: string
    phoneNumber: string
    address: string
}


export type {
    LoginForm, RegisterForm, EditFormType
}