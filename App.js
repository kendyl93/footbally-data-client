import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView } from "react-native";
import Home from "./src/Views/Home";

const queryClient = new QueryClient();

const DefaultView = () => {
  return (
    <View style={styles.appContainter}>
      <SafeAreaView style={styles.safe}>
        <Home />
        <StatusBar style="auto" />
      </SafeAreaView>
    </View>
  );
};

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DefaultView />
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  appContainter: {
    alignItems: "center",
    justifyContent: "center",
  },
  safe: {
    width: "100%",
    height: "100%",
  },
});
