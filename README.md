# react_webpack_study

参考微信界面做练习题，进行中...
用到react + react-router
接下来打算再加入redux


### BEM命名法
样式采用BEM（块（block）、元素（element）、修饰符（modifier））命名法

范例：
```
.block{} /* 块 */
.block__element{} /* 元素 */
.block--modifier{} /* 修饰符 */
```


### 踩坑

```
<IndexRoute component={ Message }></IndexRoute>
```
每组route要有个IndexRoute，不然会访问/时没有加载任何一个子组件

```
<Redirect from="*" to="/" />
```
这个Redirect写在所有route的最后，使得没有匹配到的页面都回到首页，或可以指定404

```
<IndexLink to="/" activeClassName="active"></IndexLink>
```
如果是如果route是/，相对应的Link用IndexLink代替，不然/下的任何页面都会匹配Link的activeClassName