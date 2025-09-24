 // Hamburger toggle
        const hamburger = document.getElementById("hamburger");
        const navList = document.getElementById("nav-list");
        hamburger.addEventListener("click", () => navList.classList.toggle("show"));

        // Smooth scrolling
        const navLinks = document.querySelectorAll(".nav-link");
        navLinks.forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const targetId = link.getAttribute("href").substring(1);
                document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
                navList.classList.remove("show");
            });
        });

        // Counter animation
        function animateCounter(id, target, duration = 2000) {
            const element = document.getElementById(id);
            let start = 0;
            const stepTime = Math.abs(Math.floor(duration / target));
            const timer = setInterval(() => {
                start += 1;
                element.innerText = id === "satisfaction" ? start + "%" : start;
                if (start >= target) clearInterval(timer);
            }, stepTime);
        }

        window.onload = () => {
            animateCounter("students", 10000);
            animateCounter("courses", 200);
            animateCounter("countries", 15);
            animateCounter("satisfaction", 95);
        };


         // Hide preloader after page loads
    window.addEventListener("load", function() {
        const preloader = document.getElementById("preloader");
        setTimeout(() => {
            preloader.style.opacity = "0";
            preloader.style.transition = "opacity 0.5s ease";
            setTimeout(() => preloader.style.display = "none", 500);
        }, 800); // waits a bit to look smooth
    });




   document.addEventListener("DOMContentLoaded", () => {
    const account = document.getElementById("account");

    // Toggle dropdown on click
    account.addEventListener("click", (e) => {
        e.stopPropagation();
        account.classList.toggle("show");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", () => {
        account.classList.remove("show");
    });

    // 🔹 Simulate login with social media
    function socialLogin(user) {
        document.getElementById("userImage").src = user.photo;
        document.getElementById("userName").textContent = user.name;
    }

    // Example (simulate Google login after 2s)
    setTimeout(() => {
        socialLogin({
            name: "John Doe",
            photo: "https://randomuser.me/api/portraits/men/32.jpg"
        });
    }, 2000);
});


