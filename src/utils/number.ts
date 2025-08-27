/**
 * 数字工具函数集合
 */

/**
 * 生成指定范围内的随机整数
 * @param min 最小值（包含）
 * @param max 最大值（包含）
 * @returns 随机整数
 */
export function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * 生成指定范围内的随机浮点数
 * @param min 最小值（包含）
 * @param max 最大值（不包含）
 * @returns 随机浮点数
 */
export function randomFloat(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

/**
 * 数字格式化，添加千分位分隔符
 * @param num 数字
 * @param separator 分隔符，默认为 ','
 * @returns 格式化后的字符串
 */
export function formatNumber(num: number, separator: string = ','): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}

/**
 * 保留指定小数位数
 * @param num 数字
 * @param digits 小数位数
 * @returns 保留小数位后的数字
 */
export function toFixed(num: number, digits: number): number {
  return Number(num.toFixed(digits));
}

/**
 * 判断是否为偶数
 * @param num 数字
 * @returns 是否为偶数
 */
export function isEven(num: number): boolean {
  return num % 2 === 0;
}

/**
 * 判断是否为奇数
 * @param num 数字
 * @returns 是否为奇数
 */
export function isOdd(num: number): boolean {
  return num % 2 !== 0;
}

/**
 * 限制数字在指定范围内
 * @param num 数字
 * @param min 最小值
 * @param max 最大值
 * @returns 限制后的数字
 */
export function clamp(num: number, min: number, max: number): number {
  return Math.min(Math.max(num, min), max);
}

/**
 * 计算百分比
 * @param value 当前值
 * @param total 总值
 * @param digits 小数位数，默认为 2
 * @returns 百分比
 */
export function percentage(value: number, total: number, digits: number = 2): number {
  if (total === 0) return 0;
  return toFixed((value / total) * 100, digits);
}