document.getElementById("gift-button").onclick = function() {
    document.getElementById("gift-button").style.display = "none"; // Oculta el botón
    const flowerContainer = document.getElementById("flower-container");
    flowerContainer.classList.remove("hidden");
    
    const flower = document.getElementById("flower");
    flower.classList.remove("hidden"); // Muestra la flor

    // Anima la flor y lanza esporas de emojis
    setTimeout(() => {
        setInterval(() => {
            const emoji = Math.random() < 0.5 ? "❤️" : "😍"; // Emojis relacionados con el amor
            const heart = document.createElement("div");
            heart.className = "heart";
            heart.innerHTML = emoji;
            heart.style.position = "absolute";
            heart.style.left = Math.random() * 100 + "vw"; // Coloca los emojis aleatoriamente
            heart.style.top = "100vh"; // Comienza desde abajo
            flowerContainer.appendChild(heart);
            
            // Anima el emoji
            setTimeout(() => {
                heart.style.transition = "top 2s";
                heart.style.top = Math.random() * 50 + "vh"; // Sube hacia arriba
            }, 10);

            // Elimina el emoji después de la animación
            setTimeout(() => {
                flowerContainer.removeChild(heart);
            }, 2000);
        }, 1000);
    }, 2000); // Espera 2 segundos para que la flor crezca antes de lanzar esporas
};

