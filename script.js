

//menu hamburger
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".main-menu");

    menuToggle.addEventListener("click", function() {
        menu.classList.toggle("active"); // Affiche/Cache le menu
    });
});



//Pour rediriger vers les pages
document.addEventListener("DOMContentLoaded", function () {
    // Récupère tous les boutons de navigation
    const buttons = document.querySelectorAll(".top-menu, #commander, .button-menu");

    // Ajoute un événement de clic à chaque bouton
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const targetPage = this.getAttribute("data-target");
            window.location.href = targetPage; // Redirection vers la page cible
        });
    });
});

//Pour envoyer un mail

document.querySelector(".form").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    let form = this;
    let formData = new FormData(form);

    fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" }
    })
    .then(response => response.json())
    .then(data => {
        // Cacher le formulaire
        form.style.display = "none";

        //  Afficher le message de confirmation
        document.getElementById("message-retour").style.display = "block";

        // Attendre 20 secondes avant de remettre le formulaire
        setTimeout(() => {
            // Masquer le message de retour
            document.getElementById("message-retour").style.display = "none";
        
            // Réafficher le formulaire
            document.getElementById('contact-form').style.display = 'grid';
        }, 20000);  // 20 000 millisecondes = 20 secondes

    })
    .catch(error => {
        alert("Erreur lors de l'envoi. Veuillez réessayer.");
    });
});

/*
function handleSubmit(event) {
    event.preventDefault();
  
    // Masquer le formulaire
    document.getElementById('contact-form').style.display = 'none';
    
    // Afficher le message de retour
    const messageRetour = document.getElementById('message-retour');
    messageRetour.classList.remove('hidden');
    
    // Attendre 20 secondes avant de remettre le formulaire
    setTimeout(() => {
      // Masquer le message de retour
      messageRetour.classList.add('hidden');
      
      // Réafficher le formulaire
      document.getElementById('contact-form').style.display = 'grid';
    }, 20000);  // 20 000 millisecondes = 20 secondes
  }

/*
document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector(".form");
    let confirmationMessage = document.getElementById("message-retour");

    // Vérifier si le formulaire a déjà été soumis
    if (localStorage.getItem("formSubmitted") === "true") {
        form.style.display = "none";
        confirmationMessage.style.display = "block";
    } else {
        form.style.display = "grid";
        confirmationMessage.style.display = "none";
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Empêche le rechargement de la page

        let formData = new FormData(form);

        fetch(form.action, {
            method: "POST",
            body: formData,
            headers: { "Accept": "application/json" }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Erreur lors de l'envoi du formulaire");
            }
            return response.json();
        })
        .then(data => {
            // ✅ Cacher le formulaire
            form.style.display = "none";

            // ✅ Afficher le message de confirmation
            confirmationMessage.style.display = "block";

            // ✅ Sauvegarder l'état dans localStorage
            localStorage.setItem("formSubmitted", "true");

            // ✅ Réinitialiser le formulaire (optionnel)
            form.reset();
        })
        .catch(error => {
            alert("Erreur lors de l'envoi. Veuillez réessayer.");
            console.error(error);
        });
    });
});


//Pour choisir les differents parties du menu
/*
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".content");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            // Récupère l'ID cible
            const targetId = this.getAttribute("data-target");

            // Cache toutes les div
            contents.forEach(div => div.classList.remove("active"));

            // Affiche la div cible
            document.getElementById(targetId).classList.add("active");
        });
    });
});
*/