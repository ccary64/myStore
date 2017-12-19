import React from 'react';
import ListItem from './listItem';
import Center from '../common/center';

export default (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-md-10 col-sm-10 col-md-offset-1 col-sm-offset-1">
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
      </div>
      <div class="text-center">
        <ul class="pagination">
          <li><a href="?p=0" data-original-title="" title="">1</a></li> 
          <li><a href="?p=1" data-original-title="" title="">2</a></li> 
        </ul>
      </div>
    </div>
  );
}