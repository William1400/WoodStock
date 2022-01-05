import './App.css';
import Navbar from './nav/Nav'
import Banner from './banner/Banner'
import Content from './content/Content'
import Team from './team/Team'
import Form from './form/Form'
import Footer from './footer/Footer'

function App() {
  return (
    <div className="App">
        <Navbar />
        <Banner />
        <Content />
        <Team />
        <Form />
        <Footer/>
    </div>
  );
}

export default App;
