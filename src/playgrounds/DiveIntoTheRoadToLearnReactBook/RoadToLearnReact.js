import React, {Component} from 'react';
import uuid from 'uuid';
import EventHandler from './EventHandler';
import InteractionsWithFormsAndEvents from './InteractionsWithFormsAndEvents';

export default class RoadToLearnReact extends Component {
  state = {
    list: [
      {
        title: 'React',
        url: 'https://facebook.github.io/react/',
        author: 'Belhassen Gharsallah',
        num_comments: 3,
        points: 4,
        objectID: uuid()
      }, {
        title: 'ES6',
        url: 'https://github.com/reactjs/redux',
        author: 'Ecmascript Lol',
        num_comments: 2,
        points: 5,
        objectID: uuid()
      }, {
        title: 'bel7aG',
        url: 'https:/github.io/bel7aG/',
        author: 'Belhassen Gharsallah',
        num_comments: 3,
        points: 4,
        objectID: uuid()
      }, {
        title: 'Love JS',
        url: '...',
        author: 'bel7aG',
        num_comments: 1,
        points: 2,
        objectID: uuid()
      }
    ],
    searchItem: ''
  };

  onDismiss = (id) => {
    this.setState((prevState) => ({
      list: prevState.list.filter(({objectID}) => objectID !== id)
    }));
  }

  onSearchChange = (event) => {
    const inputValue = event.target.value;
    console.log(inputValue.trim());
    this.setState(() => ({
      searchItem: inputValue.trim()
    }));
  }

  render() {
    return (<div className="road">
      <InteractionsWithFormsAndEvents
        onSearchChange={this.onSearchChange}
        value={this.state.searchItem}
      >
        <h1 className="search">Search</h1>
      </InteractionsWithFormsAndEvents>
      <EventHandler
        list={this.state.list}
        onDismiss={this.onDismiss}
        onSearchChange={this.onSearchChange}
        searchItem={this.state.searchItem}
      />
    </div>);
  }
}
