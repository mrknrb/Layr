import {LayrBackground} from "../Layr/Background/LayrBackground.js";


//@ts-ignore
let layrBackgroundF: LayrBackground = chrome.extension.getBackgroundPage().layrBackground

export {layrBackgroundF}
//@ts-ignore
window.layrBackground = layrBackgroundF