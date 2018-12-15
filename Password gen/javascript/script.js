var keyList = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
var tmpPassword = "";

function genPass(plength){
    tmpPassword = "";
    var i;
    for(i=0;i<plength;i++){
        tmpPassword += keyList.charAt(Math.floor(Math.random()*keyList.length));
    }
    return tmpPassword;
}

function populate(enterLenght){
    document.passGen.output.value = genPass(enterLenght);
}
