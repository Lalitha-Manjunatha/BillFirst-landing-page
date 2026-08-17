const GlowMeter = ({ value = 82, label = "GLOW" }) => {
  return (
    <div data-testid="glow-meter" className="w-full">
      <div className="flex items-end justify-between">
        <span className="text-[10px] font-semibold tracking-[0.25em] text-ash">{label}</span>
        <span className="tnum font-display text-xl font-bold text-sona-yellow">{value}</span>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-elevated">
        <div
          className="h-full rounded-full bg-gradient-to-r from-sona-yellow to-sona-orange shadow-[0_0_12px_rgba(255,150,40,0.7)]"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
};

export default GlowMeter;
