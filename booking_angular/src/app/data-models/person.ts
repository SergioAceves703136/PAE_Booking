export class Person {
    constructor(
       public id: number,
       public fullname: string,
       public email: string,
       public screenName: string,
       public password: string,
       public address: string,
       public city: string,
       public country: string,
       public postalcode: number,
       public cellphone: number,
       public birthday: string,
       public rol: number,    // admin: 0, usuario: 1
       public cuartosCreados?: number[],
       public transacciones?: number[],
    ) { }
}
