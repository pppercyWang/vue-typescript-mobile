# vue-typescript-mobile


**最近经常看到Typescript的一些文章。决定自己也尝试用一下，感觉还不错。正好公司需要我写一个移动端和PC端的产品。这里就写了一个模板跟大家下分享下**

#### pc端管理平台模板：https://github.com/pppercyWang/vue-typescript-admin

### 项目结构
```javascript
public
  css
    icon.css ---iconfont的font-class引入
src 
  api ---api接口
  assets ---静态资源
  components ---组件库
  store ---vuex
  utils
    http.ts ---封装了axios
  views ---视图
interface.ts ---ts自定义类型
main.ts ---程序主配置文件
router.ts ---路由配置
vue.config.js ---vue-cli3配置文件
tsconfig.json ---ts配置文件
tslint.json ---语法检查配置文件
```
### vue + vuex + typescript + vant + axios + postcss-px2rem(解决移动端适配) 

 **在我的学习过程中。看过许多的前端工程化代码，各有千秋。我觉得项目的结构设计很重要！我觉得作为一个模板，最重要的就是简单易懂。我没有依赖很多的包，尽量保持代码的整洁干净。**
 **关于Vuex在单页面应用的实践我也有自己的理解。并在项目中进行结构化。大家可以参考我的这篇文章，如有有写的不好的地方，欢迎指正。qq：845082868。谢谢！**
 
 **文章地址：https://blog.csdn.net/weixin_42565137/article/details/95168405**
 

![image](https://github.com/pppercyWang/vue-typescript-mobile/blob/master/public/img/20190708194751.png)

### 运行项目
```
npm install
```

#### 开发模式运行
```
npm run serve
```

#### 构建项目
```
npm run build
```

