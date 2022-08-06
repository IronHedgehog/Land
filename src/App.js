import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Cases from './components/Cases/Cases';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

const App = () => {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <main>
        <Hero />
        <AboutUs />
        <Cases />
      </main>
    </>
  );
};

export default App;
