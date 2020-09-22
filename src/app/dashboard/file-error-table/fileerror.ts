export class FileError {
    constructor(
        public filename: string,
        public size: string,
        public objCount: number,
        public error: string,) {
    }
}