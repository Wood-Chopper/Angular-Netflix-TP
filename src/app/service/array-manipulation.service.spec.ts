import { TestBed } from '@angular/core/testing';

import { ArrayManipulationService } from './array-manipulation.service';

describe('ArrayManipulationService', () => {
  let service: ArrayManipulationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrayManipulationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // TODO Add more test

  it('should remove the element at the given index', () => {
    // Arrange
    let array = [1, 2, 3];

    // Act
    let result = service.removeAtIndex(array, 1);

    // Assert
    expect(result).toEqual([1, 3]);
  });

  it('should remove nothing if the index is bigger than the length of the array', () => {
    // Arrange
    let array = [1, 2, 3];

    // Act
    let result = service.removeAtIndex(array, 5);

    // Assert
    expect(result).toEqual([1, 2, 3]);
  });

  it('should do nothing if the array is null', () => {
    // Arrange
    let array = null;

    // Act
    let result = service.removeAtIndex(array, 5);

    // Assert
    expect(result).toBeNull();
  });
});
