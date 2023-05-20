export default function Service() {
  return (
    <>
      <section
        aria-label="Service"
        className="container mx-auto tablet:h-[600px] relative bg-sr-black tablet:mt-[321px] mt-[166px] rounded-xl max-tablet:flex max-tablet:flex-col max-tablet:items-center"
      >
        <img
          className="z-50 tablet:absolute top-[-171px] desktop:left-[102px] tablet:left-[64px] desktop:max-w-[312px] tablet:max-w-[270px] max-w-[209px] max-tablet:mt-[-98px]"
          src="./images/illustration-app.png"
          alt="A smartphone for the Service section"
        />
        <img
          className="absolute desktop:ml-[336px] tablet:ml-[220px] tablet:top-[-2.6rem]"
          src="./images/bg-pattern-2.svg"
          alt="Pattern for Service section"
        />
        <div className="desktop:max-w-[446px] tablet:max-w-[399px] desktop:top-[80px] desktop:right-[96px] tablet:right-[58px] rounded-xl tablet:absolute bg-pr-orange desktop:pl-[54px] desktop:pt-[58px] desktop:pb-[48px] desktop:pr-[59px] tablet:top-[160px] tablet:p-[48px] z-50 px-[36px] py-[48px] max-tablet:mt-[48px]">
          <h2 className="text-sr-white desktop:text-[40px] desktop:leading-[52px] tablet:text-[32px] tablet:leading-[40px] font-bold desktop:mb-[22px] mb-[12px] text-[32px] leading-[40px]]">
            Premium EQ
          </h2>
          <p className="text-sr-white desktop:text-[20px] desktop:leading-[34px] desktop:mb-[39px] tablet:text-[18px] tablet:leading-[28px] mb-[36px] text-[18px] leading-[28px]">
            Get expert-level control with a robust equalizer, volume mixer, and
            spatial audio. Take your listening experience to a whole new level
            and access all our incredible features!
          </p>
          <div className="text-sr-white flex items-center gap-x-4 desktop:mb-[46px] mb-[32px]">
            <span className="text-[65px] leading-[52px] font-bold">$4</span>
            <span className="text-[20px] leading-[32px]">/ month</span>
          </div>
          <div className="flex flex-col tablet:gap-y-[30px] gap-y-4">
            <button className="bg-sr-black flex transition-colors hover:bg-pr-cyan items-center justify-center text-sr-white font-bold text-[18px] leading-[32px] gap-x-2 py-[15px] rounded-xl">
              <span>
                <img src="./images/icon-apple.svg" alt="Apple logo" />
              </span>
              <span>iOS Download</span>
            </button>
            <button className="bg-sr-white flex transition-colors hover:bg-pr-yellow items-center justify-center text-sr-black font-bold text-[18px] leading-[32px] gap-x-2 py-[15px] rounded-xl">
              <span>
                <img src="./images/icon-android.svg" alt="Android logo" />
              </span>
              <span>Android Download</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
