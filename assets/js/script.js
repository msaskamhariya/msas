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

    // --- 99 Names of Allah Watermark Effect (Only for sections with patterns) ---
    const allahNamesArabic = [
        "الرَّحْمَنُ", "الرَّحِيمُ", "الْمَلِكُ", "الْقُدُّوسُ", "السَّلَامُ",
        "الْمُؤْمِنُ", "الْمُهَيْمِنُ", "الْعَزِيزُ", "الْجَبَّارُ", "الْمُتَکَبِّرُ",
        "الْخَالِقُ", "الْبَارِئُ", "الْمُصَوِّرُ", "الْغَفَّارُ", "الْقَهَّارُ",
        "الْوَهَّابُ", "الرَّزَّاقُ", "الْفَتَّاحُ", "الْعَلِيمُ", "الْقَابِضُ",
        "الْبَاسِطُ", "الْخَافِضُ", "الرَّافِعُ", "الْمُعِزُّ", "الْمُذِلُّ",
        "السَّمِيعُ", "الْبَصِيرُ", "الْحَكَمُ", "الْعَدْلُ", "اللَّطِيفُ",
        "الْخَبِيرُ", "الْحَلِيمُ", "الْعَظِيمُ", "الْغَفُورُ", "الشَّکُورُ",
        "الْعَلِيُّ", "الْكَبِيرُ", "الْحَفِيظُ", "الْمُقِيتُ", "الْحَسِيبُ",
        "الْجَلِيلُ", "الْكَرِيمُ", "الرَّقِيبُ", "الْمُجِيبُ", "الْوَاسِعُ",
        "الْحَكِيمُ", "الْوَدُودُ", "الْمَجِيدُ", "الْبَاعِثُ", "الشَّهِيدُ",
        "الْحَقُّ", "الْوَكِيلُ", "الْقَوِيُّ", "الْمَتِينُ", "الْوَلِيُّ",
        "الْحَمِیدُ", "الْمُحْصِي", "الْمُبْدِئُ", "الْمُعِيدُ", "الْمُحْيِي",
        "الْمُمِيتُ", "الْحَيُّ", "الْقَيُّومُ", "الْوَاجِدُ", "الْمَاجِدُ",
        "الْوَاحِدُ", "الأَحَدُ", "الصَّمَدُ", "الْقَادِرُ", "الْمُقْتَدِرُ",
        "الْمُقَدِّمُ", "الْمُؤَخِّرُ", "الأَوَّلُ", "الآخِرُ", "الظَّاهِرُ",
        "الْبَاطِنُ", "الْوَالِي", "الْمُتَعَالِي", "الْبَرُّ", "التَّوَّابُ",
        "الْمُنْتَقِمُ", "الْعَفُوُّ", "الرَّءُوفُ", "مَالِكُ الْمُلْكِ", "ذُو الْجَلَالِ وَالْإِكْرَامِ",
        "الْمُقْسِطُ", "الْجَامِعُ", "الْغَنِيُّ", "الْمُغْنِي", "الْمَانِعُ",
        "الضَّارُّ", "النَّافِعُ", "النُّورُ", "الْهَادِي", "الْبَدِيعُ",
        "الْبَاقِي", "الْوَارِثُ", "الرَّشِيدُ", "الصَّبُورُ"
    ];

    // Find sections that are green with patterns (Header and Footer)
    const patternSections = document.querySelectorAll('.page-header, .footer');

    patternSections.forEach(section => {
        const container = document.createElement("div");
        container.className = "names-watermark-container";
        section.style.position = "relative"; // Ensure relative for absolute child
        section.prepend(container);

        function spawnNameForSection() {
            const nameEl = document.createElement("div");
            nameEl.className = "allah-name-watermark";
            const randomName = allahNamesArabic[Math.floor(Math.random() * allahNamesArabic.length)];
            nameEl.innerText = randomName;

            // Use direct positioning to spread across container
            const startX = Math.random() * 95; // 0-95%
            const startY = Math.random() * 95; // 0-95%
            
            // Random drift direction (relative to element size)
            const driftX = (Math.random() - 0.5) * 100; // -50% to 50% drift
            const driftY = (Math.random() - 0.5) * 100;

            nameEl.style.left = startX + "%";
            nameEl.style.top = startY + "%";
            nameEl.style.setProperty("--drift-x", driftX + "%");
            nameEl.style.setProperty("--drift-y", driftY + "%");

            const duration = Math.random() * 10 + 15;
            nameEl.style.animationDuration = duration + "s";
            nameEl.style.fontSize = (Math.random() * 2 + 1.2) + "rem"; // Slightly larger names

            container.appendChild(nameEl);
            setTimeout(() => {
                if(nameEl.parentNode) nameEl.remove();
            }, duration * 1000);
        }

        // Initial burst - more names initially
        for (let i = 0; i < 6; i++) {
            setTimeout(spawnNameForSection, Math.random() * 3000);
        }
        setInterval(spawnNameForSection, 3000); // Faster interval for more coverage
    });
});
