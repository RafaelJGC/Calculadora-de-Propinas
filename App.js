import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputMain}>
        <View style={styles.inputContainer}>
          <Text>
            Importe
          </Text>
          <TextInput style={styles.textInput}>  
          </TextInput>
        </View>

        <View style={styles.inputContainer}>
          <Text>
            # Personas
          </Text>
          <TextInput style={styles.textInput}>
          </TextInput>
          <Button title='-' color={'grey'}/>
          <Button title='+' color={'grey'}/>
          {/* Componente botones */}
        </View>

        <View style={styles.buttonContainer}>
          <Button title='8%' color={'grey'}/>
          <Button title='10%' color={'grey'}/>
          <Button title='12.5%' color={'grey'}/>
          <Button title='15%' color={'grey'}/>
        
          {/* Componente botones */}
        </View>

        <View style={styles.inputContainer}>
          <Text>
            % Propina
          </Text>
          <TextInput style={styles.textInput}>
          </TextInput>
          <Button title='-' color={'grey'}/>
          <Button title='+' color={'grey'}/>
        </View>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 40,
  },
  inputMain: {
    flex: 0,
    flexDirection: 'column',
  },

  inputContainer: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'lightgrey',
    padding: 10,
  },

  textInput: {
    // borderColor: 'blue',
    // borderWidth: 2,
    width:200,
  },

  text: {

  },

  buttonContainer: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    backgroundColor: 'lightgrey'
  },
});
