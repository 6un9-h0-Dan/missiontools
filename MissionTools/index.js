/**
 * @format
 */

import {name as appName} from './app.json';

import * as React from 'react';
import { AppRegistry } from 'react-native';
import {DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import App from './App';

const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'blue',
      accent: 'yellow',
    },
  };
export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);