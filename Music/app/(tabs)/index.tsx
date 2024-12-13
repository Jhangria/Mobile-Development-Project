import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const IndexPage = () => {
  const [showSeeAll, setShowSeeAll] = useState(false); // State to toggle between pages

  // Songs data (including duplicates as requested)
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
    },{
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

  // Render "See All" page
  if (showSeeAll) {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.sectionTitle}>Recently Played - See All</Text>
        </View>
        {songs.map((song, index) => (
          <View key={index} style={styles.songCard}>
            <Image style={styles.songImage} source={{ uri: song.image }} />
            <View style={styles.songInfo}>
              <Text style={styles.songTitle}>{song.title}</Text>
              <Text style={styles.songSubtitle}>{song.subtitle}</Text>
            </View>
            <Text style={styles.songDuration}>{song.duration}</Text>
          </View>
        ))}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => setShowSeeAll(false)}
        >
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  // Render "IndexPage" (Main Page)
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello Singh,</Text>
        <Text style={styles.subHeader}>What do you want to hear today?</Text>
      </View>

      {/* Party Vibes Section */}
      <View style={styles.partySection}>
        <Text style={styles.sectionTitle}>Party Vibes</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {/* Friday Party */}
          <TouchableOpacity style={styles.partyCard}>
            <Image
              style={styles.partyImage}
              source={{ uri: "https://i.ytimg.com/vi/1A0Hik99gIo/maxresdefault.jpg" }}
            />
            <Text style={styles.partyTitle}>Friday Party</Text>
            <Text style={styles.partySubtitle}>Get the party started!</Text>
          </TouchableOpacity>

          {/* Saturday Party */}
          <TouchableOpacity style={styles.partyCard}>
            <Image
              style={styles.partyImage}
              source={{ uri: "https://stafm.com.au/wp-content/uploads/2023/10/Saturday-Night-Party-Mix.jpg" }}
            />
            <Text style={styles.partyTitle}>Saturday Party</Text>
            <Text style={styles.partySubtitle}>Keep the vibe alive!</Text>
          </TouchableOpacity>

          {/* Weekly New */}
          <TouchableOpacity style={styles.partyCard}>
            <Image
              style={styles.partyImage}
              source={{ uri: "https://i.ytimg.com/vi/Ej_vV8sA39E/maxresdefault.jpg" }}
            />
            <Text style={styles.partyTitle}>Weekly New</Text>
            <Text style={styles.partySubtitle}>Fresh tunes every week!</Text>
          </TouchableOpacity>

          {/* Sunday Mix */}
          <TouchableOpacity style={styles.partyCard}>
            <Image
              style={styles.partyImage}
              source={{ uri: "https://i.ytimg.com/vi/0wMmE-N4Enc/maxresdefault.jpg"}}
            />
            <Text style={styles.partyTitle}>Sunday Mix</Text>
            <Text style={styles.partySubtitle}>Relax and unwind.</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Recently Played Section */}
      <View style={styles.recentlyPlayedHeader}>
        <Text style={styles.sectionTitle}>Recently Played</Text>
        <TouchableOpacity onPress={() => setShowSeeAll(true)}>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.recentlyPlayed}>
        {songs.slice(0, 9).map((song, index) => (
          <TouchableOpacity key={index} style={styles.songCard}>
            <Image style={styles.songImage} source={{ uri: song.image }} />
            <View style={styles.songInfo}>
              <Text style={styles.songTitle}>{song.title}</Text>
              <Text style={styles.songSubtitle}>{song.subtitle}</Text>
            </View>
            <Text style={styles.songDuration}>{song.duration}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E2C",
    padding: 16,
  },
  header: {
    marginBottom: 16,
  },
  greeting: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  subHeader: {
    color: "#aaa",
    fontSize: 16,
    marginTop: 4,
  },
  partySection: {
    marginBottom: 16,
  },
  partyCard: {
    backgroundColor: "#2E2E3E",
    borderRadius: 8,
    padding: 12,
    marginRight: 12,
    width: 300,
  },
  partyImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  partyTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  partySubtitle: {
    color: "#aaa",
    fontSize: 14,
  },
  recentlyPlayedHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  seeAll: {
    color: "#0ABAB5",
    fontSize: 14,
  },
  recentlyPlayed: {
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

export default IndexPage;
