// Constructor para seguro

function Seguro(marca, anio, tipo) {
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
}

Seguro.prototype.cotizarSeguro = function() {
   /*
        1 = americano 1.15
        2 = asiatico 1.05
        3 = europeo 1.35
   */
  let cantidad;
  const base = 2000;

  switch(this.marca){
      case '1':
          cantidad = base * 1.15;
          break;
      case '2':
          cantidad = base * 1.05;
          break;
      case '3':
          cantidad = base * 1.35;
          break;
  }
// Leer el anio
const diferencia = new Date().getFullYear() - this.anio;
// cada anio de diferencia hay que reducir 3% de valor
cantidad -= ((diferencia * 3) * cantidad) / 100;

/*
Si el seguro es basico se multiplica por 30% mas
Si el seguro es completo se multiplica por 50% mas
*/

if(this.tipo === 'basico') {
    cantidad *= 1.30;
} else {
    cantidad *= 1.50;
}


console.log(cantidad);

}


// Todo lo que semuestra 
function Interfaz() {}

// Mensaje que se imprime en el HTML
Interfaz.prototype.mostrarError = function(mensaje, tipo) {
    const div = document.createElement('div');

    if(tipo === 'error') {
        div.classList.add('mensaje', 'error');
    } else {
        div.classList.add('mensaje', 'correcto');
    }
    div.innerHTML = `${mensaje}`;
    formulario.insertBefore(div, document.querySelector('form-seguro')
    );
    setTimeout(function() {
        document.querySelector('.mensaje').remove();
    }, 3000 );

}

// EventListener
const formulario = document.getElementById('cotizar-seguro');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();
   
    // Leer la marca
    const marca = document.getElementById('marca');
    const marcaSeleccionada = marca.options[marca.selectedIndex]
    .value;
   // Leer el anio
    const anio = document.getElementById('anio');
    const anioSeleccionada = anio.options[anio.selectedIndex]
    .value;
    // Leer el tipo (buton)
    const tipo = document.querySelector('input[name="tipo"]:checked')
    .value;
    
    // crear instancia de interfaz
    const interfaz = new Interfaz();

    // revision que los campos noestan vacios 
    if(marcaSeleccionada === '' || anioSeleccionada === '' || tipo 
    === '') {
        
        // interfaz imprimiendo un error 
        interfaz.mostrarError('Flatan datos, revisar el formulario y prueba de nuevo', 'error');


    } else {
        // Istanciar seguro y mostrar interfaz
        const seguro = new Seguro(marcaSeleccionada,anioSeleccionada, tipo);
        const cantidad = seguro.cotizarSeguro();

    }
    

});











const  max = new Date().getFullYear(),
       min = max - 20

const selectAnios = document.getElementById('anio');
for(let i = max; i >= min; i-- ) {
     let option = document.createElement('option');
     option.value = i;
     option.innerHTML = i;
     selectAnios.appendChild(option);
}