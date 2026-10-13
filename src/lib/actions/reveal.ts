/**
 * Svelte action: reveal an element when it scrolls into view.
 * Usage: <div use:reveal>  or  <div use:reveal={{ threshold: 0.2, once: true }}>
 */
type RevealOptions = {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
};

export function reveal(node: HTMLElement, options: RevealOptions = {}) {
  const { threshold = 0.15, rootMargin = '0px 0px -8% 0px', once = true } = options;

  if (typeof IntersectionObserver === 'undefined') {
    node.classList.add('is-visible');
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          node.classList.add('is-visible');
          if (once) observer.unobserve(node);
        } else if (!once) {
          node.classList.remove('is-visible');
        }
      }
    },
    { threshold, rootMargin }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}
