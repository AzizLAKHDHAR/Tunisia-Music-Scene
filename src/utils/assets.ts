/**
 * Utility function to get the correct asset path for both development and production (GitHub Pages)
 * @param assetPath - The path to the asset (e.g., '/placeholder.svg')
 * @returns The correct path for the current environment
 */
export const getAssetPath = (assetPath: string): string => {
  const cleanPath = assetPath.startsWith('/') ? assetPath.slice(1) : assetPath;
  
  if (process.env.NODE_ENV === 'production') {
    // For GitHub Pages, encode spaces in filenames
    const encodedPath = encodeURIComponent(cleanPath).replace(/%2F/g, '/');
    return `/Tunisia-Music-Scene/${encodedPath}`;
  }
  
  return `/${cleanPath}`;
};

/**
 * Common asset paths used throughout the application
 */
export const ASSETS = {
  PLACEHOLDER: getAssetPath('placeholder.svg'),
  CLEEF_POST: getAssetPath('cleef post.png'),
  ALT_SCENE_1: getAssetPath('alt scene 1.png'),
  ALT_SCENE_2: getAssetPath('alt scene 2.png'),
  ARTISTS_CSV: getAssetPath('artists.csv'),
  TUNISIA_DESERT: getAssetPath('tunisia-desert.jpg'),
} as const;