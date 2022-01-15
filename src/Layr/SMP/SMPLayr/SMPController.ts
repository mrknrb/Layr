import {SMPSelectorDataDynamic} from "./DataBlueprints/SMPSelectorDynamicData/SMPSelectorDataDynamic.js";
import {SMPManager} from "./SMPManager.js";
import {SMPSelectorAndStateName} from "./SMPEgyebek/SMPSelectorAndStateName.js";

export class SMPController {

    private smManager: SMPManager

    constructor(smManager: SMPManager) {
        this.smManager = smManager
    }

    async activatedekAktivalasa(selectorDontLoadSaveEllenereIs?: boolean) {
        let selectors = this.getChildSelectors_MultipleLevels_Filtered_IfNoSelectorNoParent({
            selectorArrayFilterByEnum: SelectorArrayFilterByEnum.activated,
            selectorDontLoadSaveEllenereIs: selectorDontLoadSaveEllenereIs
        })
        /*
        for await (const selector of selectors) {
            await selector.activateSelector(true)
        }*/
        this.activateSelectorsArray(selectors, true)
    }

    async activateSelectorAndChildren(selectorName: string, activate: boolean, selectorDontLoadSaveEllenereIs?: boolean) {

        let activatedSelector = this.smManager.smpSelectorDataDynamicMap.get(selectorName)
        if (!activatedSelector) return
        if (activatedSelector.smpSelectorDataStatic.selectorNotDeactivatable && !activate) return
        let selectorAndStateName: SMPSelectorAndStateName = {
            selectorName: selectorName,
            stateName: activatedSelector.activatedState
        }
        let selectors = this.getChildSelectors_MultipleLevels_Filtered_IfNoSelectorNoParent({
            selectorAndStateName_UresHaNincsParent: selectorAndStateName,
            selectorArrayFilterByEnum: SelectorArrayFilterByEnum.activated,
            selectorDontLoadSaveEllenereIs: selectorDontLoadSaveEllenereIs
        })
        activatedSelector.saveActivation(activate)
        selectors.unshift(activatedSelector)
        this.activateSelectorsArray(selectors, activate)

    }

    changeSelectorState(selectorAndStateName: SMPSelectorAndStateName, selectorDontLoadSaveEllenereIs?: boolean) {
        // console.log(this.smManager.smpSelectorDataSaveObjects)
        let changedSelector = this.smManager.smpSelectorDataDynamicMap.get(selectorAndStateName.selectorName)

        let kikapcsolandoSelectors = this.getChildSelectors_MultipleLevels_Filtered_IfNoSelectorNoParent({
            selectorArrayFilterByEnum: SelectorArrayFilterByEnum.active,
            selectorAndStateName_UresHaNincsParent: {
                selectorName: selectorAndStateName.selectorName,
                stateName: changedSelector.activatedState
            }
        })
        this.activateSelectorsArray(kikapcsolandoSelectors, false)
        changedSelector.activateSelector(false)
        changedSelector.changeActivatedState_OnlyData(selectorAndStateName.stateName)
        changedSelector.activateSelector(true, true)

        let aktivalandoSelectors = this.getChildSelectors_MultipleLevels_Filtered_IfNoSelectorNoParent({
            selectorArrayFilterByEnum: SelectorArrayFilterByEnum.activated,
            selectorAndStateName_UresHaNincsParent: {
                selectorName: selectorAndStateName.selectorName,
                stateName: selectorAndStateName.stateName
            },
            selectorDontLoadSaveEllenereIs: selectorDontLoadSaveEllenereIs
        })
        this.activateSelectorsArray(aktivalandoSelectors, true)

        this.smManager.smpSavePart.saveValue()
    }


    activateSelectorsArray(selectorArray: SMPSelectorDataDynamic[], activate: boolean) {
        if (selectorArray.length == 0) return
        if (activate) {
            for (let i = 0; i < selectorArray.length; i++) {
                selectorArray[i].activateSelector(activate)
            }
        } else {
            for (let i = selectorArray.length - 1; i > -1; i--) {
                selectorArray[i].activateSelector(activate)
            }
        }

    }

    //yx publikus magas szintu functionok

    private getChildSelectors_OneLevel_IfNoSelectorNoParent(selectorAndStateName_UresHaNincsParent?: SMPSelectorAndStateName) {
        let childrenSelectors: SMPSelectorDataDynamic[] = []
        this.smManager.smpSelectorDataDynamicMap.forEach((smSelectorDataDynamic) => {
            let instanceParentNames = smSelectorDataDynamic.smpSelectorDataStatic.parentSelectorAndStateName
            if ((!selectorAndStateName_UresHaNincsParent && instanceParentNames) || (selectorAndStateName_UresHaNincsParent && !instanceParentNames)) {
            } else if (!selectorAndStateName_UresHaNincsParent && !instanceParentNames) {
                childrenSelectors.push(smSelectorDataDynamic)
            } else if (selectorAndStateName_UresHaNincsParent.stateName == instanceParentNames.stateName && selectorAndStateName_UresHaNincsParent.selectorName == instanceParentNames.selectorName) {
                childrenSelectors.push(smSelectorDataDynamic)
            }
        })
        return childrenSelectors
    }

    private getChildSelectors_MultipleLevels_Filtered_IfNoSelectorNoParent(args: { selectorArrayFilterByEnum: SelectorArrayFilterByEnum, selectorAndStateName_UresHaNincsParent?: SMPSelectorAndStateName, selectorDontLoadSaveEllenereIs?: boolean }) {
        let childrenSelectorsAll: SMPSelectorDataDynamic[] = []
        let childSelectorsKozvetlen = this.getChildSelectors_OneLevel_IfNoSelectorNoParent(args.selectorAndStateName_UresHaNincsParent)

        childrenSelectorsAll = childrenSelectorsAll.concat(this.selectorArraybenFilter(childSelectorsKozvetlen, args.selectorArrayFilterByEnum))
        let childrenSelectorsUjak: SMPSelectorDataDynamic[] = []
        childrenSelectorsUjak = childrenSelectorsAll
        while (childrenSelectorsUjak.length > 0) {
            childrenSelectorsUjak.forEach(selector => {
                let childSelectorsIteracioban = this.getChildSelectors_OneLevel_IfNoSelectorNoParent({
                    selectorName: selector.smpSelectorDataStatic.selectorName,
                    stateName: selector.activatedState
                })
                childrenSelectorsUjak = this.selectorArraybenFilter(childSelectorsIteracioban, args.selectorArrayFilterByEnum)
                childrenSelectorsAll = childrenSelectorsAll.concat(childrenSelectorsUjak)
            })
        }
        return childrenSelectorsAll
    }

    private selectorArraybenFilter(selectorArray: SMPSelectorDataDynamic[], selectorArrayFilterByEnum: SelectorArrayFilterByEnum, selectorDontLoadSaveEllenereIs?: boolean) {
        let selectorArraybenActivated = (selectorArray: SMPSelectorDataDynamic[]) => {
            return selectorArray.filter(selector => {
                // return selector.smpSelectorDataStatic.defaultSelectorActive || selector.smpSelectorDataSave.selectorActivated

                return this.selectorActivatedCheck(selector, selectorDontLoadSaveEllenereIs)
            })
        }

        let selectorArraybenActive = (selectorArray: SMPSelectorDataDynamic[]) => {
            return selectorArray.filter(selector => {
                return selector.selectorActive
            })
        }

        if (SelectorArrayFilterByEnum.activated == selectorArrayFilterByEnum) {
            return selectorArraybenActivated(selectorArray)
        } else if (SelectorArrayFilterByEnum.active == selectorArrayFilterByEnum) {
            return selectorArraybenActive(selectorArray)
        }
    }

    selectorActivatedCheck(selector: SMPSelectorDataDynamic, selectorDontLoadSaveEllenereIs?: boolean): boolean {
        if (selector.smpSelectorDataStatic.selectorDontLoadSave && !selectorDontLoadSaveEllenereIs) return selector.smpSelectorDataStatic.defaultSelectorActive
        if (selector.smpSelectorDataSave.selectorActivated === undefined) return selector.smpSelectorDataStatic.defaultSelectorActive
        return selector.smpSelectorDataSave.selectorActivated

    }

    //yx felfele vannak a mukodoek


    private startController() {


    }

    private getUsableSelectors() {
        let remainingSelectors = new Map<string, SMPSelectorDataDynamic>()
        let useableSelectors = new Map<string, SMPSelectorDataDynamic>()
        let searchRequiredSelectors = new Map<string, SMPSelectorDataDynamic>()


        this.smManager.smpSelectorDataDynamicMap.forEach(smSelectorDataDynamic => {
            remainingSelectors.set(smSelectorDataDynamic.smpSelectorDataStatic.selectorName, smSelectorDataDynamic)
        })

        remainingSelectors.forEach((smSelectorDataDynamic, key) => {
            if (!smSelectorDataDynamic.smpSelectorDataStatic.parentSelectorAndStateName) {
                let activeSelectors = this.getActiveSelectorsFromSelectorsChildren(smSelectorDataDynamic.smpSelectorDataStatic.selectorName, smSelectorDataDynamic.smpSelectorDataSave.savedActivateState)
                useableSelectors.set(smSelectorDataDynamic.smpSelectorDataStatic.selectorName, smSelectorDataDynamic)
                searchRequiredSelectors.set(smSelectorDataDynamic.smpSelectorDataStatic.selectorName, smSelectorDataDynamic)
                remainingSelectors.delete(smSelectorDataDynamic.smpSelectorDataStatic.selectorName)
            }
        })
    }

    private getActiveSelectors() {
        let activeSelectors: SMPSelectorDataDynamic[] = []
        this.smManager.smpSelectorDataDynamicMap.forEach(value => {
            activeSelectors.push(value)
        })
        return activeSelectors
    }

    private selectorChangeState(selectorName: string, stateName: string) {


    }

    /*
        private getActivePartsFromSelectorsChildren(selectorName: string, stateName: string) {
            let selectors = this.getActiveSelectorsFromSelectorsChildren(selectorName, stateName)
            let activeStates = this.getActiveStatesFromSelectors(selectors)
            this.getPartsNamesFromStates(activeStates)

        }
    */

    private getActiveSelectorsFromSelectorsChildren(selectorName: string, stateName: string) {
        let remainingSelectors = new Map<string, SMPSelectorDataDynamic>()
        let childrenSelectors = new Map<string, SMPSelectorDataDynamic>()
        let requiredSelectors = new Map<string, SMPSelectorDataDynamic>()

        //yx osszes selector berakasa a remaingbe
        this.smManager.smpSelectorDataDynamicMap.forEach(smSelectorDataDynamic => {
            remainingSelectors.set(smSelectorDataDynamic.smpSelectorDataStatic.selectorName, smSelectorDataDynamic)
        })
        //yx elso berakasa a requiredbe
        requiredSelectors.set(selectorName, remainingSelectors.get(selectorName))
        remainingSelectors.delete(selectorName)


        while (remainingSelectors.size != 0 || requiredSelectors.size != 0) {
            let requiredSelectorsNextLoop = new Map<string, SMPSelectorDataDynamic>()
            remainingSelectors.forEach((smSelectorDataDynamic) => {
                let state = smSelectorDataDynamic.smpSelectorDataStatic.parentSelectorAndStateName
                //yx benne van e a maradek selector kozul valamelyiknek a requiredjeben egy a reqiredselectors listabol, ha igen, akkor az required szamara
                if (requiredSelectors.has(state.selectorName)) {
                    let a = requiredSelectors.get(state.selectorName).smpStateDataDynamicMap.get(state.stateName)
                    if (a) {
                        childrenSelectors.set(smSelectorDataDynamic.smpSelectorDataStatic.selectorName, smSelectorDataDynamic)
                        requiredSelectorsNextLoop.set(smSelectorDataDynamic.smpSelectorDataStatic.selectorName, smSelectorDataDynamic)
                        remainingSelectors.delete(smSelectorDataDynamic.smpSelectorDataStatic.selectorName)
                    }

                }

            })
            requiredSelectors = requiredSelectorsNextLoop
        }
        let useableSelectors2: SMPSelectorDataDynamic[] = []
        childrenSelectors.forEach(value => {
            useableSelectors2.push(value)
        })
        return useableSelectors2
    }

    /*
        private getPartsNamesFromStates(smStateDataDynamic: SMPStateDataDynamic[]) {
            let partsMap = new Map<string, SMPPartDataStatic>()
            smStateDataDynamic.forEach(value => {
                value.masterObjectParts.forEach(value1 => {
                    partsMap.set(value1.smpPartNameStatic.partName, value1.smpPartNameStatic)
                })
            })
            let partStaticDataArray = []
            partsMap.forEach(value => {
                partStaticDataArray.push(value)
            })
            return partStaticDataArray
        }
    */

    /*
        getPartsFromPartStaticDataArray(SMPartsDataStaticArray: SMPPartDataStatic[]) {
            let parts: PartBase[] = []
            SMPartsDataStaticArray.forEach(smPartsDataStatic => {
                if (smPartsDataStatic.searchType == SMPSearchType.ChildNodePart) {
                    let nodes = LayrFind.nodes_ByParentNodeId(this.smManager.nodeId)
                    nodes.forEach(value1 => {
                        LayrFind.partOfNodes_ByParentNodeId(value1.nodeId, smPartsDataStatic.partName).forEach(value => {
                            //yx ugyanaz mint a getpart csak nem partmanagerbol jon
                            value.getObject(smPartsDataStatic.partName)
                        })
                        parts.push()
                    })

                } else if (smPartsDataStatic.searchType == SMPSearchType.OwnNode) {
                    let node = LayrFind.node_ById(this.smManager.nodeId)
                    parts.push(node.nodeSMPManager.getPart(smPartsDataStatic.partName))
                } else if (smPartsDataStatic.searchType == SMPSearchType.OwnMasterObjectPart) {
                    let master2: ElementBaseClass = this.smManager.masterObject
                    master2.smpManager.getPart(smPartsDataStatic.partName)
                }
            })


        }
    */

    private getActiveStatesFromSelectors(smSelectorDataDynamicArray: SMPSelectorDataDynamic[]) {
        let arrayOfStates = []
        smSelectorDataDynamicArray.forEach(smSelectorDataDynamic => {
            let activatedState = smSelectorDataDynamic.activatedState

            if (activatedState) {
                arrayOfStates.push(smSelectorDataDynamic.smpSelectorDataStatic.states.find(value => activatedState == value.stateName))
            }


        })
        return arrayOfStates
    }

    /*
        private setStateActiveAndSave(selectorName: string, stateName: string) {
            let selector = this.smManager.smpSelectorDataDynamicMap.get(selectorName)
            selector.activatedState = stateName
            selector.smpSelectorDataSave.savedActivateState = stateName
            this.smManager.smpSaveParsaveValue()
        }

        private setSelectorActiveInactiveAndSave(selectorName: string, active: boolean) {

            let selector = this.smManager.smpSelectorDataDynamicMap.get(selectorName)
            selector.selectorActive = active
            selector.smpSelectorDataSave.selectorActivated = active
            this.smManager.smpSavePart.saveValue()

        }
    */

    //yx constructionarea


}


enum SelectorArrayFilterByEnum {
    active = "active",
    activated = "activated"

}







