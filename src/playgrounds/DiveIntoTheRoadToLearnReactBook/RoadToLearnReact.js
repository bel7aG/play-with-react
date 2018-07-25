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
        title: 'Redux',
        url: 'https://github.com/reactjs/redux',
        author: 'bel7aG',
        num_comments: 2,
        points: 5,
        objectID: 1
      }, {
        title: 'React',
        url: 'https://facebook.github.io/react/',
        author: 'Belhassen Gharsallah',
        num_comments: 3,
        points: 4,
        objectID: 2
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
    this.setState((prevState) => ({
      searchItem: inputValue,
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
        title={this.state.list.title}
      />
    </div>);
  }
}
