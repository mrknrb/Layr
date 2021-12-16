export class OptionsElementStaticDataType {
    optionName: string
    toolGroupElements: ToolGroupStaticDataType[]
}

export class ToolGroupStaticDataType {
    toolGroupName: string;
    toolElements: /*ToolElementBaseClass*/any[]
}