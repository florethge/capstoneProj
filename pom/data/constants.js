import dotenv from 'dotenv'
dotenv.config()

export const URLS = {
    HOME_URL: 'https://todoist.com',
    LOGIN_URL: 'https://todoist.com/users/showlogin',
}

export const CREDENTIALS = {
    USER: {
        EMAIL: process.env.EMAIL,
        PASSWORD: process.env.PASSWORD,
    }
}