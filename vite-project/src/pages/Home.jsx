import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../redux/counterSlice';

const Home = () => {
    const count = useSelector((state) => state.counter.count); // Prende il valore dello stato globale
    const dispatch = useDispatch(); // Permette di modificare lo stato

    return (
        <>
            <h1>Home</h1>
            <h2>Contatore: {count}</h2>
            <button onClick={() => dispatch(increment())}>Incrementa</button>
            <button onClick={() => dispatch(decrement())}>Decrementa</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>Aggiungi 5</button>
        </>
    );
};

export default Home;
