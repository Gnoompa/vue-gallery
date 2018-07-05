import vue from 'rollup-plugin-vue';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: 'src/index.js',
  plugins: [
    vue({ css: true }),
    babel({ 
        babelrc: false,
        presets: [['env', { modules: false }]],
        exclude: 'node_modules/**',
        runtimeHelpers: true,
        externalHelpers: false
    }),
    (process.env.NODE_ENV === 'production' && uglify())
  ],
  output: {
    file: process.env.NODE_ENV === 'production' ? 'dist/vuejs-gallery.min.js' : 'dist/vuejs-gallery.js',
    format: 'umd',
    name: 'VuejsGallery',
  }
};