import React, { useState } from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";

const LibraryPage = () => {
  // Sample data for downloaded songs
  const [downloadedSongs, setDownloadedSongs] = useState([
    {
      id: "1",
      title: "Sher-E-Punjab",
      subtitle: "Patandar-Arjan Dhillon",
      image: "https://i.ytimg.com/vi/YMSuZcZEJwA/hqdefault.jpg",
    },
    {
      id: "2",
      title: "Good Luck Charm",
      subtitle: "KS Makhan",
      image: "https://i.ytimg.com/vi/esS2W3jodHM/maxresdefault.jpg",
    },
  ]);

  const renderSong = ({ item }: { item: { id: string; title: string; subtitle: string; image: string } }) => (
    <View style={styles.songCard}>
      <Image source={{ uri: item.image }} style={styles.songImage} />
      <View style={styles.songInfo}>
        <Text style={styles.songTitle}>{item.title}</Text>
        <Text style={styles.songSubtitle}>{item.subtitle}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Library</Text>
      {downloadedSongs.length > 0 ? (
        <>
          <Text style={styles.downloadedMessage}>You downloaded these songs to your library:</Text>
          <FlatList
            data={downloadedSongs}
            keyExtractor={(item) => item.id}
            renderItem={renderSong}
          />
        </>
      ) : (
        <>
          <Text style={styles.emptyMessage}>
            Your library is empty. Add more songs to your library by exploring.
          </Text>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>Explore Songs</Text>
          </TouchableOpacity>
        </>
      )}
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
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 16,
    textAlign: "center",
  },
  downloadedMessage: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 16,
    textAlign: "left",
  },
  songCard: {
    flexDirection: "row",
    backgroundColor: "#2E2E3E",
    borderRadius: 10,
    marginBottom: 16,
    padding: 12,
    alignItems: "center",
  },
  songImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 12,
  },
  songInfo: {
    flex: 1,
  },
  songTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  songSubtitle: {
    fontSize: 14,
    color: "#aaa",
  },
  emptyMessage: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: "#4CAF50",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    alignSelf: "center",
  },
  addButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default LibraryPage;
