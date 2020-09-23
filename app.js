function talk()
{
    var know={
        "Hi":"Hello,Developer's from this side.",
        "I need an Ambulance":"Sure, will send ASAP",
        "I am feeling sick":"Don't worry.Tell us about your symptoms.",
        "I need medicines":"Sure, in a while.",
        "Bye":"Take Care, <br> Have a nice day. :)"
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatlog').innerHTML= user + "<br>";
    if (user in know)
    {
        document.getElementById('chatlog').innerHTML= know[user] + "<br>";
    }
    else
    {
        document.getElementById('chatlog').innerHTML="Sorry, I didn't understand <br>";
    }
};