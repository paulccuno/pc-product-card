import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductImage } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('debe mostrar el componente con la imagen personalizada', () => {
    const wrapper = renderer.create(<ProductImage img="https://hola.jpg" />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe mostrar el componente con la imagen del product', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>
        {() => (
          <>
            <ProductImage />
          </>
        )}
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
