import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initPageLoadAnimation = () => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.from('body', {
    opacity: 0,
    duration: 0.6
  })
  .from('.hero h1', {
    y: 100,
    opacity: 0,
    duration: 1.2,
    stagger: 0.15
  }, '-=0.3')
  .from('.hero p', {
    y: 60,
    opacity: 0,
    duration: 1,
  }, '-=0.8')
  .from('.hero button', {
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1
  }, '-=0.6')
  .from('.ocean-sound-wave', {
    scaleX: 0,
    opacity: 0,
    duration: 1,
    ease: 'power2.inOut'
  }, '-=0.5');
};

export const initScrollAnimations = () => {
  const sections = document.querySelectorAll('section:not(#hero)');

  sections.forEach((section) => {
    const heading = section.querySelector('h2, h3');
    const cards = section.querySelectorAll('.ocean-card, .neon-card, .siren-card');
    const content = section.querySelectorAll('p, .service-item, .portfolio-item');

    if (heading) {
      gsap.from(heading, {
        scrollTrigger: {
          trigger: heading,
          start: 'top 85%',
          end: 'top 50%',
          toggleActions: 'play none none reverse'
        },
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
      });
    }

    if (cards.length > 0) {
      gsap.from(cards, {
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 30%',
          toggleActions: 'play none none reverse'
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }

    if (content.length > 0 && !section.querySelector('.ocean-card, .neon-card, .siren-card')) {
      gsap.from(content, {
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          end: 'top 50%',
          toggleActions: 'play none none reverse'
        },
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: 'power2.out'
      });
    }
  });

  const imageElements = document.querySelectorAll('img');
  imageElements.forEach((img) => {
    gsap.from(img, {
      scrollTrigger: {
        trigger: img,
        start: 'top 90%',
        end: 'top 60%',
        toggleActions: 'play none none reverse'
      },
      scale: 0.8,
      opacity: 0,
      duration: 1.2,
      ease: 'power2.out'
    });
  });
};

export const initParallaxEffects = () => {
  const parallaxElements = document.querySelectorAll('.underwater-particle, .floating-bubble, .light-ray');

  parallaxElements.forEach((element, index) => {
    const speed = 0.3 + (index % 3) * 0.2;

    gsap.to(element, {
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true
      },
      y: `${speed * 100}%`,
      ease: 'none'
    });
  });

  const sectionBackgrounds = document.querySelectorAll('section');
  sectionBackgrounds.forEach((section) => {
    gsap.to(section, {
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      },
      backgroundPositionY: '10%',
      ease: 'none'
    });
  });
};

export const initHoverAnimations = () => {
  const cards = document.querySelectorAll('.ocean-card, .neon-card, .siren-card');

  cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        scale: 1.02,
        y: -8,
        duration: 0.4,
        ease: 'power2.out'
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        scale: 1,
        y: 0,
        duration: 0.4,
        ease: 'power2.out'
      });
    });
  });

  const buttons = document.querySelectorAll('button, .ocean-button, .neon-btn');

  buttons.forEach((button) => {
    button.addEventListener('mouseenter', () => {
      gsap.to(button, {
        scale: 1.05,
        duration: 0.3,
        ease: 'back.out(2)'
      });
    });

    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  });
};

export const cleanupAnimations = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  gsap.killTweensOf('*');
};
