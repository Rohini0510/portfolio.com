
gsap.from(".hero h1", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });
gsap.from(".hero p", { duration: 1, y: 50, opacity: 0, delay: 0.5, ease: "power2.out" });
gsap.from(".scroll-down", { duration: 1, opacity: 0, delay: 1, ease: "power2.out" });

gsap.from("#about", { duration: 1, y: 50, opacity: 0, scrollTrigger: "#about" });
gsap.from("#skills .skill", { duration: 1, y: 50, opacity: 0, stagger: 0.2, scrollTrigger: "#skills" });
gsap.from(".project-card", { duration: 1, y: 50, opacity: 0, stagger: 0.2, scrollTrigger: "#projects" });