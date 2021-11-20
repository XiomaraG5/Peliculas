
const nombre = document.getElementById(`inputName`).value;
const apellido = document.getElementById(`inputApellido`).value;
const telefono = Number( document.getElementById(`inputTel`).value);
const direccion = document.getElementById(`inputDireccion`).value;
const btn = document.getElementById(`btn`);
btn.addEventListener("click",()=>{
    if(nombre==""||apellido==""||isNaN(telefono)||telefono==""||direccion==""){
        alert("Asegurate de ingresar correctamente los datos")
    }else{
        localStorage.setItem("Nombre",nombre);
        localStorage.setItem("Apellido",apellido);
        localStorage.setItem("Telefono",telefono);
        localStorage.setItem("Direccion",direccion);
    }

});
