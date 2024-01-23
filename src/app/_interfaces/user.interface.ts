interface User {
    email: string,
    password: string,
    name: string,
    accessToken: string,
    refreshToken: string,
    _id: string,
}

export interface UserRegister {
    email: User['email'],
    password: User['password'],
    name: User['name']
}

export interface UserLogin {
    email: User['email'],
    password: User['password'],
}

export interface UserData {
    accessToken: User['accessToken'],
    refreshToken: User['refreshToken'],
    user: {
        _id: User['_id'],
        name: User['name'],
        email: User['email']
    }
}

export interface ResetPassword {
    password: User['password']
}