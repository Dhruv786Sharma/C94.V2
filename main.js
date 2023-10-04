function addUser()
{
    user_name = document.getElementById("chat_user").value;
    localStorage.setItem("chat_user" , user_name);
    window.location = "chat_room.html";
}