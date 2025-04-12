import { navigate } from "expo-router/build/global-state/routing";
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { useRouter } from 'expo-router'

const { width, height } = Dimensions.get("window");


const Home = () => {
    
const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/todoapplogo.jpg")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.title}>Manage your tasks easily</Text>

      <TouchableOpacity style={styles.button}  onPress={() => router.push('/TaskScreen/TaskScreen')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF7F50",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: width * 0.05,
  },
  imageContainer: {
    width: width * 0.6,
    height: height * 0.3,
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: height * 0.05,
  },
  image: {
    width: "80%",
    height: "80%",
  },
  title: {
    fontSize: width * 0.06,
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: height * 0.05,
  },
  button: {
    backgroundColor: "white",
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.25,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "white",
  },
  buttonText: {
    color: "#000",
    fontSize: width * 0.04,
    textAlign: "center",
  },
});

export default Home;
