/**
 * 数组工具函数集合
 */

/**
 * 数组去重
 * @param arr 输入数组
 * @returns 去重后的数组
 */
export function unique<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}

/**
 * 数组分块
 * @param arr 输入数组
 * @param size 每块大小
 * @returns 分块后的二维数组
 */
export function chunk<T>(arr: T[], size: number): T[][] {
  if (size <= 0) return [];
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

/**
 * 数组扁平化
 * @param arr 输入数组
 * @param depth 扁平化深度，默认为 1
 * @returns 扁平化后的数组
 */
export function flatten<T>(arr: any[], depth: number = 1): T[] {
  return depth > 0 ? arr.reduce((acc, val) => 
    acc.concat(Array.isArray(val) ? flatten(val, depth - 1) : val), []) : arr.slice();
}

/**
 * 数组随机打乱
 * @param arr 输入数组
 * @returns 打乱后的新数组
 */
export function shuffle<T>(arr: T[]): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * 数组求交集
 * @param arr1 第一个数组
 * @param arr2 第二个数组
 * @returns 交集数组
 */
export function intersection<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.filter(item => arr2.includes(item));
}

/**
 * 数组求差集
 * @param arr1 第一个数组
 * @param arr2 第二个数组
 * @returns 差集数组
 */
export function difference<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.filter(item => !arr2.includes(item));
}