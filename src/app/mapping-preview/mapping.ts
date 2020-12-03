export class Mapping {
    constructor(
        public id: number,
        public adminType: string,
        public sourceValue: string,
        public destinationValue: string,
        public defaultValue: string,
        public processInvalidChars: boolean,
        public isMandatory: boolean,
        public isValidSchema: boolean
    ) {
    }
}