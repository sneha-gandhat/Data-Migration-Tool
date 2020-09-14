export class TransformationResponse {
    constructor(
        public filesProcessed:string,
	public loggerFilePath : string,
	public transformedFolderPath : string,
	public totalObjectsToTransform : number,
	public totalSuccessfulObjects : number,
	public totalFailedObjects : number) {
    }
}