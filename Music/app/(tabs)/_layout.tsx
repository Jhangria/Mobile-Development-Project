import React from "react";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#0ABAB5", // Active tab color
        tabBarInactiveTintColor: "#aaa", // Inactive tab color
        tabBarStyle: {
          backgroundColor: "#1E1E2C", // Background color to blend with app
          borderTopWidth: 0, // Remove border for a seamless look
        },
        headerStyle: {
          backgroundColor: "#1E1E2C", // Header background
        },
        headerTitleStyle: {
          color: "#fff", // Header text color
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabel: "Home",
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarLabel: "Explore",
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: "Library",
          tabBarLabel: "Library",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarLabel: "Profile",
        }}
      />
    </Tabs>
  );
}
