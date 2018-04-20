import React from 'react'
import View from '../../components/ProjectList'
import db from '../../state/firestoreInit'

class ProjectList extends React.Component {
  constructor(props) {
    super(props)
    this.projects = db.collection('Projects')

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.projects.onSnapshot(this.syncProjects)
  }

  syncProjects = querySnapshot => {
    const data = []
    querySnapshot.forEach(doc => {
      data.push({
        id: doc.id,
        ...doc.data()
      })
    })

    this.setState({
      data
    })
  }

  setProject = (project, id) => {
    this.projects.doc(id).set(project)
  }

  deleteProject = id => {
    this.projects.doc(id).delete()
  }

  render() {
    return (
      <View
        {...this.props}
        {...this.state}
        setProject={this.setProject}
        deleteProject={this.deleteProject}
      />
    )
  }
}

export default ProjectList
