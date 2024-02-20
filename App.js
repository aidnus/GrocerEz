import { StyleSheet, View } from 'react-native';
import { ThemeProvider } from "./ThemeContext";
import AppNavigator from "./src/components/navigation/AppNavigator";

export default function App() {
  return (
      <View style={styles.container}>
        <ThemeProvider>
            <AppNavigator />
        </ThemeProvider>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
