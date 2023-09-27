
interface Book {
    id: string;
    title: string;
    author: string;
    genre: string;
    description: string;
    conditioin: string;
    availableStatus: string;
    coverArtUrl: string;
    createdAt: string;
    updatedAt: string;
}

interface User {
    _id: string;
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    address: string;
    role: string;
    books: Book[];
    createdAt: string;
    updatedAt: string
}

interface Token {
    token: string;
    refreshToken: string
}


interface InitState {
    currentPage: string;
    user: User | null;
    authUser: User | null;
    token: string | null;
    refreshToken: string | null;
}


export type {
    InitState,
    Book,
    User,
    Token
}