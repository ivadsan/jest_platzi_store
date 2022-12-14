import React from 'react';
import { shallow, mount } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import ProductMock from '../../__mocks__/ProductMock';
import Product from '../../components/Product';

describe('<Product />', () => {
  test('Render component', () => {
    const product = shallow(
      <ProviderMock>
        <Product />
      </ProviderMock>,
      // <Product product={ProductMock} handleAddToCart={handleAddToCart} />
    );
    expect(product.length).toEqual(1);
  });

  test('Test button Add to cart', () => {
    const handleAddToCart = jest.fn();
    const wrapper = mount(
      <ProviderMock>
        <Product product={ProductMock} handleAddToCart={handleAddToCart} />
      </ProviderMock>,
    );
    wrapper.find('button').simulate('click');
    //expect(handleAddToCart).toHaveBeenCalledTimes(1);
    expect(handleAddToCart.mock.calls.length).toEqual(1);
  });
});
