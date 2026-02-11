import { useEffect, useMemo, useState } from "react";

export default function useScrollSpy(sectionIds = []) {
  const ids = useMemo(() => sectionIds.filter(Boolean), [sectionIds]);
  const [activeId, setActiveId] = useState(ids[0] ?? "");

  useEffect(() => {
    if (!ids.length) return;

    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          )[0];

        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      {
        root: null,
        threshold: [0, 0.05, 0.1, 0.2],
        rootMargin: `-90px 0px 0% 0px`,

        
      }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids]);

  return activeId;
}
