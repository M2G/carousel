import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => ({
  resolve: {
    alias: {
      assets: path.resolve(__dirname, './src/assets/'),
      components: path.resolve(__dirname, './src/components/'),
      constants: path.resolve(__dirname, './src/constants/'),
      containers: path.resolve(__dirname, './src/containers/'),
      exceptions: path.resolve(__dirname, './src/exceptions/'),
      fixtures: path.resolve(__dirname, './src/fixtures/'),
      gql: path.resolve(__dirname, './src/gql/'),
      hooks: path.resolve(__dirname, './src/hooks/'),
      modules: path.resolve(__dirname, './src/modules/'),
      routes: path.resolve(__dirname, './src/routes/'),
      sentry: path.resolve(__dirname, './src/sentry/'),
      services: path.resolve(__dirname, './src/services/'),
      store: path.resolve(__dirname, './src/store/'),
      index: path.resolve(__dirname, './src/index/'),
      api: path.resolve(__dirname, './src/api/'),
    },
  },
}));
