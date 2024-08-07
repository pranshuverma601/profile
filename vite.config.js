// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/profile/', // Adjust this to your GitHub Pages repo name if necessary
    plugins: [react()],
});
