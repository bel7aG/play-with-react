import React from 'react';
import { Link } from 'react-router-dom';

const EventHandler = (props) => (
  <div className="road__event-handler">
    <h1>Event Handler</h1>
    {props.list.length && (
      props.list.map((item) => (
        <div className={`item-${item.objectID}`} key={item.objectID}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <span>{item.author}</span>
          <span>{item.num_comments}</span>
          <span>{item.points}</span>
    
        </div>
      ))
    )}
  </div>
);

export default EventHandler;
