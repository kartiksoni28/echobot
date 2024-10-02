import { StyleSheet, View, Image } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import MessageInput from "@/components/MessageInput";
import MessageIdeas from "@/components/MessageIdeas";
import { SafeAreaView } from "react-native-safe-area-context";
import { Message, Role } from "@/utils/Interfaces";
import { FlashList } from "@shopify/flash-list";
import ChatMessage from "@/components/ChatMessage";
import { useMMKVString } from "react-native-mmkv";
import { Storage } from "@/utils/Storage";
import { Redirect } from "expo-router";
import OpenAI from "react-native-openai";

import EventSource from "react-native-sse";

const NewChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [textLoading, setTextLoading] = useState(false);
  const [key, setKey] = useMMKVString("apiKey", Storage);
  const [organization, setOrganization] = useMMKVString("org", Storage);
  const flatListRef = useRef<FlashList<Message>>(null);

  const getCompletion = async (message: string) => {
    setTextLoading(true);
    if (messages?.length === 0) {
      // Create chat later, store to DB
    }

    //setting the user message locally
    setMessages([
      ...messages,
      { content: message, role: Role.User },
      { content: "", role: Role.Bot },
    ]);

    try {
      const es = new EventSource("http://192.168.8.102:8000/get_AI_response", {
        headers: {
          "Content-Type": "application/json ",
        },
        method: "POST",
        body: JSON.stringify({ user_input: message }),
      });

      es.addEventListener("open", (event) => {
        console.log("Open SSE connection.");
      });

      es.addEventListener("message", (event) => {
        if (event.data !== "kel123lnapy") {
          setMessages((messages) => {
            messages[messages.length - 1].content += event.data + " ";
            return [...messages];
          });
        }
        if (event.data === "kel123lnapy") {
          console.log("connection closed");
          es.close(); // Close the connection on completion
          setTextLoading(false);
        }
      });

      es.addEventListener("error", (event) => {
        if (event.type === "error") {
          console.error("Connection error:", event.message);
        } else if (event.type === "exception") {
          console.error("Error:", event.message, event.error);
        }
      });

      es.addEventListener("close", (event) => {
        console.log("Close SSE connection.");
      });
    } catch (error) {
      console.log("err", error);
      setTextLoading(false);
    }
  };

  // const scrollToEnd = () => {
  //   if (flatListRef.current) {
  //     flatListRef.current.scrollToEnd({ animated: true });
  //   }
  // };

  // useEffect(() => {
  //   if (messages.length > 0) {
  //     scrollToEnd();
  //   }
  // }, [messages]);

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
          // ref={flatListRef}
          showsVerticalScrollIndicator={false}
          data={messages}
          renderItem={({ item }) => <ChatMessage {...item} />}
          estimatedItemSize={400}
        />
      </View>
      {messages?.length === 0 && <MessageIdeas onSelectCard={getCompletion} />}
      <MessageInput
        onShouldSendMessage={getCompletion}
        textLoading={textLoading}
      />
    </SafeAreaView>
  );
};

export default NewChat;

const styles = StyleSheet.create({});
