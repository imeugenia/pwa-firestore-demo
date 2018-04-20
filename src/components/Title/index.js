import { createComponent } from  'react-fela'
import styles from './styles'

export default {
  XS: createComponent(styles.xsmall, 'h3'),
  S: createComponent(styles.small, 'h2'),
  M: createComponent(styles.medium, 'h1')
}
