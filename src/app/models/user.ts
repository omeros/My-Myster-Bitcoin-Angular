export interface User {
    _id?: string,
     fullname: string,
     username :string,
     password : string,
     coins: number,
     moves: Array<any>,
     image  :string,
     coinImage : string
}
