import Header from "./Components/Header.jsx"
import Home from "./Components/Home.jsx"
import About from "./Components/About.jsx"
import Services from "./Components/Services.jsx"
import Feature from "./Components/Feature.jsx"
import Pricing from "./Components/Pricing.jsx"
import GetInTouch from "./Components/GetInTouch.jsx"
import Info from "./Components/Info.jsx"
import Footer from "./Components/Footer.jsx"

function App() {
  return (

      // <>
      //     <Navigation/>
      //     <Routes>
      //         <Route path={'/'} element={<MainPage/>}/>
      //         <Route path={'/auth'} element={<AuthPage/>}/>
      //         <Route path={'/film/:id'} element={<FilmPage/>}/>
      //     </Routes>
      //
      // </>

    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Feature />
      <Pricing />
      <GetInTouch />
      {/*<Info />*/}
      <Footer />
    </>
  );
}

export default App;
