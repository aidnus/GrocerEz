import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Text } from "react-native-rapi-ui";
import { useTheme } from "../../ThemeContext";

export default function () {
    const { isDarkMode } = useTheme();
    return (
        <SafeAreaView style={[styles.container, isDarkMode && styles.darkContainer]}>
            <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Lists</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    darkContainer: {
        backgroundColor: "#000",
    },
    sectionTitle: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 7,
        textAlign: "left",
        color: "#000", // Default color for light mode
    },
    darkSectionTitle: {
        color: "#fff", // Color for dark mode
    },
});