export interface JwtPayload {
    email: string;
}

export interface SignUpUser {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
}

export interface SignInUser {
    email: string;
    password: string;
}
