import { Flame } from 'lucide-react';

interface SpiceIndicatorProps {
  level: 0 | 1 | 2 | 3;
  label: string;
}

export default function SpiceIndicator({ level, label }: SpiceIndicatorProps) {
  if (level === 0) {
    return (
      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-bark-500">
        <Flame size={11} className="text-bark-300" />
        {label}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-0.5">
      {Array.from({ length: 3 }).map((_, i) => (
        <Flame
          key={i}
          size={12}
          className={i < level ? 'text-chili-600' : 'text-bark-200'}
        />
      ))}
      <span className="ml-1 text-[11px] font-medium text-bark-600">{label}</span>
    </span>
  );
}
