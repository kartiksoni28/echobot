import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MessageInput from "@/components/MessageInput";
import { Message } from "@/utils/Interfaces";
import ImageInput from "@/components/ImageInput";

const dalle = () => {
  const [textLoading, setTextLoading] = useState(false);
  const [userInputs, setUserInputs] = useState<Message[]>([]);

  const getCompletion = (message: string) => {
    // setUserInputs([...userInputs, {content:'', ima}])
    console.log(`dalle-13`, message);
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1"></View>
      {userInputs[0]?.content ? (
        <MessageInput
          onShouldSendMessage={getCompletion}
          textLoading={textLoading}
        />
      ) : (
        <ImageInput onShouldSendMessage={getCompletion} />
      )}
    </SafeAreaView>
  );
};

export default dalle;

const styles = StyleSheet.create({});
