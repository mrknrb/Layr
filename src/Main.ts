import {MrkS3} from "./MrkS3/MrkS3";
import {URL_Object} from "./Arangodb/AdatTipusok/URL_Object";
import {NodeDivData} from "./NodeDiv/NodeDivData";
import {NodeDocData} from "./NodeDiv/NodeDocData/NodeDocData";
import {NodeDivAllData} from "./NodeDiv/NodeDivAllData";
import {NodeDiv} from "./NodeDiv/NodeDiv";

/*
let scriptek = [
    "0Libraries/polyfill.js",
    "0Libraries/pouchdb.js",

    "0Libraries/jquery.js",
    "0Libraries/arangojs.js",
    "MrkLibrary.js",
    "docgrouptesztfajlok.js",
    "Classes/Arangodb/ArangoMrkMessageClient.js",
    "Classes/ConceptMap/NodeDiv/NodeDiv.js",
    "Classes/ConceptMap/NodeDiv/GroupElem.js",
    "Classes/ConceptMap/NodeDiv/KeretElem.js",
    "Classes/ConceptMap/NodeDiv/TextAreaElem.js",
    "Classes/ConceptMap/NodeDiv/DetailsGroup.js",
    "Classes/ConceptMap/NodeDiv/MetaDataGroup.js",
    "Classes/ConceptMap/Talca.js",
    "Classes/ConceptMap/ConceptMap.js"
]
let main = {}
function scriptbetoltes() {
    let betoltottscriptszam=0
    scriptek.forEach(function (scriptsrc,i) {
        let script = document.createElement('script')
        script.src = scriptsrc
        document.body.appendChild(script)
        script.onload = function () {
            betoltottscriptszam++
            if(scriptek.length===betoltottscriptszam){
                main = new Main()
            }
        };

    })
}
*/

export class Main {
    mrks3
    bkg
    constructor() {
        this.mrks3 = new MrkS3()
        this.mrks3.ujRootNodeDivBetoltes("http://localhost:8529|_system|docs|91894511|")
        this.bkg = chrome.extension.getBackgroundPage()
        this.bkg.background.newTab(window)
    }
}

let main = new Main()
//scriptbetoltes()










