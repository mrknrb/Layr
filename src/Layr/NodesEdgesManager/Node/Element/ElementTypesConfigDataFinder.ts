import {TextAreaConfigFile} from "./Elements/TextAreaElement/TextAreaPartsManager/TextAreaStaticData.js";
import {GroupElementConfigFile} from "./Elements/GroupElement/GroupElementSMPManager/GroupElementStaticData.js";
import {DropDownStaticConfigFile} from "./Elements/DropDownStaticElement/DropDownStaticData.js";
import {BrowserConfigFile} from "./Elements/BrowserElement/BrowserStaticData.js";

export const ElementTypesConfigDataFinder = {
    TextArea: TextAreaConfigFile,
    // DropDownDynamic: DropDownDynamicElement,
    DropDownStatic: DropDownStaticConfigFile,
    Group: GroupElementConfigFile,
     Browser: BrowserConfigFile


}