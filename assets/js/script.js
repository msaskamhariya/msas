document.addEventListener("DOMContentLoaded", () => {
    // Mobile menu toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            const icon = menuToggle.querySelector("i");
            if (navMenu.classList.contains("active")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-times");
            } else {
                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");
            }
        });
    }

    // Set active nav link based on current path
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll(".nav-link");

    // If we're at the root, treat it as index.html
    const isRoot = currentPath.endsWith("/") || currentPath === "";

    navLinks.forEach((link) => {
        const linkPath = link.getAttribute("href");
        if (
            currentPath.endsWith(linkPath) ||
            (isRoot && linkPath === "index.html")
        ) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    // Simple contact form submission (prevent default for demo if using formspree, let it submit naturally)
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", function (e) {
            // No custom logic needed if using formspree, it handles it
        });
    }

    // --- 99 Names of Allah Watermark Effect ---
    const allahNamesArabic = [
        "الرَّحْمَنُ",
        "الرَّحِيمُ",
        "الْمَلِكُ",
        "الْقُدُّوسُ",
        "السَّلَامُ",
        "الْمُؤْمِنُ",
        "الْمُهَيْمِنُ",
        "الْعَزِيزُ",
        "الْجَبَّارُ",
        "الْمُتَكَبِّرُ",
        "الْخَالِقُ",
        "الْبَارِئُ",
        "الْمُصَوِّرُ",
        "الْغَفَّارُ",
        "الْقَهَّارُ",
        "الْوَهَّابُ",
        "الرَّزَّاقُ",
        "الْفَتَّاحُ",
        "الْعَلِيمُ",
        "الْقَابِضُ",
        "الْبَاسِطُ",
        "الْخَافِضُ",
        "الرَّافِعُ",
        "الْمُعِزُّ",
        "الْمُذِلُّ",
        "السَّمِيعُ",
        "الْبَصِيرُ",
        "الْحَكَمُ",
        "الْعَدْلُ",
        "اللَّطِيفُ",
        "الْخَبِيرُ",
        "الْحَلِيمُ",
        "الْعَظِيمُ",
        "الْغَفُورُ",
        "الشَّكُورُ",
        "الْعَلِيُّ",
        "الْكَبِيرُ",
        "الْحَفِيظُ",
        "الْمُقِيتُ",
        "الْحَسِيبُ",
        "الْجَلِيلُ",
        "الْكَرِيمُ",
        "الرَّقِيبُ",
        "الْمُجِيبُ",
        "الْوَاسِعُ",
        "الْحَكِيمُ",
        "الْوَدُودُ",
        "الْمَجِيدُ",
        "الْبَاعِثُ",
        "الشَّهِيدُ",
        "الْحَقُّ",
        "الْوَكِيلُ",
        "الْقَوِيُّ",
        "الْمَتِينُ",
        "الْوَلِيُّ",
        "الْحَمِيدُ",
        "الْمُحْصِي",
        "الْمُبْدِئُ",
        "الْمُعِيدُ",
        "الْمُحْيِي",
        "الْمُمِيتُ",
        "الْحَيُّ",
        "الْقَيُّومُ",
        "الْوَاجِدُ",
        "الْمَاجِدُ",
        "الْوَاحِدُ",
        "الأَحَدُ",
        "الصَّمَدُ",
        "الْقَادِرُ",
        "الْمُقْتَدِرُ",
        "الْمُقَدِّمُ",
        "الْمُؤَخِّرُ",
        "الأَوَّلُ",
        "الآخِرُ",
        "الظَّاهِرُ",
        "الْبَاطِنُ",
        "الْوَالِي",
        "الْمُتَعَالِي",
        "الْبَرُّ",
        "التَّوَّابُ",
        "الْمُنْتَقِمُ",
        "الْعَفُوُّ",
        "الرَّءُوفُ",
        "مَالِكُ الْمُلْكِ",
        "ذُو الْجَلَالِ وَالْإِكْرَامِ",
        "الْمُقْسِطُ",
        "الْجَامِعُ",
        "الْغَنِيُّ",
        "الْمُغْنِي",
        "الْمَانِعُ",
        "الضَّارُّ",
        "النَّافِعُ",
        "النُّورُ",
        "الْهَادِي",
        "الْبَدِيعُ",
        "الْبَاقِي",
        "الْوَارِثُ",
        "الرَّشِيدُ",
        "الصَّبُورُ",
    ];

    const watermarkContainer = document.createElement("div");
    watermarkContainer.className = "names-watermark-container";
    document.body.prepend(watermarkContainer);

    function spawnName() {
        if (!document.querySelector(".names-watermark-container")) return;

        const nameEl = document.createElement("div");
        nameEl.className = "allah-name-watermark";
        const randomName =
            allahNamesArabic[Math.floor(Math.random() * allahNamesArabic.length)];
        nameEl.innerText = randomName;

        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const destX =
            startX + (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 30 + 20); // Move by 20-50vw
        const destY =
            startY + (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 30 + 20); // Move by 20-50vh

        nameEl.style.setProperty("--start-x", startX + "vw");
        nameEl.style.setProperty("--start-y", startY + "vh");
        nameEl.style.setProperty("--dest-x", destX + "vw");
        nameEl.style.setProperty("--dest-y", destY + "vh");

        const duration = Math.random() * 15 + 20; // 20 to 35 seconds
        nameEl.style.animationDuration = duration + "s";

        watermarkContainer.appendChild(nameEl);

        setTimeout(() => {
            if (nameEl && nameEl.parentNode) {
                nameEl.remove();
            }
        }, duration * 1000);
    }

    for (let i = 0; i < 10; i++) {
        setTimeout(spawnName, Math.random() * 5000);
    }

    setInterval(spawnName, 2000);
});
