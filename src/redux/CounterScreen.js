import { useDispatch, useSelector } from "react-redux";
import { View, Text, Pressable, Button } from "react-native";
import { decrement, increment, incrementByAmount } from "./features/CounterSlice";

const CounterSreen =() => {

    const dispatch = useDispatch()
    const count = useSelector(state => state.counter.Value)

    return (

          <View>
            <Text>{count}</Text>
            <Button title="increment" onPress={() => dispatch(increment())}></Button>
            <Button title="decrement" onPress={() => dispatch(decrement())}></Button>
            <Button title="increment by amount" onPress={() => dispatch(incrementByAmount(10))}></Button>
          </View>
    );
  }


export default CounterSreen