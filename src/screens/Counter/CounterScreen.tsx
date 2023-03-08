import { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { Text } from '~/components';
import { RESETTABLE_REDUCER, RootState } from '~/types/reduxs';
import { Creators } from '~/reduxs/reducer/counterReducer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { dispatch, useSelector } from '~/reduxs';
import { TextInput } from 'react-native-gesture-handler';

export default function CounterScreen() {
  const counter = useSelector((state: RootState) => state.counter);
  const [value, setValue] = useState('0');

  function handleIncrement() {
    dispatch(Creators.increment(+value));
  }

  function handleDecrement() {
    dispatch(Creators.decrement(+value));
  }

  function handleSet() {
    dispatch(Creators.set(+value));
  }

  function handleReset() {
    dispatch({ type: RESETTABLE_REDUCER.COUNTER_RESET });
  }

  return (
    <>
      <SafeAreaView
        style={{
          alignItems: 'center',
        }}
      >
        <Text size="larger">{String(counter)}</Text>
      </SafeAreaView>
      <View style={styles.marginBottom2}>
        <Button title="Increment" onPress={handleIncrement} />
      </View>
      <View style={styles.marginBottom2}>
        <Button title="Decrement" onPress={handleDecrement} />
      </View>
      <Button title="Set" onPress={handleSet} />
      <TextInput
        keyboardType="number-pad"
        textAlign="center"
        onChangeText={setValue}
        style={styles.input}
        value={value}
      />
      <Button title="Reset" onPress={handleReset} />
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    alignSelf: 'center',
    borderRadius: 8,
    borderWidth: 2,
    height: 40,
    width: '50%',
    marginVertical: 4,
    fontSize: 16
  },
  marginBottom2: {
    marginBottom: 2
  }
});
