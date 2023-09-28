
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
    title: string | undefined
    author: string | undefined
    genre: string | undefined
    description: string | undefined
    condition: string | undefined
    availableStatus: string | undefined
    coverArtUrl: File | undefined
}


export type {
    LoginForm, RegisterForm, EditFormType, BookFormType
}