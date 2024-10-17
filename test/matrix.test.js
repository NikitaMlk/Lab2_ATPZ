import { expect } from 'chai';
import Matrix from '../src/matrix.js';

describe('Matrix operations', () => {
  it('should create an empty matrix', () => {
    const matrix = new Matrix(2, 2);
    expect(matrix.rows).to.equal(2);
    expect(matrix.cols).to.equal(2);
  });
});
