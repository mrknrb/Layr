import {LayrBackground, layrBackgroundB} from "./LayrBackground.js";

let scriptek = [
    "0Libraries/polyfill.js",
    "0Libraries/pouchdb.js",
    "0Libraries/jquery.js",
    "0Libraries/arangojs.js",
    "0Libraries/axios.js",
    "0Libraries/socketio.js"
]

function LoadLibraries(callback:Function) {
    let betoltottscriptszam=0
    scriptek.forEach(function (scriptsrc,i) {
        let script = document.createElement('script')
        script.src = scriptsrc
        document.body.appendChild(script)
        script.onload = function () {
            betoltottscriptszam++
            if(scriptek.length===betoltottscriptszam){

                callback()
            }
        };
    })
}


LoadLibraries(function () {

    let layrBackground=new LayrBackground()

})




chrome.browserAction.onClicked.addListener(function () {
    chrome.tabs.create({ url: chrome.runtime.getURL("Frame.html") });
});



export class MainBackground{


    constructor() {

    }


}















