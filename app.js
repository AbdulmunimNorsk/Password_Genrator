function getPassword(){
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@#$%^&*()_+?<>:{}[]'";

    let passwordLength = 16
    let password1 = '';
    let password2 = '';

    for (let i = 0 ; i< passwordLength; i++){
        let randomNumber = Math.floor(Math.random()*chars.length);
        password1 += chars.substring(randomNumber,randomNumber+1);
        // console.log(password1);
    }
    document.getElementById("password_1").value=password1;

    for (let i = 0 ; i< passwordLength; i++){
        let randomNumber = Math.floor(Math.random()*chars.length);
        password2 += chars.substring(randomNumber,randomNumber+1)
        // console.log(password2)
    }
    document.getElementById("password_2").value=password2;
}