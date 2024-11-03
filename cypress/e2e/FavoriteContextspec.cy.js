import React from 'react';
import { render, screen } from '@testing-library/react';
import { FavoriteProvider, useFavoriteContext } from '../../src/components/Favorite/FavoriteContext';

const TestComponent = () => {
  const { favoriteItems, addFavoriteItem, removeFavoriteItem } = useFavoriteContext();

  return (
    <div>
      <button onClick={() => addFavoriteItem({ title: 'Test Item', selectedColor: 'red', selectedSize: 'M' })}>
        Add Favorite
      </button>
      <button onClick={() => removeFavoriteItem({ title: 'Test Item', selectedColor: 'red', selectedSize: 'M' })}>
        Remove Favorite
      </button>
      <div data-testid="favorites-count">{favoriteItems.length}</div>
    </div>
  );
};

describe('FavoriteContext Tests', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should add favorite item correctly', () => {
    render(
      <FavoriteProvider>
        <TestComponent />
      </FavoriteProvider>
    );

    screen.getByText('Add Favorite').click();

  });

  it('should remove favorite item correctly', () => {
    localStorage.setItem('favoriteItems', JSON.stringify([{ title: 'Test Item', selectedColor: 'red', selectedSize: 'M', quantity: 1 }]));

    render(
      <FavoriteProvider>
        <TestComponent />
      </FavoriteProvider>
    );

    screen.getByText('Remove Favorite').click();

  });
});
