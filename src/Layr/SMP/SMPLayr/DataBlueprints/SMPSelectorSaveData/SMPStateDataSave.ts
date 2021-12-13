export class SMPStateDataSave {
    stateName: string
    // yx adatok tarolasara, ami nem part specifikus, hanem state specifikus jol johet, habar lehet nincs haszna
    constructor(stateName: string) {
        this.stateName = stateName
    }
}