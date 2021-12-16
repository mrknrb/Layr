import {OptionsElementStaticDataType} from "./OptionsElementStaticDataType.js";
import {ToolElementLogin} from "./ToolElements/File/Account/ToolElementLogin.js";

const OptionsElementFile: OptionsElementStaticDataType = {
    toolGroupElements: [{
        toolGroupName: "account", toolElements: [
            ToolElementLogin,
        ]
    }],
    optionName: "File"


}
const OptionsElementEdit: OptionsElementStaticDataType = {
    toolGroupElements: [{
        toolGroupName: "basics", toolElements: [

        ]
    }],
    optionName: "Edit"


}
const OptionsElementHelp: OptionsElementStaticDataType = {
    toolGroupElements: [{
        toolGroupName: "starter", toolElements: [

        ]
    }],
    optionName: "Help"


}
export const OptionsElementStaticData: OptionsElementStaticDataType[] = [
    OptionsElementFile,
    OptionsElementEdit,
    OptionsElementHelp
]

