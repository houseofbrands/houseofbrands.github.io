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

// Make sure this part of your script.js is correct
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

    // Read More functionality for expertise cards
    const readMoreLinks = document.querySelectorAll('.read-more-link');
    
    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.expertise-card');
            const content = card.querySelector('.card-full-content').innerHTML;
            const title = card.querySelector('h3').textContent;
            
            // Create overlay
            const overlay = document.createElement('div');
            overlay.className = 'fullscreen-overlay';
            
            // Create content container
            const contentContainer = document.createElement('div');
            contentContainer.className = 'overlay-content';
            
            // Add close button
            const closeBtn = document.createElement('button');
            closeBtn.className = 'overlay-close';
            closeBtn.innerHTML = '&times;';
            
            // Add title
            const titleElement = document.createElement('h2');
            titleElement.textContent = title;
            
            // Add content
            const contentElement = document.createElement('div');
            contentElement.className = 'overlay-text';
            contentElement.innerHTML = content;
            
            // Assemble the overlay
            contentContainer.appendChild(closeBtn);
            contentContainer.appendChild(titleElement);
            contentContainer.appendChild(contentElement);
            overlay.appendChild(contentContainer);
            
            // Add to body
            document.body.appendChild(overlay);
            document.body.classList.add('no-scroll');
            
            // Animation
            setTimeout(() => {
                overlay.classList.add('active');
            }, 10);
            
            // Close functionality
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
                
                // Smooth scroll back to the card top when collapsing
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