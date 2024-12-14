import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

const SeeAllPage = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => {
  const songs = [
    {
      title: "Sher-E-Punjab",
      subtitle: "Patandar-Arjan Dhillon",
      duration: "4:00",
      image: "https://i.ytimg.com/vi/YMSuZcZEJwA/hqdefault.jpg",
    },
    {
      title: "Good Luck Charm",
      subtitle: "Good Luck Charm-KS Makhan",
      duration: "4:32",
      image: "https://i.ytimg.com/vi/esS2W3jodHM/maxresdefault.jpg",
    },
    {
      title: "Not Sure",
      subtitle: "Not Sure-Cheema Y",
      duration: "2:35",
      image: "https://i.ytimg.com/vi/mqAPndD6SRw/hqdefault.jpg",
    },
    {
      title: "El Chapo",
      subtitle: "El Chapo-Sidhu Moosewala",
      duration: "3:28",
      image: "https://i.ytimg.com/vi/6Ae3yCrtYEY/maxresdefault.jpg",
    },
    {
      title: "Fellas Forever",
      subtitle: "Bhadauria-Hustinder",
      duration: "4:00",
      image: "https://drytickets.com.au/assets/upload/celebrities/684-hustinder.jpg",
    },
    {
      title: "Pre-Workout",
      subtitle: "Pre-Workout-Jordan Sandhu",
      duration: "3:40",
      image: "https://c.saavncdn.com/artists/Jordan_Sandhu_003_20230503073730_500x500.jpg",
    },
    {
      title: "Mili Mili",
      subtitle: "A for Arjan-Arjan Dhillon",
      duration: "1:54",
      image: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/ac/b5/6e/acb56eb1-e108-c9aa-f8b3-eee8618eb008/cover.jpg/1200x1200bf-60.jpg",
    },
    {
      title: "Never Ever",
      subtitle: "Patandar-Arjan Dhillon",
      duration: "3:28",
      image: "https://i.ytimg.com/vi/YMSuZcZEJwA/hqdefault.jpg",
    },
    {
      title: "Munde Pind De",
      subtitle: "Jalwa-Arjan Dhillon",
      duration: "3:11",
      image: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/ee/41/49/ee41496e-7aa7-df33-cf88-aba6da50f980/cover.jpg/1200x1200bf-60.jpg",
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.header}>
          <Text style={styles.title}>All Songs</Text>
        </View>
        {songs.map((song, index) => (
          <View key={index} style={styles.songCard}>
            <Image source={{ uri: song.image }} style={styles.songImage} />
            <View style={styles.songInfo}>
              <Text style={styles.songTitle}>{song.title}</Text>
              <Text style={styles.songSubtitle}>{song.subtitle}</Text>
            </View>
            <Text style={styles.songDuration}>{song.duration}</Text>
          </View>
        ))}
        <TouchableOpacity onPress={() => setCurrentPage("index")} style={styles.backButton}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#1E1E2C", // Ensures the area outside scrollable content matches the background
  },
  container: {
    flex: 1,
    padding: 16,
  },
  scrollContent: {
    paddingBottom: 50, // Provides enough space at the bottom to avoid clipping
  },
  header: {
    marginBottom: 16,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },
  songCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2E2E3E",
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  songImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 12,
  },
  songInfo: {
    flex: 1,
  },
  songTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  songSubtitle: {
    color: "#aaa",
    fontSize: 14,
  },
  songDuration: {
    color: "#0ABAB5",
    fontSize: 14,
  },
  backButton: {
    marginTop: 16,
    backgroundColor: "#0ABAB5",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  backButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SeeAllPage;
