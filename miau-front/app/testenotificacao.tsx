import { useEffect, useState } from "react";
import { Alert, Button, Platform, SafeAreaView, StatusBar } from "react-native";
import { Text, Layout } from "@ui-kitten/components";
import { useNotification } from "@/context/notifications";
import * as Updates from "expo-updates";
import { sendPushNotification } from "@/services/notifications";

export default function TesteNotis() {
    const { notification, expoPushToken, error } = useNotification();
    const { currentlyRunning, isUpdateAvailable, isUpdatePending } =
        Updates.useUpdates();

    const [dummyState, setDummyState] = useState(0);

    if (error) {
        return <Text>Error: {error.message}</Text>;
    }

    const HandleSendNotification = async () => {
        try {
            await sendPushNotification(
                "ExponentPushToken[pC0uMzCQHJL8ngO1SNLLb3]"
            );
        } catch (e) {
            Alert.alert("Error");
        }
    };

    useEffect(() => {
        if (isUpdatePending) {
            dummyFunction();
        }
    }, [isUpdatePending]);

    const dummyFunction = async () => {
        try {
            await Updates.reloadAsync();
        } catch (e) {
            Alert.alert("Error");
        }
    };

    const showDownloadButton = isUpdateAvailable;

    const runTypeMessage = currentlyRunning.isEmbeddedLaunch
        ? "This app is running from built-in code"
        : "This app is running an update";

    return (
        <Layout
            style={{
                flex: 1,
                padding: 10,
                paddingTop:
                    Platform.OS == "android" ? StatusBar.currentHeight : 10,
            }}
        >
            <SafeAreaView style={{ flex: 1 }}>
                <Text category="h5">Updates Demo 5</Text>
                <Text>{runTypeMessage}</Text>
                <Button
                    onPress={() => Updates.checkForUpdateAsync()}
                    title="Check manually for updates"
                />
                {showDownloadButton ? (
                    <Button
                        onPress={() => Updates.fetchUpdateAsync()}
                        title="Download and run update"
                    />
                ) : null}
                <Text category="h5" style={{ color: "red" }}>
                    Your push token:
                </Text>
                <Text>{expoPushToken ?? "No push token available"}</Text>
                <Text category="h5">Latest notification:</Text>
                <Text>
                    {notification?.request.content.title ??
                        "No title available"}
                </Text>
                <Text>
                    {JSON.stringify(
                        notification?.request.content.data,
                        null,
                        2
                    )}
                </Text>
                <Button
                    onPress={() => HandleSendNotification()}
                    title="Send Notification"
                />
            </SafeAreaView>
        </Layout>
    );
}
