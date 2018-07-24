import React, {Component} from 'react';
import EventHandler from './EventHandler';

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
      }
    ]
  };

  onDismiss = (id) => {
    this.setState((prevState) => ({
      list: prevState.list.filter(({objectID}) => objectID !== id)
    }));
  }

  render() {


    return (<div className="road">
      <EventHandler
        list={this.state.list}
        onDismiss={this.onDismiss}
      />
    </div>);
  }
}
