import { Stack } from "expo-router";
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { useFonts } from 'expo-font';

export default function RootLayout() {

  const [fontsLoaded] = useFonts({
    // Adicione aqui as fontes que precisar
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="home" />
      </Stack>
    </ApplicationProvider>
  );
}
