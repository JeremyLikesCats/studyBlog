import React, { useEffect, useRef, useState } from 'react';
import { ActivityCalendar } from 'react-activity-calendar';

interface Props {
  data: Array<{ date: string; count: number; level: 0 | 1 | 2 | 3 | 4 }>;
}

const MIN_BLOCK = 16;
const GAP = 3;

const heat = [
  'var(--heat-0)',
  'var(--heat-1)',
  'var(--heat-2)',
  'var(--heat-3)',
  'var(--heat-4)',
] as const;

export default function StudyHeatmap({ data }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [weeks, setWeeks] = useState(16);
  const [blockSize, setBlockSize] = useState(MIN_BLOCK);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const apply = () => {
      const width = el.clientWidth;
      if (width <= 0) return;

      const col = MIN_BLOCK + GAP;
      const fit = Math.max(4, Math.floor(width / col));
      setWeeks(fit);
      setBlockSize(Math.max(MIN_BLOCK, Math.floor(width / fit) - GAP));
      setReady(true);
    };

    apply();
    const id = requestAnimationFrame(() => {
      apply();
      if (!el.clientWidth) setReady(true); // don't stay blank forever
    });

    const ro = new ResizeObserver(apply);
    ro.observe(el);

    return () => {
      cancelAnimationFrame(id);
      ro.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className="study-heatmap-wrapper">
      {ready && (
        <ActivityCalendar
          data={data.slice(-(weeks * 7))}
          blockSize={blockSize}
          blockMargin={GAP}
          showWeekdayLabels={false}
          labels={{
            legend: { less: 'Less', more: 'More' },
            totalCount: '{{count}} hours studied in {{year}}',
          }}
          theme={{ light: [...heat], dark: [...heat] }}
        />
      )}
    </div>
  );
}