export class Person {
    constructor(
        id: number,
        fullname: string,
        email: string,
        screenName: string,
        password: string,
        address: string,
        city: string,
        country: string,
        postalcode: number,
        cellphone: number,
        birthday: string,
        rol: number,    // admin: 0, usuario: 1
        cuartosCreados?: number[],
        transacciones?: number[],

    ) { }
}
