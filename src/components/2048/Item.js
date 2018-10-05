import React, { Component } from 'react';
import { getColor } from './utils_2048';

class Item extends Component {
  render() {
    const { value } = this.props;
    const style = getColor(value);

    return (
      <div className="boxItem" style={style}>
        {value}
      </div>
    );
  }
}

Item.propTypes = {};

Item.defaultProps = {};

export default Item;
