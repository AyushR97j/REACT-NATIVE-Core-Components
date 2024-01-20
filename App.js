import { useState } from 'react';
import { View, ActivityIndicator, Button } from 'react-native'

export default function App() {
  const [ToggleActivityIndicator, setToggleActivityIndicator] = useState(false)
  return (
  <View style={ { flex: 1, backgroundColor: "plum", padding: 60}}>
    <Button onPress={()=>setToggleActivityIndicator(!ToggleActivityIndicator)} title="Hide/Show Loader"/>
    <ActivityIndicator animating={ToggleActivityIndicator} />
    <ActivityIndicator size="large" animating={ToggleActivityIndicator} />
    <ActivityIndicator size="large" color="midnightblue" animating={ToggleActivityIndicator} />
    <ActivityIndicator size="extralarge" color="white" animating={ToggleActivityIndicator} />
  </View>
  );
}
