export class Error {
    constructor(
        public type: string,
        public name: string,
        public revision: string,
        public fileName: string,
        public error: string) {
    }
}