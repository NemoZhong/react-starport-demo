// https://umijs.org/config/
import { defineConfig } from 'umi';
import { resolve } from 'path';
import { vars } from '../src/style/variable';
import { routes } from './routes';

export default defineConfig({
  antd: {},
  mfsu: {},
  alias: {
    '@': resolve(__dirname, './src'),
  },
  routes,
  theme: {
    ...vars,
  },
  title: 'starport',
});
