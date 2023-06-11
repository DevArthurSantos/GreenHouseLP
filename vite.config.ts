import { defineConfig } from 'vite'
import dotenv from 'dotenv';
import tsconfigPaths from "vite-tsconfig-paths";
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths()],
  
  define: {
    'process.env.USER_ID': JSON.stringify(process.env.USER_ID),
    'process.env.SERVICE_ID': JSON.stringify(process.env.SERVICE_ID),
    'process.env.TEMPLATE_ID': JSON.stringify(process.env.TEMPLATE_ID),
  },
});