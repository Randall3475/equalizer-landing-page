export default function Hero() {
  return (
    <>
      <section
        aria-label="Hero"
        className="container mx-auto desktop:px-4 tablet:px-[40px] px-[24px] desktop:mt-[127px] tablet:mt-[95px] mt-[64px] grid desktop:gap-y-[40px] tablet:gap-y-7 gap-y-[20px]"
      >
        <h1 className="desktop:max-w-[1015px] tablet:max-w-[520px] text-sr-black font-bold desktop:text-[88px] desktop:leading-[88px] tablet:text-[64px] tablet:leading-[64px] text-[40px] leading-[48px] isolate">
          We make your music sound extraordinary.
        </h1>
        <p className="desktop:max-w-[825px] tablet:max-w-[514px] text-pr-black desktop:text-[20px] desktop:leading-[34px] tablet:text-[18px] leading-[28px] isolate">
          A system audio equalizer specifically designed for Android and iOS.
          Freely tune the way your music sounds with a professional grade
          parametric EQ & volume mixer. Control bass, mids, treble, gain
          control, reverb, and more!
        </p>
      </section>
    </>
  );
}
