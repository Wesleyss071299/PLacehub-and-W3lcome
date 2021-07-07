import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DropDownComponentProvider } from './contexts'
import Navigation from './navigation';

export default function App() {
    return (
      <DropDownComponentProvider>
          <SafeAreaProvider>
            <Navigation/>
            <StatusBar />
          </SafeAreaProvider>
      </DropDownComponentProvider>
    );
}
