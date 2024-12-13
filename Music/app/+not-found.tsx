import React from "react";
import { View, Text } from "react-native";

const NotFoundPage = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "red" }}>Page Not Found</Text>
    </View>
  );
};

export default NotFoundPage;
