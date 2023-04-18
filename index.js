$(document).ready(()=>{
    $("#signUp").click(()=>{
        var userName = $("#username").val();
        var mail = $("#mail").val();
        var password = $("#password").val();

        if(userName.length == 0 || mail.length == 0 || password.length == 0){
            alert("Mba fenoy avao sanda!");
        }
        else{
            alert("merci letsy bro!");
        }
    });
});