export enum RequestType {

    getDocs = "getDocs",
    saveDocs = "saveDocs",//Ha uj, akkor inserteli, ha nem, akkor updateli
    deleteDocs = "deleteDocs",
    getDocs_ByDocsChildConnections = "getDocs_ByDocsChildConnections",

    GET_CONNECTIONS = "GET_CONNECTIONS",
    SAVE_CONNECTIONS = "SAVE_CONNECTIONS",//Ha uj, akkor inserteli, ha nem, akkor updateli
    DELETE_CONNECTIONS = "DELETE_CONNECTIONS"
}