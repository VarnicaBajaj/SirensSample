import gsap from 'gsap';

export class CustomCursor {
  private cursor: HTMLElement;
  private cursorInner: HTMLElement;
  private isHovering: boolean = false;

  constructor() {
    this.cursor = document.createElement('div');
    this.cursorInner = document.createElement('div');

    this.cursor.classList.add('custom-cursor');
    this.cursorInner.classList.add('custom-cursor-inner');

    this.cursor.appendChild(this.cursorInner);
    document.body.appendChild(this.cursor);

    this.init();
  }

  private init() {
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    const animate = () => {
      const dx = mouseX - cursorX;
      const dy = mouseY - cursorY;

      cursorX += dx * 0.15;
      cursorY += dy * 0.15;

      this.cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;

      requestAnimationFrame(animate);
    };

    animate();

    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .ocean-card, .neon-card, .siren-card');

    interactiveElements.forEach((element) => {
      element.addEventListener('mouseenter', () => this.expand());
      element.addEventListener('mouseleave', () => this.contract());
    });

    document.addEventListener('mousedown', () => this.shrink());
    document.addEventListener('mouseup', () => this.expand());
  }

  private expand() {
    if (this.isHovering) return;
    this.isHovering = true;

    gsap.to(this.cursor, {
      scale: 2,
      duration: 0.4,
      ease: 'power2.out'
    });

    gsap.to(this.cursorInner, {
      scale: 0.5,
      duration: 0.4,
      ease: 'power2.out'
    });
  }

  private contract() {
    this.isHovering = false;

    gsap.to(this.cursor, {
      scale: 1,
      duration: 0.4,
      ease: 'power2.out'
    });

    gsap.to(this.cursorInner, {
      scale: 1,
      duration: 0.4,
      ease: 'power2.out'
    });
  }

  private shrink() {
    gsap.to(this.cursor, {
      scale: 0.8,
      duration: 0.2,
      ease: 'power2.out'
    });
  }

  public destroy() {
    this.cursor.remove();
  }
}
