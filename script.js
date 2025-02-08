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
    
    // Observe all elements with data-aos attribute
    document.querySelectorAll('[data-aos]').forEach(element => {
        observer.observe(element);
    });
};

document.addEventListener('DOMContentLoaded', function() {
    // Initialize our animation observer
    initializeAOS();
    window.keepAnimated = true; // Keep animations once they've played

    // Parallax scrolling effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
        }
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
});

// Add touch event handling for mobile devices
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
        if (Math.abs(swipeDistance) > 50) { // Minimum swipe distance
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
    // Reset transforms on resize
    document.querySelectorAll('.scroll-content').forEach(content => {
        content.style.transform = 'translateX(0)';
    });
});