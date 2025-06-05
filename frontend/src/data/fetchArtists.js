import * as XLSX from 'xlsx';

// Fetch and parse the Excel file from the public folder
export async function fetchArtistsFromExcel() {
  const response = await fetch('/artists.xlsx');
  const arrayBuffer = await response.arrayBuffer();
  const workbook = XLSX.read(arrayBuffer, { type: 'array' });
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(worksheet);
  return data;
}
