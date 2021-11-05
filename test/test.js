import assert from 'assert';
import {createOutputFilePath} from '../src/index.js';

describe('CircularImage', function() {
  describe('createOutputFilePath', function() {
    it('should return catAsACircle when given file name cat', function() {
      assert.equal(createOutputFilePath('cat.png'), 'src/catAsACircle.png');
    });
    it('should return duckAsACircle when given file name duck', function() {
        assert.equal(createOutputFilePath('src/files/duck.jpeg'), 'src/duckAsACircle.png');
      });
  });
});