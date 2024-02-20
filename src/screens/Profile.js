import React from "react";
import { SafeAreaView, StyleSheet, Switch } from "react-native";
import { Text } from "react-native-rapi-ui";
import { useTheme } from "../../ThemeContext";

export default function Profile() {
    const { isDarkMode, toggleDarkMode } = useTheme();

    return (
        <SafeAreaView style={[styles.container, isDarkMode && styles.darkContainer]}>
            <Text style={[styles.sectionTitle, isDarkMode && styles.darkSectionTitle]}>Profile</Text>
            <Switch
                value={isDarkMode}
                onValueChange={toggleDarkMode}
            />
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
        color: "#fff", // Change color to match your dark theme
    },
    darkSectionTitle: {
        color: "#000", // Change color to match your dark theme
    },
});
  