export class Cuarto {
    constructor(
        public id: number,
        public owner: string,
        public direccion: string,
        public nombre: string,
        public descripcion: string,
        public imagen1: string,
        public numCuartos: number,
        public descCuartos: string,
        public imagenCuartos: string[],
        public numBaths: number,
        public descBaths: string,
        public imagenBaths: string[],
        public descCocina: string,
        public imagenCocina: string[],
        public extras: string,
        public imagenExtras: string[]

    ) { }
}