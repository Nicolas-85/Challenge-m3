const abrirSlider = document.querySelector(".toogleBtnOrdenar");
const abrirSliderFiltrar = document.querySelector(".toogleBtnFiltrar")
const cerrarSlider = document.querySelector(".cruzCerrar");
const cerrarSliderFiltrar = document.querySelector(".cruzCerrarFiltrar")
const colores = document.getElementById("colapsColores");
const talles = document.getElementById("colapsTalles");
const precios = document.getElementById("colapsPrecios");
const colapsar1 = document.querySelector(".dropdown1");
const colapsar2 = document.querySelector(".dropdown2");
const colapsar3 = document.querySelector(".dropdown3");
const ordenDesk = document.getElementById("deplegarOrdDesk");
const abrirOrdDesk = document.querySelector(".ulOrdDesktop")
// console.log(ordenDesk);
// console.log(colapsar); //----------------SEGUIR DESDE ACÁ INTENTANDO SELECCIONAR EL ELEMENTO DROPDOWN....--------------
console.log(colores);
// console.log(abrirSlider);
// console.log(cerrarSlider);

abrirSlider.addEventListener('click', function() {
    document.getElementById('sidebarIzq').classList.toggle('active');
});

abrirSliderFiltrar.addEventListener('click', function() {
    document.getElementById('sidebarDer').classList.toggle('active');
});

cerrarSlider.addEventListener('click', function() {
    document.getElementById('sidebarIzq').classList.remove('active');
});

cerrarSliderFiltrar.addEventListener('click', function() {
    document.getElementById('sidebarDer').classList.remove('active');
});

colapsar1.addEventListener('click', function() {
    colores.classList.toggle("desplegar");
})

colapsar2.addEventListener('click', function() {
    talles.classList.toggle("desplegar");
})

colapsar3.addEventListener('click', function() {
    precios.classList.toggle("desplegar");
})

ordenDesk.addEventListener('click', function () {
    abrirOrdDesk.classList.toggle("abrir");
    
})



function getProducts() {
    fetch('http://localhost:5000/products').then(r => r.json()).then(data => {
        let ropaAzul = [];
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            if (element.color === "Cinza" ) {
                ropaAzul.push(element);
            }
        } 
        console.log(data);
    });   
}
getProducts();

 async function postProduct() {
    const image = new File();
    let ropa = {}
        
        let response = await fetch('http://localhost:5000/products', {
            method: 'POST',
            body: JSON.stringify(ropa)
          });
          let result = await response.json();
          console.log(result);
}

postProduct();