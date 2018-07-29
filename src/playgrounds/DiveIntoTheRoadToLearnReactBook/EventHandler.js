import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '..';

const HOCSearchItem = (searchedItem) => ({title, author}) =>
title.toLowerCase().includes(searchedItem.toLowerCase())
|| author.toLowerCase().includes(searchedItem.toLowerCase());

const EventHandler = ({ list, onDismiss, onSearchChange, searchItem }) => (
  <div className="road__event-handler">
    <h1>Event Handler</h1>
    {list.length > 0 && (
      list.filter(HOCSearchItem(searchItem))
      .map((item) => (
        <div className={`item item-${item.objectID}`} key={item.objectID}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <span>{item.author}</span>
          <span>{item.num_comments}</span>
          <span>{item.points}</span>
          <span>
            <Button
              onClick={() => onDismiss(item.objectID)}
              className={`btn-${item.objectID}`}
            >
              Dismiss
            </Button>
          </span>
        </div>
      ))
    )}
  </div>
);

export default EventHandler;
