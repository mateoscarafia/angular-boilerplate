export class User {
    constructor(
        public mail: string,
        public password: string,
        public name: string,
        public address: string,
        public phone: number,
    ) {}
}