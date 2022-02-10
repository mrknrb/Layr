export class UserCookie {
    email:string
    token?:string
    userName?:string
    userPicture?:string
    constructor(email:string, token?:string) {
        this.email=email
        this.token=token
    }
}