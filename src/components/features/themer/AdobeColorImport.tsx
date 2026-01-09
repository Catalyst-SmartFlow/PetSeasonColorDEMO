"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { parseAdobeColorCSS, mapColorsToTheme } from "@/lib/adobeParser";
import { useThemeStore } from "@/store/useThemeStore";
import { type ThemeColors } from "@/store/useThemeStore";
import { motion, AnimatePresence } from "framer-motion";

export function AdobeColorImport() {
  const [input, setInput] = useState("");
  const [previewColors, setPreviewColors] = useState<ThemeColors | null>(null);
  const [error, setError] = useState(false);
  
  const { updateThemeColors } = useThemeStore();

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setInput(val);
    setError(false);

    const parsed = parseAdobeColorCSS(val);
    if (parsed) {
      const mapped = mapColorsToTheme(parsed);
      setPreviewColors(mapped);
    } else {
      setPreviewColors(null);
    }
  };

  const applyTheme = () => {
    if (previewColors) {
      // Create a fancy "ripple" effect manually if we had time, 
      // for now we rely on the instant CSS var update which is fast.
      updateThemeColors(previewColors);
      setInput("");
      setPreviewColors(null);
    } else {
        setError(true);
    }
  };

  return (
    <div className="p-6 bg-white/50 backdrop-blur-md rounded-2xl shadow-xl w-full max-w-2xl border border-white/20">
      <h3 className="text-lg font-bold mb-4 text-[var(--text-main)]">
        🎨 Adobe Color &quot;Magic Paste&quot;
      </h3>
      
      <div className="space-y-4">
        <textarea
          className="w-full h-32 p-4 rounded-xl bg-white/80 border-2 border-transparent focus:border-[var(--primary)] outline-none resize-none font-mono text-xs shadow-inner"
          placeholder="Paste your Adobe Color CSS here (Hex, RGBA, or HSLA)..."
          value={input}
          onChange={handleInput}
        />

        <AnimatePresence>
          {previewColors && (
            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -10 }}
               className="grid grid-cols-5 gap-2 h-16"
            >
              {(Object.entries(previewColors) as [keyof ThemeColors, string][]).map(([key, color]) => {
                  if (key === 'textScreen') return null; // Don't show text screen color in preview
                  return (
                    <div 
                        key={key} 
                        className="rounded-lg shadow-md flex flex-col items-center justify-center text-[8px] font-bold"
                        style={{ backgroundColor: color, color: isLight(color) ? '#000' : '#FFF' }}
                    >
                        <span className="opacity-80 uppercase tracking-tighter">{key}</span>
                        {color}
                    </div>
                  )
              })}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-end pt-2">
            <Button 
                onClick={applyTheme} 
                disabled={!previewColors}
                variant="primary"
                className="w-full sm:w-auto"
            >
                Apply Palette ✨
            </Button>
        </div>
        
        {error && (
            <p className="text-red-500 text-sm text-center">No valid palette found in text.</p>
        )}
      </div>
    </div>
  );
}

function isLight(color: string) {
    const c = color.substring(1);      // strip #
    const rgb = parseInt(c, 16);   // convert rrggbb to decimal
    const r = (rgb >> 16) & 0xff;  // extract red
    const g = (rgb >>  8) & 0xff;  // extract green
    const b = (rgb >>  0) & 0xff;  // extract blue
    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; 
    return luma > 180;
}
