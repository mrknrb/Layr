export class ArangoDBInitData{
    url:string
    databaseName:string
    auth:Auth
constructor() {
  this.auth =new  Auth()
}


}
class Auth{
    username:string
    password:string


}