/**
 * Party Sziget - Main JavaScript File
 * 
 * This file contains all the interactive functionality for the Party Sziget website.
 * It handles mobile menu, dynamic content loading, form validation, and animations.
 */

// Initialize Lucide icons when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    try {
        lucide.createIcons();
    } catch (error) {
        console.warn('Lucide icons could not be initialized:', error);
    }
});

// ============================================================================
// DATA STRUCTURES
// ============================================================================

/**
 * Featured products data
 * @type {Array<Object>}
 */
const products = [
    {
        id: 1,
        name: 'Virágcsokor meglepetéssel',
        price: '5.900 Ft',
        image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        category: 'Virágok',
        alt: 'Gyönyörű virágcsokor különböző színekben'
    },
    {
        id: 2,
        name: 'Egyedi bögre',
        price: '2.500 Ft',
        image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        category: 'Ajándékok',
        alt: 'Személyre szabott bögre ajándék'
    },
    {
        id: 3,
        name: 'Ballagási ajándékcsomag',
        price: '8.900 Ft',
        image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        category: 'Ballagás',
        alt: 'Komplett ballagási ajándékcsomag'
    },
    {
        id: 4,
        name: 'Plüss mackó',
        price: '3.900 Ft',
        image: 'https://images.unsplash.com/photo-1559570278-eb8d71d06403?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        category: 'Plüssök',
        alt: 'Puha plüss mackó játék'
    }
];

/**
 * Product categories data
 * @type {Array<Object>}
 */
const categories = [
    {
        id: 1,
        name: 'Ballagás',
        description: 'Ajándékok a tanulmányok lezárásához',
        icon: 'gift',
        color: 'bg-purple-500',
        image: 'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        alt: 'Ballagási ajándékok és dekorációk'
    },
    {
        id: 2,
        name: 'Szülinap',
        description: 'Színes dekorációk és ajándékok',
        icon: 'cake',
        color: 'bg-pink-500',
        image: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        alt: 'Szülinapi dekorációk és ajándékok'
    },
    {
        id: 3,
        name: 'Plüssök',
        description: 'Puha játékok minden korosztálynak',
        icon: 'heart',
        color: 'bg-yellow-400',
        image: 'https://images.unsplash.com/photo-1535979863199-3c77338429a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        alt: 'Plüss játékok és mackók'
    },
    {
        id: 4,
        name: 'Virágok',
        description: 'Egyedi virágcsokrok és kompozíciók',
        icon: 'flower',
        color: 'bg-blue-400',
        image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
        alt: 'Egyedi virágcsokrok és kompozíciók'
    }
];

/**
 * Customer testimonials data
 * @type {Array<Object>}
 */
const testimonials = [
    {
        id: 1,
        name: 'Kovács Anna',
        text: 'Gyönyörű virágcsokrot készítettek a ballagásomra. Mindenki megdicsérte, és a kis plüss meglepetés is nagyon aranyos volt mellette!',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
        alt: 'Kovács Anna profilképe'
    },
    {
        id: 2,
        name: 'Nagy Péter',
        text: 'A feleségem imádta a születésnapi ajándékcsomagot. A személyre szabott bögre különösen tetszett neki. Biztosan visszatérünk még!',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
        alt: 'Nagy Péter profilképe'
    },
    {
        id: 3,
        name: 'Szabó Klára',
        text: 'Nagyon kedvesek voltak az üzletben, és segítettek kiválasztani a tökéletes ajándékot a barátomnak. Az egyedi csomagolás is gyönyörű lett!',
        rating: 4,
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
        alt: 'Szabó Klára profilképe'
    }
];

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Safely get element by ID
 * @param {string} id - Element ID
 * @returns {HTMLElement|null} - Element or null if not found
 */
function getElement(id) {
    return document.getElementById(id);
}

/**
 * Show notification message
 * @param {string} message - Message to display
 * @param {string} type - Type of notification ('success' or 'error')
 */
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 transition-all duration-300 ${
        type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
        notification.style.opacity = '1';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        notification.style.opacity = '0';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} - True if valid
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ============================================================================
// MOBILE MENU FUNCTIONALITY
// ============================================================================

/**
 * Initialize mobile menu functionality
 */
function initMobileMenu() {
    const mobileMenuBtn = getElement('mobile-menu-btn');
    const mobileMenu = getElement('mobile-menu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

    if (!mobileMenuBtn || !mobileMenu) {
        console.warn('Mobile menu elements not found');
        return;
    }

    // Toggle menu
    mobileMenuBtn.addEventListener('click', () => {
        const isOpen = !mobileMenu.classList.contains('hidden');
        
        if (isOpen) {
            mobileMenu.classList.add('hidden');
            mobileMenuBtn.innerHTML = '<i data-lucide="menu" class="h-6 w-6" aria-hidden="true"></i>';
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        } else {
            mobileMenu.classList.remove('hidden');
            mobileMenuBtn.innerHTML = '<i data-lucide="x" class="h-6 w-6" aria-hidden="true"></i>';
            mobileMenuBtn.setAttribute('aria-expanded', 'true');
        }
        
        // Reinitialize icons
        try {
            lucide.createIcons();
        } catch (error) {
            console.warn('Could not reinitialize icons:', error);
        }
    });

    // Close menu when clicking on links
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenuBtn.innerHTML = '<i data-lucide="menu" class="h-6 w-6" aria-hidden="true"></i>';
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            
            try {
                lucide.createIcons();
            } catch (error) {
                console.warn('Could not reinitialize icons:', error);
            }
        });
    });
}

// ============================================================================
// CONTENT LOADING FUNCTIONS
// ============================================================================

/**
 * Load featured products into the DOM
 */
function loadFeaturedProducts() {
    const productsContainer = getElement('featured-products');
    
    if (!productsContainer) {
        console.warn('Featured products container not found');
        return;
    }

    const productsHTML = products.map(product => `
        <article class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 product-card animate-fade-in-up" role="listitem">
            <div class="h-48 overflow-hidden">
                <img src="${product.image}" 
                     alt="${product.alt}" 
                     class="w-full h-full object-cover"
                     loading="lazy">
            </div>
            <div class="p-4">
                <span class="text-xs font-semibold text-pink-500 bg-pink-100 py-1 px-2 rounded-full">
                    ${product.category}
                </span>
                <h3 class="mt-2 text-lg font-semibold text-gray-800">
                    ${product.name}
                </h3>
                <div class="mt-2 flex justify-between items-center">
                    <span class="font-bold text-purple-600">
                        ${product.price}
                    </span>
                    <button class="bg-yellow-400 hover:bg-yellow-300 text-purple-800 text-sm font-bold py-1 px-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500">
                        Részletek
                    </button>
                </div>
            </div>
        </article>
    `).join('');

    productsContainer.innerHTML = productsHTML;
}

/**
 * Load product categories into the DOM
 */
function loadProductCategories() {
    const categoriesContainer = getElement('product-categories');
    
    if (!categoriesContainer) {
        console.warn('Product categories container not found');
        return;
    }

    const categoriesHTML = categories.map(category => `
        <article class="bg-white rounded-xl shadow-md overflow-hidden transform transition-all hover:shadow-xl hover:-translate-y-1 category-card animate-fade-in-up" role="listitem">
            <div class="relative h-48">
                <img src="${category.image}" 
                     alt="${category.alt}" 
                     class="w-full h-full object-cover"
                     loading="lazy">
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <h3 class="text-xl font-bold text-white">
                        ${category.name}
                    </h3>
                </div>
                <div class="absolute top-4 right-4 ${category.color} p-2 rounded-full shadow-lg">
                    <i data-lucide="${category.icon}" class="h-8 w-8 text-white" aria-hidden="true"></i>
                </div>
            </div>
            <div class="p-4">
                <p class="text-gray-600 mb-4">${category.description}</p>
                <button class="w-full bg-pink-100 hover:bg-pink-200 text-pink-600 font-medium py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500">
                    Fedezd fel
                </button>
            </div>
        </article>
    `).join('');
    
    categoriesContainer.innerHTML = categoriesHTML;
    
    // Reinitialize icons
    try {
        lucide.createIcons();
    } catch (error) {
        console.warn('Could not reinitialize icons:', error);
    }
}

/**
 * Load testimonials into the DOM
 */
function loadTestimonials() {
    const testimonialsContainer = getElement('testimonials-container');
    
    if (!testimonialsContainer) {
        console.warn('Testimonials container not found');
        return;
    }

    const testimonialsHTML = testimonials.map(testimonial => `
        <article class="bg-white rounded-2xl shadow-lg p-6 relative testimonial-card animate-fade-in-up" role="listitem">
            <div class="absolute -top-3 -left-3 bg-pink-500 p-2 rounded-full shadow-md">
                <i data-lucide="quote" class="h-6 w-6 text-white" aria-hidden="true"></i>
            </div>
            <div class="flex items-center mb-4">
                <img src="${testimonial.image}" 
                     alt="${testimonial.alt}" 
                     class="w-12 h-12 rounded-full object-cover mr-4"
                     loading="lazy">
                <div>
                    <h3 class="font-semibold text-gray-800">
                        ${testimonial.name}
                    </h3>
                    <div class="flex" role="img" aria-label="${testimonial.rating} csillag ${testimonial.rating} csillagból">
                        ${Array(testimonial.rating).fill().map(() => '<i data-lucide="star" class="h-4 w-4 text-yellow-400" fill="#FBBF24" aria-hidden="true"></i>').join('')}
                        ${Array(5 - testimonial.rating).fill().map(() => '<i data-lucide="star" class="h-4 w-4 text-gray-300" fill="#D1D5DB" aria-hidden="true"></i>').join('')}
                    </div>
                </div>
            </div>
            <blockquote class="text-gray-600 italic">"${testimonial.text}"</blockquote>
        </article>
    `).join('');
    
    testimonialsContainer.innerHTML = testimonialsHTML;
    
    // Reinitialize icons
    try {
        lucide.createIcons();
    } catch (error) {
        console.warn('Could not reinitialize icons:', error);
    }
}

// ============================================================================
// FORM HANDLING
// ============================================================================

/**
 * Initialize contact form functionality
 */
function initContactForm() {
    const contactForm = getElement('contact-form');
    
    if (!contactForm) {
        console.warn('Contact form not found');
        return;
    }

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name')?.trim();
        const email = formData.get('email')?.trim();
        const subject = formData.get('subject')?.trim();
        const message = formData.get('message')?.trim();
        
        // Validation
        if (!name || !email || !subject || !message) {
            showNotification('Kérjük, töltsd ki az összes mezőt!', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Kérjük, adj meg egy érvényes e-mail címet!', 'error');
            return;
        }
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.innerHTML = '<span class="loading"></span> Küldés...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            showNotification('Köszönjük az üzenetet! Hamarosan felvesszük veled a kapcsolatot.', 'success');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// ============================================================================
// SCROLL AND ANIMATION FUNCTIONS
// ============================================================================

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header')?.offsetHeight || 0;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Initialize scroll-based animations
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.product-card, .category-card, .testimonial-card');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// ============================================================================
// INTERACTIVE FEATURES
// ============================================================================

/**
 * Add interactive features to the page
 */
function addInteractiveFeatures() {
    // Add hover effects to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
    });
    
    // Add loading state to hero buttons
    const heroButtons = document.querySelectorAll('main a[href^="#"]');
    heroButtons.forEach(button => {
        button.addEventListener('click', () => {
            const originalText = button.textContent;
            button.innerHTML = '<span class="loading"></span> Betöltés...';
            button.style.pointerEvents = 'none';
            
            setTimeout(() => {
                button.textContent = originalText;
                button.style.pointerEvents = 'auto';
            }, 1500);
        });
    });
}

// ============================================================================
// INITIALIZATION
// ============================================================================

/**
 * Initialize all functionality when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', () => {
    try {
        // Initialize all functionality
        initMobileMenu();
        loadFeaturedProducts();
        loadProductCategories();
        loadTestimonials();
        initContactForm();
        initSmoothScrolling();
        initScrollAnimations();
        addInteractiveFeatures();
        
        // Add image error handling
        document.querySelectorAll('img').forEach(img => {
            img.addEventListener('error', handleImageError);
        });
        
        // Add contact form submission handler
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', handleFormSubmit);
        }
        
    } catch (error) {
        console.error('Error initializing website:', error);
    }
});

// ============================================================================
// EXPORT FOR EXTERNAL USE
// ============================================================================

// Export functions for potential external use
window.PartySziget = {
    showNotification,
    loadFeaturedProducts,
    loadProductCategories,
    loadTestimonials,
    isValidEmail
};

/**
 * Handle contact form submission
 * @param {Event} event - Form submit event
 */
function handleFormSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    console.log('Form data:', data);
    
    // Validate form data
    const { name, email, subject, message } = data;
    
    if (!name || !email || !subject || !message) {
        showNotification('Kérjük, töltsd ki az összes mezőt!', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('Kérjük, adj meg egy érvényes e-mail címet!', 'error');
        return;
    }
    
    // Simulate form submission
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.innerHTML = '<span class="loading"></span> Küldés...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        showNotification('Köszönjük az üzenetet! Hamarosan felvesszük veled a kapcsolatot.', 'success');
        event.target.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

function handleImageError(event) {
    event.target.src = 'https://via.placeholder.com/400x300?text=Kép+nem+elérhető';
} 