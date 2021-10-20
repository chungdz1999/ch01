import React, { useState } from 'react';
import TodoForm from '../../components/TodoForm';
// import PropTypes from 'prop-types';
import TodoList from '../../components/TodoList';

ListPage.propTypes = {
    
};

function ListPage(props) {
   const inittodoList = [
        {
            id: 1,
            title: 'eat',
            status: 'new',
        },
        {
            id: 2,
            title: 'dog',
            status: 'completed',
        },
        {
            id: 3,
            title: 'Cat',
            status: 'new',
        },
   ];    

    const [todoList, setTodoList] = useState(inittodoList); 
    const [filteredStatus, setFilteredStauts] = useState('all');

    const handleTodoClick = (todo, idx) => {
        
        const newTodoList = [...todoList];

        console.log(todo, idx);

         newTodoList[idx] ={
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
        }
        setTodoList(newTodoList);
    }

    const handleShowAllClick = () => {
       setFilteredStauts('all');
    }

    const handleShowCompletedClick = () => {
        setFilteredStauts('completed');
    }

    const handleShowNewClick = () => {
        setFilteredStauts('new');
    }

    const renderedTodoList = todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status);
    //  console.log(renderedTodoList);

    const handleTodoFormSubmit = (values) => {
        console.log(' Form submit:', values);
    }

    return (
        <div>

                <h3> what to do  </h3>
                <TodoForm onSubmit={handleTodoFormSubmit}   />


               <h2> list todo  </h2>
               <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />

               <div>
                   <button onClick={handleShowAllClick}> Show All </button>
                   <button onClick={handleShowCompletedClick}> Show compeleted </button>
                   <button onClick={handleShowNewClick}> Show new </button>
               </div>

        </div>
    );
}

export default ListPage;