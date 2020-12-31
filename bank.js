var accountDetails={
    userone:{accno:1000,balace:10000,username:"userone",password:"testuser"},
    usertwo:{accno:1001,balace:12000,username:"usertwo",password:"testuser1"},
    userthree:{accno:1002,balace:15000,username:"userthree",password:"testuser2"},
    userfour:{accno:1003,balace:20000,username:"userfour",password:"testuser3"}
}
//check for userone
console.log("userone" in accountDetails)
// if userone exist print corresponding users account number
if("userone" in accountDetails)
{
    console.log(accountDetails["userone"]["accno"])
}
else{
    console.log("user not exist")
}
//if passing username print balance
var username="usertwo"
if(username in accountDetails)
{
    console.log(accountDetails[username].balace)
}
else{
    console.log("user not exist")
}
// validate username and password
var uname="userthree"
var pwd="testuser2"
if(uname in accountDetails)
{
    if(pwd === accountDetails[uname].password)  // === exact mathing , == only content matched
    {
        console.log("succesfull login")
    }
    else{
        console.log("invalid password")
    }
}
else{
    console.log("invalid username")
}

// passing uname and pwd if succesful add an amount to balance
var uname="userthree";
var pwd="testuser2";
if(uname in accountDetails)
{
    if(pwd === accountDetails[uname].password)
    {
        
        accountDetails[uname].balace+=5000;
        console.log(accountDetails[uname].balace)
    }
    else{
        console.log("invalid password")
    }
}
else{
    console.log("invalid username")
}
// validate uname pwd and withdraw an amt
var uname="userthree";
var pwd="testuser2";
var amt =10000
if(uname in accountDetails)
{
    if(pwd === accountDetails[uname].password)
    {
        if(accountDetails[uname].balace>=amt)
        {
            accountDetails[uname].balace-=amt;
        console.log(accountDetails[uname].balace)
        }
        else{
            console.log("insufficient balance")
        }
        
    }
    else{
        console.log("invalid password")
    }
}
else{
    console.log("invalid username")
}