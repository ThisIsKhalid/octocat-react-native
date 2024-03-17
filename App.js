import { StatusBar } from "expo-status-bar";
import {
  Image,
  Linking,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Image
            source={require("./assets/Oval.png")}
            height={100}
            width={100}
          />
          <View>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
              The Octocat
            </Text>
            <Text style={{ fontSize: 16, color: "blue" }}>@octocat</Text>
            <Text style={{ fontSize: 12, color: "#A0A3BD" }}>
              Joined 25 Jan, 2018
            </Text>
          </View>
        </View>

        <Text style={{ fontSize: 16 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          posuere erat a ante. Integer posuere erat a ante.
        </Text>

        <View
          style={{
            padding: 20,
            backgroundColor: "#F6F8FF",
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <View
            style={{
              alignItems: "center",
              gap: 5,
            }}
          >
            <Text style={{ fontSize: 16 }}>Repos</Text>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>8</Text>
          </View>
          <View
            style={{
              alignItems: "center",
              gap: 5,
            }}
          >
            <Text style={{ fontSize: 16 }}>Followers</Text>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>3938</Text>
          </View>
          <View
            style={{
              alignItems: "center",
              gap: 5,
            }}
          >
            <Text style={{ fontSize: 16 }}>Following</Text>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>10</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Image source={require("./assets/003-pin.png")} />
          <Text style={{ fontSize: 16 }}>San Francisco</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Image source={require("./assets/002-url.png")} />
          <Text style={{ fontSize: 16 }}>https://github.com/ThisIsKhalid</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Image source={require("./assets/004-twitter.png")} />
          <Text style={{ fontSize: 16 }}>ThisIsKhalid</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Image source={require("./assets/001-office-building.png")} />
          <Text style={{ fontSize: 16 }}>Dhaka, Bangladesh</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FF",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#FEFEFE",
    borderRadius: 10,
    padding: 20,
    width: "90%",
    gap: 20,
  },
});
