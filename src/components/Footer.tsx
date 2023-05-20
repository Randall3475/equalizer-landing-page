import Logo from './Logo';
export default function Footer() {
  return (
    <>
      <footer
        aria-label="Footer"
        className="container mx-auto desktop:px-4 tablet:px-[40px] px-[24px] flex justify-between pb-[91px] desktop:mt-[202px] tablet:mt-[183px] mt-[64px] tablet:flex-row flex-col max-tablet:gap-y-16"
      >
        <div className="flex gap-x-[138px] desktop:flex-row flex-col gap-y-8">
          <Logo />
          <div className="max-w-[366px]">
            <p>All rights reserved © Equalizer 2021</p>
            <p>
              Have any problems? Contact us via social media or email us at
              <b> equalizer@example.com</b>
            </p>
          </div>
        </div>
        <div className="flex desktop:items-center tablet:items-end gap-x-[20px]">
          <img src="./images/icon-facebook.svg" alt="Facebook icon" />
          <img src="./images/icon-instagram.svg" alt="Instagram icon" />
          <img src="./images/icon-twitter.svg" alt="Twitter icon" />
        </div>
      </footer>
    </>
  );
}
