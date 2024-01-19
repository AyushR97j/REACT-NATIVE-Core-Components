import { useState } from 'react';
import { View, Button, Text, Modal } from 'react-native'
const logoImg = require("./assets/adaptive-icon.png")

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
  <View style={ { flex: 1, backgroundColor: "plum", padding: 60}}>
    <Button title="press" onPress={ () => setIsModalVisible(true)}
    color="midnightblue"
    />
    <Modal 
      visible={isModalVisible}
      onRequestClose={ () => setIsModalVisible(false)}
      animationType='slide'
      // presentationStyle='formSheet'
    >
      <View style={ { flex: 1, backgroundColor: "lightblue", padding: 60}}>
        <Text>Modal content</Text>
        <Button title="close" color="midnightblue" onPress={ () => setIsModalVisible(false)}/>
      </View>
    </Modal>
    
  </View>
  );
}
