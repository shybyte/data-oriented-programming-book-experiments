import {DataDiff} from '../../../src/do/original-book-code/chapter5/diff';

describe('diff', () => {
  test('no difference', () => {
    const noDiff = DataDiff.diff({}, {});
    expect(noDiff).toEqual({});
  });

  test('add attribute', () => {
    expect(DataDiff.diff(
      {},
      {b: 2})
    ).toEqual({b: 2});

    expect(DataDiff.diff(
      {a: 1},
      {a: 1, b: 2}
    )).toEqual({b: 2});
  });

  test('change nested attributes', () => {
    expect(DataDiff.diff(
      {a: {a2: 5, b: 8}},
      {a: {a2: 6, b: 8}})
    ).toEqual({a: {a2: 6}});
  });

  test('remove attribute', () => {
    expect(DataDiff.diff(
      {a: 1},
      {}
    )).toEqual({a: undefined});
  });

  test('add array element', () => {
    expect(DataDiff.diff(
      {a: [1]},
      {a: [1, 2]}
    )).toEqual({a: [undefined, 2]});
  });

  test('remove middle array element', () => {
    expect(DataDiff.diff(
      {a: [1, 2, 3]},
      {a: [1, 3]}
    )).toEqual({a: [undefined, 3, undefined]});
  });

  test('remove array element', () => {
    expect(DataDiff.diff(
      {a: [1, 2, 3]},
      {a: [1, 2]}
    )).toEqual({a: [undefined, undefined, undefined]});

    expect(DataDiff.diff(
      [1, 2, 3],
      [1, 2]
    )).toEqual([undefined, undefined, undefined]);
  });


  test('change array element', () => {
    expect(DataDiff.diff(
      {a: [1, 2]},
      {a: [1, 3]}
    )).toEqual({a: [undefined, 3]});
  });

  test('change object array element', () => {
    expect(DataDiff.diff(
      {a: [1, {a: 1}]},
      {a: [1, {a: 2}]}
    )).toEqual({a: [undefined, {a: 2}]});
  });

});
