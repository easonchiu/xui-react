import './style'
import classnames from 'classnames'

class Alert {
	static show({
		title = '提示',
		desc = 'default',
		className = '',
		textN,
		text = '确定',
		textY = text,
		callbackN = () => {},
		callback = () => {},
		callbackY = callback,
	} = {}) {

		let o = {
			title,
			desc,
			className,
			textN,
			textY,
			callbackN,
			callbackY,
		}
		if (typeof arguments[0] == 'string') {
			o.desc = arguments[0];
		}

		let alert = document.getElementById('j-x-alert');
		if (alert) {
			return;
		}
		this.render(o);
	}
	static hide(callback = () => {}) {
		let alert = document.getElementById('j-x-alert');
		if (alert){
			alert.classList.remove('x-alert--show');
			alert.classList.add('x-alert--hide');
			setTimeout(() => {
				this.destroy(alert);
				callback();
			}, 200);
		}
	}
	static clickN(e) {
		Alert.hide(Alert.callbackN);
	}
	static clickY() {
		Alert.hide(Alert.callbackY);
	}
	static render(o) {

		this.callbackY = o.callbackY;
		this.callbackN = o.callbackN;

		let css = classnames(
			'x-alert',
		);

		let htmlBtnN = o.textN ? `<a href='javascript:;' class='x-alert__btn-n' id='j-x-alert-btn-n'>${o.textN}</a>` : '';

		let html = `
			<div class='x-alert__inner'>
				<div class='x-alert__body'>
					<p>${o.desc}</p>
				</div>
				<div class='x-alert__btns'>
					${htmlBtnN}
					<a href='javascript:;' class='x-alert__btn-y' id='j-x-alert-btn-y'>${o.textY}</a>
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

		btnN && btnN.addEventListener('click', this.clickN);
		btnY && btnY.addEventListener('click', this.clickY);

		setTimeout(() => {
			alert.classList.add('x-alert--show');
		});
	}

	static destroy(alert) {
		let btnN = document.getElementById('j-x-alert-btn-n');
		let btnY = document.getElementById('j-x-alert-btn-y');

		btnN && btnN.removeEventListener('click', this.clickN);
		btnY && btnY.removeEventListener('click', this.clickY);

		this.callbackY = null;
		this.callbackN = null;
		
		alert.remove();

	}
}

export default Alert