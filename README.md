# UT Demo - TypeScript 工具函数库

一个基于 Node.js + TypeScript 的工具函数库，包含常用的字符串、数组、对象、日期、数字和验证工具函数。

## 项目结构

```
ut-demo/
├── src/
│   ├── index.ts                    # 主入口文件
│   └── utils/
│       ├── string.ts               # 字符串工具函数
│       ├── array.ts                # 数组工具函数
│       ├── object.ts               # 对象工具函数
│       ├── date.ts                 # 日期工具函数
│       ├── number.ts               # 数字工具函数
│       ├── validation.ts           # 验证工具函数
│       └── __tests__/              # 测试文件目录
│           ├── string.test.ts
│           ├── array.test.ts
│           └── validation.test.ts
├── package.json
├── tsconfig.json
├── jest.config.js
└── README.md
```

## 安装依赖

```bash
pnpm install
```

## 可用脚本

- `pnpm build` - 编译 TypeScript 代码
- `pnpm dev` - 运行开发模式
- `pnpm test` - 运行测试
- `pnpm test:watch` - 监听模式运行测试
- `pnpm test:coverage` - 运行测试并生成覆盖率报告

## 功能模块

### 字符串工具 (string.ts)
- `capitalize()` - 首字母大写
- `toCamelCase()` - 转换为驼峰命名
- `toKebabCase()` - 转换为短横线命名
- `trim()` - 去除两端空格
- `truncate()` - 截断字符串

### 数组工具 (array.ts)
- `unique()` - 数组去重
- `chunk()` - 数组分块
- `flatten()` - 数组扁平化
- `shuffle()` - 数组随机打乱
- `intersection()` - 求交集
- `difference()` - 求差集

### 对象工具 (object.ts)
- `deepClone()` - 深拷贝对象
- `merge()` - 合并对象
- `get()` - 获取对象指定路径的值
- `set()` - 设置对象指定路径的值

### 日期工具 (date.ts)
- `formatDate()` - 格式化日期
- `getRelativeTime()` - 获取相对时间描述
- `isSameDay()` - 判断是否为同一天
- `addDays()` - 添加天数
- `getDaysInMonth()` - 获取月份天数

### 数字工具 (number.ts)
- `randomInt()` - 生成随机整数
- `randomFloat()` - 生成随机浮点数
- `formatNumber()` - 数字格式化
- `toFixed()` - 保留小数位
- `isEven()` / `isOdd()` - 判断奇偶数
- `clamp()` - 限制数字范围
- `percentage()` - 计算百分比

### 验证工具 (validation.ts)
- `isEmail()` - 验证邮箱格式
- `isPhone()` - 验证手机号格式
- `isIdCard()` - 验证身份证号格式
- `isUrl()` - 验证URL格式
- `isIp()` - 验证IP地址格式
- `validatePassword()` - 验证密码强度
- `isEmpty()` - 判断是否为空值

## 使用示例

```typescript
import { capitalize, unique, formatDate } from './src';

// 字符串工具
console.log(capitalize('hello world')); // 'Hello world'

// 数组工具
console.log(unique([1, 2, 2, 3, 3])); // [1, 2, 3]

// 日期工具
console.log(formatDate(new Date(), 'YYYY-MM-DD')); // '2024-01-01'
```

## 测试

项目使用 Jest 进行单元测试，所有测试用例均已通过。运行测试：

```bash
pnpm test
```

测试覆盖了所有主要功能，确保代码质量和可靠性。
