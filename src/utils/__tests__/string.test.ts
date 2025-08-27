import { capitalize, toCamelCase, toKebabCase, trim, truncate } from '../string';

describe('String Utils', () => {
  describe('capitalize', () => {
    it('should capitalize first letter', () => {
      expect(capitalize('hello')).toBe('Hello');
      expect(capitalize('WORLD')).toBe('World');
      expect(capitalize('')).toBe('');
    });
  });

  describe('toCamelCase', () => {
    it('should convert to camel case', () => {
      expect(toCamelCase('hello-world')).toBe('helloWorld');
      expect(toCamelCase('hello_world')).toBe('helloWorld');
      expect(toCamelCase('hello world')).toBe('helloWorld');
      expect(toCamelCase('hello')).toBe('hello');
    });
  });

  describe('toKebabCase', () => {
    it('should convert to kebab case', () => {
      expect(toKebabCase('helloWorld')).toBe('hello-world');
      expect(toKebabCase('HelloWorld')).toBe('hello-world');
      expect(toKebabCase('hello')).toBe('hello');
    });
  });

  describe('trim', () => {
    it('should trim whitespace', () => {
      expect(trim('  hello  ')).toBe('hello');
      expect(trim('hello')).toBe('hello');
      expect(trim('')).toBe('');
    });
  });

  describe('truncate', () => {
    it('should truncate string with ellipsis', () => {
      expect(truncate('hello world', 5)).toBe('he...');
      expect(truncate('hello', 10)).toBe('hello');
      expect(truncate('hello world', 8, '***')).toBe('hello***');
    });
  });
});