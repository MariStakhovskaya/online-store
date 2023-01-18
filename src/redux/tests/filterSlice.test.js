import filterReducer from '../slices/filterSlice';

describe('filterSlice', () => {
  it('should return default state when passed an empty action', () => {
    const result = filterReducer(undefined, { type: '' });
    expect(result).toEqual({
      genderType: [
        { id: 1, name: 'девочка', isChecked: false },
        { id: 2, name: 'мальчик', isChecked: false },
      ],
      categoryType: [
        { id: 1, name: 'senior', isChecked: false },
        { id: 2, name: 'middle', isChecked: false },
        { id: 3, name: 'junior', isChecked: false },
        { id: 4, name: 'student1', isChecked: false },
        { id: 5, name: 'trainee', isChecked: false },
        { id: 6, name: 'mentor', isChecked: false },
      ],
      searchValue: '',
      sort: 'price_desc',
      viewGrid: true,
      maxProductPrice: 0,
      minProductPrice: 0,
    });
  });
});
