
/**
 * Transforms an image source into a usable URL.
 * Supports:
 * 1. Local paths (e.g., 'assets/images/photo.jpg') - Best for GitHub deployment.
 * 2. Google Drive sharing links - Best for quick remote updates.
 */
export const resolveImageUrl = (url: string): string => {
  if (!url) return '';

  // 1. Handle Local Assets (Simple paths)
  // We trim leading slashes to ensure it stays relative to the index.html location
  if (url.startsWith('assets/') || url.startsWith('./assets/') || url.startsWith('/assets/')) {
    const cleanPath = url.replace(/^\.?\//, ''); 
    return `./${cleanPath}`;
  }
  
  // 2. Handle Google Drive links
  if (url.includes('drive.google.com')) {
    let fileId = '';
    
    // Pattern: /file/d/ID/view
    const dMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (dMatch && dMatch[1]) {
      fileId = dMatch[1];
    } 
    // Pattern: ?id=ID
    else {
      const idMatch = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
      if (idMatch && idMatch[1]) {
        fileId = idMatch[1];
      }
    }

    if (fileId) {
      return `https://drive.google.com/uc?export=view&id=${fileId}`;
    }
  }
  
  // 3. Handle Direct HTTPS links (Unsplash, etc.)
  return url;
};
