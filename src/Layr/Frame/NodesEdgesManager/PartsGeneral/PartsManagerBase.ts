import {PartBase} from "./PartBase.js";

export abstract class PartsManagerBase {
    parts:any

  protected  constructor() {
        this.parts ={}
    }

    getPart(className: string) {
        return this.parts[className]
    }



    /*
    partsClassListInserter(partsClassList:any,masterObject:any){
        Object.keys(partsClassList).forEach((key,index) =>{
            let prop=new partsClassList[key](masterObject)
            this.parts.set(prop.constructor.name, prop)
        });

    }
*/

    /*
        addParts(newParts: PartBase[]) {
            this.parts.push(... newParts)
        }
    */

}