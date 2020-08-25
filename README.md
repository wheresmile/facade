# WhereSmile(万思没) 前端项目

## 框架

* [Create React App](https://github.com/facebook/create-react-app)
* [React](https://reactjs.org/tutorial/tutorial.html)
* [React router](https://reactrouter.com/web/guides/quick-start)
* [React-redux](https://react-redux.js.org/introduction/quick-start)

## 命令

```bash
# 本地调试执行
yarn start

# 打包生成静态资源
yarn build
```

## 部署

本项目部署目前简单试用 [fabric](http://www.fabfile.org/) 进行自动化部署，需要本地安装有 python 环境。

1. 安装 fabric

    ```bash
    # 安装 fabric
    pip install fabric
    ```

1. 修改 Makefile 中的 fabric 部分，改为自己的服务器配置
1. 修改 fabfile.py 中内容适配自己的服务器路径
1. 执行 `make fabric`

