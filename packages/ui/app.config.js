export default ({ config }) => ({
  ...config,
  name: '@leather-wallet/ui',
  slug: 'leather-wallet_ui',
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED,
  },
  version: '1.0.0',
  orientation: 'portrait',
  icon: './src/assets-native/icon.png',
  scheme: 'myapp',
  userInterfaceStyle: 'automatic',
  splash: {
    image: './src/assets-native/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'io.leather.mobilewallet',
    buildNumber: '1.0.0',
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './src/assets-native/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
    package: 'io.leather.mobilewallet',
  },
  web: {
    favicon: './src/assets-native/favicon.png',
  },
  plugins: ['expo-font'],
});
