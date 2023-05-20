import Logo from './Logo';
export default function Header() {
  return (
    <>
      <header
        aria-label="Header"
        className="container mx-auto desktop:px-4 tablet:px-[40px] px-[24px] tablet:mt-[62px] mt-[40px]"
      >
        <Logo />
      </header>
    </>
  );
}
