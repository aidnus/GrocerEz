import React from "react";
import { SafeAreaView, StyleSheet, Switch } from "react-native";
import { Text } from "react-native-rapi-ui";
import { useTheme } from "../components/navigation/ThemeContext";

export default function Profile() {
    const { isDarkMode, toggleDarkMode } = useTheme();

    return (
        <SafeAreaView style={[styles.container, isDarkMode && styles.darkContainer]}>
            <Text style={styles.sectionTitle}>Profile</Text>
            <Switch
                value={isDarkMode}
                onValueChange={toggleDarkMode}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white", // Default light background color
    },
    darkContainer: {
        backgroundColor: "grey", // Dark background color
    },
    sectionTitle: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 7,
        textAlign: "left",
        color: "black", // Default text color
    },
});