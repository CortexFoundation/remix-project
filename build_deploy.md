## How to build and deploy
1. clone this project:
```bash
git clone https://github.com/CortexFoundation/remix-project
```
2. build it:
```bash
cd remix-project
npm install
npm run build:production
```
3. copy sol_js/soljson-v0.4.24.js sol_js/soljson-v0.8.7.js into dist/apps/remix-ide/assets/js
4. serve dist/apps/remix-ide with Nginx
