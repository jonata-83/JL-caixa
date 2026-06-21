import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.jonata.jlcaixa',
  appName: 'Caixa JL',
  webDir: 'www',
  server: {
    url: 'https://jonata-83.github.io/JL-caixa/',
    cleartext: false
  },
  android: {
    allowMixedContent: true
  }
};

export default config;
