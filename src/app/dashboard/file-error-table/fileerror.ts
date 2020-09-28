export class FileError {
    constructor(
        public fileName: string,
        public fileSize: string,
        public error: string,) {
    }
}