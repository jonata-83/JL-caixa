import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.jonata.jlcaixa',
  appName: 'Caixa JL',
  webDir: 'www',
  android: {
    allowMixedContent: true
  }
};

export default config;
