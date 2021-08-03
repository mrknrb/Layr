import {ArangoMrkBackground} from "./Arangodb/ArangoMrkBackground.js";

chrome.browserAction.onClicked.addListener(function () {
    chrome.tabs.create({ url: chrome.runtime.getURL("Desktop.html") });
});




export class Background{
    tabWindows=[]
    constructor() {
        let arangoMrkBackground=new ArangoMrkBackground()
        //
        console.log("betolt")
    }


    newTab(TabWindow){
        this.tabWindows.push(TabWindow)
    }
}
var background=new Background()

