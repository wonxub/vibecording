/* ===================================
   ATELIER LUXE - JavaScript
   Interactive Features
   =================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    initNavbar();
    initMobileMenu();
    initProductFilters();
    initQuoteForm();
    initScrollAnimations();
    initSmoothScroll();
});

/* ===================================
   NAVBAR
   =================================== */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on load
}

/* ===================================
   MOBILE MENU
   =================================== */
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
    });
}

/* ===================================
   PRODUCT FILTERS
   =================================== */
function initProductFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            
            // Filter products with animation
            productCards.forEach(card => {
                const category = card.dataset.category;
                
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.5s ease forwards';
                } else {
                    card.style.animation = 'fadeOut 0.3s ease forwards';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

/* ===================================
   QUOTE FORM
   =================================== */
function initQuoteForm() {
    const form = document.getElementById('quoteForm');
    const toast = document.getElementById('toast');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basic validation
        if (!validateForm(form)) {
            return;
        }
        
        // Simulate form submission
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = '처리 중...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            // Show success toast
            showToast('견적 요청이 완료되었습니다! 24시간 내에 연락드리겠습니다.');
            
            // Reset form
            form.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
    
    // Phone number formatting
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/[^0-9]/g, '');
        
        if (value.length > 3 && value.length <= 7) {
            value = value.replace(/(\d{3})(\d{1,4})/, '$1-$2');
        } else if (value.length > 7) {
            value = value.replace(/(\d{3})(\d{4})(\d{1,4})/, '$1-$2-$3');
        }
        
        e.target.value = value;
    });
}

function validateForm(form) {
    const name = form.querySelector('#name');
    const phone = form.querySelector('#phone');
    const serviceType = form.querySelector('#serviceType');
    const privacy = form.querySelector('#privacy');
    
    let isValid = true;
    
    // Clear previous errors
    form.querySelectorAll('.error').forEach(el => el.remove());
    
    if (!name.value.trim()) {
        showError(name, '이름을 입력해주세요.');
        isValid = false;
    }
    
    if (!phone.value.trim() || phone.value.length < 12) {
        showError(phone, '올바른 연락처를 입력해주세요.');
        isValid = false;
    }
    
    if (!serviceType.value) {
        showError(serviceType, '서비스 유형을 선택해주세요.');
        isValid = false;
    }
    
    if (!privacy.checked) {
        showError(privacy.parentElement, '개인정보 수집에 동의해주세요.');
        isValid = false;
    }
    
    return isValid;
}

function showError(element, message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    errorDiv.style.cssText = `
        color: #ff6b6b;
        font-size: 0.8rem;
        margin-top: 4px;
    `;
    errorDiv.textContent = message;
    
    element.parentElement.appendChild(errorDiv);
    element.style.borderColor = '#ff6b6b';
    
    // Remove error on input
    element.addEventListener('input', () => {
        errorDiv.remove();
        element.style.borderColor = '';
    }, { once: true });
}

function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = toast.querySelector('.toast-message');
    
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}

/* ===================================
   SCROLL ANIMATIONS
   =================================== */
function initScrollAnimations() {
    // Add fade-in animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes fadeOut {
            from {
                opacity: 1;
            }
            to {
                opacity: 0;
            }
        }
        
        .animate-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .animate-on-scroll.visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
    
    // Add animation class to elements
    const animateElements = document.querySelectorAll(
        '.section-header, .product-card, .service-card, .process-step, ' +
        '.feature-card, .contact-card, .about-content, .quote-wrapper'
    );
    
    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
    });
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        }
    );
    
    animateElements.forEach(el => observer.observe(el));
}

/* ===================================
   SMOOTH SCROLL
   =================================== */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ===================================
   QUICK VIEW MODAL (Optional)
   =================================== */
document.querySelectorAll('.quick-view-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const card = e.target.closest('.product-card');
        const productName = card.querySelector('.product-name').textContent;
        const productPrice = card.querySelector('.price').textContent;
        
        // For now, show an alert - can be replaced with a modal
        showToast(`"${productName}" 상품을 확인하셨습니다. 자세한 상담은 견적요청을 이용해주세요.`);
    });
});
