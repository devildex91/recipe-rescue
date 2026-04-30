# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


fixes 

List and recipe component changed into one component to more easily control state managment for these components
originally everything was flexbox but changed to grid for morecontrol 
css variables added to make updates easier 
had to get rid of gap and set margins on each section so that navbar and footer spanned whole screen without issue


all images resized and compressed f or better load times 
 found a bug as screen sizes increased so did gaps and discovered footer was adding an extra grid row because was set to start at grid 5 which was adding an unnneeded row and causing layout issues
 