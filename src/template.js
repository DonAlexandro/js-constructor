import {row, col, css} from './utils'

function title(block) {
	const {tag = 'h1', styles} = block.options

	return row(col(`<${tag}>${block.value}</${tag}>`), styles)
}

function text(block) {
	const {styles} = block.options

	return row(col(`<p>${block.value}</p>`), styles)
}

function columns(block) {
	const {styles} = block.options

	return row(block.value.map(col).join(''), styles)
}

function image(block) {
	const {styles, imageStyles: is, alt = ''} = block.options

	return row(`<img src="${block.value}" alt="${alt}" style="${css(is)}" />`, styles)
}

export const templates = {
	title, text, image, columns
}
