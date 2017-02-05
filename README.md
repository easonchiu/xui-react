# xui-react


### 移动端的轻量级ui框架
1、按需加载  
2、rem单位，适配性强  
3、font-icon，矢量图标  
4、轻量级，都是些常用组件，实用性强  




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








