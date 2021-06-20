import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.components";
export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <>
      <SafeAreaView style={styles.safeAreaViewWrapper}>
        <View style={styles.searchBarWrapper}>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </View>
        <View style={styles.RestaurantsInfoWrapper}>
          <RestaurantInfoCard />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  RestaurantsInfoWrapper: {
    flex: 1,
    backgroundColor: "blue",
    padding: 20,
  },
  searchBarWrapper: {
    padding: 20,
  },
  safeAreaViewWrapper: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
