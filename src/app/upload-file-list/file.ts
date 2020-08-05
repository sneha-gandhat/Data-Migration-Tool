export class File {
    constructor(public fileName: string,
        public fileDownloadUri: string,
        public fileType: string,
        public size: string,
        public modified: string,
        public fileDeleteUri:string) {        
    } 
}