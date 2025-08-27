/**
 * URL 和路径工具函数集合
 */

/**
 * 解析 URL 参数
 * @param url URL 字符串
 * @returns 参数对象
 */
export function parseUrlParams(url: string): Record<string, string> {
  const params: Record<string, string> = {};
  const urlObj = new URL(url);
  
  urlObj.searchParams.forEach((value, key) => {
    params[key] = value;
  });
  
  return params;
}

/**
 * 构建 URL 查询字符串
 * @param params 参数对象
 * @returns 查询字符串
 */
export function buildQueryString(params: Record<string, any>): string {
  const searchParams = new URLSearchParams();
  
  Object.entries(params).forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      searchParams.append(key, String(value));
    }
  });
  
  return searchParams.toString();
}

/**
 * 拼接 URL 路径
 * @param base 基础路径
 * @param paths 要拼接的路径段
 * @returns 拼接后的完整路径
 */
export function joinPath(base: string, ...paths: string[]): string {
  let result = base.replace(/\/+$/, ''); // 移除末尾的斜杠
  
  for (const path of paths) {
    if (path) {
      const cleanPath = path.replace(/^\/+/, '').replace(/\/+$/, ''); // 移除首尾斜杠
      if (cleanPath) {
        result += '/' + cleanPath;
      }
    }
  }
  
  return result;
}

/**
 * 获取文件扩展名
 * @param filename 文件名或路径
 * @returns 文件扩展名（不包含点）
 */
export function getFileExtension(filename: string): string {
  const lastDotIndex = filename.lastIndexOf('.');
  if (lastDotIndex === -1 || lastDotIndex === filename.length - 1) {
    return '';
  }
  return filename.slice(lastDotIndex + 1).toLowerCase();
}

/**
 * 获取文件名（不包含扩展名）
 * @param filepath 文件路径
 * @returns 文件名（不包含扩展名）
 */
export function getFileName(filepath: string): string {
  const filename = filepath.split('/').pop() || '';
  const lastDotIndex = filename.lastIndexOf('.');
  if (lastDotIndex === -1) {
    return filename;
  }
  return filename.slice(0, lastDotIndex);
}

/**
 * 标准化路径（移除多余的斜杠和点）
 * @param path 路径字符串
 * @returns 标准化后的路径
 */
export function normalizePath(path: string): string {
  // 替换多个连续斜杠为单个斜杠
  let normalized = path.replace(/\/+/g, '/');
  
  // 处理 ./ 和 ../
  const parts = normalized.split('/');
  const result: string[] = [];
  
  for (const part of parts) {
    if (part === '.' || part === '') {
      continue;
    } else if (part === '..') {
      if (result.length > 0 && result[result.length - 1] !== '..') {
        result.pop();
      } else {
        result.push(part);
      }
    } else {
      result.push(part);
    }
  }
  
  return result.join('/');
}

/**
 * 检查是否为绝对 URL
 * @param url URL 字符串
 * @returns 是否为绝对 URL
 */
export function isAbsoluteUrl(url: string): boolean {
  return /^https?:\/\//i.test(url);
}

/**
 * 获取域名
 * @param url URL 字符串
 * @returns 域名
 */
export function getDomain(url: string): string {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname;
  } catch {
    return '';
  }
}

/**
 * 添加或更新 URL 参数
 * @param url 原始 URL
 * @param params 要添加或更新的参数
 * @returns 更新后的 URL
 */
export function updateUrlParams(url: string, params: Record<string, any>): string {
  try {
    const urlObj = new URL(url);
    
    Object.entries(params).forEach(([key, value]) => {
      if (value === null || value === undefined) {
        urlObj.searchParams.delete(key);
      } else {
        urlObj.searchParams.set(key, String(value));
      }
    });
    
    return urlObj.toString();
  } catch {
    return url;
  }
}