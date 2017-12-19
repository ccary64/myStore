import React from 'react';
import { Link } from 'react-router-dom'

const PaginationItem = (props) => {
  const { index } = props;
  return (
    <li>
      <Link to={`/items?page=${index}`}> {index} </Link>
    </li>
  );
}

const buildPagination = (pagesLength) => {
  let paginaton = [];
  for(let i = 1; i < pagesLength + 1; i++) {
    paginaton.push( <PaginationItem key={i} index={i} />);
  }
  return paginaton;
}

export default (props) => {
  const { length } = props;
  return (
    <div class="text-center">
      <ul class="pagination">
        {buildPagination(length)}
      </ul>
    </div>
  );
}
