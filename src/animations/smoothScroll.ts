import Lenis from 'lenis';

export class SmoothScroll {
  private lenis: Lenis;

  constructor() {
    this.lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    this.init();
  }

  private init() {
    const raf = (time: number) => {
      this.lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    const scrollToButtons = document.querySelectorAll('[data-scroll-to]');
    scrollToButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const target = button.getAttribute('data-scroll-to');
        if (target) {
          const element = document.querySelector(target);
          if (element) {
            this.lenis.scrollTo(element as HTMLElement, {
              offset: 0,
              duration: 1.5,
            });
          }
        }
      });
    });
  }

  public scrollTo(target: string | HTMLElement, options?: any) {
    this.lenis.scrollTo(target, options);
  }

  public destroy() {
    this.lenis.destroy();
  }

  public getInstance() {
    return this.lenis;
  }
}
