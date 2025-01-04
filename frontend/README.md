# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- This is the link - https://basic-app-rrug.onrender.com
- as i am using windows the NODE_ENV=production and NODE_ENV=development on scripts on package.json does not work
- for this i installed a package called cross-env using the command
- npm install cross-env --save-dev
- and then used cross-env on both dev and start scripts like below -
-     "dev": "cross-env NODE_ENV=development backend/server.js",

I have used tailwind , ChakraUI
