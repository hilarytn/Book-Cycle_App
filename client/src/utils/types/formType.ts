
type LoginForm = {
    email: string;
    password: string;
}

type RegisterForm = {
    email: string
    password: string
    confirmPassword: string
    firstName: string
    lastName: string
    phoneNumber: string
    address: string
    location: string
    image: string
}


export type {
    LoginForm, RegisterForm
}