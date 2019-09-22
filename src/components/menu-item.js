import React from 'react';
import { Link } from 'gatsby';

function MenuItem(props){
  return (
    <Link class = 'sidebar-menu-item' to={props.whereTo}>
      <h3 >
        {props.name}
      </h3>
      </Link>
  )
}


export default MenuItem;
