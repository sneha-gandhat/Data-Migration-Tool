export class tag{
    constructor(
        public  id:number,
        public  tagname:string
    ){

        
    }
}
export class adminType{
    constructor(
        public  typeId:number,
        public  typeName:string
    ){

    }
}
    export class mappingInfo{
        constructor(
            public adminType: string,
            public sourceValue: string,
            public default_value: string,
            public isProcess_invalid_chars :boolean,
            public isMandatory :boolean,
        ){
    
        }

    }