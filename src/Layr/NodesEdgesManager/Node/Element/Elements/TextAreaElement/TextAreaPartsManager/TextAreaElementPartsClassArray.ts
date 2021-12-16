import {TextAreaContentPart} from "./TextAreaParts/TextAreaContentPart.js";
import {SMPSavePart_NodeType} from "../../../../../../SMP/SMPLayr/SMPSavePart_Types/SMPSavePart_NodeType.js";
import {SMPSavePart_ElementType} from "../../../../../../SMP/SMPLayr/SMPSavePart_Types/SMPSavePart_ElementType.js";
import {TextAreaTestPartRed} from "./TextAreaParts/TextAreaTestPartRed.js";
import {TextAreaTestPartBoldFonts} from "./TextAreaParts/TextAreaTestPartBoldFonts.js";
import {TextAreaTestPartBlue} from "./TextAreaParts/TextAreaTestPartBlue.js";
import {ElementBackgroundPart} from "../../../ElementPartsGeneral/ElementBackgroundPart.js";


export let TextAreaElementPartsClassArray = [
    SMPSavePart_ElementType,
    TextAreaContentPart,
    TextAreaTestPartRed,
    TextAreaTestPartBlue,
    TextAreaTestPartBoldFonts,
    ElementBackgroundPart
]