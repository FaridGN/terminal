
function Bakcellopen() {
    document.location="bakcell.html"
}

function clav(number) {
 if(ipt.value.length<=8){
    ipt.value+=number;
    
 }
 else{
     alert("more than 8 digits")
 }
}

function remove(){
    ipt.value = " ";
}

function backspace(){
    ipt.value = ipt.value.slice(0,-1);
}

function toList(){
    numList.push(phoneNum);
} 

var x = document.cookie;
document.cookie = myname;