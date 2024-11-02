import { StyleSheet, Text, Animated, View } from "react-native";
import { format } from "date-fns";
import React, { useEffect, useRef } from "react";
import { MatchStatus } from "../../../../types";

type ScoreSeparatorProps = {
  matchDate: string;
  status: MatchStatus;
};

export const ScoreSeparator = ({ matchDate, status }: ScoreSeparatorProps) => {
  const colorAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (status !== MatchStatus.IN_PLAY) {
      return;
    }

    const blinkAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(colorAnimation, {
          toValue: 1,
          duration: 750,
          useNativeDriver: false,
        }),
        Animated.timing(colorAnimation, {
          toValue: 0,
          duration: 750,
          useNativeDriver: false,
        }),
      ])
    );
    blinkAnimation.start();
  }, [colorAnimation]);

  const interpolatedColor = colorAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["green", "lightgreen"],
  });

  switch (status) {
    case MatchStatus.TIMED:
      return <Text>{format(matchDate, "H:mm")}</Text>;

    case MatchStatus.IN_PLAY:
      return (
        <View style={styles.inPlayWrapper}>
          <Text> - </Text>
          <Animated.View
            style={{
              width: 6,
              height: 6,
              backgroundColor: interpolatedColor,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}
          ></Animated.View>
        </View>
      );
    default:
      return <Text> - </Text>;
  }
};

const styles = StyleSheet.create({
  inPlayWrapper: {
    display: "flex",
    alignItems: "center",
  },
});
