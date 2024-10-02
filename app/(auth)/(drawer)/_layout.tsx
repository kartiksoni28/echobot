import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  TextInput,
} from "react-native";
import React from "react";
import { Drawer } from "expo-router/drawer";
import { Link, useNavigation } from "expo-router";
import { Entypo, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import Colors from "@/constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

const CustomDrawerContent = (props: any) => {
  const { bottom, top } = useSafeAreaInsets();
  return (
    <View className="flex-1" style={{ marginTop: top }}>
      <View className="#fff">
        <View className="bg-input justify-center items-center flex-row mx-3 h-10 rounded-lg p-2 space-x-2 mb-3">
          <Ionicons name="search" size={24} color="#fff" />
          <TextInput
            className="flex-1 text-grey font-pmedium"
            placeholder="Search"
          />
        </View>
      </View>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ paddingTop: 0 }}
      >
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <Link href={"/(auth)/(modal)/settings"} asChild>
        <TouchableOpacity className="mb-6 px-3 flex-row justify-between items-center absolute bottom-0">
          <Image
            source={require("../../../assets/images/avatar.jpeg")}
            style={{ width: 40, height: 40, borderRadius: 10 }}
          />
          <Text className="text-black font-psemibold flex-1 ml-2">
            Azula Sharma
          </Text>
          <Entypo name="dots-three-horizontal" size={24} color="grey" />
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const DrawerLayout = () => {
  const navigation = useNavigation();
  const dimensions = useWindowDimensions();
  return (
    <Drawer
      drawerContent={CustomDrawerContent}
      screenOptions={{
        headerLeft: () => (
          <TouchableOpacity
            className="mx-3"
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
          >
            <FontAwesome5 name="grip-lines" size={23} color="black" />
          </TouchableOpacity>
        ),
        headerStyle: {
          backgroundColor: Colors.light,
        },
        headerShadowVisible: false,
        drawerActiveBackgroundColor: Colors.selected,
        drawerActiveTintColor: "#000",
        drawerInactiveTintColor: "#000",
        drawerItemStyle: {
          borderRadius: 12,
        },
        overlayColor: "rgba(0,0,0,0.4)",
        drawerLabelStyle: { marginLeft: -12 },
        drawerStyle: { width: dimensions.width * 0.85 },
      }}
    >
      <Drawer.Screen
        name="(chat)/new"
        options={{
          title: "Echo Bot",
          drawerIcon: () => (
            <View className="bg-black rounded-full p-2">
              <Image
                source={require("../../../assets/images/logo-white.png")}
                style={{ width: 20, height: 20 }}
              />
            </View>
          ),
          headerRight: () => (
            <Link href={"/(auth)/(drawer)/(chat)/new"} push asChild>
              <TouchableOpacity className="mr-2">
                <Ionicons name="create-outline" size={28} color="black" />
              </TouchableOpacity>
            </Link>
          ),
        }}
      />
      <Drawer.Screen
        name="dalle"
        options={{
          title: "DALL·E",
          headerTitleAlign: "center",
          drawerIcon: () => (
            <Image
              source={require("../../../assets/images/dalle.png")}
              style={{ width: 30, height: 30, borderRadius: 15 }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="explore"
        options={{
          title: "Explore BOTs",
          drawerIcon: () => (
            <Ionicons name="apps-outline" color="black" size={28} />
          ),
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;

const styles = StyleSheet.create({});
