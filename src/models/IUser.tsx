export interface IUser {
    id: string;
    name: string;
    email: string;
    dateofbirth: string;
    phone: string;
}

export interface IFormUser {
    firstname: string;
    lastname: string;
    email: string;
    dateofbirth: string;
    phone: string;
}

export type fieldName = "firstname" | 'lastname' | 'email' | 'dateofbirth' | 'phone' | string