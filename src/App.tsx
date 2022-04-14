import "./styles.css";
import {useAppSelector, useAppDispatch} from './store/hooks/redux'
import {userSlice} from './store/reducers/UserSlice'

export default function App() {
  const {count} = useAppSelector(state => state.userReducer)
  const {increment, decrement} = userSlice.actions
  const dispatch = useAppDispatch()

  return (
    <div className="App">
      {count} <br />
      <button onClick={() => dispatch(increment(5))}>INCREMENT</button>
      <button onClick={() => dispatch(decrement(10))}>DECREMENT</button>
    </div>
  );
}
