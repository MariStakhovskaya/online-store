import ducksReducer, { setReduxDucks } from '../slices/ducksSlice';

describe('ducksSlice', () => {
  it('should return default state when passed an ampty action', () => {
    const result = ducksReducer(undefined, { type: '' });

    expect(result.ducks).toEqual([]);
  });
});

describe('ducksSlice1', () => {
  it('should return ducks array', () => {
    const ducks1 = [
      {
        id: 17,
        name: 'Test',
        description: '',
        fullDescription: '',
        category: 'mentor',
        gender: 'мальчик',
        price: 1,
        stock: 1,
        image: '',
        image2: '',
        alt: '',
        raiting: 5,
        count: 0,
      },
    ];
    const action = { type: setReduxDucks.type, payload: ducks1 };
    const result1 = ducksReducer([], action);

    expect(result1.ducks).toBe(ducks1);
  });
});
