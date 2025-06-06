import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle, AppContainer, HeroSection, Section } from './styles/theme';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ArtistsList from './components/ArtistCard';

function Home() {
  return (
    <HeroSection style={{padding:'6rem 2rem 4rem 2rem', minHeight: '100vh'}}>
      <h1>
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia.svg" alt="Tunisian Flag" width="48" style={{verticalAlign:'middle',marginRight:12}} />
        Tunisia Music Scene
      </h1>
      <p style={{fontSize:'1.3rem',maxWidth:600,margin:'1.5rem auto 2.5rem auto'}}>
        Discover, celebrate, and contribute to the rich and diverse world of Tunisian music.
      </p>
      <Link to="/artists" style={{background:theme.primary,color:'#fff',padding:'0.7rem 1.5rem',borderRadius:'2rem',fontWeight:'bold',fontSize:'1.1rem',boxShadow:'0 2px 8px rgba(0,0,0,0.08)'}}>Browse Artists</Link>
    </HeroSection>
  );
}

function Artists() {
  return (
    <Section>
      <h2>All Artists</h2>
      <ArtistsList />
    </Section>
  );
}

function About() {
  return (
    <Section>
      <h2>About the Project</h2>
      <p>This project is a collaborative digital archive and discovery platform for Tunisian music, inspired by the love of Tunisian culture and music. Contributions are welcome!</p>
    </Section>
  );
}

function Submit() {
  return (
    <Section>
      <h2>Submit an Artist</h2>
      <p>Feature coming soon! You’ll be able to submit new artists via a form.</p>
    </Section>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router basename="/Tunisia-Music-Scene">
        <GlobalStyle />
        <AppContainer>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/about" element={<About />} />
            <Route path="/submit" element={<Submit />} />
          </Routes>
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
