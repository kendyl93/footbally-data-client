import { StyleSheet, Text, View } from "react-native";
import { MatchStatus, Match } from "../../types";
import React from "react";
import ScoreSeparator from "./components/ScoreSeparator";

type ScoreBoardProps = {
  match: Match;
};

export const ScoreBoard = ({ match }: ScoreBoardProps) => {
  if (match.status === MatchStatus.POSTPONED) {
    return <Text>{match.status}</Text>;
  }

  return (
    <View style={styles.scoreWrapper}>
      <View style={styles.scoreWrapperCol}>
        <Text>{match.score.fullTime.home}</Text>
      </View>
      <View>
        <ScoreSeparator matchDate={match.utcDate} status={match.status} />
      </View>
      <View style={styles.scoreWrapperCol}>
        <Text>{match.score.fullTime.away}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scoreWrapper: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 2,
    justifyContent: "center",
  },
  scoreWrapperCol: {},
});
