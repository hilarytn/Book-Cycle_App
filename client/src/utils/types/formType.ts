
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

type BookFormType = {
    title: string
    author: string
    genre: string
    description: string
    condition: string
    availableStatus: string
    coverArtUrl: string
}


export type {
    LoginForm, RegisterForm, EditFormType, BookFormType
}