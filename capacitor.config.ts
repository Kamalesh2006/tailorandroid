import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.skumarantailors.app',
  appName: 'S Kumaran Tailors',
  webDir: 'www',
  server: {
    // Load the live Vercel deployment in the WebView
    url: 'https://skumarantailors.vercel.app',
    cleartext: false,
  },
  android: {
    backgroundColor: '#1a1a1a',
    allowMixedContent: false,
    webContentsDebuggingEnabled: false,
  },
  plugins: {
    SplashScreen: {
      launchAutoHide: true,
      launchShowDuration: 0,
      backgroundColor: '#1a1a1a',
      showSpinner: false,
      androidSplashResourceName: 'splash',
      androidScaleType: 'CENTER_CROP',
    },
    StatusBar: {
      style: 'DARK',
      backgroundColor: '#1a1a1a',
    },
  },
};

export default config;
