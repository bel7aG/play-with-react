import React, {Component} from 'react';
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
        objectID: 0
      }, {
        title: 'ES6',
        url: 'https://github.com/reactjs/redux',
        author: 'Ecmascript Lol',
        num_comments: 2,
        points: 5,
        objectID: 1
      }, {
        title: 'bel7aG',
        url: 'https:/github.io/bel7aG/',
        author: 'Belhassen Gharsallah',
        num_comments: 3,
        points: 4,
        objectID: 2
      }, {
        title: 'Love JS',
        url: '...',
        author: 'bel7aG',
        num_comments: 1,
        points: 2,
        objectID: 3
      }
    ],
    searchItem: ''
  };

  onDismiss = (id) => {
    this.setState((prevState) => ({
      list: prevState.list.filter(({objectID}) => objectID !== id)
    }));
  }

  onSearchChange = (event, searchItem) => {
    const inputValue = event.target.value;
    console.log(inputValue.trim());
    this.setState(() => ({
      searchItem: inputValue.trim()
    }));
  }

  render() {
    return (<div className="road">
      <EventHandler
        list={this.state.list}
        onSearchChange={this.onSearchChange}
        searchItem={this.state.searchItem}
      />
      <InteractionsWithFormsAndEvents
        onSearchChange={this.onSearchChange}
        value={this.state.searchItem}
      />
    </div>);
  }
}
