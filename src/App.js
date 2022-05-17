import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
// import AlbumFeature from './features/Album';
// import CounterFeature from './features/Counter';
// import TodoFeature from './features/Todo';
import NotFound from './components/NotFound';
import Product from './features/Product';
import './App.css';
import CartFeature from './features/Cart';
// import { useSnackbar } from 'notistack';


function App() {
  // const { enqueueSnackbar } = useSnackbar();

  // const handleClick = () => {
  //   enqueueSnackbar('I love hooks' , { variant: 'success'});
  // }


  return (
    <div className="App">
      <Header />

      {/* <button onClick={handleClick}>  okok   </button> */}
      {/* <p>  <Link  to='/todos' > to do  </Link>      </p>
      <p>  <Link   to='/albums' >album </Link>       </p> */}
      {/* <TodoFeature /> */}
      {/* <AlbumFeatures /> */}

      <Switch>
        <Redirect from='/home' to='/' exact />
        <Redirect from='/post-list/:postId' to='/posts/:postId' exact />

        {/* <Route path='/' component={CounterFeature} exact /> */}
        {/* <Route path='/todos' component={TodoFeature} />
        <Route path='/albums' component={AlbumFeature} /> */}
        <Route path='/product' component={Product} />
        <Route path='/cart' component={CartFeature} />

        <Route component={NotFound} />
      </Switch>



    </div>
  );
}

export default App;
