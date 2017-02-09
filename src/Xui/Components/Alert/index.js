import './style'
import classnames from 'classnames'

class Alert {
	static show({
		title = '提示',
		desc = 'default',
		className = '',
		textN = '取消',
		textY = '确定',
		callbackN = () => {},
		callbackY = () => {},
	} = {}) {
		this.render({
			title,
			desc,
			className,
			textN,
			textY,
			callbackN,
			callbackY,
		});
	}
	static hide() {
		let alert = document.getElementById('j-x-alert');
		if (alert){
			alert.classList.remove('x-alert--show');
			alert.classList.add('x-alert--hide');
			setTimeout(() => {
				Alert.destroy(alert);
			}, 200);
		}
	}
	static clickN(e) {
		Alert.callbackN();
		Alert.hide();
	}
	static clickY() {
		Alert.callbackY();
		Alert.hide();
	}
	static render(o) {
		
		Alert.hide();
		
		Alert.callbackY = o.callbackY;
		Alert.callbackN = o.callbackN;

		let css = classnames(
			'x-alert',
		);

		let html = `
			<div class='x-alert__inner'>
				<div class='x-alert__body'>
					<p>coding now...</p>
				</div>
				<div class='x-alert__btns'>
					<a href='javascript:;' class='x-alert__btn-n' id='j-x-alert-btn-n'>取消</a>
					<a href='javascript:;' class='x-alert__btn-y' id='j-x-alert-btn-y'>确定</a>
				</div>
			</div>
		`;

		let alert = document.createElement('div');
		alert.classList.add(css);
		alert.id = 'j-x-alert';
		alert.innerHTML = html;

		let dom = document.getElementsByTagName('body')[0];
		dom.appendChild(alert);

		let btnN = document.getElementById('j-x-alert-btn-n');
		let btnY = document.getElementById('j-x-alert-btn-y');

		btnN.addEventListener('click', this.clickN);
		btnY.addEventListener('click', this.clickY);

		setTimeout(() => {
			alert.classList.add('x-alert--show');
		}, 0);
	}
	static destroy(alert) {
		let btnN = document.getElementById('j-x-alert-btn-n');
		let btnY = document.getElementById('j-x-alert-btn-y');

		btnN.removeEventListener('click', Alert.clickN);
		btnY.removeEventListener('click', Alert.clickY);

		Alert.callbackY = null;
		Alert.callbackN = null;
		
		alert.remove();
	}
}

export default Alert