// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Lista para almacenar los nombres
let amigos = [];

//Lógica para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    
    // Verificar si el nombre ya ha sido añadido
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido añadido.");
        return;
    }
    
    // Limpiar la caja
    amigos.push(nombre);
    actualizarLista();
    input.value = ""; 
}

// Limpiar la lista antes de actualizarla
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 
    
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Lógica para sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista está vacía XD. Agrega nombres antes de sortear.");
        return;
    }else if (amigos.length === 1) {
        alert("Solo hay un amigo en la lista. Agrega más amigos antes de sortear.");
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 ${amigoSorteado} ha sido sorteado! 🎉</li>`;
}