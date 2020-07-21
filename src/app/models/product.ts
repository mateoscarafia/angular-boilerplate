export class Product {
    constructor(
        public name: string,
        public description: string,
        public price: number,
        public units: number,
        public discount: number,
    ) {}
}