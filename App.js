import { View, Text, Image, ScrollView } from 'react-native'
const logoImg = require("./assets/adaptive-icon.png")

export default function App() {
  return (
  <View style={ { flex: 1, backgroundColor: "plum", padding: 60}}>
    <ScrollView>
    <Image source={logoImg} style={ {height: 300, width: 300}}/>
    <Text>
      lorem ipsum dolor sit amet, consectetur adip lorem ipsum  
      lorem ipsum dolor sit amet, consectetur adip lorem ipsum  
      lorem ipsum dolor sit amet, consectetur adip lorem ipsum  
      lorem ipsum dolor sit amet, consectetur adip lorem ipsum  
      lorem ipsum dolor sit amet, consectetur adip lorem ipsum  
      lorem ipsum dolor sit amet, consectetur adip lorem ipsum  
      lorem ipsum dolor sit amet, consectetur adip lorem ipsum  
      lorem ipsum dolor sit amet, consectetur adip lorem ipsum  
      lorem ipsum dolor sit amet, consectetur adip lorem ipsum  
    </Text>
    <Image source={logoImg} style={ {height: 300, width: 300}}/>
    </ScrollView>
  </View>
  );
}
