import './App.css'
import {Home,About,OurService,Career,Blog,Vision,Mission,CoreValue,WeAreRegister,ContactUs,BlogDetails} from './pages';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
function App() {

  return (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />}>
          <Route index={true} element={<Vision />}/>
          <Route path="vision" element={<Vision />}/>
          <Route path="mission" element={<Mission />}/>
          <Route path="core-value" element={<CoreValue />}/>
          <Route path="we-are-register" element={<WeAreRegister />}/>
        </Route>
        <Route path="/our-service" element={<OurService />} />
        <Route path="/career" element={<Career />} />
        <Route path="/blog" element={<Blog />}/>
        <Route path="/blog/blog-details" element={<BlogDetails />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  </>
  )
}

export default App
