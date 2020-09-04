export class LoadStatusList {
    constructor(public relatedType: string,
        public fileName: string,
        public processingStatus: string,
        public noOfObjectsProcessed: string,
        public logFilePath: string) {
    }
}