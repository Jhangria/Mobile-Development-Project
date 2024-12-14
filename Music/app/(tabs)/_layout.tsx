import React from "react";
import { Tabs } from "expo-router";
import { Image, StyleSheet } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#0ABAB5", // Active tab color
        tabBarInactiveTintColor: "#aaa", // Inactive tab color
        tabBarStyle: {
          backgroundColor: "#1E1E2C",
        },
        headerStyle: {
          backgroundColor: "#1E1E2C", // Header background
        },
        headerTitleStyle: {
          color: "#fff", // Header text color
        },
        headerRight: () => (
          <Image
            source={require("../../assets/images/logo.png")} // Local image
            // source={{ uri: "https://example.com/logo.png" }} // Remote image
            style={styles.logo}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabel: "Home",
          tabBarIcon: () => (
            <Image
              source={require("../../assets/images/home.jpg")} // Replace with your home icon
              style={styles.icon}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarLabel: "Explore",
          tabBarIcon: () => (
            <Image
              source={require("../../assets/images/explore.jpg")} // Replace with your explore icon
              style={styles.icon}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: "Library",
          tabBarLabel: "Library",
          tabBarIcon: () => (
            <Image
              source={require("../../assets/images/library.jpg")} // Replace with your library icon
              style={styles.icon}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarLabel: "Profile",
          tabBarIcon: () => (
            <Image
              source={require("../../assets/images/profile.jpg")} // Replace with your profile icon
              style={styles.icon}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 40, // Adjust the size of the logo
    height: 40,
    marginRight: 10, // Space between the logo and the header edge
  },
  icon: {
    width: 24, // Adjust the size of the tab icons
    height: 24,
  },
});
