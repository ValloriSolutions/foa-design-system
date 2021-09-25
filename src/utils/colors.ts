export const hexToRgba = (hex: string, alpha: number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  } else {
    return `rgb(${r}, ${g}, ${b})`;
  }
};

// find % of opacity between two colors
export const getOpacity = (color1: string, color2: string): number => {
  const color1Rgb = hexToRgba(color1, 1);
  const color2Rgb = hexToRgba(color2, 1);

  const color1Rgba = color1Rgb.split(', ');
  const color2Rgba = color2Rgb.split(', ');

  const opacity =
    (parseInt(color2Rgba[3], 10) - parseInt(color1Rgba[3], 10)) / 100;

  return opacity;
};
