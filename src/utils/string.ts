/**
 * 字符串工具函数集合
 */

/**
 * 首字母大写
 * @param str 输入字符串
 * @returns 首字母大写的字符串
 */
export function capitalize(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * 驼峰命名转换
 * @param str 输入字符串
 * @returns 驼峰命名格式的字符串
 */
export function toCamelCase(str: string): string {
  return str.replace(/[-_\s]+(.)?/g, (_, char) => char ? char.toUpperCase() : '');
}

/**
 * 短横线命名转换
 * @param str 输入字符串
 * @returns 短横线命名格式的字符串
 */
export function toKebabCase(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

/**
 * 去除字符串两端空格
 * @param str 输入字符串
 * @returns 去除空格后的字符串
 */
export function trim(str: string): string {
  return str.trim();
}

/**
 * 截断字符串并添加省略号
 * @param str 输入字符串
 * @param length 最大长度
 * @param suffix 后缀，默认为 '...'
 * @returns 截断后的字符串
 */
export function truncate(str: string, length: number, suffix: string = '...'): string {
  if (str.length <= length) return str;
  return str.slice(0, length - suffix.length) + suffix;
}