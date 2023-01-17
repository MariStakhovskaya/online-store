import basketReducer, {
  addDuck,
  removeDuck,
  setQuery,
  setCurrentPage,
  setLimit,
} from '../slices/basketSlice';

describe('basketSlice', () => {
  it('should return default state when passed an empty action', () => {
    const result = basketReducer(undefined, { type: '' });
    expect(result).toEqual({
      ducks: [],
      totalPrice: 0,
      limit: 3,
      currentPage: 1,
    });
  });

  it('should add new duck with "addDuck" action', () => {
    const duck = {
      id: 1,
      name: 'Test',
      description: '',
      fullDescription: '',
      category: '',
      gender: '',
      price: 1,
      stock: 1,
      image: '',
      image2: '',
      alt: '',
      raiting: 5,
      count: 1,
    };
    const action = { type: addDuck.type, payload: duck };
    const result = basketReducer(
      {
        ducks: [],
        totalPrice: 0,
        limit: 3,
        currentPage: 1,
      },
      action
    );
    expect(result.ducks[0]).toStrictEqual(duck);
    expect(result.totalPrice).toEqual(
      result.ducks[0].price * result.ducks[0].count
    );
  });

  it('should delete duck with "removeDuck" action', () => {
    const duck = {
      id: 1,
      name: 'Test',
      description: '',
      fullDescription: '',
      category: '',
      gender: '',
      price: 1,
      stock: 1,
      image: '',
      image2: '',
      alt: '',
      raiting: 5,
      count: 1,
    };
    const action = { type: removeDuck.type, payload: duck };
    const result = basketReducer(
      {
        ducks: [duck],
        totalPrice: duck.price * duck.count,
        limit: 3,
        currentPage: 1,
      },
      action
    );
    expect(result.ducks).toEqual([]);
    expect(result.totalPrice).toEqual(0);
  });

  it('should add query params with "setQuery" action', () => {
    const limPage = { limit: 1, currentPage: 2 };
    const action = { type: setQuery.type, payload: limPage };
    const result = basketReducer(
      {
        ducks: [],
        totalPrice: 0,
        limit: 3,
        currentPage: 1,
      },
      action
    );
    expect(result.limit).toBe(limPage.limit);
    expect(result.currentPage).toBe(limPage.currentPage);
  });

  it('shoild change current page with "setCurrentPage" action', () => {
    const page = 5;
    const action = { type: setCurrentPage.type, payload: page };
    const result = basketReducer(
      {
        ducks: [],
        totalPrice: 0,
        limit: 3,
        currentPage: 1,
      },
      action
    );
    expect(result.currentPage).toBe(page);
  });

  it('shoild change limit with "setLimit" action', () => {
    const limit = 15;
    const action = { type: setLimit.type, payload: limit };
    const result = basketReducer(
      {
        ducks: [],
        totalPrice: 0,
        limit: 3,
        currentPage: 1,
      },
      action
    );
    expect(result.limit).toBe(limit);
  });
});
