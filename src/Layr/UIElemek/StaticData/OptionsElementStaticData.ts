import {OptionsElementStaticDataType} from "./OptionsElementStaticDataType.js";
import {ToolElementLogin} from "./ToolElements/File/Account/ToolElementLogin.js";
import {DocExplorer} from "./ToolElements/File/Explorers/DocExplorer.js";

const OptionsElementFile: OptionsElementStaticDataType = {
    optionName: "File",
    toolGroupElements: [{
        toolGroupName: "account", toolElements: [
            ToolElementLogin
        ]
    },{
        toolGroupName: "explorers", toolElements: [

            DocExplorer
        ]
    }]
}

const OptionsElementEdit: OptionsElementStaticDataType = {
    optionName: "Edit",
    toolGroupElements: [{
        toolGroupName: "basics", toolElements: []
    }]
}
const OptionsElementHelp: OptionsElementStaticDataType = {
    optionName: "Help",
    toolGroupElements: [{
        toolGroupName: "starter", toolElements: []
    }]
}
export const OptionsElementStaticData: OptionsElementStaticDataType[] = [
    OptionsElementFile,
    OptionsElementEdit,
    OptionsElementHelp
]

