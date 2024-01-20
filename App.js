import { View } from 'react-native'
import Greet from './CoreComponents/components/Greet';

export default function App() {
  return (
  <View style={ { flex: 1, backgroundColor: "plum", padding: 60}}>
    <Greet name="Ayush"></Greet>
  </View>
  );
}
