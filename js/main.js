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

    // 2. Mobile Menu & Dropdowns
    const menuBtn = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            const isFlex = navLinks.classList.contains('mobile-active');
            if (isFlex) {
                navLinks.classList.remove('mobile-active');
                navLinks.style.display = 'none';
            } else {
                navLinks.classList.add('mobile-active');
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = '#fff';
                navLinks.style.padding = '1.5rem 0';
                navLinks.style.boxShadow = '0 10px 15px rgba(0,0,0,0.1)';
                navLinks.style.maxHeight = 'calc(100vh - 70px)';
                navLinks.style.overflowY = 'auto';
            }
        });
    }

    // Toggle Mobile Dropdowns
    document.querySelectorAll('.nav-links li:has(.dropdown-menu) > a').forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 992) {
                e.preventDefault();
                const parent = toggle.parentElement;
                parent.classList.toggle('active-dropdown');
                
                // Toggle other dropdowns off
                document.querySelectorAll('.nav-links li.active-dropdown').forEach(activeItem => {
                    if (activeItem !== parent) activeItem.classList.remove('active-dropdown');
                });
            }
        });
    });

    // 3. Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
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
        if (question && answer) {
            question.addEventListener('click', () => {
                const isOpen = answer.style.maxHeight;
                // Close others
                faqItems.forEach(it => it.querySelector('.faq-answer').style.maxHeight = null);
                if (!isOpen) {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                }
            });
        }
    });

    // 6. Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

    // 7. Quick Enquiry Modal Logic
    const enquiryModal = document.getElementById('enquiryModal');
    const openModalBtns = document.querySelectorAll('.open-enquiry-modal');
    const closeModalBtn = document.querySelector('.close-modal');

    if (enquiryModal) {
        openModalBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                enquiryModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });

        const closeModal = () => {
            enquiryModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        };

        if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);

        window.addEventListener('click', (e) => {
            if (e.target === enquiryModal) closeModal();
        });
    }

    // 8. Form Submission Handling (Formspree Integration)
    const enquiryForm = document.getElementById('enquiryForm');
    const formStatus = document.getElementById('formStatus');

    if (enquiryForm) {
        enquiryForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitBtn = enquiryForm.querySelector('.btn-submit');
            const originalBtnText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            const formData = new FormData(enquiryForm);
            
            try {
                const response = await fetch(enquiryForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    enquiryForm.reset();
                    formStatus.innerHTML = '<div style="color: #22c55e; margin-top: 1rem; text-align: center; font-weight: 600;"><i class="fa-solid fa-circle-check"></i> Thank you! Message sent successfully.</div>';
                    setTimeout(() => {
                        enquiryModal.classList.remove('active');
                        document.body.style.overflow = 'auto';
                        formStatus.innerHTML = '';
                    }, 3000);
                } else {
                    formStatus.innerHTML = '<div style="color: #ef4444; margin-top: 1rem; text-align: center;">Oops! Something went wrong.</div>';
                }
            } catch (error) {
                formStatus.innerHTML = '<div style="color: #ef4444; margin-top: 1rem; text-align: center;">Connection error. Please try again.</div>';
            } finally {
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
            }
        });
    }
});
