/**
 * Ambient Liquid-Glass Visual System
 * Connected glass-gradient formations providing visual continuity across scroll:
 * A — Large translucent icy-teal glass formation (#A8DAD5 / #397F7B)
 * B — Deep-teal flowing gradient formation (#397F7B / #202326)
 * C — Warm-orange illuminated glass accent (#F08A55 / #D85D52)
 */
export function LiquidGlassBackdrop() {
  return (
    <div
      aria-hidden="true"
      data-liquid-stage
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Formation A: Large translucent icy-teal glass formation */}
      <div
        data-glass-formation="icy"
        className="absolute -right-[10vw] top-[4vh] h-[74vh] w-[62vw] max-w-[880px] min-w-[320px] opacity-95"
        style={{
          WebkitMaskImage:
            'radial-gradient(ellipse 76% 74% at 50% 50%, rgba(0,0,0,1) 28%, rgba(0,0,0,0) 80%)',
          maskImage:
            'radial-gradient(ellipse 76% 74% at 50% 50%, rgba(0,0,0,1) 28%, rgba(0,0,0,0) 80%)',
        }}
      >
        <div
          className="liquid-glass-icy animate-liquid-float h-full w-full"
          style={{
            borderRadius: '44% 56% 62% 38% / 48% 42% 58% 52%',
          }}
        />
      </div>

      {/* Formation B: Deep-teal flowing gradient formation */}
      <div
        data-glass-formation="deep"
        className="absolute -left-[16vw] top-[30vh] h-[82vh] w-[76vw] max-w-[1120px] min-w-[360px] opacity-85"
        style={{
          WebkitMaskImage:
            'radial-gradient(ellipse 76% 70% at 50% 50%, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 78%)',
          maskImage:
            'radial-gradient(ellipse 76% 70% at 50% 50%, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 78%)',
        }}
      >
        <div
          className="liquid-glass-deep h-full w-full"
          style={{
            borderRadius: '58% 42% 46% 54% / 40% 62% 38% 60%',
          }}
        />
      </div>

      {/* Formation C: Small warm-orange illuminated glass accent */}
      <div
        data-glass-formation="orange"
        className="absolute right-[12vw] top-[52vh] h-[38vh] w-[32vw] max-w-[440px] min-w-[210px] opacity-75"
        style={{
          WebkitMaskImage:
            'radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 18%, rgba(0,0,0,0) 76%)',
          maskImage:
            'radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 18%, rgba(0,0,0,0) 76%)',
        }}
      >
        <div
          className="liquid-glass-orange h-full w-full"
          style={{
            borderRadius: '52% 48% 36% 64% / 56% 38% 62% 44%',
          }}
        />
      </div>

      {/* Subtle atmospheric film grain */}
      <div className="editorial-grain absolute inset-0" />
    </div>
  );
}
