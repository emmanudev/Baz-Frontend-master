export type Roles = 'SUSCRIPTOR' | 'ADMIN';

export interface User {
    user : string;
    password : string;
}

export interface UserResponse { 
    id_user : number,
    user : string,
    pass : string,
    full_name : string,
    role : Roles
}