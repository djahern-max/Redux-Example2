import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPrices } from '../actions/priceActions';

class Price extends Component {
  componentWillMount() {
    this.props.fetchPrices();
  }
  render() {
    const priceItems = this.props.prices.map(price => (
      <div key={price.adj_volume}>
        <h3>{price.close}</h3>
        <p>{price.open}</p>
        <p>{price.high}</p>
        <p>{price.low}</p>
      </div>
    ));
    return (
      <div>
        <h1>Prices</h1>
        {priceItems}
      </div>
    );
  }
}

Price.propTypes = {
  fetchPrices: PropTypes.func.isRequired,
  Price: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  prices: state.prices.items
});

export default connect(mapStateToProps, { fetchPrices })(Price);
