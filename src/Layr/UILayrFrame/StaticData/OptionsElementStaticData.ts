import {OptionsElementStaticDataType} from "./OptionsElementStaticDataType.js";
import {DocExplorer} from "../../LayrTools/File/Explorers/DocExplorer/DocExplorer.js";
import {CollectionExplorer} from "../../LayrTools/File/Explorers/DocExplorer/CollectionExplorer.js";
import {ToolButtonExplorers} from "../ToolButtons/File/Explorers/ToolButtonExplorers.js";

const OptionsElementFile: OptionsElementStaticDataType = {
    optionName: "File",
    toolGroupElements: [{
        toolGroupName: "account", toolElements: [

        ]
    },{
        toolGroupName: "Explorers", toolElements: [

            ToolButtonExplorers
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

