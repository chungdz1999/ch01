import React from 'react';
// import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
   const todoList = [
        {
            id: 1,
            title: 'eat'
        },
        {
            id: 2,
            title: 'dog'
        },
        {
            id: 3,
            title: 'Cat'
        },
   ];    
    return (
        <div>
               <h2> list todo  </h2>
               <TodoList todoList={todoList} />
        </div>
    );
}

export default TodoFeature;