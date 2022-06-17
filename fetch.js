const boton=document.querySelector(`#bton`);
const contenido=document.querySelector(`#contenido`)




const mostrarHTML=(empleados)=>{
    let html="";

    empleados.forEach((productos) => {
        const {id,Empresa,Zona,telefono} = productos

        html+=`
        <p>id: ${id} </p>
        <p>Empresa: ${Empresa} </p>
        <p>Zona: ${Zona} </p>
        <p>Telefono: ${telefono} </p>
        <hr>
        ` 
        
    })
    contenido.innerHTML=html


}



const ObtenerDatos= () => {
    fetch("data/datos.json")
    .then((respuesta)=>{
        return respuesta.json()
    })
    .then((datos)=>{
        mostrarHTML(datos)
    })
    .catch((err)=>{
        console.log(err)
    })

}



boton.addEventListener("click",ObtenerDatos)