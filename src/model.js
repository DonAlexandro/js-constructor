import image from './assets/image.png'
import {TextBlock, TitleBlock, ImageBlock, ColumnsBlock} from './classes/block'

const text = `JavaScript - тема`

export const model = [
	new TitleBlock( 'Конструктор сайтів на JavaScript', {
		tag: 'h2',
		styles: {
			background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
			color: '#fff',
			padding: '1.5rem',
			'text-align': 'center',
		}
	}),
	new ImageBlock(image, {
		styles: {
			padding: '2rem 0',
			display: 'flex',
			'justify-content': 'center',
		},
		imageStyles: {
			width: '500px',
			height: 'auto'
		},
		alt: 'Image'
	}),
	new ColumnsBlock([
		'JavaScript - це так весело!',
		'Заскакуй на галеру!',
		'Йохоохохохо',
	], {
		styles: {
			background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
			padding: '2rem',
			color: '#fff',
			'font-weight': 'bold'
		}
	}),
	new TextBlock(text, {
		styles: {
			background: 'linear-gradient(to left, #f2994a, #f2c94c)',
			padding: '1rem',
			'font-weight': 'bold'
		}
	})
]