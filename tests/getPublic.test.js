import { getPublic } from '../src/utils/getPublic.js';
import { it, describe, expect } from 'vitest';

describe('getPublic 함수', () => {
  let filePath = 'react.svg'
  it('함수의 반환 값 유형은 "string"', () => {
    const pathString = getPublic(filePath);
    expect(pathString).toBeTypeOf('string');
  });
  it('함수의 반환 값은 기본 경로(baseURL)를 포함한 값을 반환 ', () => {
    const pathString = getPublic(filePath);
    expect(pathString).toBe(import.meta.env.BASE_URL + filePath);
  });
});
