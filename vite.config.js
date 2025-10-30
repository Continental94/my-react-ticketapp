import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // FIX: This tells Vite to use relative paths for assets (CSS, JS)
  // which fixes the styling issue on Netlify/Vercel.
  base: './', 
  plugins: [react()],
});