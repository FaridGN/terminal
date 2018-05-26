
function Reg() {
    var a = document.getElementById("register")
    if(a.style.display == "none") {
      a.style.display = "block";
    }
    else {
      a.style.display = "none";
    }
}

let login = {
  username: null,
  password: null
}
let user = {
  __proto__:login,
  email: null
}

var databox = [];
 
function add(){
    user.username = username.value,
    user.password = password.value,
    user.email = email.value
   databox.push(user);
   console.log(users)
}

function checkUser() {
  let isFound = false;
  for(let k in users) {
    if(users[k].email == chk_login.value && users[k])
  }
}
