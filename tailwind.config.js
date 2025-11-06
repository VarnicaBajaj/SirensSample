/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium Luxury Palette
        'ocean-depths': '#0D0D0D',
        'deep-current': '#1A1A1A',
        'mystic-waters': '#2D2D2D',
        'aqua-dream': '#E8B945',
        'soft-aqua': '#F5D547',
        'gentle-teal': '#E8B945',
        'pearl-shimmer': '#FFFFFF',
        'moonlight-pearl': '#F5F5F5',
        'golden-ray': '#FFD700',
        'sunbeam-gold': '#FFC700',
        'coral-whisper': '#FF6B35',
        'sea-foam': '#FF1493',
        'crystal-blue': '#00D9FF',
        'mermaid-silver': '#C0C0C0',
        'starfish-glow': '#FF4500',
      },
      fontFamily: {
        'serif-elegant': ['Playfair Display', 'serif'],
        'sans-airy': ['Inter', 'sans-serif'],
      },
      animation: {
        'gentle-float': 'gentle-float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'wave-flow': 'wave-flow 8s ease-in-out infinite',
        'pearl-glow': 'pearl-glow 4s ease-in-out infinite',
        'underwater-drift': 'underwater-drift 12s linear infinite',
        'vinyl-spin': 'vinyl-spin 8s linear infinite',
        'ripple': 'ripple 2s ease-out infinite',
      },
      keyframes: {
        'gentle-float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(2deg)' },
        },
        'shimmer': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        'wave-flow': {
          '0%, 100%': { transform: 'translateX(0px) translateY(0px)' },
          '25%': { transform: 'translateX(10px) translateY(-5px)' },
          '50%': { transform: 'translateX(-5px) translateY(-10px)' },
          '75%': { transform: 'translateX(-10px) translateY(-5px)' },
        },
        'pearl-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(123, 196, 196, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(123, 196, 196, 0.6)' },
        },
        'underwater-drift': {
          '0%': { transform: 'translateY(100vh) translateX(-10px) rotate(0deg)' },
          '100%': { transform: 'translateY(-100px) translateX(10px) rotate(360deg)' },
        },
        'vinyl-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'ripple': {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
      },
      backgroundImage: {
        'ocean-gradient': 'linear-gradient(135deg, #0D0D0D 0%, #1A1A1A 50%, #2D2D2D 100%)',
        'underwater-light': 'radial-gradient(ellipse at top, rgba(255, 215, 0, 0.15) 0%, transparent 70%)',
        'pearl-shimmer': 'linear-gradient(45deg, #F5F5F5 0%, #FFFFFF 50%, #F5F5F5 100%)',
        'golden-rays': 'linear-gradient(45deg, transparent 30%, rgba(255, 215, 0, 0.15) 50%, transparent 70%)',
        'wave-pattern': 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255, 215, 0, 0.1) 2px, rgba(255, 215, 0, 0.1) 4px)',
      },
      backdropBlur: {
        'ocean': '20px',
      },
    },
  },
  plugins: [],
}