import { useEffect } from "react";

// Observe an element and call onIntersect when it enters the viewport.
export function useIntersection(ref, onIntersect) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) onIntersect();
      },
      { threshold: 0.1, rootMargin: "300px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, onIntersect]);
}
