import './index.css'
import './App.css';
import {Chef,FindUs,Laurels,Menu,Intro,Header,Footers,AboutUs,Gallery} from './container';
import {Navbar,Menuitem,Footer,Subheading} from './components';



function App() {
  return (
    <div>
     <Navbar/>
     <Header/>
     <AboutUs/>
     <Menu/>
     <Menuitem/>
     <Chef/>
     <Intro/>
     <Laurels/>
     <Gallery/>
     <FindUs/>
     <Footer/>
    </div>
  );
}

export default App;
