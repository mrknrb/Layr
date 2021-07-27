chrome.browserAction.onClicked.addListener(function () {
    chrome.tabs.create({ url: chrome.runtime.getURL("Desktop.html") });
});




class Background{
    tabWindows=[]
    newTab(TabWindow){
        this.tabWindows.push(TabWindow)
    }
}

let arangoMrkBackground=new ArangoMrkBackground()





var background=new Background()