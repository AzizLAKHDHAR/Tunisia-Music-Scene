import React, { useEffect, useState } from 'react';
import { fetchArtistsFromExcel } from '../data/fetchArtists';
import styled from 'styled-components';

const Card = styled.div`
  background: #1C1C1F; // Graphite Gray (dark)
  border-radius: 1rem;
  box-shadow: 0 2px 12px rgba(143,0,255,0.08); // Electric Purple shadow
  overflow: hidden;
  transition: transform 0.2s;
  font-family: 'Inter', 'Montserrat', 'Segoe UI', 'Arial', sans-serif;
  &:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 6px 24px rgba(143,0,255,0.15);
  }
`;
const Img = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;
const Content = styled.div`
  padding: 1rem;
  font-family: 'Inter', 'Montserrat', 'Segoe UI', 'Arial', sans-serif;
`;
const Name = styled.h3`
  margin: 0 0 0.5rem 0;
  color: #8F00FF; // Electric Purple
  font-family: 'Inter', 'Montserrat', 'Segoe UI', 'Arial', sans-serif;
  font-weight: 700;
  letter-spacing: 0.01em;
`;
const Genre = styled.div`
  font-size: 0.95rem;
  color: #A2A9B0; // Slate Silver
  font-family: 'Inter', 'Montserrat', 'Segoe UI', 'Arial', sans-serif;
  font-weight: 400;
  letter-spacing: 0.01em;
`;

export default function ArtistsList() {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchArtistsFromExcel()
      .then(data => {
        setArtists(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load artists');
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={{color:'#fff',textAlign:'center'}}>Loading artists...</div>;
  if (error) return <div style={{color:'#FF4E5B',textAlign:'center'}}>{error}</div>;

  return (
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:'2rem'}}>
      {artists.map((artist, idx) => (
        <Card key={artist.id || idx}>
          <Img src={artist.image} alt={artist.name} />
          <Content>
            <Name>{artist.name}</Name>
            <Genre>{artist.genre} • {artist.region}</Genre>
          </Content>
        </Card>
      ))}
    </div>
  );
}
