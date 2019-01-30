console.log("si funciono cainal");
let mostrar = document.getElementById("mostrar");
function myfunction(a){
    let b=2;
    if (a==3){
        console.log(b+a);
        let c=b+a;
        mostrar.innerHTML= c;
    }
}

myfunction(3);