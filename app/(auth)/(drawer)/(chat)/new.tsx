import { StyleSheet, View, Image } from "react-native";
import React, { useState } from "react";
import MessageInput from "@/components/MessageInput";
import MessageIdeas from "@/components/MessageIdeas";
import { SafeAreaView } from "react-native-safe-area-context";
import { Message, Role } from "@/utils/Interfaces";
import { FlashList } from "@shopify/flash-list";
import ChatMessage from "@/components/ChatMessage";
import { useMMKVString } from "react-native-mmkv";
import { Storage } from "@/utils/Storage";
import { Redirect } from "expo-router";

// const DUMMY: Message[] = [
//   {
//     content: "Hello, How can I help you today",
//     role: Role.Bot,
//   },
//   {
//     content: "I need help with my react native app",
//     role: Role.User,
//   },
// ];

const NewChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [key, setKey] = useMMKVString("apiKey", Storage);
  const [organization, setOrganization] = useMMKVString("org", Storage);

  const getCompletion = (message: string) => {
    console.log(`new-10`, message);
  };

  if (!key || key === "" || !organization || organization === "") {
    return <Redirect href={"/(auth)/(modal)/settings"} />;
  }
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1">
        {messages?.length === 0 && (
          <View
            style={{
              backgroundColor: "#000",
              alignSelf: "center",
              height: 50,
              width: 50,
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 50,
            }}
          >
            <Image
              source={require("../../../../assets/images/logo-white.png")}
              className="h-[80%] w-[80%]"
            />
          </View>
        )}
        <FlashList
          data={messages}
          renderItem={({ item }) => <ChatMessage {...item} />}
          estimatedItemSize={400}
        />
      </View>
      {messages?.length === 0 && <MessageIdeas onSelectCard={getCompletion} />}
      <MessageInput onShouldSendMessage={getCompletion} />
    </SafeAreaView>
  );
};

export default NewChat;

const styles = StyleSheet.create({});
