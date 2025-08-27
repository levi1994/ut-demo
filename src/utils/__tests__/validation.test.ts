import { isEmail, isPhone, isIdCard, isUrl, isIp, validatePassword, isEmpty } from '../validation';

describe('Validation Utils', () => {
  describe('isEmail', () => {
    it('should validate email format', () => {
      expect(isEmail('test@example.com')).toBe(true);
      expect(isEmail('user.name@domain.co.uk')).toBe(true);
      expect(isEmail('invalid-email')).toBe(false);
      expect(isEmail('test@')).toBe(false);
      expect(isEmail('@example.com')).toBe(false);
    });
  });

  describe('isPhone', () => {
    it('should validate Chinese phone number', () => {
      expect(isPhone('13812345678')).toBe(true);
      expect(isPhone('15987654321')).toBe(true);
      expect(isPhone('12345678901')).toBe(false);
      expect(isPhone('1381234567')).toBe(false);
      expect(isPhone('138123456789')).toBe(false);
    });
  });

  describe('isIdCard', () => {
    it('should validate Chinese ID card', () => {
      expect(isIdCard('123456789012345678')).toBe(true);
      expect(isIdCard('12345678901234567X')).toBe(true);
      expect(isIdCard('123456789012345')).toBe(true);
      expect(isIdCard('1234567890123456789')).toBe(false);
      expect(isIdCard('12345678901234')).toBe(false);
    });
  });

  describe('isUrl', () => {
    it('should validate URL format', () => {
      expect(isUrl('https://www.example.com')).toBe(true);
      expect(isUrl('http://example.com')).toBe(true);
      expect(isUrl('https://sub.example.com/path?query=1')).toBe(true);
      expect(isUrl('invalid-url')).toBe(false);
      expect(isUrl('ftp://example.com')).toBe(false);
    });
  });

  describe('isIp', () => {
    it('should validate IP address', () => {
      expect(isIp('192.168.1.1')).toBe(true);
      expect(isIp('127.0.0.1')).toBe(true);
      expect(isIp('255.255.255.255')).toBe(true);
      expect(isIp('256.1.1.1')).toBe(false);
      expect(isIp('192.168.1')).toBe(false);
      expect(isIp('invalid-ip')).toBe(false);
    });
  });

  describe('validatePassword', () => {
    it('should validate password strength', () => {
      const weak = validatePassword('123');
      expect(weak.isValid).toBe(false);
      expect(weak.strength).toBe('weak');
      expect(weak.issues.length).toBeGreaterThan(0);

      const strong = validatePassword('StrongPass123!');
      expect(strong.isValid).toBe(true);
      expect(strong.strength).toBe('strong');
      expect(strong.issues).toHaveLength(0);

      const medium = validatePassword('Password123');
      expect(medium.strength).toBe('medium');
    });
  });

  describe('isEmpty', () => {
    it('should check if value is empty', () => {
      expect(isEmpty('')).toBe(true);
      expect(isEmpty('   ')).toBe(true);
      expect(isEmpty([])).toBe(true);
      expect(isEmpty({})).toBe(true);
      expect(isEmpty(null)).toBe(true);
      expect(isEmpty(undefined)).toBe(true);
      
      expect(isEmpty('hello')).toBe(false);
      expect(isEmpty([1, 2, 3])).toBe(false);
      expect(isEmpty({ key: 'value' })).toBe(false);
      expect(isEmpty(0)).toBe(false);
    });
  });
});