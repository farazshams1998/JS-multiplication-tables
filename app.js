
function table() {
    var range=prompt("enter your number")
    for (var i=1;i<=10;i++) {
        var res = range*i;
       // console.log('${number} * ${i} = ${res}');
       //document.write('${range} x ${i} = ${res}');
        document.write(res +"<br>")
    }
}
table(4);