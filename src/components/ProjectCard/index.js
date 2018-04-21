import React from 'react'
import { Card, CardHeader, CardText } from 'material-ui/Card'
import { createComponent, createComponentWithProxy } from 'react-fela'
import DateIcon from 'material-ui/svg-icons/action/date-range'
import DeleteIcon from 'material-ui/svg-icons/action/delete'
import IconButton from 'material-ui/IconButton'
import Divider from 'material-ui/Divider'
import Title from '../Title'
import formatDate from '../../helpers/formatDate'
import styles, { button, icon, header } from './styles'
import { ROSE, GREEN } from '../../variables'

const CardBox = createComponentWithProxy(styles.card, Card)
const Deadline = createComponentWithProxy(styles.date, 'span')
const Footer = createComponentWithProxy(styles.footer, CardText)
const DateBox = createComponent(styles.dateBox, 'div')

const ProjectCard = props => {
  const { doc } = props
  const date = formatDate(doc.deadline)
  const description = doc.description || ''

  return (
    <CardBox>
      <CardHeader title={<Title.S>{doc.name}</Title.S>} style={header}>
        <div>
          <IconButton
            iconStyle={icon}
            style={button}
            onClick={() => props.deleteProject(doc.id)}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      </CardHeader>
      <CardText>{description}</CardText>
      <Divider />
      <Footer>
        <DateBox>
          <DateIcon color={ROSE} />
          <Deadline>{date}</Deadline>
        </DateBox>
      </Footer>
    </CardBox>
  )
}

export default ProjectCard
