import {col, css, row} from '../utils';

export class Block {
	constructor(value, options) {
		this.value = value
		this.options = options
	}

	toHTML() {
		throw new Error('Метод "toHTML" повинен бути впровадженим')
	}
}

export class TitleBlock extends Block {
	constructor(value, options) {
		super(value, options)
	}

	toHTML() {
		const {styles} = this.options

		return row(col(`<h1>${this.value}</h1>`), styles)
	}
}

export class ImageBlock extends Block {
	constructor(value, options) {
		super(value, options)
	}

	toHTML() {
		const {styles, imageStyles: is, alt = ''} = this.options

		return row(`<img src="${this.value}" alt="${alt}" style="${css(is)}" />`, styles)
	}
}

export class ColumnsBlock extends Block {
	constructor(value, options) {
		super(value, options)
	}

	toHTML() {
		const {styles} = this.options

		return row(this.value.map(col).join(''), styles)
	}
}

export class TextBlock extends Block {
	constructor(value, options) {
		super(value, options)
	}

	toHTML() {
		const {styles} = this.options

		return row(col(`<p>${this.value}</p>`), styles)
	}
}
