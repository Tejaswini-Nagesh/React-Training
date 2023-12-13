var props="foo";
var o={
    [props]:"hey",
    ['b'+'ar']:"there",
};
console.log(o.foo);
console.log(o.bar);
//function scoping
function testScoping(){
    let x=90;
    let y=100;
    if(y>50){
        let x=20;
        console.log(x);
    }
    console.log(x);

}
testScoping();