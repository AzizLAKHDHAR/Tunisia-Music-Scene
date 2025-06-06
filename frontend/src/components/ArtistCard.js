import React, { useEffect, useState } from 'react';
import { fetchArtistsFromCSV } from '../data/fetchArtists';
import styled, { useTheme } from 'styled-components';

const Card = styled.div`
  background: #1C1C1F; // Graphite Gray (dark)
  border-radius: 1rem;
  box-shadow: 0 2px 12px rgba(143,0,255,0.08); // Electric Purple shadow
  overflow: hidden;
  transition: transform 0.2s;
  font-family: 'Inter', 'Montserrat', 'Segoe UI', 'Arial', sans-serif;
  display: flex;
  flex-direction: column;
  height: 320px;
  max-width: 320px;
  margin: 0 auto;
  &:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 6px 24px rgba(143,0,255,0.15);
  }
`;
const Img = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  flex-shrink: 0;
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
const FilterBar = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;
const Dropdown = styled.select`
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};
  border: none;
  border-radius: 2rem;
  padding: 0.5rem 1.2rem;
  font-size: 1rem;
  font-family: inherit;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  margin-left: 0.5rem;
  box-shadow: 0 2px 8px rgba(143,0,255,0.08);
`;
const ArtistsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export default function ArtistsList() {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [genre, setGenre] = useState('All');
  const theme = useTheme();

  useEffect(() => {
    fetchArtistsFromCSV()
      .then(data => {
        // Sort alphabetically by Name by default
        const sorted = [...data].sort((a, b) => (a.Name || '').localeCompare(b.Name || ''));
        setArtists(sorted);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load artists');
        setLoading(false);
      });
  }, []);

  // Get unique genres
  const genres = React.useMemo(() => {
    const allGenres = artists.map(a => a.Genre && a.Genre.trim()).filter(Boolean);
    return ['All', ...Array.from(new Set(allGenres))];
  }, [artists]);

  // Filter artists by genre
  const filtered = React.useMemo(() => {
    // Always deduplicate by Name for all filters
    const seen = new Set();
    if (genre === 'All') {
      return artists.filter(a => {
        if (!a.Name || seen.has(a.Name)) return false;
        seen.add(a.Name);
        return true;
      });
    }
    // For specific genre, filter first, then deduplicate
    return artists.filter(a => a.Genre === genre && a.Name && !seen.has(a.Name) && seen.add(a.Name));
  }, [artists, genre]);

  if (loading) return <div style={{color:'#fff',textAlign:'center'}}>Loading artists...</div>;
  if (error) return <div style={{color:'#FF4E5B',textAlign:'center'}}>{error}</div>;

  return (
    <>
      <FilterBar>
        <label htmlFor="genre-dropdown" style={{color: theme.text, fontWeight: 500, fontFamily: 'Inter, Montserrat, Segoe UI, Arial, sans-serif'}}>Genre:</label>
        <Dropdown
          id="genre-dropdown"
          value={genre}
          onChange={e => setGenre(e.target.value)}
          theme={theme}
        >
          {genres.map(g => (
            <option key={g} value={g}>{g}</option>
          ))}
        </Dropdown>
      </FilterBar>
      <ArtistsGrid>
        {filtered.map((artist, idx) => (
          <Card key={artist.Name || idx}>
            {artist.Image && artist.Image.trim() !== '' ? (
              <Img src={artist.Image} alt={artist.Name} />
            ) : (
              <Img src="data:image/svg+xml,%3Csvg width='400' height='220' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='220' fill='%23222228'/%3E%3Ctext x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23A2A9B0' font-size='24' font-family='Inter, Montserrat, Segoe UI, Arial, sans-serif'%3ENo Image%3C/text%3E%3C/svg%3E" alt="No image available" />
            )}
            <Content>
              <Name>{artist.Name}</Name>
              <Genre>{artist.Genre}</Genre>
            </Content>
          </Card>
        ))}
      </ArtistsGrid>
    </>
  );
}
