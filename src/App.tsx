import Header from './components/Header';
import Hero from './components/Hero';
import Service from './components/Service';
import Footer from './components/Footer';
export default function App() {
  return (
    <>
      <img
        className="absolute top-[-2rem] desktop:right-0 tablet:right-[-4.5rem] tablet:block hidden"
        src="./images/bg-pattern-1.svg"
        alt="Background pattern"
      />
      <Header />
      <Hero />
      <Service />
      <Footer />
    </>
  );
}
