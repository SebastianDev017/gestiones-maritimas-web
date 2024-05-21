'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App(props) {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

		_this.state = {
			activeID: 0,
			wrapperStyle: {
				backgroundImage: 'url(\'' + _this.props.data[0].img + '\')'
			},
			panelStyle: {
				background: _this.props.data[0].colour
			},
			buttonHover: false,
			buttonStyle: {
				color: '#ffffff'
			}
		};
		return _this;
	}

	App.prototype._changeActive = function _changeActive(id) {
		this.setState({
			activeID: id,
			wrapperStyle: {
				backgroundImage: 'url(\'' + this.props.data[id].img + '\')'
			},
			panelStyle: {
				backgroundColor: this.props.data[id].colour
			}
		});
	};

	App.prototype._buttonColour = function _buttonColour() {
		if (!this.state.buttonHover) {
			this.setState({
				buttonHover: true,
				buttonStyle: {
					color: this.props.data[this.state.activeID].colour
				}
			});
		} else {
			this.setState({
				buttonHover: false,
				buttonStyle: {
					color: '#ffffff'
				}
			});
		}
	};

	App.prototype.render = function render() {
		return React.createElement(
			'section',
			{ className: 'wrapper', style: this.state.wrapperStyle },
			React.createElement(Selectors, {
				data: this.props.data,
				activeID: this.state.activeID,
				_changeActive: this._changeActive.bind(this)
			}),
			React.createElement(Panel, {
				data: this.props.data[this.state.activeID],
				panelStyle: this.state.panelStyle,
				buttonStyle: this.state.buttonStyle,
				_buttonColour: this._buttonColour.bind(this)
			})
		);
	};

	return App;
}(React.Component);

var Panel = function (_React$Component2) {
	_inherits(Panel, _React$Component2);

	function Panel() {
		_classCallCheck(this, Panel);

		return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
	}

	Panel.prototype.render = function render() {
		return React.createElement(
			'aside',
			{ className: 'panel', style: this.props.panelStyle },
			React.createElement(
				'h2',
				{ className: 'panel-header' },
				this.props.data.header
			),
			React.createElement(
				'p',
				{ className: 'panel-info' },
				this.props.data.body
			),
			React.createElement(
				'button',
				{ className: 'panel-button',
					style: this.props.buttonStyle,
					onMouseEnter: this.props._buttonColour,
					onMouseLeave: this.props._buttonColour },
				'Read More'
			)
		);
	};

	return Panel;
}(React.Component);

var Selectors = function (_React$Component3) {
	_inherits(Selectors, _React$Component3);

	function Selectors() {
		_classCallCheck(this, Selectors);

		return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
	}

	Selectors.prototype._handleClick = function _handleClick(e) {
		if (this.props.id !== this.props.activeID) {
			this.props._changeActive(this.props.id);
		} else {
			return;
		}
	};

	Selectors.prototype.render = function render() {
		var _this4 = this;

		return React.createElement(
			'div',
			{ className: 'selectors' },
			this.props.data.map(function (item) {
				return React.createElement(Selector, {
					key: item.id,
					id: item.id,
					_handleClick: _this4._handleClick,
					_changeActive: _this4.props._changeActive,
					activeID: _this4.props.activeID
				});
			})
		);
	};

	return Selectors;
}(React.Component);

var Selector = function (_React$Component4) {
	_inherits(Selector, _React$Component4);

	function Selector() {
		_classCallCheck(this, Selector);

		return _possibleConstructorReturn(this, _React$Component4.apply(this, arguments));
	}

	Selector.prototype.render = function render() {
		var componentClass = 'selector';
		if (this.props.activeID === this.props.id) {
			componentClass = 'selector active';
		}
		return React.createElement('div', { className: componentClass, onClick: this.props._handleClick.bind(this) });
	};

	return Selector;
}(React.Component);

var data = [{
	id: 0,
	header: 'Inspección de plataformas Autoelevables',
	body: 'Chillwave knausgaard chambray flannel tumblr, narwhal microdosing blog...',
	colour: '#242846',
	img: '../images/mecanica-ingenieria.jpg'
}, {
	id: 1,
	header: 'Inspección de embarcaciones',
	body: 'Swag biodiesel disrupt retro fashion, salvia food truck kitsch wolf DIY...',
	colour: '#ba9077',
	img: '../images/pnd-barco.jpg'
}, {
	id: 2,
	header: 'Lumber-Sexual Roof Party ',
	body: 'Flexitarian 3 wolf moon cliche, migas scenester street art...',
	colour: '#1ABC9C',
	img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc3.jpg'
}, {
	id: 3,
	header: 'Vegan hoodie trust fund',
	body: 'Farm-to-table tousled try-hard, normcore ethical tilde iPhone...',
	colour: '#C0392B',
	img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc4.jpg'
}, {
	id: 4,
	header: 'cliche craft beer',
	body: 'Tote bag flannel normcore polaroid +1. Quinoa actually 90s sustainable...',
	colour: '#513B56',
	img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/735173/rvc5.jpg'
}];

ReactDOM.render(React.createElement(App, { data: data }), document.querySelector('#app'));