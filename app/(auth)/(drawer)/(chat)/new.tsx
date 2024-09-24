import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAuth } from "@clerk/clerk-expo";
import MessageInput from "@/components/MessageInput";

const NewChat = () => {
  const { signOut, isSignedIn } = useAuth();

  const getCompletion = (message: string) => {
    console.log(`new-10`, message);
  };
  return (
    <View className="flex-1">
      <View className="flex-1">
        <Button onPress={() => signOut()} title="Sign out" />
        {/* <ScrollView>
          {Array.from({ length: 100 }).map((_, index) => (
            <Text key={index}>{index}</Text>
          ))}
        </ScrollView> */}
      </View>
      <MessageInput onShouldSendMessage={getCompletion} />
    </View>
  );
};

export default NewChat;

const styles = StyleSheet.create({});
