# umi-ts-app

[![node](https://img.shields.io/badge/node-%3E%3D10.13.0-brightgreen)](https://mobile.ant.design)
[![Build With Umi](https://img.shields.io/badge/umi-%5E3.1.3-brightgreen)](https://umijs.org/)
[![Build With React](https://img.shields.io/badge/react-%5E16.8.0-brightgreen)](https://react.docschina.org/)
[![Build With antd](https://img.shields.io/badge/antd-%5E4.2.0-brightgreen)](https://ant.design/index-cn)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)]()

技术栈：umi3 + react hooks + dva + typescript + antd

该项目以 [umi](https://umijs.org/zh/)为底层前端框架，以[Ant Design](https://ant.design/index-cn)为 UI 组件库，[Dva](https://dvajs.com/guide/)为项目数据流，[React hooks](https://react.docschina.org/)编写前端业务组件，以[TypeScript](https://www.tslang.cn/) 做为静态类型检查，包含完整的前端工程化实践。


## 目录结构

    |-- config                                # 项目配置文件
    |-- mock                                  # 本地模拟数据
    |-- public                                
    |   |-- favicon.ico                       # favicon
    |-- src                                   
    |   |-- assets                            # 本地静态资源
    |   |-- components                        # 业务通用组件
    |   |-- layouts                           # 通用布局
    |   |-- models                            # 全局 dva model
    |   |-- services                          # 后台接口服务
    |   |-- pages                             # 业务页面入口和常用模板
    |   |-- e2e                               # 集成测试用例
    |   |-- global.less                       # 全局样式
    |                           
    |-- tests                                 # 测试工具
    |-- .gitignore                            # git忽略文件
    |-- .editorconfig                         # 编辑器代码风格配置
    |-- .eslintignore                         # eslint忽略文件
    |-- .eslintrc                             # eslint规则
    |-- .prettierignore                       # 代码风格配置忽略文件
    |-- .prettierrc                           # 代码风格配置文件
    |-- package.json                          
    |-- README.md                              

## 快速开始

```javascript

// 安装项目
$ git clone https://github.com/hanyueqiang/umi-ts-app.git

$ cd umi-ts-app

// 安装依赖
$ yarn

// 运行
$ yarn start # 访问 http://localhost:8081

// 打包
$ yarn build

```
更多命令可在[package.json](./package.json)中查看

## 项目预览
#### 登录
![login page](/public/login.png)
#### Table列表
![table page](/public/table.png)

#### gg_editor
![table page](/public/gg_editor.png)
## 支持环境

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Samsung | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera |
| --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| IE11, Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions


## 参与贡献

我们非常欢迎你的贡献，你可以通过以下方式和我一起共建 :smiley:：

- 通过 [Issue](https://github.com/hanyueqiang/umi-ts-app/issues) 报告 bug 或进行咨询。
- 提交 [Pull Request](https://github.com/hanyueqiang/umi-ts-app/pulls) 改进代码。
- 微信交流（备注来自`Github`），微信号：han2013555888


