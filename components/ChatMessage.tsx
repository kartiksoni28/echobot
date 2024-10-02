import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Message, Role } from "@/utils/Interfaces";
import { useWindowDimensions } from "react-native";
import RenderHtml from "react-native-render-html";
import WebView from "react-native-webview";
import HTMLView from "react-native-htmlview";
import HTMLRenderView from "./HTMLView";

const ChatMessage = ({ content, role, imageUrl, prompt }: Message) => {
  const { width } = useWindowDimensions();
  return (
    <View className="flex-1">
      <View className="flex-row items-start space-x-3 px-3 mb-6 ">
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

        <HTMLRenderView html={content ? content : ""} />
        {/* <WebView source={{ html: content ? content : "" }} style={{}} /> */}

        {/* <RenderHtml
          contentWidth={width}
          source={{ html: content ? content : "" }}
        /> */}

        {/* <Text className="flex-1 flex-wrap text-justify font-pregular">
          {content}
        </Text> */}
      </View>
    </View>
  );
};

export default ChatMessage;

const styles = StyleSheet.create({});
