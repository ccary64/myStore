import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import * as itemsActions from '../../actions/items';

import ListItem from './listItem';
import Pagination from './pagination';

const MAX_ITEMS_PER_PAGE = 6;

class ItemsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { items = [], totalPages = 1, currentPage= 1 } = this.props;

    return (
      <div>
        <div className="row">
          <div className="col-md-10 col-sm-10 col-md-offset-1 col-sm-offset-1">
            {items.map(item => <ListItem key={item.id} {...item} />)}
          </div>
        </div>
        <Pagination length={totalPages} />
      </div>
    );
  }
}

const mapStateToProps = (state/*, props*/) => {
  const { filter, items } = state.itemList;
  items = (filter) ? item.filter(items.category === filter) : items;
  return items;
}
const ConnectedListItems = connect(mapStateToProps)(ItemsList);
export default ConnectedListItems