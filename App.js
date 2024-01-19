import { View, Button, Image, Text, Pressable } from 'react-native'
const logoImg = require("./assets/adaptive-icon.png")

export default function App() {
  return (
  <View style={ { flex: 1, backgroundColor: "plum", padding: 60}}>
    <Button title="press" onPress={ () => console.log("Button Pressed")}
    color="midnightblue"
    />
    <Pressable onPress={ () => console.log("Image Pressed")}
    onLongPress={ ()=> console.log("image long pressed")}>
      <Image source={logoImg} style={ {height: 300, width: 300}}/>
    </Pressable>
    <Pressable onPress={ () => console.log("Text Pressed")}>
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
    </Pressable>
    
  </View>
  );
}
