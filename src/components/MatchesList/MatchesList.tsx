import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import { MatchStatus, Match } from "../../types";
import { format } from "date-fns";

const ScoreBoard = ({ match }) => {
  switch (match.status) {
    case MatchStatus.FINISHED:
      return (
        <>
          <View style={styles.scoreWrapperCol}>
            <Text>{match.score.fullTime.home}</Text>
          </View>
          <View style={styles.scoreWrapperCol}>
            <Text>-</Text>
          </View>
          <View style={styles.scoreWrapperCol}>
            <Text>{match.score.fullTime.away}</Text>
          </View>
        </>
      );
    case MatchStatus.IN_PLAY:
      return (
        <>
          <View style={styles.scoreWrapperCol}>
            <Text>{match.score.fullTime.home}</Text>
          </View>
          <View style={styles.scoreWrapperCol}>
            <Text>-</Text>
          </View>
          <View style={styles.scoreWrapperCol}>
            <Text>{match.score.fullTime.away}</Text>
          </View>
        </>
      );
    case MatchStatus.PAUSED:
      return (
        <>
          <View style={styles.scoreWrapperCol}>
            <Text>{match.score.fullTime.home}</Text>
          </View>
          <View style={styles.scoreWrapperCol}>
            <Text>-</Text>
          </View>
          <View style={styles.scoreWrapperCol}>
            <Text>{match.score.fullTime.away}</Text>
          </View>
        </>
      );
    case MatchStatus.TIMED:
      return (
        <>
          <View style={styles.scoreWrapperCol}>
            <Text>{match.score.fullTime.home}</Text>
          </View>
          <View style={styles.scoreWrapperCol}>
            <Text>{format(match.utcDate, "H:mm")}</Text>
          </View>
          <View style={styles.scoreWrapperCol}>
            <Text>{match.score.fullTime.away}</Text>
          </View>
        </>
      );
    case MatchStatus.POSTPONED:
      return <Text>{match.status}</Text>;
    default:
      return <Text>Unknown status</Text>;
  }
};

type MatchesListProps = {
  matches: Match[];
};

export const MatchesList = ({ matches }: MatchesListProps) => {
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
            <ScoreBoard match={item} />
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
