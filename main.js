saldo=Number(prompt("Ingrese el saldo que tiene"))


nombre=prompt("Ingresá tu usuario")
contraseña=prompt("ingresa tu contraseña")
localStorage.setItem("id",nombre)
localStorage.setItem("Contraseña",contraseña)

VerCompra=[];
localStorage.setItem("VerCompra",VerCompra)

let total=0


// while(true){
//     menu()
//     if (OpcionElegida==7 || OpcionElegida==6){
//         break;
//     }
// }


function menu (){
    console.log("Que desea comprar?");
    console.log("1:Trajes");
    console.log("2:Jeans");
    console.log("3:Camperas");
    console.log("4:Ver compra");
    console.log("5:Borrar articulo");
    console.log("6:Filtrar precios");
    console.log("7:Salir")
    console.log("-------------------------------");
    OpcionElegida=Number(prompt("Ingrese que desea comprar"));
    if (OpcionElegida==1){
        Mostrartrajes();
    }else if(OpcionElegida==2){
        MostrarJeans();
    }else if(OpcionElegida==3){
        MostrarCamperas();
    }else if(OpcionElegida==4){
        MostrarProductos();
        alert(`Usted ha comprado los siguientes articulos:[${VerCompra}]`)
    }else if(OpcionElegida==5){
        VerCompra.pop();
        alert("Se ha borrado el ultimo articulo exitosamente!")
    }else if(OpcionElegida==6){
        filtrar();
    }else if(OpcionElegida==7){
        esto=confirm("Desea cerrar sesion?")
        alert("Has salido de tu cuenta")
    }else{
        alert("Valor ingresado incorrecto")
    }



function Mostrartrajes (){
    console.log("Ingrese el tipo de traje que desea comprar");
    console.log("1:Traje `El chaque` $8.000");
    console.log(`2:Traje "Doble botón" $8.500 `);
    console.log (`3:Traje "Frac" $12.000 ` );
    console.log(`4:Traje "Cuello Mao" $14.000`);
    console.log (`5:Traje "Esmoquin" $16.000`);
    console.log (`6:Traje "ejecutivo" $25.000`);
    console.log("7:Volver al menú")
    console.log("-----------------------------------");
    producto= Number(prompt("Que producto desea comprar?"));
    if(producto==1 && saldo>=8000){
        CompraRealizada();
        saldo-=8000
        VerCompra.push(`Traje "El chaque"`);
        alert(`Se le ha debitado $8.000, a usted le quedan $${saldo} en su cuenta`);
    }else if(producto==2 && saldo>=8500){
        CompraRealizada();
        saldo-=8500
        VerCompra.push(`Traje "Doble botón"`);
        alert(`Se le ha debitado $8.500, a usted le quedan $${saldo} en su cuenta`);
    }else if(producto==3 && saldo>=12000){
        CompraRealizada();
        saldo-=12000
        VerCompra.push(`Traje "Frac"`);
        alert(`Se le ha debitado $12.000, a usted le quedan $${saldo} en su cuenta`);
    }else if(producto==4 && saldo>=14000){
        CompraRealizada();
        saldo-=14000
        VerCompra.push(`Traje "Cuello Mao"`);
        alert(`Se le ha debitado $14.000, a usted le quedan $${saldo} en su cuenta`);
    }else if(producto==5 && saldo>=16000){
        CompraRealizada();
        saldo-=16000
        VerCompra.push(`Traje "Esmoquin"`)
        alert(`Se le ha debitado $16.000, a usted le quedan $${saldo} en su cuenta`);
    }else if(producto==6 && saldo>=25000){
        CompraRealizada();
        saldo-=25000
        VerCompra.push(`Traje "Ejecutivo"`)
        alert(`Se le ha debitado $25.000, a usted le quedan $${saldo} en su cuenta`);
    }else if(producto==7){
        menu();
    }else if(producto==String || producto>7){
        alert("Valor incorrecto");
        MostrarCamperas();
    }else{
        alert(`Saldo insuficiente, usted tiene $${saldo} en su cuenta`);
    }
    }




function MostrarJeans(){
    console.log("1:Jean Skinny $2.500");
    console.log("2:Jean slim fit $4.000");
    console.log("3:Jean bootcut $3.000");
    console.log("4:jean straight $2.800");
    console.log("5:Jean MOM $5.000");
    console.log("6:Volver al menu");
    console.log("---------------------------------------");
    producto=Number(prompt("Que producto desea comprar?"));
    if (producto==1 && saldo>=2500){
        CompraRealizada();
        saldo-=2500
        VerCompra.push(`Jean skinny`)
        alert(`Se le ha debitado $2.500, a usted le quedan $${saldo} en su cuenta`);
    }else if(producto==2 && saldo>=4000){
        CompraRealizada();
        saldo-=4000
        VerCompra.push(`Jean slim fit`)
        alert(`Se le ha debitado $4.000, a usted le quedan $${saldo} en su cuenta`);
    }else if (producto==3 && saldo>=3000){
        CompraRealizada();
        saldo-=3000
        VerCompra.push(`Jean bootcut`)
        alert(`Se le ha debitado $3.000, a usted le quedan $${saldo} en su cuenta`);
    }else if(producto==4 && saldo>=2800){
        CompraRealizada();
        saldo-=2800
        alert(`Se le ha debitado $2.800, a usted le quedan $${saldo} en su cuenta`);
        VerCompra.push(`Jean Straight`)
    }else if (producto==5 && saldo>=5000){
        CompraRealizada();
        saldo-=5000
        alert(`Se le ha debitado $5.000, a usted le quedan $${saldo} en su cuenta`);
        VerCompra.push(`Jean MOM`)
    }else if (producto==6){
        menu();
    }else if (producto==String || producto>6){
        alert("Valor incorrecto");
        MostrarJeans();
    }else{
        alert(`Saldo insuficiente, usted tiene $${saldo} en su cuenta`);
    }

}

function MostrarCamperas(){
    console.log("1:Campera de gabardina $30.000");
    console.log("2:Campera de cuero $35.000");
    console.log("3:volver al menu");
    console.log("--------------------------------");
    producto=Number(prompt("Que producto desea comprar?"));
    if (producto==1 && saldo>=30000){
        CompraRealizada();
        saldo-=30000
        alert(`Se le ha debitado $30.000, a usted le quedan $${saldo} en su cuenta`);
        VerCompra.push("Campera gabardina")
    }else if(producto==2 && saldo>=35000){
        CompraRealizada();
        saldo-=35000
        alert(`Se le ha debitado $35.000, a usted le quedan $${saldo} en su cuenta`);
        VerCompra.push("Campera de cuero")
    }else if (producto==3){
        menu()
    }else{
        alert(`Saldo insuficiente, usted tiene $${saldo} en su cuenta`);
    }
}

function CompraRealizada(){
    alert("La compra se ha realizado con exito")
}

}


function MostrarProductos(){
    for(let i=1;i<VerCompra.length;i+=1){
        alert("Producto numero "+i+" Comprado: "+ VerCompra[i])
    }

}



function filtrar(){
    const Lista=[
        {articulo:"Traje El chaque",precio:8000},
        {articulo:"Traje Doblo botón",precio:8500},
        {articulo:"Traje Frac",precio:12000},
        {articulo:"Traje Cuello Mao",precio:14000},
        {articulo:"Traje Esmoquin",precio:16000},
        {articulo:"Traje Ejecutivo",precio:25000},
        {articulo:"Jean skinny",precio:2500},
        {articulo:"Jean slim fit",precio:4000},
        {articulo:"Jean bootcut",precio:3000},
        {articulo:"Jean straight",precio:2800},
        {articulo:"Jean MOM",precio:5000},
        {articulo:"Campera de gabardina",precio:30000},
        {articulo:"Campera de cuero",precio:35000},
    ]

    MontoMax=Number(prompt("Ingrese el monto maximo que desea gastar"))
    resultado=Lista.filter (elemento=> elemento.precio<=MontoMax)
    console.log(resultado)
}



const ul=document.querySelector(`.lista`)

VerCompra.forEach (item=>{
    console.log(item)
    const li=document.createElement("li")
    li.textContent=item
    ul.appendChild(li)
})




function BotonComprartrajechaque(){
        alert("Traje chaque se ha agregado exitosamente al carrito de compras!!")
        VerCompra.push("Traje el chaque $8.000")
    }


// const comprartrajechaque=document.querySelector("#trajechaque");
// comprartrajechaque.addEventListener("click",BotonComprartrajechaque);

// const comprartrajedobleboton=document.querySelector("#dobleboton");
// comprartrajedobleboton.addEventListener("click",BotonComprar);

// const comprartrajefrac=document.querySelector("#trajefrac");
// comprartrajefrac.addEventListener("click",BotonComprar);

// const comprarcuellomao=document.querySelector("#cuellomao");
// comprarcuellomao.addEventListener("click",BotonComprar);

// const compraresmoquin=document.querySelector("#esmoquin");
// compraresmoquin.addEventListener("click",BotonComprar);

// const comprarejecutivo=document.querySelector("#ejecutivo");
// comprarejecutivo.addEventListener("click",BotonComprar);

// const comprarskinny=document.querySelector("#skinny");
// comprarskinny.addEventListener("click",BotonComprar);

// const comprarslimfit=document.querySelector("#slimfit");
// comprarslimfit.addEventListener("click",BotonComprar);

// const comprarbootcut=document.querySelector("#bootcut");
// comprarbootcut.addEventListener("click",BotonComprar);

// const comprarstraight=document.querySelector("#straight");
// comprarstraight.addEventListener("click",BotonComprar);

// const comprarmom=document.querySelector("#mom");
// comprarmom.addEventListener("click",BotonComprar)



const div=document.querySelector(".tarjeta")
const comprar=document.querySelector("#trajechaque");
const comprardobleboton=document.querySelector("#dobleboton");
const comprarfrac=document.querySelector("#trajefrac");
const comprarcuellomao=document.querySelector("#cuellomao");
const compraresmoquin=document.querySelector("#esmoquin");
const comprarejecutivo=document.querySelector("#ejecutivo");
const comprarskinny=document.querySelector("#skinny");
const comprarslimfit=document.querySelector(`#slimfit`);
const comprarbootcut=document.querySelector(`#bootcut`);
const comprarstraight=document.querySelector(`#straight`);
const comprarmom=document.querySelector(`#mom`);
const comprarCamperaGabardina=document.querySelector(`#CamperaGabardina`);
const comprarCamperaCuero=document.querySelector(`#CamperaCuero`);

let totalidad=document.querySelector(".montototal");





div.addEventListener("click",(e)=>{
    console.log(e.target)
})


comprar.addEventListener("click",()=>{
    console.log("Has comprado traje");
    VerCompra.push("traje $8000");
    localStorage.setItem("productos",VerCompra)
    saldo-=8000
    total+=8000
    totalidad.textContent=total

    alert("Has comprado traje por $8.000")
    alert(`Te quedan $ ${saldo} en tu cuenta`)
    

    const ul=document.querySelector(`.lista`)
    let li=document.createElement(`li`)

    window.addEventListener('DOMContentLoaded', (event) => {
        for(let elementos of VerCompra){
            li.textContent=elementos
            ul.appendChild(li)
        }
    });


    for(let elementos of VerCompra){
        li.textContent=elementos
        ul.appendChild(li)
    }
        
    });


comprardobleboton.addEventListener("click",()=>{
    console.log("compra traje doble boton")
    VerCompra.push("Traje Doble boton $8500")
    saldo-=8500
    total+=8500
    totalidad.textContent=total
    
    alert("Has comprado traje doble boton por $8500")
    alert(`Te quedan $ ${saldo} en tu cuenta`)
    const ul=document.querySelector(`.lista`)
    let li=document.createElement(`li`)

    for(let elementos of VerCompra){
        li.textContent=elementos
        ul.appendChild(li)
    }
});


comprarfrac.addEventListener("click",()=>{
    console.log("compra traje frac")
    VerCompra.push("Traje frac $12.000")
    saldo-=12000
    total+=12000
    totalidad.textContent=total
    
    alert("Has comprado traje doble boton por $12.000")
    alert(`Te quedan $ ${saldo} en tu cuenta`)
    const ul=document.querySelector(`.lista`)
    let li=document.createElement(`li`)

    for(let elementos of VerCompra){
        li.textContent=elementos
        ul.appendChild(li)
    }
});

comprarcuellomao.addEventListener("click",()=>{

    console.log("compra traje cuello mao")
    VerCompra.push("Traje Cuello mao $14.000")
    saldo-=14000
    total+=14000
    totalidad.textContent=total
    
    alert("Has comprado traje doble boton por $14.000")
    alert(`Te quedan $ ${saldo} en tu cuenta`)
    const ul=document.querySelector(`.lista`)
    let li=document.createElement(`li`)

    for(let elementos of VerCompra){
        li.textContent=elementos
        ul.appendChild(li)
    }

});

compraresmoquin.addEventListener("click",()=>{
    console.log("compra traje Esmoquin")
    VerCompra.push("Traje Esmoquin $16.000")
    saldo-=16000
    total+=16000
    totalidad.textContent=total
    
    alert("Has comprado traje doble boton por $16.000")
    alert(`Te quedan $ ${saldo} en tu cuenta`)
    const ul=document.querySelector(`.lista`)
    let li=document.createElement(`li`)

    for(let elementos of VerCompra){
        li.textContent=elementos
        ul.appendChild(li)
    }

});

comprarejecutivo.addEventListener("click",()=>{
    console.log("compra traje Ejecutivo")
    VerCompra.push("Traje Ejecutivo $25.000")
    saldo-=25000
    total+=25000
    totalidad.textContent=total
    
    alert("Has comprado traje doble boton por $25.000")
    alert(`Te quedan $ ${saldo} en tu cuenta`)
    const ul=document.querySelector(`.lista`)
    let li=document.createElement(`li`)

    for(let elementos of VerCompra){
        li.textContent=elementos
        ul.appendChild(li)
    }

});

comprarskinny.addEventListener("click",()=>{
    console.log("compra pantalon skinny")
    VerCompra.push("Pantalon Skinny $2.500")
    saldo-=2500
    total+=2500
    totalidad.textContent=total
    
    alert("Has comprado Pantalon Skinny por $2.500")
    alert(`Te quedan $ ${saldo} en tu cuenta`)
    const ul=document.querySelector(`.lista`)
    let li=document.createElement(`li`)

    for(let elementos of VerCompra){
        li.textContent=elementos
        ul.appendChild(li)
    }

});

comprarslimfit.addEventListener("click",()=>{
    console.log("compra pantalon Slim Fit")
    VerCompra.push("Pantalon Slim Fit $4.000")
    saldo-=4000
    total+=4000
    totalidad.textContent=total
    
    alert("Has comprado Pantalon Slim Fit por $4.000")
    alert(`Te quedan $ ${saldo} en tu cuenta`)
    const ul=document.querySelector(`.lista`)
    let li=document.createElement(`li`)

    for(let elementos of VerCompra){
        li.textContent=elementos
        ul.appendChild(li)
    }

});

comprarbootcut.addEventListener("click",()=>{
    console.log("compra pantalon BootCut")
    VerCompra.push("Pantalon BootCut $3000")
    saldo-=3000
    total+=3000
    totalidad.textContent=total
    
    alert("Has comprado Pantalon BootCut por $3.000")
    alert(`Te quedan $ ${saldo} en tu cuenta`)
    const ul=document.querySelector(`.lista`)
    let li=document.createElement(`li`)

    for(let elementos of VerCompra){
        li.textContent=elementos
        ul.appendChild(li)
    }
});

comprarstraight.addEventListener("click",()=>{
    console.log("compra pantalon Straight")
    VerCompra.push("Pantalon Straight $2.800")
    saldo-=2800
    total+=2800
    totalidad.textContent=total
    
    alert("Has comprado Pantalon Straight por $2.800")
    alert(`Te quedan $ ${saldo} en tu cuenta`)
    const ul=document.querySelector(`.lista`)
    let li=document.createElement(`li`)

    for(let elementos of VerCompra){
        li.textContent=elementos
        ul.appendChild(li)
    }
});
comprarmom.addEventListener("click",()=>{
    console.log("compra pantalon MOM")
    VerCompra.push("Pantalon MOM $5.000")
    saldo-=2500
    total+=2500
    totalidad.textContent=total
    
    alert("Has comprado Pantalon MOM por $5.000")
    alert(`Te quedan $ ${saldo} en tu cuenta`)
    const ul=document.querySelector(`.lista`)
    let li=document.createElement(`li`)

    for(let elementos of VerCompra){
        li.textContent=elementos
        ul.appendChild(li)
    }
});
comprarCamperaGabardina.addEventListener("click",()=>{
    console.log("compra Campera de gabardina")
    VerCompra.push("Campera de gabardina $30.000")
    saldo-=30000
    total+=30000
    totalidad.textContent=total
    
    alert("Has comprado Campera de gabardina por $30.000")
    alert(`Te quedan $ ${saldo} en tu cuenta`)
    const ul=document.querySelector(`.lista`)
    let li=document.createElement(`li`)

    for(let elementos of VerCompra){
        li.textContent=elementos
        ul.appendChild(li)
    }
});
comprarCamperaCuero.addEventListener("click",()=>{
    console.log("compra Campera de cuero")
    VerCompra.push("Campera de cuero $35.000")
    saldo-=35000
    total+=35000
    totalidad.textContent=total
    
    alert("Has comprado Campera de cuero por $35.000")
    alert(`Te quedan $ ${saldo} en tu cuenta`)
    const ul=document.querySelector(`.lista`)
    let li=document.createElement(`li`)

    for(let elementos of VerCompra){
        li.textContent=elementos
        ul.appendChild(li)
    }
});



const confirmacompra=document.querySelector("#ConfirmarCompra");

confirmacompra.addEventListener("click",()=>{
    const sesion=confirm("Usted inicio sesion con su cuenta? ")
    const plata=confirm(`Cuenta con $${total} para abonar la compra?`)
    alert(sesion ? plata ? `La compra se ha realizado con exito`:`Usted no cuenta con el dinero, no se ha podido realizar la compra`:`Usted tiene que iniciar sesion para realizar la compra!`)
})


























































