
document.addEventListener("DOMContentLoaded", ()=>{
    const api = new API();
    document.getElementById("register").addEventListener("click", ()=>{
        api.register({
            username:document.getElementById("usernameR").value,
            password:document.getElementById("passwordR").value,
            fullName:document.getElementById("fullName").value,
        }, data=>{
            document.getElementById("registerResult").innerHTML = JSON.stringify(data)
        });
    });

});
