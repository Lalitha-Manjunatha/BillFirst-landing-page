const items = [
  "CHEEKY ACCOUNTABILITY",
  "NO SHAME",
  "YOUR MONEY'S MOOD, MADE VISIBLE",
  "COACH, NOT JUDGE",
  "GLOW IS THE SIGNAL",
  "BILLS FIRST, REGRETS NEVER",
];

const Row = () => (
  <div className="flex shrink-0 items-center">
    {items.map((item) => (
      <span key={item} className="flex items-center">
        <span className="whitespace-nowrap px-10 font-display text-2xl font-medium tracking-tight text-sand md:text-3xl">
          {item}
        </span>
        <span className="text-sona-orange">◆</span>
      </span>
    ))}
  </div>
);

const Marquee = () => {
  return (
    <section
      data-testid="marquee-section"
      className="relative overflow-hidden border-y border-[rgba(255,196,71,0.12)] bg-elevated/40 py-6"
    >
      <div className="flex w-max animate-marquee">
        <Row />
        <Row />
      </div>
    </section>
  );
};

export default Marquee;
