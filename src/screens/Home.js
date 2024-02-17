import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Layout, Text } from "react-native-rapi-ui";

export default function () {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.sectionTitle}>Home</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      sectionTitle: {
        fontSize: 30, 
        fontWeight: "bold", 
        marginBottom: 7, 
        textAlign: "left",
      },
  });
  