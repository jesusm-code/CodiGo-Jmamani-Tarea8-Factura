let InpCantidad = document.getElementById ("InpCantidad");
let InpDescripcion = document.getElementById ("InpDescripcion");
let InpUnitario = document.getElementById ("InpUnitario");
let InpTotal = document.getElementById ("InpTotal");
let btnAgregar = document.getElementById ("btnAgregar");
let listaElementos = document.getElementById("listaElementos");
let btnGuardar =document.getElementById("btnGuardar");
let elementos = [];


const insertarElemento = ()=>{
    listaElementos.innerText = "";
    elementos.forEach(t =>{
        let div = document.createElement("div");
        div.setAttribute("class", "lista__titulo");
        let label1 = document.createElement("label");
        label1.setAttribute("class", "lista_caja");
        label1.innerText = t.cantidad;
        let label2 = document.createElement("label");
        label2.setAttribute("class", "lista_caja2");
        label2.innerText = t.descripcion;
        let label3 = document.createElement("label");
        label3.setAttribute("class", "lista_caja");
        label3.innerText = t.pUnitario;
        let label4 = document.createElement("label");
        label4.setAttribute("class", "lista_caja");
        label4.innerText = t.pTotal;
        div.appendChild(label1);
        div.appendChild(label2);
        div.appendChild(label3);
        div.appendChild(label4);
        listaElementos.appendChild(div)

    })
}


btnAgregar.onclick = () => {
    let precioTotal = parseInt(InpCantidad.value) * parseInt(InpUnitario.value);
    console.log(precioTotal);
    let ObjElemento = {
        cantidad: InpCantidad.value,
        descripcion: InpDescripcion.value,
        pUnitario: InpUnitario.value,
        pTotal: precioTotal
    }
    elementos.push(ObjElemento);
    console.log(elementos);
    insertarElemento();
}

// btnGuardar.onsubmit = (e) => {
//     // inpedir  q la pagina se recarge o envie datos
//     e.preventDefault();
//     let color = inputColor.value;
//     let color = inputColor.value;
//     console.log(color);
//     localStorage.setItem("color", color);
//     body.style.backgroundColor = color;   
// }
