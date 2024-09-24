import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAuth } from "@clerk/clerk-expo";

const NewChat = () => {
  const { signOut, isSignedIn } = useAuth();
  console.log(`index-7`, isSignedIn);
  return (
    <View className="flex-1 items-center justify-center">
      <Button onPress={() => signOut()} title="Sign out" />
    </View>
  );
};

export default NewChat;

const styles = StyleSheet.create({});
