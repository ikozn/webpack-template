/** @format */

module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    // extends: ['prettier'],
    extends: [
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'eslint:recommended',
        'standard',
        'plugin:prettier/recommended',
    ],
    plugins: ['eslint-plugin-react', 'prettier'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ], //  eslint-plugin-prettier 使用prettier作为eslint规则
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        // 0:"off", 1:"warn", 2:"error"
        semi: 0,
        // '@typescript-eslint/no-empty-interface': 0,
        '@typescript-eslint/ban-types': [
            2,
            {
                types: {
                    Function: {
                        message: 'Prefer a specific function type, like `() => void`.',
                    },
                },
            },
        ],
        // 禁止 for 循环出现方向错误的循环，比如 for (i = 0; i < 10; i--)
        'for-direction': 'error',
        // getter 必须有返回值，并且禁止返回空，比如 return;
        'getter-return': [
            'error',
            {
                allowImplicit: false,
            },
        ],
        // 禁止将 await 写在循环里，因为这样就无法同时发送多个异步请求了
        // @off 要求太严格了，有时需要在循环中写 await
        'no-await-in-loop': 'off',
        // 禁止与负零进行比较
        'no-compare-neg-zero': 'error',
        // 禁止在 if, for, while 里使用赋值语句，除非这个赋值语句被括号包起来了
        'no-cond-assign': ['error', 'except-parens'],
        // 禁止使用 console
        // @off console 的使用很常见
        'no-console': 'off',
        // 禁止将常量作为 if, for, while 里的测试条件，比如 if (true), for (;;)，除非循环内部有 break 语句
        'no-constant-condition': [
            'error',
            {
                checkLoops: false,
            },
        ],
        // 禁止在正则表达式中出现 Ctrl 键的 ASCII 表示，即禁止使用 /\x1f/
        // 开启此规则，因为字符串中一般不会出现 Ctrl 键，所以一旦出现了，可能是一个代码错误
        'no-control-regex': 'error',
        // @fixable 禁止使用 debugger
        'no-debugger': 'error',
        // 禁止在函数参数中出现重复名称的参数
        'no-dupe-args': 'error',
        // 禁止在对象字面量中出现重复名称的键名
        'no-dupe-keys': 'error',
        // 不允许使用分号
        '@typescript-eslint/no-var-requires': 'off',
    },
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {jsx: true},
    },
    settings: {
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
};
