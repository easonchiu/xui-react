import './style'

class Loading {
	static show() {
		this.hide();

		let loading = document.createElement('div');
		loading.classList.add('x-loading');
		loading.id = 'j-x-loading';
		loading.innerHTML = "<sup></sup>";

		let dom = document.getElementsByTagName('body')[0];
		dom.appendChild(loading);
	}

	static hide() {
		let loading = document.getElementById('j-x-loading');
		if (loading) {
			loading.remove();
		}
	}
}

export default Loading