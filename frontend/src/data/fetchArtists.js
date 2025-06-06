import Papa from 'papaparse';

// Fetch and parse the CSV file from the public folder
export async function fetchArtistsFromCSV() {
  const response = await fetch('/artists.csv');
  const csvText = await response.text();
  const parsed = Papa.parse(csvText, { header: true, skipEmptyLines: true });
  return parsed.data;
}
