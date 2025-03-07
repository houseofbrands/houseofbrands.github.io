// script.js

// Simplified version of AOS functionality
const initializeAOS = () => {
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            } else if (!window.keepAnimated) {
                entry.target.classList.remove('aos-animate');
            }
        });
    };

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    document.querySelectorAll('[data-aos]').forEach(element => {
        observer.observe(element);
    });
};

document.addEventListener('DOMContentLoaded', function() {
    // Initialize our animation observer
    initializeAOS();
    window.keepAnimated = true;

    // Parallax scrolling effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
        }
    });

    // Read More functionality for expertise cards
    const readMoreLinks = document.querySelectorAll('.read-more-link');
    
    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.expertise-card');
            const content = card.querySelector('.card-full-content').innerHTML;
            const title = card.querySelector('h3').textContent;
            
            const overlay = document.createElement('div');
            overlay.className = 'fullscreen-overlay';
            
            const contentContainer = document.createElement('div');
            contentContainer.className = 'overlay-content';
            
            const closeBtn = document.createElement('button');
            closeBtn.className = 'overlay-close';
            closeBtn.innerHTML = '×';
            
            const titleElement = document.createElement('h2');
            titleElement.textContent = title;
            
            const contentElement = document.createElement('div');
            contentElement.className = 'overlay-text';
            contentElement.innerHTML = content;
            
            contentContainer.appendChild(closeBtn);
            contentContainer.appendChild(titleElement);
            contentContainer.appendChild(contentElement);
            overlay.appendChild(contentContainer);
            
            document.body.appendChild(overlay);
            document.body.classList.add('no-scroll');
            
            setTimeout(() => {
                overlay.classList.add('active');
            }, 10);
            
            closeBtn.addEventListener('click', function() {
                overlay.classList.remove('active');
                setTimeout(() => {
                    document.body.removeChild(overlay);
                    document.body.classList.remove('no-scroll');
                }, 300);
            });
        });
    });

    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.expertise-card');
            card.classList.toggle('expanded');
            
            if (card.classList.contains('expanded')) {
                this.textContent = 'Read Less';
            } else {
                this.textContent = 'Read More';
                setTimeout(() => {
                    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 100);
            }
        });
    });

    // Horizontal scroll animation for brands and gallery
    const scrollSections = document.querySelectorAll('.scroll-container');
    
    scrollSections.forEach(section => {
        let isVisible = false;
        let scrollProgress = 0;
        const content = section.querySelector('.scroll-content');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                isVisible = entry.isIntersecting;
            });
        }, { threshold: 0.1 });
        
        observer.observe(section);
        
        window.addEventListener('scroll', () => {
            if (isVisible && content) {
                const rect = section.getBoundingClientRect();
                const sectionProgress = (window.innerHeight - rect.top) / 
                                     (window.innerHeight + rect.height);
                scrollProgress = Math.max(0, Math.min(1, sectionProgress));
                
                const maxScroll = content.scrollWidth - section.clientWidth;
                const scrollX = maxScroll * scrollProgress;
                
                content.style.transform = `translateX(-${scrollX}px)`;
            }
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Global Gallery Navigation
    const globalGallery = document.querySelector('.global-gallery .scroll-container');
    const galleryContent = document.querySelector('.global-gallery .scroll-content');
    const originalItems = Array.from(document.querySelectorAll('.gallery-item'));
    const itemWidth = 400; // Width of each gallery item
    const gap = 32; // Gap between items (2rem)
    const itemsPerSet = originalItems.length;
    const setWidth = (itemWidth + gap) * itemsPerSet;
    const animationDuration = 600; // Match CSS transition duration

    // Clone items for infinite loop
    function updateClones() {
        galleryContent.innerHTML = ''; // Clear existing content
        const visibleSets = Math.ceil(window.innerWidth / setWidth) + 1; // Enough sets to fill screen plus buffer
        
        // Add multiple sets of items
        for (let i = 0; i < visibleSets + 1; i++) {
            originalItems.forEach(item => {
                const clone = item.cloneNode(true);
                galleryContent.appendChild(clone);
            });
        }
    }

    // Initial clone setup
    updateClones();

    // Create and add navigation buttons
    const prevBtn = document.createElement('button');
    prevBtn.className = 'gallery-nav prev-btn';
    prevBtn.innerHTML = '<';
    
    const nextBtn = document.createElement('button');
    nextBtn.className = 'gallery-nav next-btn';
    nextBtn.innerHTML = '>';
    
    globalGallery.insertBefore(prevBtn, galleryContent);
    globalGallery.appendChild(nextBtn);

    let currentPosition = 0;
    let isAnimating = false;

    function updateGallery(instant = false) {
        if (isAnimating && !instant) return;
        
        galleryContent.style.transition = instant ? 'none' : 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        galleryContent.style.transform = `translateX(${currentPosition}px)`;
        
        if (!instant) {
            isAnimating = true;
            setTimeout(() => {
                isAnimating = false;
                // Check if we need to reset position
                if (Math.abs(currentPosition) >= setWidth) {
                    currentPosition += setWidth;
                    galleryContent.style.transition = 'none';
                    galleryContent.style.transform = `translateX(${currentPosition}px)`;
                } else if (currentPosition > 0) {
                    currentPosition -= setWidth;
                    galleryContent.style.transition = 'none';
                    galleryContent.style.transform = `translateX(${currentPosition}px)`;
                }
            }, animationDuration);
        }
    }

    function moveGallery(direction) {
        if (isAnimating) return;
        const step = (itemWidth + gap) * direction;
        currentPosition -= step;
        updateGallery();
    }

    prevBtn.addEventListener('click', () => moveGallery(-1));
    nextBtn.addEventListener('click', () => moveGallery(1));

    // Auto-scroll functionality with infinite loop
    let autoScrollInterval;
    const autoScrollIntervalTime = 3000; // 3 seconds between slides
    const totalAutoScrollTime = autoScrollIntervalTime + animationDuration; // Account for animation time

    function startAutoScroll() {
        stopAutoScroll(); // Clear any existing interval
        autoScrollInterval = setInterval(() => {
            if (!isAnimating) {
                moveGallery(1);
            }
        }, totalAutoScrollTime);
    }

    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
    }

    // Start auto-scroll
    startAutoScroll();

    // Pause on hover
    globalGallery.addEventListener('mouseenter', stopAutoScroll);
    globalGallery.addEventListener('mouseleave', startAutoScroll);

    // Add touch event handling for mobile devices
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoScroll(); // Pause autoscroll on touch
    });

    document.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startAutoScroll(); // Resume autoscroll after swipe
    });

    function handleSwipe() {
        const swipeDistance = touchEndX - touchStartX;
        if (Math.abs(swipeDistance) > 50) {
            moveGallery(swipeDistance > 0 ? -1 : 1);
        }
    }

    // Add resize handler for responsive behavior
    window.addEventListener('resize', () => {
        stopAutoScroll();
        updateClones();
        currentPosition = 0;
        updateGallery(true);
        startAutoScroll();
    });

    // Initial position
    updateGallery(true);
});

// Add touch event handling for mobile devices (outside DOMContentLoaded)
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeDistance = touchEndX - touchStartX;
    const scrollContainers = document.querySelectorAll('.scroll-container');
    
    scrollContainers.forEach(container => {
        const content = container.querySelector('.scroll-content');
        if (Math.abs(swipeDistance) > 50) {
            const currentTransform = content.style.transform;
            const currentX = currentTransform ? 
                parseInt(currentTransform.replace(/[^\d-]/g, '')) : 0;
            
            const maxScroll = content.scrollWidth - container.clientWidth;
            const newX = Math.max(Math.min(currentX - swipeDistance, maxScroll), 0);
            
            content.style.transform = `translateX(-${newX}px)`;
        }
    });
}

// Add resize handler for responsive behavior
window.addEventListener('resize', () => {
    document.querySelectorAll('.scroll-content').forEach(content => {
        content.style.transform = 'translateX(0)';
    });
});