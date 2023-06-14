import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'c-bella-app',
  webDir: 'dist/c-bella-app',
  server: {
    androidScheme: 'https'
  }
};

export default config;
