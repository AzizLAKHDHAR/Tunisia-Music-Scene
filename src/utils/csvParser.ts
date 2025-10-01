import Papa from 'papaparse';

export interface Artist {
  Name: string;
  Genre: string;
  Image: string;
  Spotify: string;
  YouTube: string;
}

export const fetchArtistsFromCSV = async (): Promise<Artist[]> => {
  try {
    const csvPath = process.env.NODE_ENV === 'production' ? '/Tunisia-Music-Scene/artists.csv' : '/artists.csv';
    const response = await fetch(csvPath);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch CSV: ${response.status}`);
    }
    
    const csvText = await response.text();
    
    return new Promise((resolve, reject) => {
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          if (results.errors.length > 0) {
            console.error('CSV parsing errors:', results.errors);
          }
          const artists = (results.data as Artist[]).filter(artist => 
            artist && 
            typeof artist === 'object' && 
            artist.Name && 
            artist.Name.trim() !== '' &&
            artist.Genre &&
            artist.Genre.trim() !== ''
          );
          resolve(artists);
        },
        error: (error) => {
          reject(error);
        }
      });
    });
  } catch (error) {
    console.error('Error fetching CSV:', error);
    throw error;
  }
};

export const getUniqueGenres = (artists: Artist[]): string[] => {
  const genres = artists
    .map(artist => artist.Genre)
    .filter(genre => genre && genre.trim() !== '')
    .map(genre => genre.trim());
  
  return Array.from(new Set(genres)).sort();
};

export const filterArtistsByGenre = (artists: Artist[], genre: string): Artist[] => {
  if (genre === 'All' || genre === '') {
    return artists;
  }
  return artists.filter(artist => artist.Genre && artist.Genre.trim() === genre);
};

// Convert CSV artist to display format with placeholder image and color
export const convertToDisplayArtist = (artist: Artist, index: number) => {
  const colors = [
    'bg-orange-200',
    'bg-slate-600', 
    'bg-orange-300',
    'bg-orange-400',
    'bg-gray-600',
    'bg-gradient-to-br from-purple-400 to-blue-500',
    'bg-gradient-to-br from-green-400 to-blue-500',
    'bg-gradient-to-br from-pink-400 to-red-500',
    'bg-gradient-to-br from-yellow-400 to-orange-500',
    'bg-gradient-to-br from-indigo-400 to-purple-500'
  ];

  return {
    name: artist.Name,
    genre: artist.Genre,
    image: artist.Image || (process.env.NODE_ENV === 'production' ? '/Tunisia-Music-Scene/placeholder.svg' : '/placeholder.svg'),
    spotify: artist.Spotify,
    youtube: artist.YouTube,
    color: colors[index % colors.length],
    description: `Talented ${artist.Genre} artist from Tunisia's vibrant music scene`,
    location: "Tunisia",
    yearActive: "2020",
    albumsCount: Math.floor(Math.random() * 5) + 1,
    socialLinks: {
      spotify: artist.Spotify,
      youtube: artist.YouTube,
      instagram: ""
    }
  };
};

// Convert CSV artist to front-office display format with extended properties
export const convertToFrontOfficeArtist = (artist: Artist, index: number) => {
  const colors = [
    'bg-gradient-to-br from-purple-400 to-blue-500',
    'bg-gradient-to-br from-orange-400 to-red-500',
    'bg-gradient-to-br from-green-400 to-teal-500',
    'bg-gradient-to-br from-yellow-400 to-orange-500',
    'bg-gradient-to-br from-pink-400 to-purple-500',
    'bg-gradient-to-br from-indigo-400 to-cyan-500',
    'bg-gradient-to-br from-red-400 to-pink-500',
    'bg-gradient-to-br from-blue-400 to-indigo-500',
    'bg-gradient-to-br from-teal-400 to-green-500',
    'bg-gradient-to-br from-cyan-400 to-blue-500'
  ];

  const locations = [
    "Tunis, Tunisia",
    "Sfax, Tunisia", 
    "Sousse, Tunisia",
    "Bizerte, Tunisia",
    "Monastir, Tunisia",
    "Kairouan, Tunisia",
    "Gabès, Tunisia",
    "Ariana, Tunisia",
    "Gafsa, Tunisia",
    "Kasserine, Tunisia"
  ];

  const yearStarted = 2010 + (index % 14); // Years from 2010-2024

  return {
    name: artist.Name,
    genre: artist.Genre,
    description: `Innovative ${artist.Genre} artist pushing boundaries in Tunisia's dynamic music scene`,
    image: artist.Image || (process.env.NODE_ENV === 'production' ? '/Tunisia-Music-Scene/placeholder.svg' : '/placeholder.svg'),
    color: colors[index % colors.length],
    location: locations[index % locations.length],
    yearActive: yearStarted.toString(),
    albumsCount: Math.floor(Math.random() * 6) + 1,
    bio: `${artist.Name} is a prominent figure in Tunisia's ${artist.Genre} scene, known for their unique style and innovative approach to music. They have been active since ${yearStarted}, contributing significantly to the evolution of modern Tunisian music while staying true to their cultural roots.`,
    socialLinks: {
      spotify: artist.Spotify || "https://spotify.com",
      youtube: artist.YouTube || "https://youtube.com",
      bandcamp: "https://bandcamp.com",
      soundcloud: "https://soundcloud.com",
      instagram: "https://instagram.com"
    }
  };
};