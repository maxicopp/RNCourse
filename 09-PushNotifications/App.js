import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View } from 'react-native';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowAlert: true,
    };
  },
});

export default function App() {
  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log('NOTIFICATION RECEIVED');
        console.log(notification);

        const data = notification?.request?.content?.data;

        if (data) {
          const { userName } = data;
          console.log('User Name:', userName);
        } else {
          console.log('Notification data object is null or undefined');
        }
      }
    );

    return () => {
      subscription.remove();
    };
  }, []);

  function scheduleNotificationHandler() {
    console.log('function');
    Notifications.scheduleNotificationAsync({
      content: {
        title: 'My first local notification',
        body: 'This is the body of the notification',
        data: { userName: 'Max' },
      },
      trigger: {
        seconds: 5,
      },
    });
  }

  return (
    <View style={styles.container}>
      <Button
        title="Schedule Notification"
        onPress={scheduleNotificationHandler}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
