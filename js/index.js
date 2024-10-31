function overlay(){
    const arr = ["","magna.html", "lorem.html", "tempus.html", "venenatis.html", "feugiat.html"]
    const arr2 = ["magna", "lorem", "tempus", "venenatis", "feugiat"]
    for(i = 0; i < arr.length; i++){
        for(j = 0; j < i; j++){
            const overlay = document.createRange().createContextualFragment(`
                
            <div class="grid-box grid-box-${i}">
                <h4>${arr2[j]}</h4>
                <div class="overlay overlay-${i}">
                    <p>Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod sit amet nisi euismod sed cursus arcu
                        elementum ipsum arcu vivamus quis venenatis orci lorem ipsum et magna feugiat veroeros aliquam.</p>
                    <a href="${arr[i]}" class="btn">learn more</a>
                </div>
            </div>
        
                `)
                const grid_box = document.querySelector('.grid');
                grid_box.append(overlay)
        }
    }
}

const btn_validar = document.getElementById('btn-validar').onclick = (e) => {
e.preventDefault()
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const mensaje = document.getElementById('mensaje');
const arr = [nombre, email, mensaje];
const messageArr = ["Nombre", "Email", "Mensaje"];
for(i = 0; i < arr.length; i++){
    if(arr[i].value == ""){
        swal({
            title: `El campo ${messageArr[i]} no puede estar vacío`,
            icon: "error",
             })
             return false;
    }
}
const emailValido = (email) => {
return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)
}
if(!emailValido(email)){
    swal({
        title: `El campo ${messageArr[1]} no tiene el formato correcto`,
        icon: "error",
         })
         return false;
}
swal({
    title: `Datos enviados satisfactoriamente`,
    icon: "success",
     })
     nombre.value = "";
     email.value = "";
     mensaje.value = "";
     return true;
}

overlay()