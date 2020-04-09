import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import { Monster } from './types/data-types';
import axios from 'axios';
import './App.css';

interface Props {}
interface State {
  monsters: Array<Monster>;
  searchField: string;
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      monsters: [],
      searchField: '',
    };

  }

  async componentDidMount() {
    const result = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    this.setState({ monsters: result.data });
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      searchField: e.target.value,
    });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField)
    );

    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='Search Monsters...'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
