
interface ServerError {
    response: {
        data: {
            message: string
        }
    }
}

interface FetchError {
    response: {
        data: {
            error: string
        }
    }
}

export type {
    ServerError,
    FetchError
}