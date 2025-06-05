import styled, { createGlobalStyle } from 'styled-components';

export const theme = {
  background: '#0E0E10', // Obsidian Black for main background
  text: '#A2A9B0', // Slate Silver for text
  primary: '#8F00FF', // Electric Purple for primary/accent
  secondary: '#FF4E5B', // Neon Coral for secondary/accent
  accent: '#FF4E5B', // Neon Coral for accent
  card: '#1C1C1F', // Graphite Gray for cards
  cardShadow: 'rgba(143,0,255,0.18)', // Electric Purple shadow
  navBg: '#18181b', // Even darker for navbar
  navText: '#A2A9B0', // Slate Silver for nav text
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Inter', 'Montserrat', 'Segoe UI', 'Arial', sans-serif;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: background 0.3s, color 0.3s;
  }
  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    font-family: 'Inter', 'Montserrat', 'Segoe UI', 'Arial', sans-serif;
  }
`;

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const HeroSection = styled.section`
  background: linear-gradient(120deg, #18181b 60%, ${({ theme }) => theme.primary} 100%);
  color: white;
  padding: 4rem 2rem 2rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

export const Section = styled.section`
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;
