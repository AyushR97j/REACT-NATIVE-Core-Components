import { View, Button } from 'react-native'
const logoImg = require("./assets/adaptive-icon.png")

export default function App() {
  return (
  <View style={ { flex: 1, backgroundColor: "plum", padding: 60}}>
    <Button title="press" onPress={ () => console.log("Button Pressed")}
    color="midnightblue"
    disabled
    />
  </View>
  );
}
