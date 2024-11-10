var firstname = document.getElementById("firstname")
var lastname = document.getElementById("lastname")
var email = document.getElementById("lastname")
var message = document.getElementById("lastname")
var jsonBtn = document.getElementById("createticket")
var data = {}

jsonBtn.addEventListener("click", function(){
    data = {
        "firstName":firstname.value,
        "lastName":lastname.value,
        "Email":email.value,
        "Message":message.value
    }
    export2txt();
})

function export2txt() {
    const originalData = JSON.stringify(data)
  
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([JSON.stringify(originalData, null, 2)], {
        type: "json"
    }));
    a.setAttribute("download", "data.json");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}