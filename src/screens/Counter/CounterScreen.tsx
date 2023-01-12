import { Button } from 'react-native';
import { Text } from '~/components';
import { RESETTABLE_REDUCER, RootState } from '~/types/reduxs';
import CounterActions from '~/reduxs/reducer/counterReducer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { dispatch, useSelector } from '~/reduxs';

export default function CounterScreen() {
  const counter = useSelector((state: RootState) => state.counter.counter);

  const handlePressIncrement = () => {
    dispatch(CounterActions.increment());
  };

  const handlePressReset = () => {
    dispatch({ type: RESETTABLE_REDUCER.COUNTER_RESET });
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
