import { FlatList, StyleSheet, Text, View, Image } from "react-native";

export const MatchesList = ({ matches }) => {
  return (
    <FlatList
      style={styles.matchesWrapper}
      data={matches}
      renderItem={({ item }) => (
        <View style={styles.singleMatchWrapper}>
          <View style={styles.singleTeamWrapper}>
            <Image style={styles.logo} source={{ uri: item.homeTeam?.crest }} />
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
            <Image style={styles.logo} source={{ uri: item.awayTeam?.crest }} />
            <Text key={item.awayTeam?.shortName}>
              {item.awayTeam?.shortName ?? ""}
            </Text>
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  matchesWrapper: {
    width: "100%",
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
