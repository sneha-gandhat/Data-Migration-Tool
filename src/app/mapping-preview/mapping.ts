export class Mapping {
    constructor(
        public id: number,
        public adminType: string,
        public sourceValue: string,
        public destinationValue: string,
        public default_value: string,
        public isProcess_invalid_chars: boolean,
        public isMandatory: boolean,
        public isValidSchema: boolean,
		public fileName:string
    ) {
    }
}