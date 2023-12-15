import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: (() => {
      let globalVariable = "globalThis";
      try {
        
        require.resolve("@safe-global/safe-ethers-adapters");
        
        require.resolve("@safe-global/safe-ethers-lib");
      
        globalVariable = "global";
      } catch (e) {
        globalVariable = "globalThis";
      }
      return globalVariable;
    })(),
  }
  // define: {
  //   global: "globalThis",
  //   "process.env": {},
  // },
});
