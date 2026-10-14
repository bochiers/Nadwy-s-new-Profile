/**
 * Svelte action: "decode" / scramble text on hover or mount — terminal vibe.
 * Usage: <span use:scramble>text</span>  or  <span use:scramble={{ trigger: 'view' }}>
 */
type ScrambleOptions = {
  /** 'hover' decodes on hover, 'view' decodes once when visible, 'loop' restarts occasionally */
  trigger?: 'hover' | 'view' | 'loop';
  /** Characters used while scrambling */
  chars?: string;
  /** ms per frame */
  speed?: number;
};

const DEFAULT_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&*<>/\\[]{}=+-';

export function scramble(node: HTMLElement, options: ScrambleOptions = {}) {
  const { trigger = 'hover', chars = DEFAULT_CHARS, speed = 28 } = options;

  const original = node.textContent ?? '';
  if (!original.trim()) return;

  const reduced =
    typeof matchMedia !== 'undefined' &&
    matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) return;

  let raf = 0;
  let frame = 0;
  let running = false;

  const run = () => {
    if (running) return;
    running = true;
    frame = 0;
    const total = original.length;

    const tick = () => {
      // reveal progressively left-to-right
      const revealed = Math.floor((frame / 3) * 1.4);
      let out = '';

      for (let i = 0; i < total; i++) {
        const ch = original[i];
        if (ch === ' ') {
          out += ' ';
        } else if (i < revealed) {
          out += ch;
        } else {
          out += chars[(Math.random() * chars.length) | 0];
        }
      }

      node.textContent = out;
      frame++;

      if (revealed >= total) {
        node.textContent = original;
        running = false;
        return;
      }
      raf = window.setTimeout(tick, speed);
    };

    tick();
  };

  const onEnter = () => run();

  if (trigger === 'hover') {
    node.addEventListener('mouseenter', onEnter);
  } else if (trigger === 'view') {
    if (typeof IntersectionObserver === 'undefined') {
      run();
    } else {
      const obs = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              run();
              obs.unobserve(node);
            }
          }
        },
        { threshold: 0.4 }
      );
      obs.observe(node);
      return {
        destroy() {
          obs.disconnect();
          window.clearTimeout(raf);
        }
      };
    }
  } else {
    // loop — decode on mount and every few seconds
    run();
    const interval = window.setInterval(run, 4200);
    return {
      destroy() {
        window.clearInterval(interval);
        window.clearTimeout(raf);
        node.textContent = original;
      }
    };
  }

  return {
    destroy() {
      node.removeEventListener('mouseenter', onEnter);
      window.clearTimeout(raf);
      node.textContent = original;
    }
  };
}
