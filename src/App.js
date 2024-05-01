
import './../node_modules/bootstrap/dist/css/bootstrap.css';

import About from './Component/About/about';
import Advantage from './Component/Advantage/advantage';
import Alumini from './Component/Alumini/alumini';
import Apply from './Component/Apply/apply';
import Benifit from './Component/Benefit/benefit';
import FAQ from './Component/FAQ/faq';
import Footer from './Component/Footer/footer';
import Learn from './Component/Learn/learn';
import Navigation from './Component/Navigation/navigation';


function App() {
  return (
    <>
     <Navigation/>
     <About/>
     <Apply/>
     <Advantage/>
     <Alumini/>
     <Benifit/>
     <Learn/>
     <FAQ/>
     <Footer/>
     </>
  );
}

export default App;
