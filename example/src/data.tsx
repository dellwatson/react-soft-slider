import { config } from 'react-spring'

export const slides = [
  'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800',
  'https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800',
  'https://images.pexels.com/photos/953206/pexels-photo-953206.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800',
  'https://images.pexels.com/photos/704571/pexels-photo-704571.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800',
  'https://images.pexels.com/photos/735280/pexels-photo-735280.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800',
  'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800',
  'https://images.pexels.com/photos/85910/coffee-hot-mug-stripes-85910.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800',
  'https://images.pexels.com/photos/5510/bread-food-plate-rucola.jpg?auto=compress&cs=tinysrgb&dpr=2&w=800',
  'https://images.pexels.com/photos/543730/pexels-photo-543730.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800'
]

export const defaultState = {
  enabled: true,
  autoplay: false,
  vertical: false,
  index: 0,
  nbSlides: 4,
  draggedScale: 0.8,
  trailingDelay: 50,
  sliderWidth: 80,
  variableWidth: false,
  variableHeight: false,
  slideAlign: 'center',
  draggedSpring: 'default',
  trailingSpring: 'slow',
  releaseSpring: 'slow'
}

export const springOptions = {
  normal: config.default,
  ...config,
  default: undefined
}
