import {LayrFrame} from "../LayrFrame.js";
import {OptionsBar} from "./Views/OptionsBar.js";
import {WorkScreen} from "./Views/WorkScreen.js";
import {MenuBar} from "./Views/MenuBar.js";
import {ToolBar} from "./Views/ToolBar.js";
import {OptionsManager} from "./OptionsManager.js";

export class LayrUI {
    layrFrame: LayrFrame

    OptionsBar: OptionsBar
    workScreen: WorkScreen
    menuBar: MenuBar
    toolbar: ToolBar
    optionsManager: OptionsManager

    constructor(layrFrame: LayrFrame) {
        this.layrFrame = layrFrame
        this.OptionsBar = new OptionsBar(this)
        this.workScreen = new WorkScreen(this)
        this.menuBar = new MenuBar(this)
        this.toolbar = new ToolBar(this)
        this.optionsManager = new OptionsManager(this)
    }
}