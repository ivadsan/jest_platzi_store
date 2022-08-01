import reducer from '../../reducers';
import ProductMock from '../../__mocks__/ProductMock';

describe('Reducers TEST', () => {
  test('initial state', () => {
    expect(reducer({}, '')).toEqual({});
  });
  test('ADD_TO_CART', () => {
    const initialState = { cart: [] };
    const action = { type: 'ADD_TO_CART', payload: ProductMock };
    expect(reducer(initialState, action)).toEqual({ cart: [ProductMock] });
  });
  test('REMOVE_FROM_CART', () => {
    const initialState = { cart: [ProductMock] };
    const action = { type: 'REMOVE_FROM_CART', payload: ProductMock };
    expect(reducer(initialState, action)).toEqual({ cart: [] });
  });
});
