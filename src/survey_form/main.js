let checkboxes = [];

function message() {
    const Name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const semester = document.getElementById('number').value;
    const dropdown = document.getElementById('dropdown').value;
    const msg = document.getElementById('comments').value;
    let l1 = document.getElementById("check1");
    let l2 = document.getElementById("check2");
    let l3 = document.getElementById("check3");
    let l4 = document.getElementById("check4");

    if (l1.checked === true) {
        checkboxes[checkboxes.length] = "Interaction"
    }
    if (l2.checked === true) {
        checkboxes[checkboxes.length] = "Amount of hours"
    }
    if (l3.checked === true) {
        checkboxes[checkboxes.length] = "Online-friendly content"
    }
    if (l4.checked === true) {
        checkboxes[checkboxes.length] = "Other"
    }

    let message =
        "Name: " + Name + "\n" +
        "Email: " + email + "\n" +
        "Semester: " + semester + "\n" +
        "Role: " + dropdown + "\n" +
        "Improvements: " + checkboxes + "\n" +
        "Comment: " + msg + "\n";

    checkboxes = [];

    var params = {
        from_name : email,
        message : message
    }

    emailjs.send("service_godwbmq", "template_w5622o6", params)
        .then(function (res){
            alert("success! " + res.status);
        })

    setTimeout(() => {
        window.location.reload(true);
        window.scrollTo(0,0);
    }, 4000);



}


