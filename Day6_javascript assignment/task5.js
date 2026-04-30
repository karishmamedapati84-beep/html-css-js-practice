const user = {
    username: "Karishma_Medapati",

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this)
    }
}

user.welcomeMessage()