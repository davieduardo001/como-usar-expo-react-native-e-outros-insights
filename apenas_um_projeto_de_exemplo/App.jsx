import { Text, View } from 'react-native';

import { Button } from './src/components/button';
import {styles} from './src/styles/styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Nosso primeiro appzinho :P</Text>
      <Button text='button text'></Button>
    </View>
  );
}
