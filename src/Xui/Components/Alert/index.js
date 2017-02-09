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

			let btnN = document.getElementById('j-x-alert-btn-n');
			let btnY = document.getElementById('j-x-alert-btn-y');
			btnN.removeEventListener('click', Alert.clickN);
			btnY.removeEventListener('click', Alert.clickY);
			alert.remove();
		}
	}
	static clickN(e) {
		Alert.hide();
	}
	static clickY() {
		Alert.hide();
	}
	static render(o) {
		console.log(o)
		Alert.hide();

		let css = classnames(
			'x-alert'
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

	}
}

export default Alert