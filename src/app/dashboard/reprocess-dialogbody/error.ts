export class Error {
    constructor(
        public type: string,
        public name: string,
        public revision: string,
        public filename: string,
        public error: string) {
    }
}