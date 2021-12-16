export class MrkObjectList {

    classes: { className: string, class: any }[]
    objects: { className: string, object: any }[]

    constructor(classList: any[], objectsArg1?, objectsArg2?, objectsArg3?) {
        this.objects = []
        this.classes = []
        // console.log(objectsArg1,objectsArg2)
        this.classesSaver(classList)

        this.objectsCreator(objectsArg1, objectsArg2, objectsArg3)

    }

    private classesSaver(classList: any[]) {
        classList.forEach(value => {
            this.classes.push({className: value.name, class: value})
        })
    }

    protected objectsCreator(objectsArg1?, objectsArg2?, objectsArg3?) {
        this.classes.forEach(value => {
            let a = new value.class(objectsArg1, objectsArg2, objectsArg3)
            this.objects.push({className: value.className, object: a})
        })

    }


    forEachStoredObject(callback: (object: any, className: string) => any) {
        this.objects.forEach(value => {
            callback(value.object, value.className)
        })
    }

    forEachStoredClass(callback: (class_: any, className: string) => any) {
        this.classes.forEach(value => {
            callback(value.class, value.className)
        })
    }

    getObject(ObjectClassName: string) {
        let objectData = this.objects.find(object => {
            return object.className === ObjectClassName
        })
        if (!objectData) {

            console.error(`LayrError: Nincs ilyen part: ${ObjectClassName}`);
            return null
        }
        return objectData.object
    }

    addObjects(classList: any[], objectsArg1?, objectsArg2?, objectsArg3?) {

        this.classesSaver(classList)
        this.objectsCreator(objectsArg1, objectsArg2, objectsArg3)

    }


}
