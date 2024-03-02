import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import css from './App.module.css';
import AppRoutes from './AppRoutes';
import { current } from '../redux/auth/auth-operations';



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch])

  return (
    <div className={css.appContainer}>
      <AppRoutes />
    </div> 
  )
  
};

export default App;
