import styles from "@/styles";
import { Link } from "expo-router";
import { Button, StatusBar, Text, View } from "react-native";

export default function Settings() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text>Settings Screen</Text>

      <Link href="/" asChild>
        <Button title="Home" />
      </Link>
    </View>
  );
}
