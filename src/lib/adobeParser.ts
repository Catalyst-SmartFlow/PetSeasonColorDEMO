import { ThemeColors } from "@/store/useThemeStore";

export function parseAdobeColorCSS(input: string): string[] | null {
  // Regex to find hex codes inside the CSS structure provided by Adobe Color
  // Matches: { color: #XXXXXX; } or { color: #XXX; }
  const hexRegex = /color:\s*(#[0-9A-Fa-f]{3,6})\s*;/g;
  
  const matches = [];
  let match;
  while ((match = hexRegex.exec(input)) !== null) {
    matches.push(match[1]);
  }

  // Expecting exactly 5 colors usually, but we return what we find
  if (matches.length >= 5) {
      return matches.slice(0, 5);
  }
  
  return null;
}

export function mapColorsToTheme(colors: string[]): ThemeColors {
    // Basic mapping strategy based on user request:
    // Color 1 -> Primary
    // Color 2 -> Secondary
    // Color 3 -> Accent
    // Color 4 -> Surface (Logic: check if dark/light)
    // Color 5 -> Text Main? Or maybe use it for details.
    
    // Let's implement a smarter logic for mapping later if needed, 
    // for now we follow the linear mapping.
    
    const [c1, c2, c3, c4, c5] = colors;
    
    // Logic per README:
    // Color 1 -> Primary
    // Color 2 -> Secondary 
    // Color 3 -> Accent
    // Color 4 -> Surface
    // Color 5 -> Text Main

    return {
        primary: c1, 
        secondary: c2,
        accent: c3, 
        surface: c4, 
        textMain: c5, 
        textScreen: '#FFFFFF' // Default white for text on primary/secondary
    };
}



