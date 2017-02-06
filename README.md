# xui-react


### 移动端的轻量级ui框架
1、按需加载  
2、rem单位，适配性强  
3、font-icon，矢量图标  
4、轻量级，都是些常用组件，实用性强  


## Cell [Demo范例](https://easonchiu.github.io/xui-react/dist/#/cell)
### 基本用法
```
<Cell>
	<Cell.Row>
		<Cell.Row.Header>
			头部分
		</Cell.Row.Header>
		<Cell.Row.Body>
			身体部分
		</Cell.Row.Body>
		<Cell.Row.Footer>
			尾部分
		</Cell.Row.Footer>
	</Cell.Row>
</Cell>
```
如果觉得以上写法太繁琐，也可以简化成这样：  
```
<Cell>
	<Cell.Row
		header="头部分"
		body="身体部分"
		footer="尾部分" />
</Cell>
```
这样写的话，`header`会自动嵌套`label`标签、`body`嵌套`p`标签、`footer`嵌套`span`标签  
如果需要自定义的话，可以这样：  
```
<Cell>
	<Cell.Row
		header={ <img src="..." }
		body={ <h6>标题</h6> }
		footer={ <em>描述</em> } />
</Cell>
```
注意：基本写法与简化写法不能混合着用，如果两者都有，即忽略简化方式  
### 扩展
链接：  
`Cell.Row`加上`to`即可  
这里的`to`若不是以`http`开头的，会使用路由的`Link`来做替换，反之会直接使用`a`标签  
```
<Cell>
	<Cell.Row
		to="/index"
		body="跳转" />
</Cell>
```
带链接箭头：  
如果你想要像有链接一样的箭头，加上`arrow`即可
```
<Cell>
	<Cell.Row
		arrow
		body="假链接" />
</Cell>
```
点击事件：  
加入`onClick`即可，这时可配合上面的`arrow`引导用户点击
```
<Cell>
	<Cell.Row
		arrow
		onClick={ fn }
		body="点我" />
</Cell>
```
单选与多选：  
添加`checkbox`属性可变成单选样式（行后显示打勾），配合`checked`为`true`或`false`切换不同样式  
```
<Cell>
	<Cell.Row
		checkbox
		checked={ true }
		body="我被选中啦" />
	<Cell.Row
		checkbox
		checked={ false }
		body="我落选啦" />
</Cell>
```
添加`radio`属性可变成多选的样式（行前有打勾的圆圈），配合`checked`为`true`或`false`切换不同样式  
```
<Cell>
	<Cell.Row
		radio
		checked={ true }
		body="我被选中啦" />
	<Cell.Row
		radio
		checked={ false }
		body="我落选啦" />
</Cell>
```
其他：  
单行输入框、多行输入框、下拉框
```
<Cell>
	<Cell.Row
		header="单行文本"
		body={ <input type="text" placeholder="请输入" /> } />
	<Cell.Row
		vstart
		header="多行文本"
		body={ <textarea placeholder="请输入"></textarea> } />
	<Cell.Row
		header="下拉框"
		body={ <select>...</select> } />
</Cell>
```
垂直顶对齐：
因为默认是垂直居中对齐，所以在需要设置成顶对齐时添加`vstart`属性  
一般情况下，被一些特殊内容撑高后的`Cell.Row`有可能会需要用到该属性
```
<Cell>
	<Cell.Row
		vstart
		header="多行文本"
		body={ <textarea placeholder="请输入"></textarea> } />
</Cell>
```




## Grid [Demo范例](https://easonchiu.github.io/xui-react/dist/#/grid)
### 基本用法
```
<Grid>
	<Grid.Item col={ width }>
		content
	</Grid.Item>
</Grid>
```
`width`一般我们写作`1/5`、`1/4`等形式，容易阅读，其实得出来的值就是`0.2`、`0.25`，也可以是任意值  
即：  
```
<Grid>
	<Grid.Item col={ 1/4 }>
		contentA
	</Grid.Item>
	<Grid.Item col={ 1/4 }>
		contentB
	</Grid.Item>
	<Grid.Item col={ 1/4 }>
		contentC
	</Grid.Item>
	<Grid.Item col={ 1/4 }>
		contentD
	</Grid.Item>
</Grid>
```
这样就可以实现一行4个格子展示  
### 扩展
带边框模式：  
`Grid`添加`border`即可
```
<Grid border>
	<Grid.Item col={ width }>
		content
	</Grid.Item>
</Grid>
```
有外边距模式：  
`Grid`添加`margin`即可，格子与格子之间有外边距
```
<Grid margin>
	<Grid.Item col={ width }>
		content
	</Grid.Item>
</Grid>
```
如果以上2种模式都不用的话，默认情况下是有内边距的




## Panel [Demo范例](https://easonchiu.github.io/xui-react/dist/#/panel)
### 基本用法
```
<Panel>
	<Panel.Header title="标题文字" />
	<Panel.Body>
		
		content

	</Panel.Body>
	<Panel.Footer text="底部提示文字" />
</Panel>
```
`Panel.Body`内可以与其他的组件相结合，如果是列表类的结合`Cell`，或者商品列表结合`Grid`等等，或自行开发组件
### 扩展
头部和尾部的链接：
```
<Panel>
	<Panel.Header title="标题文字" extra={ <a>更多<Icon name="right" /></a> } />
	<Panel.Body>
		
		content

	</Panel.Body>
	<Panel.Footer text="底部提示文字" extra={ <a>更多<Icon name="right" /></a> } />
</Panel>
```
或者：
```
<Panel>
	<Panel.Header title="标题文字" extra={ <Button type="primary" mini>按钮</Button> } />
	<Panel.Body>
		
		content

	</Panel.Body>
	<Panel.Footer text="底部提示文字" extra={ <Button type="primary" mini>按钮</Button> } />
</Panel>
```
自定义：  
如果对头尾的结构要有更复杂的定制，则可以如下写法
```
<Panel>
	<Panel.Header>
		定制内容
	</Panel.Header>
	<Panel.Body>
		
		content

	</Panel.Body>
	<Panel.Footer>
		定制内容
	</Panel.Footer>
</Panel>
```



## Button [Demo范例](https://easonchiu.github.io/xui-react/dist/#/button)
### 基本用法
```
<Button>按钮文字</Button>
```
按钮分4种颜色样式，用于4种不同场合，设置`type`属性作区分：   
```
<Button>默认按钮（default）</Button>
<Button type="primary">主按钮（primary）</Button>
<Button type="vital">决定按钮（vital）</Button>
<Button type="warn">警告按钮（warn）</Button>
```
`default`：该样式可不设置，即为默认，一般用于返回，取消等场合；   
`primary`：主色调样式，用于引导性作用的按钮；  
`vital`：决定性按钮，可用于确认支付，完成注册等决定性事件上；   
`warn`：警告性按钮，一般用于删除事件。    

### 扩展
不可用：   
一般按钮都会有不可用状态，这样写即可，`true`可不写
```
<Button type="primary" disabled={ true }>按钮不可用状态</Button>
```
小按钮：  
一般用于和输入框并列的时候，因为它的高度和输入框是等高的
```
<Button type="primary" mini>小按钮（一般不会占满宽度使用）</Button>
```
带图标：  
需要将`Icon`组件也引用进来
```
<Button type="warn"><Icon name="delete" />带图标按钮</Button>
```
点击事件：  
加入`onClick`即可
```
<Button type="warn" onClick={ fn }>点击带事件按钮</Button>
```
按钮组（有2种形式）：  
一种只是简单的把按钮并列放置在同一行，用于页面底部，即`Layout.Footer`中会比较多
```
<Button.Group>
	<Button type="warn">一组按钮</Button>
	<Button type="primary">一组按钮</Button>
	<Button type="vital">一组按钮</Button>
</Button.Group>
```
另一种是在视觉上就合成一个的按钮组，使用方式是在`Button.Group`中添加`merge`属性，并且它只有`mini`的尺寸
```
<Button.Group merge>
	<Button>一组按钮</Button>
	<Button type="primary">一组按钮</Button>
	<Button>一组按钮</Button>
</Button.Group>
```



## Icon [Demo范例](https://easonchiu.github.io/xui-react/dist/#/icon)
### 基本用法
本框架中包含将近30种常用icon图标，具体看demo
```
<Icon name="home" />
```
### 扩展
大尺寸：  
添加`large`属性即可变成大尺寸的icon
```
<Icon name="home" large />
```
改变颜色：  
除默认的灰色外，还可以有以下3种颜色供选择，这3种颜色与按钮的相对应  
```
<Icon name="home" type="primary" />
<Icon name="home" type="warn" />
<Icon name="home" type="vital" />
```
若还不能满足的话，使用`className`自定义重写



## Logis [Demo范例](https://easonchiu.github.io/xui-react/dist/#/logis)
### 基本用法
最上面的一个`Logis.Row`为当前状态，会不同颜色标识
```
<Logis>
	<Logis.Row>
		<p>快递已到达上海速递处理中心，等待中转</p>
		<time>2016-01-22 11:45:20</time>
	</Logis.Row>
	<Logis.Row>
		<p>已离开收寄点，发往上海速递处理中心，南通市</p>
		<time>2016-01-21 11:45:20</time>
	</Logis.Row>
	<Logis.Row>
		<p>快递已打包</p>
		<time>2016-01-17 11:45:20</time>
	</Logis.Row>
</Logis>
```


## Rmb [Demo范例](https://easonchiu.github.io/xui-react/dist/#/cell)
至于为什么会有这个组件...因为Icon组件中的人民币符号在结合数字时不太容易控制都在同一水平线，故写了这个组件
### 基本用法
人民币符号，默认红色：
```
<Rmb price="199.00" />
```
如果要变成灰色的话：
```
<Rmb price="199.00" gray />
```



