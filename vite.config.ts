import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/xenos-rampant-builder/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          redux: ['redux', 'react-redux', '@reduxjs/toolkit'],
          mui: ['@material-ui/core', '@material-ui/icons', '@material-ui/lab'],
          hookform: [
            'react-hook-form',
            '@hookform/resolvers',
            'yup',
            '@material-ui/pickers',
            '@date-io/date-fns',
            'date-fns',
            '@date-io/dayjs',
          ],
        },
      },
    },
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'icon-192x192.png', 'icon-512x512.png'],
      manifest: {
        name: 'Xenos Rampant Army Builder',
        short_name: 'Xenos Rampant Builder',
        description:
          'Web app to build armies for Xenos Rampant. An Armybuilder for the tabletop strategy game Xenos Rampant.',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: 'icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
});
