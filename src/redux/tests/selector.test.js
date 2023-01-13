import { sectAllDucks } from '../selectors';

describe('redux selectors', () => {
  it('should select duck from state', () => {
    const ducks = [
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
    let result = sectAllDucks({ ducks });

    expect(result).toEqual(ducks);
  });
});
