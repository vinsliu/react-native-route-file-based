import styles from "@/styles";
import { Link } from "expo-router";
import { Button, StatusBar, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text>Home Screen</Text>

      <Link href="/settings" asChild>
        <Button title="Settings" />
      </Link>
    </View>
  );
}
