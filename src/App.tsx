import Content from "./components/Content";
import Header from "./components/Header"
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Partners from "./components/Partners";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import ScrollButton from "./components/ScrollToTopButton";

const TARGET_SCROLL = 100;

function App() {
  const [showScrollUpBtn, setShowScrollUpBtn] = useState(false);
  const[ language, setLanguage] = useState(localStorage.getItem('lang') || 'Eng');

  useEffect(() => {
    const toggleScroll = () => {
      if (window.scrollY >= TARGET_SCROLL) {
        setShowScrollUpBtn(true);
      } else {
        setShowScrollUpBtn(false);
      }
    }

    window.addEventListener('scroll', toggleScroll);

    return () => {
      window.removeEventListener('scroll', toggleScroll);
    }
  }, []);
  return (
    <>
      <Header />
      <main>
        <ScrollButton visible={false} />
        <div className="mt-32">
          <Content index={0} />
        </div>
        <div className="mt-40">
          <Services />
        </div>
        <div className="mt-48"> {/* no marginTop; find out why */}
          <Content index={1} />
        </div>
        <div className={`mt-48`}>
          <Content index={2} />
          <span>da</span>
        </div>
        <div className="mt-48">
          <Testimonial />
        </div>
        <div className="mt-56">
          <Partners />
        </div>
        <div className="mt-32 mb-44">
          <Subscribe />
        </div>
      </main>
      <Footer language={language} setLanguage={setLanguage} />
    </>
  )
}

export default App
