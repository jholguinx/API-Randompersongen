// Aquí realizamos un la consulta de la promesa, esperando su respuesta asíncrona
const tarjeta = document.querySelector('.box');
const btn = document.querySelector('#random');


function renderizarDatosUsuario(data) {
    
        tarjeta.innerHTML += `<div class="tarjeta">
                                    <h4>${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}</h4>
                                    <img src="${data.results[0].picture.large}" alt="${data.results[0].name.first} " />
                                    <h4>${data.results[0].email}</h4>
                                </div>`;
}

btn.addEventListener('click', function(){
fetch('https://randomuser.me/api/')
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
        renderizarDatosUsuario(data);
    });
});




/* --------------------------- CONSIGNA 2 (extra) --------------------------- */
// Aqui pueden ir por el punto extra de utilizar el boton que se encuentra comentado en el HTML
// Pueden descomentar el código del index.html y usar ese boton para ejecutar un nuevo pedido a la API, sin necesidad de recargar la página.
// Es criterio del equipo QUÉ bloque del código debe contenerse dentro de una función para poder ser ejecutada cada vez que se escuche un click.