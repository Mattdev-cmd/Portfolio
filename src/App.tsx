import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Terminal from './components/Terminal';
import Projects from './components/Projects';
import GithubStats from './components/GithubStats';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="dark min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Terminal />
      <Projects />
      <GithubStats />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
