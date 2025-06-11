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
    <Section style={{ textAlign: 'center', lineHeight: '1.8', fontSize: '1.1rem' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>About the Project</h2>
      <p style={{ maxWidth: '800px', margin: '0 auto', marginBottom: '1.5rem' }}>
        This project is a heartfelt effort to celebrate and preserve the vibrant music scene of Tunisia. It’s a space where the rich tapestry of Tunisian music can be explored and appreciated.
      </p>
      <p style={{ maxWidth: '800px', margin: '0 auto', marginBottom: '1.5rem' }}>
        Despite its incredible diversity and originality, the local scene often doesn’t get the recognition it deserves. Local festivals and cultural organizations sometimes overlook homegrown talent in favor of international acts. This platform is here to change that narrative, shining a light on the artists who make Tunisia’s music scene so special.
      </p>
      
    </Section>
  );
}

function Submit() {
  return (
    <Section>
      <h2>Submit an Artist</h2>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdfHOuvbmmwh1a5PlsrDfEodaO0G9TmksdjhH8vb0VlVndoLw/viewform?embedded=true"
        width="640"
        height="1544"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        style={{ border: 'none' }}
      >
        Loading…
      </iframe>
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
