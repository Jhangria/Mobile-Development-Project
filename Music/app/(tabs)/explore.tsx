import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";

const ExplorePage = () => {
  const [numColumns, setNumColumns] = useState(1); // Default to 1 column for large items

  const songs = [
    {
      title: "Sher-E-Punjab",
      subtitle: "Patandar-Arjan Dhillon",
      image: "https://i.ytimg.com/vi/YMSuZcZEJwA/hqdefault.jpg",
    },
    {
      title: "Good Luck Charm",
      subtitle: "Good Luck Charm-KS Makhan",
      image: "https://i.ytimg.com/vi/esS2W3jodHM/maxresdefault.jpg",
    },
    {
      title: "Not Sure",
      subtitle: "Not Sure-Cheema Y",
      image: "https://i.ytimg.com/vi/mqAPndD6SRw/hqdefault.jpg",
    },
    {
      title: "El Chapo",
      subtitle: "El Chapo-Sidhu Moosewala",
      image: "https://i.ytimg.com/vi/6Ae3yCrtYEY/maxresdefault.jpg",
    },
    {
      title: "Fellas Forever",
      subtitle: "Bhadauria-Hustinder",
      image: "https://drytickets.com.au/assets/upload/celebrities/684-hustinder.jpg",
    },
    {
      title: "Pre-Workout",
      subtitle: "Pre-Workout-Jordan Sandhu",
      image: "https://c.saavncdn.com/artists/Jordan_Sandhu_003_20230503073730_500x500.jpg",
    },
    {
      title: "Mili Mili",
      subtitle: "A for Arjan-Arjan Dhillon",
      image: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/ac/b5/6e/acb56eb1-e108-c9aa-f8b3-eee8618eb008/cover.jpg/1200x1200bf-60.jpg",
    },
    {
      title: "Never Ever",
      subtitle: "Patandar-Arjan Dhillon",
      image: "https://i.ytimg.com/vi/YMSuZcZEJwA/hqdefault.jpg",
    },
    {
      title: "Munde Pind De",
      subtitle: "Jalwa-Arjan Dhillon",
      image: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/ee/41/49/ee41496e-7aa7-df33-cf88-aba6da50f980/cover.jpg/1200x1200bf-60.jpg",
    },
  ];

  const renderSong = ({ item }: { item: { title: string; subtitle: string; image: string } }) => {
    if (!item) {
      console.error("Invalid item received in renderSong");
      return null;
    }

    return (
      <TouchableOpacity style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Explore Albums</Text>
      <Button
        title={`Switch to ${numColumns === 1 ? "Grid" : "Single"} View`}
        onPress={() => setNumColumns(numColumns === 1 ? 2 : 1)}
      />
      <FlatList
        data={songs}
        keyExtractor={(item, index) => `${index}`} // Ensure a valid key
        renderItem={renderSong}
        numColumns={numColumns}
        key={numColumns} // Force FlatList to re-render when numColumns changes
        columnWrapperStyle={numColumns > 1 ? styles.row : null}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={styles.emptyList}>No songs available to display</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E2C",
    padding: 16,
  },
  header: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  row: {
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#2E2E3E",
    borderRadius: 10,
    marginBottom: 16,
    padding: 12,
    width: "48%", // Adjust for grid view
  },
  image: {
    width: "100%",
    height: 200, // Larger image size
    borderRadius: 10,
    marginBottom: 12,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 6,
  },
  subtitle: {
    color: "#aaa",
    fontSize: 16,
  },
  emptyList: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },
});

export default ExplorePage;
