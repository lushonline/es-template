/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */

import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import license from 'rollup-plugin-license';
import bundleSize from 'rollup-plugin-bundle-size';
import replace from '@rollup/plugin-replace';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const version = process.env.npm_package_version;

export default {
  input: './src/index.mjs',
  plugins: [
    replace({
      preventAssignment: true,
      values: {
        ___version___: version,
      },
    }),
    resolve({
      browser: true,
      main: true,
      jsnext: true,
    }),
    json(),
    commonjs({
      sourceMap: false,
    }),
    babel({
      babelHelpers: 'bundled',
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [
        [
          '@babel/preset-env',
          {
            loose: true,
            modules: false,
            spec: true,
            forceAllTransforms: true,
            useBuiltIns: 'usage',
            corejs: 3,
          },
        ],
      ],
      plugins: ['@babel/transform-object-assign'],
    }),
    license({
      banner: {
        content: {
          file: join(__dirname, 'banner.ejs'),
          encoding: 'utf-8', // Default is utf-8
        },
        data: {
          version,
        },
      },
    }),
    bundleSize(),
  ],
  output: [
    {
      file: './dist/index.umd.js',
      format: 'umd',
      name: 'YOUR_MODULE_NAME',
      esModule: false,
      exports: 'named',
      sourcemap: true,
    },
    {
      file: './dist/index.umd.min.js',
      format: 'umd',
      name: 'YOUR_MODULE_NAME',
      esModule: false,
      exports: 'named',
      sourcemap: true,
    },
    {
      file: './dist/index.js',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: './dist/index.min.js',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: './dist/index.es.mjs',
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: './dist/index.es.min.mjs',
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },
  ],
};
