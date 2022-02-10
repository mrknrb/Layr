import {LayrFrame} from "../LayrFrame.js";
import {OptionsBar} from "./Views/OptionsBar.js";
import {WorkScreen} from "./Views/WorkScreen.js";
import {MenuBar} from "./Views/MenuBar.js";
import {ToolBar} from "./Views/ToolBar.js";
import {OptionsManager} from "./OptionsManager.js";
import {TopBar} from "./Views/TopBar.js";
import {UserBar} from "./Views/UserBar.js";

export class LayrUI {
    OptionsBar = new OptionsBar(this)
    workScreen = new WorkScreen(this)
    topBar = new TopBar(this)
    menuBar = new MenuBar(this)
    userBar = new UserBar(this)
    toolbar = new ToolBar(this)
    optionsManager = new OptionsManager(this)

    layrFrame: LayrFrame


    constructor(layrFrame: LayrFrame) {
        this.layrFrame = layrFrame
    }
}