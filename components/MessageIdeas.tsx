import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const PredefinedMessages = [
  { title: "Explain React Native", text: "like I'm five years old" },
  {
    title: "Suggest fun activites",
    text: "for a family visting San Francisco",
  },
  { title: "Recommend a dish", text: "to impress a date who's a picky eater" },
];

type Props = {
  onSelectCard: (message: string) => void;
};
const MessageIdeas = ({ onSelectCard }: Props) => {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 10,
          marginBottom: 10,
          paddingHorizontal: 15,
        }}
      >
        {PredefinedMessages.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => onSelectCard(`${item?.title} ${item?.text}`)}
              className="flex-1 bg-input p-2 rounded-lg"
            >
              <Text className="text-black font-psemibold text-md">
                {item?.title}
              </Text>
              <Text className="text-grey font-pregular">{item?.text}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default MessageIdeas;

const styles = StyleSheet.create({});
