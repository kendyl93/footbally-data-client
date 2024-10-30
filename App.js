import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
} from "react-native";

const fetchMatches = async () => {
  const localAddress = `https://filthy-amitie-pstanecki-3c17e27c.koyeb.app`;
  try {
    const response = await fetch(`${localAddress}/matches`);
    console.log({ response });
    return response.json();
  } catch (error) {
    console.error({ errorFromCatch: error });
    throw error;
  }
};

// Create a client
const queryClient = new QueryClient();

const DefaultView = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["matches"],
    queryFn: fetchMatches,
  });

  // console.log({ data, isLoading, error });
  if (isLoading || !data) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error</Text>;
  }

  return (
    <View style={styles.appContainter}>
      <SafeAreaView style={styles.safe}>
        {/* <Text>{JSON.stringify(data ?? error)}</Text> */}
        <View style={styles.wrapper}>
          {data.length === 0 ? (
            <Text>No matches today</Text>
          ) : (
            <FlatList
              style={styles.matchesWrapper}
              data={data.matches}
              renderItem={({ item }) => (
                <View style={styles.singleMatchWrapper}>
                  <View style={styles.singleTeamWrapper}>
                    <Image
                      style={styles.logo}
                      source={{ uri: item.homeTeam?.crest }}
                    />
                    <Text key={item.homeTeam?.shortName}>
                      {item.homeTeam?.shortName ?? ""}
                    </Text>
                  </View>
                  <View style={styles.scoreWrapper}>
                    <View style={styles.scoreWrapperCol}>
                      <Text>{item.score.fullTime.home}</Text>
                    </View>
                    <View style={styles.scoreWrapperCol}>
                      <Text> - </Text>
                    </View>
                    <View style={styles.scoreWrapperCol}>
                      <Text>{item.score.fullTime.away}</Text>
                    </View>
                  </View>
                  <View style={styles.singleTeamWrapper}>
                    <Image
                      style={styles.logo}
                      source={{ uri: item.awayTeam?.crest }}
                    />
                    <Text key={item.awayTeam?.shortName}>
                      {item.awayTeam?.shortName ?? ""}
                    </Text>
                  </View>
                </View>
              )}
            />
          )}
        </View>

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
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  safe: {
    width: "100%",
    height: "100%",
  },
  matchesWrapper: {
    width: "100%",
    backgroundColor: "red",
  },
  singleMatchWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    margin: 10,
    backgroundColor: "#fff",
    borderWidth: 5,
  },
  scoreWrapper: {
    display: "flex",
    flexDirection: "row",

    flexGrow: 2,
    justifyContent: "center",
  },
  scoreWrapperCol: {},
  singleTeamWrapper: {
    width: "40%",
    alignItems: "center",
  },
  logo: {
    width: 40,
    height: 35,
    resizeMode: "contain",
  },
});
