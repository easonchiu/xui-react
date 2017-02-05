# xui-react


### 移动端的轻量级ui框架
1、按需加载  
2、rem单位，适配性强  
3、font-icon，矢量图标  
4、轻量级，都是些常用组件，实用性强  


## Cell
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
		awwor
		body="假链接" />
</Cell>
```
点击事件：  
加入`onClick`即可，这时可配合上面的`arrow`引导用户点击
```
<Cell>
	<Cell.Row
		awwor
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
		header="多行文本"
		body={ <textarea placeholder="请输入"></textarea> } />
	<Cell.Row
		header="下拉框"
		body={ <select>...</select> } />
</Cell>
```

## Button
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








