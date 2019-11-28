const rollupTypescript = require('rollup-plugin-typescript');
export default {
    input: 'src/index.ts',
    plugins: [
          rollupTypescript()  
        ],
    output: {
          file: 'dist/bundle.js',
          format: 'iife'
        } 
}

