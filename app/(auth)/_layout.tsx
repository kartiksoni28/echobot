import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { router, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const layout = () => {
  return (
    <Stack>
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(modal)/settings"
        options={{
          presentation: "modal",
          title: "Settings",
          headerTitleAlign: "center",
          // headerShadowVisible: false,
          headerLeft: () => <View></View>,
          headerRight: () => (
            <>
              {router?.canGoBack() && (
                <TouchableOpacity
                  onPress={() => router.back()}
                  className="rounded-full p-1 bg-lightGrey"
                >
                  <Ionicons
                    name="close-outline"
                    size={20}
                    color={Colors.light}
                  />
                </TouchableOpacity>
              )}
            </>
          ),
        }}
      />
    </Stack>
  );
};

export default layout;

const styles = StyleSheet.create({});
