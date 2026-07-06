/*=========================================
        Dr.FretCraft - script.js
=========================================*/

// ===============================
// Apparition des cartes
// ===============================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

cards.forEach(card=>{

    card.classList.add("hidden");

    observer.observe(card);

});

// ===============================
// Bouton Copier
// ===============================

function copier(text){

    navigator.clipboard.writeText(text);

    alert("Copié : " + text);

}

// ===============================
// Animation du Header
// ===============================

const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 60){

        header.style.background = "rgba(0,0,0,.80)";
        header.style.boxShadow = "0 0 20px rgba(0,255,120,.25)";

    }else{

        header.style.background = "rgba(0,0,0,.45)";
        header.style.boxShadow = "none";

    }

});

// ===============================
// Effet sur le bouton principal
// ===============================

const btn = document.querySelector(".btn");

if(btn){

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

}

// ===============================
// Animation des étoiles
// ===============================

const stars = document.createElement("div");

stars.className = "stars";

document.body.appendChild(stars);

for(let i=0;i<120;i++){

    const star = document.createElement("span");

    star.style.left = Math.random()*100+"vw";

    star.style.top = Math.random()*100+"vh";

    star.style.animationDelay = Math.random()*8+"s";

    star.style.animationDuration = (4+Math.random()*6)+"s";

    stars.appendChild(star);

}

// ===============================
// Copier IP Java
// ===============================

const javaBtn = document.getElementById("copyJava");

if(javaBtn){

javaBtn.onclick=()=>{

copier("play.drfretcraft.fr");

}

}

// ===============================
// Copier IP Bedrock
// ===============================

const bedrockBtn = document.getElementById("copyBedrock");

if(bedrockBtn){

bedrockBtn.onclick=()=>{

copier("play.drfretcraft.fr:19132");

}

}

// ===============================
// Message de bienvenue
// ===============================

console.log("Bienvenue sur Dr.FretCraft !");
