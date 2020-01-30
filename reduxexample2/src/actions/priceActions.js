import { FETCH_PRICES, NEW_PRICE } from './types';

export const fetchPrices = () => dispatch => {
  console.log('fetching');
  fetch(
    'https://api-v2.intrinio.com/securities/AAPL/prices?api_key=OmQ1ZmU0ZjQwNmNkYWM1ZjU5MTJjMmExYTU4ODk4Nzdi'
  )
    .then(res => res.json())
    // .then(data => console.log(data));
    .then(prices =>
      dispatch({
        type: FETCH_PRICES,
        payload: prices.stock_prices
      })
    );
};

export const createPost = postData => dispatch => {
  console.log('action called');
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_PRICE,
        payload: post
      })
    );
};
