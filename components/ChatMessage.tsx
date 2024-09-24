import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Message, Role } from "@/utils/Interfaces";

const ChatMessage = ({ content, role, imageUrl, prompt }: Message) => {
  console.log(`ChatMessage-6`, content);
  return (
    <View className="flex-1">
      <View className="flex-row items-start space-x-3 px-2 mb-6 ">
        {role === Role.Bot ? (
          <View
            className="bg-black items-center justify-center"
            style={{ width: 40, height: 40, borderRadius: 20 }}
          >
            <Image
              source={require("../assets/images/logo-white.png")}
              style={{ width: "70%", height: "70%" }}
            />
          </View>
        ) : (
          <Image
            source={require("../assets/images/avatar.jpeg")}
            style={{ width: 40, height: 40, borderRadius: 20 }}
          />
        )}
        <Text className="flex-1 flex-wrap text-justify font-pmedium">
          {content}
        </Text>
      </View>
    </View>
  );
};

export default ChatMessage;

const styles = StyleSheet.create({});
