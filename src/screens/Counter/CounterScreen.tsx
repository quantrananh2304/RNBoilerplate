import { Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from '~/components';
import { RootState } from '~/types/reduxs';
import CounterActions from '~/reduxs/reducer/counter';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CounterScreen() {
  const counter = useSelector((state: RootState) => state.counter.counter);

  const dispatch = useDispatch();

  const handlePressIncrement = () => {
    dispatch(CounterActions.increment());
  };

  const handlePressReset = () => {
    dispatch(CounterActions.reset());
  };

  return (
    <>
      <SafeAreaView
        style={{
          alignItems: 'center',
        }}
      >
        <Text size="larger">{String(counter)}</Text>
      </SafeAreaView>

      <Button title="Increment" onPress={handlePressIncrement} />

      <Button title="Reset" onPress={handlePressReset} />
    </>
  );
}
