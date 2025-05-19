function User (email,password){
    this._email = email
    this._password = password

    Object.defineProperties(this,'email',{
        get:function(){
            return this._email = email
        },
        set:function(value){
            this.email = value
        }
    })
}
