//========================================== Control for the Mobile view Navigation starts here ===============================================================

// assigning values to constants
const mobileMenu = document.getElementById("mobile-menu");
const menuCloseBtn = document.getElementById("close-mobile-menu");
const menuOpenBtn = document.getElementById("mobile-nav-link");

// This will open the mobile menu
menuOpenBtn.addEventListener("click",function(){
mobileMenu.classList.toggle("overlay");
});

// This will close the mobile menu
menuCloseBtn.addEventListener("click", function(){
    mobileMenu.classList.remove("overlay");
});

// this will increase the scale of the mobile hamburger menu at mouse hover
menuOpenBtn.addEventListener("mouseover", function(){
    menuOpenBtn.style.transform = "scale(1.4)";
});

// this will return the scale of the mobile hamburger menu to normal state at mouse out
menuOpenBtn.addEventListener("mouseout", function(){
    menuOpenBtn.style.transform = "scale(1)";
});

// this will increase the scale of the mobile hamburger close mennu button at mouse hover
menuCloseBtn.addEventListener("mouseover", function(){
    menuCloseBtn.style.transform = "scale(1.4)";
});

// this will return the scale of the mobile hamburger close mennu button at mouse out
menuCloseBtn.addEventListener("mouseout", function(){
    menuCloseBtn.style.transform = "scale(1)";
});

//================================================= Control for the Mobile view Navigation Ends here ========================================================





//===================================================== Control for the omos and Cursos section starts here ==========================================================

// This will toogle the about us image at mouse over and mouse out

// assigning values to constants
const hoverIn = document.getElementById("somos-img");

// On mouse over
hoverIn.addEventListener("mouseover", function(){
        hoverIn.style.transform = "rotateY(360deg)";
        hoverIn.style.transition = "1s all ease-in-out";
        hoverIn.src="img/aboutus.png";
    })
    
// On moouse out
hoverIn.addEventListener("mouseout", function(){
        hoverIn.style.transition = "1s all ease-in-out";
        hoverIn.style.transform = "rotateY(-360deg)";
        hoverIn.src="img/somos.png";
    })


// This will toggle the cursos image on mouse over and mouse out
{
    // assigning values to constants
    const hoverInAi = document.getElementById("ai");
    const hoverInCyberSecur = document.getElementById("security");
    const hoverInFront = document.getElementById("frontend");


    // Artificial inteligence section On mouse over
    hoverInAi.addEventListener("mouseover", function(){
        hoverInAi.style.transition = "0.5s all ease-in-out";
        hoverInAi.style.transform = "rotate(360deg)";
        hoverInAi.style.borderRadius = "100%";
        hoverInAi.src="img/ai2.png";
    });

    // frontend section on mouse over
    hoverInFront.addEventListener("mouseover", function(){
        hoverInFront.style.transition = "0.5s all ease-in-out";
        hoverInFront.style.transform = "rotate(360deg)";
        hoverInFront.style.borderRadius = "100%";
        hoverInFront.src="img/frontend2.png";
    });

    
    // cybersecurity section on mouse over
    hoverInCyberSecur.addEventListener("mouseover", function(){
        hoverInCyberSecur.style.transition = "0.5s all ease-in-out";
        hoverInCyberSecur.style.transform = "rotate(360deg)";
        hoverInCyberSecur.style.borderRadius = "100%";
        hoverInCyberSecur.src="img/seg.png";
    }); 

    
    // On moouse out

    // Artificial Inteligence section on mouse out
    hoverInAi.addEventListener("mouseout", function(){
        hoverInAi.style.transition = "0.5s all ease-in-out";
        hoverInAi.style.transform = "rotate(-360deg)";
        hoverInAi.src="img/ai.png";
        hoverInAi.style.borderRadius = "0px";        
    });


    
    // Frontend section on mouse out
    hoverInFront.addEventListener("mouseout", function(){
        hoverInFront.style.transition = "0.5s all ease-in-out";
        hoverInFront.style.transform = "rotate(-360deg)";
        hoverInFront.src="img/front.png";
        hoverInFront.style.borderRadius = "0px";        
    });

    
    // Cyber Security section on mouse out
    hoverInCyberSecur.addEventListener("mouseout", function(){
        hoverInCyberSecur.style.transition = "0.5s all ease-in-out";
        hoverInCyberSecur.style.transform = "rotate(-360deg)";
        hoverInCyberSecur.src="img/seguranca.png";
        hoverInCyberSecur.style.borderRadius = "0px";        
    });   
}

//===================================================== Control for the Somos and Cursos section Ends here ==========================================================


// ========================================================  control for the plano section starts here ================================================

// Assigning value to constant

// compraBasic
const compraBasic =  document.getElementById("basic");
const compraBtn = document.getElementById("compra-basic-btn")


// compraPremium
const compraPremium = document.getElementById("premium");
const compraPremiumBtn = document.getElementById("compra-premium-btn");

// compraUltra
const compraUltra = document.getElementById("ultra");

    // On mouse over
    // basic
    compraBtn.addEventListener("mouseover", function(){
        compraBasic.style.backgroundColor = "var(--amarelho)";
    });


    // premium
    compraPremiumBtn.addEventListener("mouseover", function(){
        compraPremium.style.backgroundColor = "var(--azul)"
    });
    
    // On moouse out
    compraBtn.addEventListener("mouseout", function(){
        compraBasic.style.backgroundColor = "var(--rosa-claro)"    
    });
    
    compraPremiumBtn.addEventListener("mouseout", function(){
        compraPremium.style.backgroundColor = "var(--rosa-claro)"
    });


// ========================================================  control for the plano section ends here ================================================


/*
{
    const hoverIn = document.getElementById("ai");
    // On mouse over
    hoverIn.addEventListener("mouseover", function(){
        hoverIn.src="img/ai2.png";
    })
    
    // On moouse out
    hoverIn.addEventListener("mouseout", function(){
        hoverIn.src="img/ai.png";    
    
    })    
    
}
*/