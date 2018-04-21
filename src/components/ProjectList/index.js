import React from 'react'
import orderBy from 'lodash/orderBy'
import ProjectCard from '../ProjectCard'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import DatePicker from 'material-ui/DatePicker'
import TextField from 'material-ui/TextField'
import { addButton } from './styles'
import { ROSE, GREEN } from '../../variables'

class ProjectList extends React.Component {
  state = {
    isDialogOpen: false
  }

  handleOpen = () => {
    this.setState({ isDialogOpen: true })
  }

  handleClose = () => {
    this.setState({
      isDialogOpen: false
    })
  }

  getId = name => name.replace(/[^A-Z0-9]+/gi, '-').toLowerCase()

  handleSubmit = () => {
    const { name, description, deadline } = this.state

    if (name && description && deadline) {
      const project = { name, description, deadline }
      project.dateCreated = new Date()
      const id = this.getId(name)
      this.props.setProject(project, id)
      this.setState({ isDialogOpen: false })
    }
  }

  handleDateChange = (event, date) => {
    this.setState({ deadline: date })
  }

  handleNameChange = (event, value) => {
    this.setState({ name: value })
  }

  handleDescriptionChange = (event, value) => {
    this.setState({ description: value })
  }

  render() {
    const data = orderBy(this.props.data, 'dateCreated', 'desc')
    const actions = [
      <FlatButton
        label="Cancel"
        primary={false}
        keyboardFocused={false}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Add"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleSubmit}
      />
    ]

    return (
      <div>
        {data.map(doc => (
          <ProjectCard doc={doc} deleteProject={this.props.deleteProject} />
        ))}
        <FloatingActionButton
          style={addButton}
          backgroundColor={ROSE}
          onClick={this.handleOpen}
        >
          <ContentAdd />
        </FloatingActionButton>
        <Dialog
          title="Add new project"
          actions={actions}
          modal={false}
          open={this.state.isDialogOpen}
          onRequestClose={this.handleClose}
        >
          <TextField
            hintText="Project name"
            multiLine={true}
            rows={1}
            onChange={this.handleNameChange}
          />
          <br />
          <TextField
            hintText="Project description"
            multiLine={true}
            rows={1}
            rowsMax={6}
            onChange={this.handleDescriptionChange}
          />
          <br />
          <DatePicker
            hintText="Select project deadline"
            onChange={this.handleDateChange}
          />
        </Dialog>
      </div>
    )
  }
}
export default ProjectList
