/* ============================================================
   WELCOME SCREEN
============================================================ */
const welcomeScreen = document.getElementById("welcome-screen");
const enterBtn = document.getElementById("enter-btn");

enterBtn.addEventListener("click", () => {
    welcomeScreen.classList.add("hide");

    // hilangin setelah animasi selesai
    setTimeout(() => {
        welcomeScreen.style.display = "none";
    }, 900);
});

/* ============================================================
   SMOOTH NAVIGATION
============================================================ */
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("open");
});

// Tutup menu kalau klik salah satu link
document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        hamburger.classList.remove("open");
    });
});

/* ============================================================================
   REVEAL ANIMATION
============================================================================ */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach(el => {
        let top = el.getBoundingClientRect().top;
        let height = window.innerHeight;

        if (top < height - 120) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* ============================================================
   GALLERY LIGHTBOX
============================================================ */
const galleryImages = document.querySelectorAll(".gallery-img");

let lightbox = null;

function createLightbox() {
    lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    lightbox.style.position = "fixed";
    lightbox.style.inset = "0";
    lightbox.style.background = "rgba(0,0,0,0.85)";
    lightbox.style.display = "flex";
    lightbox.style.justifyContent = "center";
    lightbox.style.alignItems = "center";
    lightbox.style.zIndex = "3000";
    lightbox.style.cursor = "zoom-out";

    const img = document.createElement("img");
    img.id = "lightbox-img";
    img.style.maxWidth = "80%";
    img.style.maxHeight = "80%";
    img.style.borderRadius = "14px";
    img.style.boxShadow = "0 0 20px rgba(255,255,255,0.4)";

    lightbox.appendChild(img);
    document.body.appendChild(lightbox);

    lightbox.addEventListener("click", () => {
        lightbox.remove();
    });
}

galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        if (!lightbox) createLightbox();
        document.getElementById("lightbox-img").src = img.src;
    });
});
