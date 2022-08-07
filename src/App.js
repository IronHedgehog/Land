import './App.css';

import AboutUs from './components/AboutUs/AboutUs';
import Blog from './components/Blog/Blog';
import Cases from './components/Cases/Cases';
import Container from './components/Container/Container';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Team from './components/Team/Team';

const App = () => {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <main className="main">
        <Hero />
        <AboutUs />
        <Cases />
        <Blog />
        <Team />
        <Form />
      </main>
    </>
  );
};

export default App;
