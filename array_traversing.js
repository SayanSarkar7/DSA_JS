
let data=[21,6,80,9,1,98,77,63,41,3];
function getElement(){
    let el=document.getElementById('element').value;
    console.log(typeof (parseInt(el)));
    
    if(el<data.length && typeof (parseInt(el))==="number"){
        alert(data[el]);
    }else{
        alert("Please enter valid input");
    }
}
