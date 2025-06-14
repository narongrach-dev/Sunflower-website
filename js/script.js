document.addEventListener("DOMContentLoaded", function () {
    // Video autoplay and loop
    const video = document.getElementById("bg-video");
    if (video) {
        video.play().catch(error => console.log("Autoplay ถูกบล็อก:", error));

        video.addEventListener('ended', function () {
            video.currentTime = 0;
            video.play();
        });

        setInterval(() => {
            if (video.paused || video.ended) {
                video.play();
            }
        }, 1000);
    }

    // Navbar behavior
    const firstNavbar = document.getElementById("firstNavbar");
    const secondNavbar = document.getElementById("secondNavbar");
    const logoImg = document.getElementById("logo-img");
    const navToggle = document.getElementById("js-nav-toggle");
    const navbarVersion2 = document.getElementById("js-navbar-version2");

    const normalLogo = "img/sunflower_spa_logo3.png";
    const stickyLogo = "img/sunflower_spa_logo2.png";

    let lastScrollTop = 0;

    window.addEventListener("scroll", function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            firstNavbar.classList.add("hidden");
            secondNavbar.classList.add("sticky");
            logoImg.src = stickyLogo;
        } else if (scrollTop <= 50) {
            firstNavbar.classList.remove("hidden");
            secondNavbar.classList.remove("sticky");
            logoImg.src = normalLogo;
        }

        lastScrollTop = scrollTop;
    });

    navToggle.addEventListener("click", function () {
        navbarVersion2.classList.toggle("active");
    });

    // ฟังก์ชันเพื่อเริ่ม animation เมื่อ scroll ลงมาถึงตำแหน่งของข้อความ
    function startAnimationOnScroll() {
        const typewriterElement = document.querySelector('.typewriter');
        const typingTextElement = document.querySelector('.typing-text');
        const typingText2Element = document.querySelector('.typing-text2');

        function checkScroll() {
            const elementTop = typingTextElement.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight && elementTop > -100) {
                typewriterElement.classList.remove('animate');
                setTimeout(() => {
                    typewriterElement.classList.add('animate');
                }, 10);
            }
        }

        function checkScroll2() {
            const elementTop2 = typingText2Element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop2 < windowHeight && elementTop2 > -100) {
                const animate2Element = typingText2Element.querySelector('.animate2');
                const animate3Element = typingText2Element.querySelector('.animate3');
                animate2Element.classList.remove('animate2');
                animate3Element.classList.remove('animate3');
                setTimeout(() => {
                    animate2Element.classList.add('animate2');
                    animate3Element.classList.add('animate3');
                }, 10);
            }
        }

        window.addEventListener('scroll', checkScroll);
        window.addEventListener('scroll', checkScroll2);
    }

    startAnimationOnScroll();

    function handleResponsiveText() {
        const typingText = document.querySelector('.typing-text');
        const typingText2 = document.querySelector('.typing-text2');

        if (window.matchMedia("(max-width: 768px)").matches) {
            if (typingText) typingText.style.display = 'none';
            if (typingText2) typingText2.style.display = 'inline-block';
        } else {
            if (typingText) typingText.style.display = 'inline-block';
            if (typingText2) typingText2.style.display = 'none';
        }
    }

    handleResponsiveText();
    window.addEventListener('resize', handleResponsiveText);

    // FAQ toggle without jQuery
    const faqItems = document.querySelectorAll('.faq-question-container');
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const faq = item.closest('.faq');
            faq.classList.toggle('active');
        });
    });

});

function toggleChatButtons() {
    const socialButtons = document.getElementById('socialButtons');
    const chatButton = document.getElementById('mainChatButton');
    const chatIcon = document.getElementById('chatIcon');
    const chatButtonXmark = document.getElementById('chatButtonXmark');

    if (socialButtons.style.display === "flex") {
        socialButtons.style.display = "none";
        chatButton.classList.remove("active");
        chatButtonXmark.style.opacity = "0";
        chatIcon.style.opacity = "1";
    } else {
        socialButtons.style.display = "flex";
        chatButton.classList.add("active");
        chatButtonXmark.style.opacity = "1";
        chatIcon.style.opacity = "0";
    }
}
