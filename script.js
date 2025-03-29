// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.getElementById('preloader');
    
    window.addEventListener('load', function() {
        setTimeout(function() {
            if (preloader) {
                preloader.style.opacity = '0';
                preloader.style.visibility = 'hidden';
            }
            
            // Start animations once preloader is gone
            animateOnScroll();
            initTypewriter();
            initCopyButtons();
        }, 1500);
    });
    
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', () => {
                // Toggle current item
                item.classList.toggle('active');
            });
        });
    }
    
    // FAQ Category Tabs
    const categoryButtons = document.querySelectorAll('.faq-category-btn');
    const categories = document.querySelectorAll('.faq-category');
    
    if (categoryButtons.length > 0 && categories.length > 0) {
        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                categoryButtons.forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // Add active class to clicked button
                button.classList.add('active');
                
                // Show corresponding category
                const categoryToShow = button.getAttribute('data-category');
                
                categories.forEach(category => {
                    if (category.getAttribute('data-category') === categoryToShow) {
                        category.classList.add('active');
                    } else {
                        category.classList.remove('active');
                    }
                });
            });
        });
    }
    
    // Case Studies Filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const caseStudyCards = document.querySelectorAll('.case-study-card');
    
    if (filterButtons.length > 0 && caseStudyCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // Add active class to clicked button
                button.classList.add('active');
                
                // Filter case studies
                const filterValue = button.getAttribute('data-filter');
                
                caseStudyCards.forEach(card => {
                    if (filterValue === 'all') {
                        card.style.display = 'block';
                    } else {
                        const categories = card.getAttribute('data-category');
                        
                        if (categories && categories.includes(filterValue)) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    }
                });
            });
        });
    }
    
    // Custom cursor
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    if (cursor && cursorFollower) {
        document.addEventListener('mousemove', function(e) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            // Add slight delay to follower for nice effect
            setTimeout(function() {
                cursorFollower.style.left = e.clientX + 'px';
                cursorFollower.style.top = e.clientY + 'px';
            }, 50);
            
            // Show cursor when mouse moves
            if (cursor.style.opacity === '0') {
                cursor.style.opacity = '1';
                cursorFollower.style.opacity = '1';
            }
        });
    }
    
    // Handle mouse enter/leave for links and buttons
    if (cursor && cursorFollower) {
        const links = document.querySelectorAll('a, button, .service-card, .work-item, .team-member, .testimonial-card');
        
        links.forEach(link => {
            link.addEventListener('mouseenter', function() {
                cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursor.style.backgroundColor = 'transparent';
                cursor.style.border = '1px solid var(--primary-color)';
                cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursorFollower.style.backgroundColor = 'rgba(0, 102, 255, 0.1)';
            });
            
            link.addEventListener('mouseleave', function() {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                cursor.style.backgroundColor = 'var(--primary-color)';
                cursor.style.border = 'none';
                cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorFollower.style.backgroundColor = 'transparent';
            });
        });
    }
    
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            // Active nav link based on scroll position
            const scrollPosition = window.scrollY;
            
            // Only run this on the homepage where sections are present
            if (document.querySelectorAll('section[id]').length > 0) {
                document.querySelectorAll('section[id]').forEach(section => {
                    const sectionTop = section.offsetTop - 100;
                    const sectionHeight = section.offsetHeight;
                    const sectionId = section.getAttribute('id');
                    
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        navLinks.forEach(link => {
                            link.classList.remove('active');
                            if (link.getAttribute('href') === '#' + sectionId) {
                                link.classList.add('active');
                            }
                        });
                    }
                });
            }
        });
    }
    
    // Mobile menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinksContainer = document.querySelector('.nav-links');
    
    if (navToggle && navLinksContainer) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navLinksContainer.classList.toggle('active');
        });
        
        // Close menu when clicking a link (mobile)
        const mobileNavLinks = navLinksContainer.querySelectorAll('.nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navLinksContainer.classList.remove('active');
            });
        });
    }
    
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Back to top button
    const backToTopButton = document.getElementById('backToTop');
    const floatingContacts = document.querySelector('.floating-contacts');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 700) {
            backToTopButton && backToTopButton.classList.add('visible');
            floatingContacts && (floatingContacts.style.opacity = '1');
        } else {
            backToTopButton && backToTopButton.classList.remove('visible');
            floatingContacts && (floatingContacts.style.opacity = '0');
        }
    });
    
    if (backToTopButton) {
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitButton = contactForm.querySelector('.submit-btn');
            submitButton.classList.add('loading');
            
            // Form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Simulate form submission with delay
            setTimeout(function() {
                console.log('Form submitted:', formData);
                
                // Display success message
                showToast('Message sent!', 'Thank you for contacting us. We\'ll get back to you soon.', 'success');
                
                // Reset form
                contactForm.reset();
                submitButton.classList.remove('loading');
            }, 1500);
        });
    }
});

// Scroll animations function
function animateOnScroll() {
    const animatedElements = document.querySelectorAll('.animated, .animated-heading, [data-animation]');
    const counterElements = document.querySelectorAll('.counter-value');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // For regular animated elements
                if (entry.target.classList.contains('animated')) {
                    const delay = entry.target.getAttribute('data-delay') || '0s';
                    entry.target.style.animationDelay = delay;
                    entry.target.classList.add('active');
                }
                
                // For elements with data-animation attribute (staggered animations)
                if (entry.target.hasAttribute('data-animation')) {
                    const animation = entry.target.getAttribute('data-animation');
                    const delay = entry.target.getAttribute('data-delay') || '0s';
                    entry.target.style.animationDelay = delay;
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.style.animation = `${animation} 0.8s forwards ${delay}`;
                }
                
                // For counter elements
                if (entry.target.classList.contains('counter-value')) {
                    animateCounter(entry.target);
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    // Observe all elements
    animatedElements.forEach(element => {
        observer.observe(element);
    });
    
    // Observe counter elements separately if not caught above
    if (counterElements.length > 0) {
        counterElements.forEach(counter => {
            if (!counter.classList.contains('animated') && !counter.hasAttribute('data-animation')) {
                observer.observe(counter);
            }
        });
    }
}

// Counter animation function
function animateCounter(counterElement) {
    const target = parseInt(counterElement.getAttribute('data-count')) || 0;
    const duration = 2000; // 2 seconds
    const stepTime = 50; // update every 50ms
    const initialValue = 0;
    
    // Calculate increment per step
    const totalSteps = duration / stepTime;
    const step = (target - initialValue) / totalSteps;
    
    let current = initialValue;
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        // Format counter text (keep the plus sign if it exists)
        const hasPlus = counterElement.textContent.includes('+');
        counterElement.textContent = Math.floor(current) + (hasPlus ? '+' : '');
    }, stepTime);
}

// Typewriter effect
function initTypewriter() {
    const typewriterElement = document.querySelector('.typewriter');
    
    if (typewriterElement) {
        const words = typewriterElement.getAttribute('data-words').split(',');
        const typingSpeed = 150; // ms per character
        const deletingSpeed = 75; // ms per character
        const delayBetweenWords = 1500; // ms
        
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let isWaiting = false;
        
        function type() {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                // Remove character
                typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                // Add character
                typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }
            
            // Determine next action
            if (!isDeleting && charIndex === currentWord.length) {
                // Finished typing word
                isWaiting = true;
                setTimeout(() => {
                    isDeleting = true;
                    isWaiting = false;
                    type();
                }, delayBetweenWords);
            } else if (isDeleting && charIndex === 0) {
                // Finished deleting word
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(type, 500);
            } else {
                // Continue typing/deleting
                if (!isWaiting) {
                    setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
                }
            }
        }
        
        // Start the typewriter effect
        setTimeout(type, 1000);
    }
}

// Toast notification function
function showToast(title, message, type = 'info') {
    const toastContainer = document.getElementById('toast-container');
    
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.classList.add(type);
    
    // Create toast content
    toast.innerHTML = `
        <div class="toast-content">
            <div class="toast-title">${title}</div>
            <div class="toast-message">${message}</div>
        </div>
    `;
    
    // Add toast to container
    toastContainer.appendChild(toast);
    
    // Show toast
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    // Remove toast after 5 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 5000);
}

// Copy to clipboard functionality
function initCopyButtons() {
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    if (copyButtons.length > 0) {
        copyButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Check if data-copy contains direct text or an element ID
                const textToCopy = this.getAttribute('data-copy');
                const targetId = this.getAttribute('data-target');
                
                if (textToCopy) {
                    // Direct text to copy
                    navigator.clipboard.writeText(textToCopy)
                        .then(() => {
                            // Show success toast
                            showToast('Copied!', 'Information copied to clipboard', 'success');
                            
                            // Change button text temporarily
                            const originalText = this.textContent;
                            this.textContent = 'Copied!';
                            
                            // Reset button text after 2 seconds
                            setTimeout(() => {
                                this.textContent = originalText;
                            }, 2000);
                        })
                        .catch(err => {
                            // Show error toast
                            showToast('Error', 'Could not copy text: ' + err, 'error');
                        });
                } else if (targetId) {
                    // Get text from target element
                    const targetElement = document.getElementById(targetId);
                    
                    if (targetElement) {
                        let textFromElement;
                        
                        // Check if it's an input, textarea, or other element
                        if (targetElement.value !== undefined) {
                            textFromElement = targetElement.value;
                        } else {
                            textFromElement = targetElement.textContent;
                        }
                        
                        // Copy the text to clipboard
                        navigator.clipboard.writeText(textFromElement)
                            .then(() => {
                                // Visual feedback - add copied class
                                this.classList.add('copied');
                                
                                // Show toast notification
                                showToast('Copied!', 'Text copied to clipboard', 'success');
                                
                                // Remove copied class after a delay
                                setTimeout(() => {
                                    this.classList.remove('copied');
                                }, 2000);
                            })
                            .catch(err => {
                                console.error('Could not copy text: ', err);
                                showToast('Error', 'Failed to copy text', 'error');
                            });
                    }
                }
            });
        });
    }
}