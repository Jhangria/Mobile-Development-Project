import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Switch,
  StyleSheet,
  Animated,
} from "react-native";

const ProfilePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const fadeAnim = new Animated.Value(0); // Animation for profile image

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Profile Image Fade-In Animation
  Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true,
  }).start();

  return (
    <View style={isDarkMode ? styles.containerDark : styles.container}>
      {/* App Name */}
      <Text style={styles.appName}>SoundScape</Text>

      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <Animated.Image
          source={{
            uri: "https://clipground.com/images/sikh-turban-clipart-9.jpg", // Replace with dynamic URL
          }}
          style={[styles.profileImage, { opacity: fadeAnim }]}
        />
        <Text style={styles.profileName}>Singh</Text>
        <Text style={styles.profileEmail}>singh@example.com</Text>
      </View>

      {/* Preferences */}
      <View style={styles.preferences}>
        <Text style={styles.preferenceLabel}>Dark Mode</Text>
        <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
      </View>

      {/* Activity Summary */}
      <View style={styles.activitySection}>
        <Text style={styles.sectionHeader}>Your Activity</Text>
        <View style={styles.activityRow}>
          <View style={styles.activityCard}>
            <Text style={styles.activityValue}>2</Text>
            <Text style={styles.activityLabel}>Downloaded</Text>
          </View>
          <View style={styles.activityCard}>
            <Text style={styles.activityValue}>10</Text>
            <Text style={styles.activityLabel}>Recently Played</Text>
          </View>
        </View>
      </View>

      {/* Account Settings */}
      <Text style={styles.sectionHeader}>Account Settings</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Update Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Delete Account</Text>
      </TouchableOpacity>

      {/* Help and Feedback */}
      <Text style={styles.sectionHeader}>Help & Feedback</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Help & Support</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Rate Us</Text>
      </TouchableOpacity>

      {/* Logout */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E2C", // Dark bluish background
    padding: 16,
  },
  containerDark: {
    flex: 1,
    backgroundColor: "#121212", // Even darker for dark mode
    padding: 16,
  },
  appName: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#4DA8DA", // Bluish accent
    marginBottom: 20,
  },
  profileHeader: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#4DA8DA", // Bluish border for the image
  },
  profileName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#E0E0E0", // Light text for visibility
  },
  profileEmail: {
    fontSize: 16,
    color: "#A6A6A6",
    marginBottom: 20,
  },
  preferences: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#2E2E3E", // Bluish-gray for preferences
    padding: 12,
    borderRadius: 10,
  },
  preferenceLabel: {
    fontSize: 16,
    color: "#D9D9D9", // Light color for the label
  },
  activitySection: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#E0E0E0",
    marginBottom: 10,
  },
  activityRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  activityCard: {
    backgroundColor: "#2A2D3E", // Slightly bluish card
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    flex: 1,
    marginHorizontal: 5,
  },
  activityValue: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#4DA8DA", // Highlight with blue
  },
  activityLabel: {
    fontSize: 14,
    color: "#A6A6A6",
  },
  button: {
    backgroundColor: "#4DA8DA",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold",
  },
  logoutButton: {
    backgroundColor: "#FF4D4D",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  logoutText: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default ProfilePage;
