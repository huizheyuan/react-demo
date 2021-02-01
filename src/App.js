import { React, Component } from 'react';
import Board from './components/Board';
import Clock from './components/Clock';
import Calculator from './components/Calculator';
import FilterableProductTable from './components/FilterableProductTable';

class App extends Component {
  render() {
    return (
      <>
        <Board />
        <Clock />
        <Calculator/>
        <FilterableProductTable />
      </>
    );
  }
}

export default App;
