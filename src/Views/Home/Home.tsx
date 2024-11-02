import { useQuery } from "@tanstack/react-query";
import { Text, View } from "react-native";
import { fetchMatches } from "../../api";
import MatchesList from "../../components/MatchesList";

export const Home = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["matches"],
    queryFn: fetchMatches,
  });

  if (isLoading || !data) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error</Text>;
  }

  return (
    <View>
      {!data?.resultSet.count ? (
        <Text>No matches today</Text>
      ) : (
        <MatchesList matches={data.matches} />
      )}
    </View>
  );
};
