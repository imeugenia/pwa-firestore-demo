import { StyleSheet } from 'fela-tools'
import { GRAY } from '../../variables'

const card = {
  margin: '2rem',
  textDecoration: 'none'
}

const link = {
  textDecoration: 'none'
}

const date = {
  marginLeft: '0.5em',
  color: '#ff6f56',
  fontWeight: 700
}

const dateIcon = {
  fill: '#ff6f56'
}

const footer = {
  display: 'flex',
  justifyContent: 'space-between'
}

const dateBox = {
  display: 'flex',
  alignItems: 'center'
}

export const button = {
  height: 'auto',
  width: 'auto',
  padding: '0 0 0 1rem'
}

export const icon = {
  color: GRAY
}

export const header = {
  display: 'flex',
  justifyContent: 'space-between'
}

export default StyleSheet.create({
  card,
  link,
  date,
  dateIcon,
  footer,
  dateBox
})
