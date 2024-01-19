import { View, Text, Image, ImageBackground } from 'react-native'
const logoImg = require("./assets/adaptive-icon.png")

export default function App() {
  return (
  <View style={ { flex: 1, backgroundColor: "plum", padding: 60}}>
    {/* <Image source={logoImg} style={ {height: 300, width: 300}}/>
    <Image source={ {uri: 'https://picsum.photos/300' }} style={ {height: 300, width: 300}}/> */}

    <ImageBackground source={logoImg} style={ {flex: 1} }>
      <Text>IMAGE TEXT</Text>
    </ImageBackground>

  </View>
  );
}
