// Moire Melomew - Main Script

// Product Data
const products = [
    { id: 1, name: '화이트 사각스툴 촬영소품', price: 25000, originalPrice: 162000, category: 'stool', badge: 'new' },
    { id: 2, name: '시그니처 모던 벽난로 콘솔', price: 559000, originalPrice: 599000, category: 'table', badge: 'new' },
    { id: 3, name: '화이트 원형스툴 촬영소품', price: 93000, originalPrice: 149000, category: 'stool', badge: 'best' },
    { id: 4, name: '프리미엄 화이트 라운드벽난로', price: 386100, originalPrice: 429000, category: 'table' },
    { id: 5, name: '화이트 라운드 기대는책장 3단', price: 139000, originalPrice: 149000, category: 'shelf' },
    { id: 6, name: '무아르 구름 입식 식탁테이블', price: 575100, originalPrice: 659000, category: 'table' },
    { id: 7, name: '화이트 라운드 미니 선반 2단', price: 109000, originalPrice: 199000, category: 'shelf' },
    { id: 8, name: '화이트 반원스툴 촬영소품', price: 143100, originalPrice: 249000, category: 'stool' },
    { id: 9, name: '무아르 엠보 원형스툴', price: 149000, originalPrice: 299000, category: 'stool' },
    { id: 10, name: '무아르 엠보 사각스툴', price: 79000, originalPrice: 209000, category: 'stool' },
    { id: 11, name: '우드 사각스툴 촬영소품', price: 159000, originalPrice: 189000, category: 'stool' },
    { id: 12, name: '무아르 엠보 구름 입식테이블', price: 674100, originalPrice: 759000, category: 'table', badge: 'best' },
    { id: 13, name: '소이빈 라운드 선반장 장식장', price: 386100, originalPrice: 459000, category: 'shelf' },
    { id: 14, name: '화이트 육각스툴 촬영소품', price: 75600, originalPrice: 269000, category: 'stool' },
    { id: 15, name: '화이트 직각반원스툴 소품', price: 161100, originalPrice: 249000, category: 'stool' },
    { id: 16, name: '화이트 삼각스툴 촬영소품', price: 89000, originalPrice: 198000, category: 'stool' },
    { id: 17, name: '프리미엄 화이트 몰딩스툴', price: 296100, originalPrice: 349000, category: 'stool' },
    { id: 18, name: '무아르 구름 좌식 소파테이블', price: 448200, originalPrice: 529000, category: 'table' },
    { id: 19, name: '원목 선반책장 3단 사다리형', price: 119000, originalPrice: 129000, category: 'shelf' },
    { id: 20, name: '프리미엄 다이아스툴 촬영소품', price: 287100, originalPrice: 349000, category: 'stool' },
    { id: 21, name: '무아르 엠보 구름 좌식테이블', price: 494100, originalPrice: 599000, category: 'table' },
    { id: 22, name: '무아르 엠보 반원 구름테이블', price: 692100, originalPrice: 849000, category: 'table' },
    { id: 23, name: '4면 거울 사각스툴 소품', price: 179000, originalPrice: 259000, category: 'stool' },
    { id: 24, name: '아크릴 쇼케이스 화이트스툴', price: 309000, originalPrice: 339000, category: 'etc' },
    { id: 25, name: '원목 티티선반장 2단 특대', price: 139000, originalPrice: 154000, category: 'shelf' },
    { id: 26, name: '화이트 구름스툴 진열대', price: 530100, originalPrice: 619000, category: 'stool' },
    { id: 27, name: '화이트 라운드 미니 기대는선반', price: 109000, originalPrice: 199000, category: 'shelf' },
    { id: 28, name: '미니 라운드벽난로 콘솔', price: 252000, originalPrice: 279000, category: 'table', badge: 'new' },
    { id: 29, name: '무아르 무드 와이드 장식장', price: 404100, originalPrice: 489000, category: 'etc', badge: 'best' },
    { id: 30, name: '5면 거울 사각스툴 소품', price: 161100, originalPrice: 279000, category: 'stool' },
    { id: 31, name: '무아르 엠보 3 Legs 테이블', price: 782100, originalPrice: 929000, category: 'table' },
    { id: 32, name: '화이트 넘버 빈티지 추 벽시계', price: 59000, originalPrice: 69000, category: 'etc' },
    { id: 33, name: '무아르 엠보 몽글 미니테이블', price: 296100, originalPrice: 359000, category: 'table' },
    { id: 34, name: '화이트 원형전시대 스툴 단상', price: 449100, originalPrice: 539000, category: 'stool' },
    { id: 35, name: '무아르 볼 엔틱 식탁테이블', price: 710100, originalPrice: 789000, category: 'table' },
    { id: 36, name: '무아르 아트 오브제 시리즈 A', price: 2790000, originalPrice: 3090000, category: 'etc' },
    { id: 37, name: '무아르 엠보 3 Legs 비정형', price: 782100, originalPrice: 899000, category: 'table' },
    { id: 38, name: '무아르 사각 1단 적층형 선반', price: 98000, originalPrice: 109000, category: 'shelf' },
    { id: 39, name: '무아르 구름 1단 적층형 선반', price: 170100, originalPrice: 209000, category: 'shelf' },
    { id: 40, name: '무아르 볼 엔틱 1800mm 우드', price: 890100, originalPrice: 989000, category: 'table' }
];

// Format price
function formatPrice(price) {
    return '₩' + price.toLocaleString('ko-KR');
}

// Create product card HTML
function createProductCard(product) {
    const discount = product.originalPrice
        ? Math.round((1 - product.price / product.originalPrice) * 100)
        : 0;

    const badgeClass = product.badge === 'new' ? 'badge-new' : 'badge-best';
    const badgeText = product.badge === 'new' ? 'New' : 'Best';

    return `
        <article class="product-card" data-category="${product.category}">
            <div class="product-image">
                <div class="product-image-placeholder">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <rect x="3" y="3" width="18" height="18" rx="2"/>
                        <circle cx="9" cy="9" r="2"/>
                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                    </svg>
                </div>
                ${product.badge ? `<span class="product-badge ${badgeClass}">${badgeText}</span>` : ''}
                <div class="product-actions">
                    <button class="product-action-btn" aria-label="위시리스트">
                        <svg viewBox="0 0 24 24"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                    </button>
                    <button class="product-action-btn add-to-cart" data-id="${product.id}" aria-label="장바구니">
                        <svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">
                    ${product.originalPrice ? `<span class="price-original">${formatPrice(product.originalPrice)}</span>` : ''}
                    <span class="price-sale">${formatPrice(product.price)}</span>
                    ${discount > 0 ? `<span class="price-discount">${discount}%</span>` : ''}
                </div>
            </div>
        </article>
    `;
}

// Render products
function renderProducts(container, filterFn) {
    if (!container) return;
    const filtered = filterFn ? products.filter(filterFn) : products;
    container.innerHTML = filtered.map(createProductCard).join('');
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Header scroll effect
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    // Mobile menu
    const menuBtn = document.getElementById('menuBtn');
    const mobileNav = document.getElementById('mobileNav');
    const mobileNavClose = document.getElementById('mobileNavClose');

    if (menuBtn && mobileNav) {
        menuBtn.addEventListener('click', () => mobileNav.classList.add('active'));
        mobileNavClose?.addEventListener('click', () => mobileNav.classList.remove('active'));
    }

    // Hero Slider
    const heroSlider = () => {
        const slides = document.querySelectorAll('.hero-slide');
        const dotsContainer = document.getElementById('heroDots');
        const prevBtn = document.getElementById('heroPrev');
        const nextBtn = document.getElementById('heroNext');

        if (!slides.length) return;

        let currentIndex = 0;
        let slideInterval;

        // Create dots
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('slider-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });

        const dots = document.querySelectorAll('.slider-dot');

        const goToSlide = (index) => {
            slides[currentIndex].classList.remove('active');
            dots[currentIndex].classList.remove('active');

            currentIndex = (index + slides.length) % slides.length;

            slides[currentIndex].classList.add('active');
            dots[currentIndex].classList.add('active');

            resetInterval();
        };

        const nextSlide = () => goToSlide(currentIndex + 1);
        const prevSlide = () => goToSlide(currentIndex - 1);

        const resetInterval = () => {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 5000);
        };

        nextBtn?.addEventListener('click', nextSlide);
        prevBtn?.addEventListener('click', prevSlide);

        resetInterval();
    };

    heroSlider();

    // Home page - New products
    const productGrid = document.getElementById('productGrid');
    if (productGrid) {
        renderProducts(productGrid, p => p.badge === 'new');
    }

    // Home page - Best products  
    const bestGrid = document.getElementById('bestGrid');
    if (bestGrid) {
        renderProducts(bestGrid, p => p.badge === 'best');
    }

    // Collection page
    const collectionGrid = document.getElementById('collectionGrid');
    if (collectionGrid) {
        renderProducts(collectionGrid);

        // Category filter
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.dataset.filter;
                if (filter === 'all') {
                    renderProducts(collectionGrid);
                } else {
                    renderProducts(collectionGrid, p => p.category === filter);
                }
            });
        });
    }

    // Cart functionality
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');

    function updateCartCount() {
        const cartCounts = document.querySelectorAll('.cart-count');
        cartCounts.forEach(el => {
            el.textContent = cart.length;
        });
    }

    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        if (product && !cart.find(item => item.id === productId)) {
            cart.push({ ...product, quantity: 1 });
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            showNotification('장바구니에 추가되었습니다');
        }
    }

    // Add to cart buttons
    document.addEventListener('click', e => {
        const addBtn = e.target.closest('.add-to-cart');
        if (addBtn) {
            const productId = parseInt(addBtn.dataset.id);
            addToCart(productId);
        }
    });

    updateCartCount();

    // Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Basic validation
            const name = document.getElementById('name').value;
            const contact = document.getElementById('contact').value;
            const privacyAgree = document.getElementById('privacyAgree').checked;

            if (!name || !contact || !privacyAgree) {
                alert('필수 항목을 모두 입력해주세요.');
                return;
            }

            // Mock submission
            alert('문의가 접수되었습니다. 빠른 시일 내에 답변 드리겠습니다.');
            contactForm.reset();
        });
    }

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, observerOptions);

    document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));
});

// Notification
function showNotification(message) {
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        background: #1A1A1A;
        color: white;
        padding: 16px 32px;
        font-size: 14px;
        z-index: 9999;
        animation: fadeInUp 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.3s';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}
