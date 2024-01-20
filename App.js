import { View, Alert, Button } from 'react-native'

export default function App() {
  return (
  <View style={ { flex: 1, backgroundColor: "plum", padding: 60}}>
    <Button title="alert 1" onPress={ () => Alert.alert("Alert activated")} />
    <Button title="alert 2" onPress={ () => Alert.alert("Alert activated 2", "message")} />
    <Button
      title="Alert 3"
      onPress={ () => Alert.alert("Invalid data", "DOB INCORRECT", [
        {
          text: "Cancel",
          onPress : () => console.log("Cancel Pressed"),
        },
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
        },
        {
          text: "Close",
          onPress: () => console.log("Close Pressed"),
        },
      ])
      }
    />
  </View>
  );
}
