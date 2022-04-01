import React from 'react';
import './ExpensesFilter.css';

/**
 * This is called a controlled component, as the values are set by the parent, and it sends a change in state to the parent. 
 * The component is simply responsible for displaying dynamic content, rather than defining the implementation that makes the 
 * content dynamic.
 * 
 * @param {selected, onCurrentYearChange} props 
 * @returns 
 */

const ExpensesFilter = (props) => {

  const currentYearHandler = (e) => {
    props.onCurrentYearChange(e.target.value); 
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={currentYearHandler}>
          <option value='Show All'>Show All</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;