import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import { Match } from "../../types";
import React from "react";
import ScoreBoard from "../ScoreBoard";

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
              {item.homeTeam?.shortName}
            </Text>
          </View>

          <ScoreBoard match={item} />

          <View style={styles.singleTeamWrapper}>
            <Image style={styles.logo} source={{ uri: item.awayTeam?.crest }} />
            <Text key={item.awayTeam?.shortName}>
              {item.awayTeam?.shortName}
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
