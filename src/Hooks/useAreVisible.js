import { useEffect, useState } from "react";

export default function useIsVisible(refs) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => console.log(entry));
      setIntersecting(entry.isIntersecting);
      console.log(entry);
      entry.forEach((en) => {
        if (en.isIntersecting) {
          setIntersecting(en.target.id);
        }
      });
      if (entry[0].isIntersecting) {
        console.log(entry[0].target.id, entry[0].isIntersecting);
      }
    });

    refs.current.forEach((ref) => observer.observe(ref));
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [refs]);

  return isIntersecting;
}
