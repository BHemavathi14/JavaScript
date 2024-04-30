
function validate()
{
    var uname = document.getElementById("name").value;
    var regx=/Hema/i; // literal way - we are checking for this pattern E00
    // i for case sensitivity
    if(regx.test(uname)) // test method return true/False
    {
        alert("valid user name ")
    }
    else
    {
        alert("Invalid user name ");
        document.getElementById("lbluser").style.visibility="visible";
    }
}