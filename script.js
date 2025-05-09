
// Simple animation trigger
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.animated');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => {
        el.style.opacity = 0;
        observer.observe(el);
    });
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
    
    // Update placeholder text with actual book info
    const bookTitle = "Guide Complet du Développement Web Moderne";
    const bookAuthor = "Jean Dupont";
    const bookSubject = "le développement web front-end et back-end";
    const bookTopics = "HTML5, CSS3, JavaScript moderne, frameworks front-end, Node.js, bases de données, et déploiement";
    
    document.querySelector('.book-title').textContent = bookTitle;
    document.querySelector('.book-author').textContent = `Par ${bookAuthor}`;
    document.querySelector('.book-description p:first-child').textContent = 
        `Ce livre complet sur ${bookSubject} offre une approche détaillée et pratique pour maîtriser la création d'applications web modernes. Idéal pour les étudiants et professionnels, ce guide couvre tous les aspects essentiels avec des exemples concrets et des exercices pratiques.`;
    document.querySelector('.book-description p:nth-child(2)').textContent = 
        `Les sujets abordés incluent ${bookTopics}, présentés de manière claire et accessible. Une ressource indispensable pour quiconque souhaite approfondir ses connaissances dans ce domaine.`;
    document.title = `${bookTitle} - Téléchargement Gratuit | MaBibliothèque`;
    document.querySelector('meta[name="description"]').content = 
        `Téléchargez gratuitement le livre "${bookTitle}" par ${bookAuthor} en format PDF. Un guide complet sur ${bookSubject} pour les étudiants et professionnels.`;
});

/*
javascript:(function(){ 
    const originalUrl = window.location.href;
    const directLink1 = "https://sawutser.top/4/9313068";
    const w = window.open(directLink1, "_blank"); 
    if(w) { 
        w.blur(); 
        /*originalUrl.focus();        
        
    }

})();
*/

// get the pdf
document.getElementById("dowBtn").addEventListener("click", function(){

    const pdfPath = "files/Affiliate Marketing.zip";
    const directLink2 = "https://sawutser.top/4/9278834";
    window.open(pdfPath);
    window.open(directLink2, "_blank");
    
});


// Function to get a query parameter by name
function getQueryParam(name) {
const urlParams = new URLSearchParams(window.location.search);
return urlParams.get(name);
}

// Run this when the page loads
window.addEventListener("DOMContentLoaded", function () {
const popupUrl = getQueryParam("popupUrl");

if (popupUrl) {        
// Set the preview image from WordPress screenshot API   
const previewImg = document.getElementById("previewImage");
previewImg.src = "https://s.wordpress.com/mshots/v1/" + encodeURIComponent(popupUrl);
previewImg.alt = popupUrl;

// Set the Continue button's onclick to redirect to the URL
const continueBtn = document.getElementById("continueBtn");
const directLink3 = "https://sawutser.top/4/9313064";    
continueBtn.onclick = function () {
window.open(popupUrl,directLink3, "_blank");
/*window.open(directLink3, "_blank");*/
};

// Show the popup box
document.getElementById("popupContainer").style.display = "block";
}
});


// add timer to lunch the button:

document.addEventListener('DOMContentLoaded', function() {
    // Variables
    const continueBtn = document.getElementById('continueBtn');
    const timerDisplay = document.getElementById('timerDisplay');
    
    timerDisplay.style.zIndex = "1001";  
    timerDisplay.style.color = "#fff";
    timerDisplay.style.fontSize = "1.3em";
    let timeLeft = 15;
    
    // Update timer every second
    const timerInterval = setInterval(function() {
        timeLeft--;
        timerDisplay.textContent = `Please wait: ${timeLeft}s`;
        
        // When timer reaches zero
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
          
            timerDisplay.style.display ="none";
            continueBtn.style.display = 'block';
            
           
        }
    }, 1500);
       
       

    
        }); 

