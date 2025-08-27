
//1. CREA UN ARRAY PARA ALMACENAR LOS NOMBRE

let amigos = []; // lista para almacenar los amigos

//2. IMPLEMENTA UNA FUNCIÓN PARA AGREGAR AMIGOS AL ARRAY

function agregarAmigo() {                                       // Define el inicio de la función para agregar un amigo
    let amigoInput = document.getElementById('amigo');          // Capturar el valor del campo de entrada
    let nombreAmigo = amigoInput.value;                          // Obtiene el texto del input
    if (nombreAmigo === '') {                                  // Comprueba si la variable 'nombreAmigo' está vacía
        alert('Por favor, inserte un nombre.');             // Si está vacía, muestra una alerta
        return;                                         // Detiene la ejecución de la función aquí, impidiendo que se agregue un nombre vacío
    }
    // continua si no está vacía

    amigos.push(nombreAmigo);                             // inserta el nombre al final de la lista     

//3. ACTUALIZA LA LISTA EN EL HTML

    let listaAmigos = document.getElementById("listaAmigos");   //Obtiene la lista ul del HTML

    listaAmigos.innerHTML = "";                                  // Limpia la lista
   
    for (let i = 0; i < amigos.length; i++) {                     // Recorre el array de amigos       
        let nuevoAmigoItem = document.createElement("li");        // Crea un nuevo elemento li para cada amigo
        nuevoAmigoItem.textContent = amigos[i];                   // Asigna el nombre del amigo al contenido del li
        nuevoAmigoItem.classList.add("info-text");              // le asigno la clase que está en el html al li creado
        listaAmigos.appendChild(nuevoAmigoItem);               // Agrega cada amigo a la lista en el HTML (como li hijo de ul)
    }

    amigoInput.value = "";                             // Limpia el campo input
}


//SORTEO

    // 1. Escribe una función que seleccione de manera aleatoria 
    //    uno de los nombres almacenados en el array amigos.

function sortearAmigo() {

    // 2. Validar que haya amigos disponibles
    if (amigos.length === 0) { // Comprobamos si el array está vacío
        alert('Agrega al menos un amigo para poder sortear.');
        return;
    }
    // continua si es falso

    // 3. Generar un índice aleatorio
        // a. Math.random() genera un número entre 0 y 1.
        // b. Multiplicamos por la longitud del array (lista) para incluir en el sorteo hasta el último elemento de la lista.
        // c. Math.floor() redondea hacia abajo para obtener un índice entero válido.
        //d. Obtenermos un número aleatorio entre 0 y la longitud del array menos 1.

    let numeroAleatorio = Math.floor(Math.random() * amigos.length);

    // 4. Obtenemos el nombre sorteado
    let amigoSorteado = amigos[numeroAleatorio];

 // 5. Mostrar el resultado como un <li> dentro del <ul id="resultado">
    let ulResultado = document.getElementById('resultado');    // Obtiene el elemento ul del HTML donde se mostrará el resultado
    
    let nuevoElementoLi = document.createElement("li");      // Crea un nuevo elemento li para mostrar el resultado del sorteo
    nuevoElementoLi.textContent = `El amigo sorteado es: ${amigoSorteado}`;// Asigna el texto con el nombre sorteado al contenido del li                                       
    ulResultado.appendChild(nuevoElementoLi);           // Agrega la li al ul en el HTML
}


