/* 
    GR Solution - Premium TV Repair Service
    Main JavaScript Interactions
*/

document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Header
    const header = document.querySelector('header');
    const stickyHeader = () => {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        } else {
            header.style.padding = '15px 0';
            header.style.boxShadow = 'none';
        }
    };
    window.addEventListener('scroll', stickyHeader);

    // 2. Mobile Menu Toggle
    const menuBtn = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '80px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = '#fff';
            navLinks.style.padding = '2rem';
            navLinks.style.boxShadow = '0 10px 15px rgba(0,0,0,0.1)';
        });
    }

    // 3. Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 4. Testimonial Slider (Premium Continuous Loop)
    const track = document.getElementById('testimonialTrack');
    if (track) {
        // Clone all slides for a seamless infinite scroll
        const slides = Array.from(track.children);
        slides.forEach(slide => {
            const clone = slide.cloneNode(true);
            track.appendChild(clone);
        });

        // Add a smooth continuous class
        track.classList.add('continuous-scroll');
    }

    // 5. FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        question.addEventListener('click', () => {
            const isOpen = answer.style.maxHeight;
            // Close others
            faqItems.forEach(it => it.querySelector('.faq-answer').style.maxHeight = null);
            if (!isOpen) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });

    // 6. Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease-out';
        observer.observe(el);
    });

    // 7. Form Validation
    const leadForms = document.querySelectorAll('.lead-form');
    leadForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.innerText;

            // Simple validation
            const inputs = form.querySelectorAll('input, select, textarea');
            let isValid = true;
            inputs.forEach(input => {
                if (input.required && !input.value) {
                    isValid = false;
                    input.style.borderColor = 'red';
                } else {
                    input.style.borderColor = '#e5e7eb';
                }
            });

            if (isValid) {
                btn.innerText = 'Submitting...';
                btn.disabled = true;

                // FormSubmit.co Direct Method
                form.action = 'https://formsubmit.co/kamleshg9569@gmail.com';
                form.method = 'POST';

                // Helper to add hidden fields safely without duplication
                const appendHidden = (name, value) => {
                    if (!form.querySelector(`input[name="${name}"]`)) {
                        const input = document.createElement('input');
                        input.type = 'hidden';
                        input.name = name;
                        input.value = value;
                        form.appendChild(input);
                    }
                };

                appendHidden('_next', window.location.href);
                appendHidden('_subject', 'New Service Request! (GR Solution)');
                appendHidden('_captcha', 'false');
                appendHidden('_template', 'table');
                appendHidden('Page_Source', window.location.href);

                form.submit();
            }
        });
    });

    // 8. Exit Intent Popup
    let exitPopupShown = false;
    document.addEventListener('mouseleave', (e) => {
        if (e.clientY < 0 && !exitPopupShown) {
            const popup = document.getElementById('exitIntentPopup');
            if (popup) {
                popup.style.display = 'flex';
                exitPopupShown = true;
            }
        }
    });

    const closePopup = document.getElementById('closePopup');
    if (closePopup) {
        closePopup.addEventListener('click', () => {
            document.getElementById('exitIntentPopup').style.display = 'none';
        });
    }
});
