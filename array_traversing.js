
// let data=[21,6,80,9,1,98,77,63,41,3];
// function getElement(){
//     let el=document.getElementById('element').value;
//     console.log(typeof (parseInt(el)));
    
//     if(el<data.length && typeof (parseInt(el))==="number"){
//         alert(data[el]);
//     }else{
//         alert("Please enter valid input");
//     }
// }

// function x(){
//     for(var i=1;i<=5;i++){
//         function close(x){
//             setTimeout(function(){
//                 console.log(x);
//             },1000*x);
//         }
//         close(i);
//     }
//     console.log("Sya");
//   }
//   x();


// function outer(){
//     function inner(){
//         console.log('abc');
//     }
//     return inner;
// }
// outer()();

//callback function
// x can call function y at any time
function x(y){
    console.log('x');
    y();
}
x(function y(){
    console.log('y');
})
// o/p: x y


