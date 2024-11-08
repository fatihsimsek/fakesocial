import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RouteNavigator from './navigators/RouteNavigator';

function App() {
  return (
    <SafeAreaProvider>
      <RouteNavigator />
    </SafeAreaProvider>   
  );
}

export default App;
