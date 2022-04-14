module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'feat', // feature 新功能，新需求
                'fix', // 修复 bug
                'docs', // 仅仅修改了文档，比如README, CHANGELOG, CONTRIBUTE等等
                'style', // 仅仅修改了空格、格式缩进、逗号等等，不改变代码逻辑
                'refactor', // 代码重构，没有加新功能或者修复bug
                'test', // 测试用例，包括单元测试、集成测试等
                'revert', // 回滚到上一个版本
                'perf', // 性能优化
                'chore', // 改变构建流程、或者增加依赖库、工具等，包括打包和发布版本
                'conflict', // 解决合并过程中的冲突
                'test', // 对测试案例的修改
                'build', // 对打包、构建的一些修改
                'ci', // 对持续集成的一些修改
            ],
        ],
        'scope-empty': [2, 'never'],
    },
};
