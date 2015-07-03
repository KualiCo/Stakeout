import React from 'react'
import {Input, Button} from 'react-bootstrap'
import Immutable from 'immutable'

var STYLES = {
  bottomButtonRow: {
    textAlign: 'right'
  },
  doneButton: {
    marginLeft: '.5rem'
  }
}

class ProjectsEditForm extends React.Component {
  static displayName = 'ProjectsEditForm'

  static propTypes = {
    project: React.PropTypes.object,
    flux: React.PropTypes.any.isRequired,
    onFinishEditing: React.PropTypes.function
  }

  constructor(props) {
    super()
    /* I use merge instead of fromJS below, because
       because project's prototype is a js-data object
       and Immutable didn't know how to handle that */
    this.state = {
      project: Immutable.Map().merge(props.project)
    }
  }

  updateField(attributePath) {
    return (e) => {
      this.setState({
        project: this.state.project.updateIn(attributePath, () => e.target.value)
      })
    }
  }

  finishEditing() {
    var cleaned = this.state.project.update('pages', function(list) {
      if (!list) {
        return []
      }
      return list.filter(function(val) {
        return val != ''
      })
    })
    this.props.flux.getActions('projects').update(cleaned.toJS())
    if (this.props.onFinishEditing) {
      this.props.onFinishEditing()
    }
  }

  pageInput(p, i) {
    return (
      <Input
        type="text"
        bsSize="large"
        value={this.state.project.getIn(['pages', i])}
        onChange={this.updateField.call(this, ['pages', i])} placeholder="/foo/bar"
      />
    )
  }

  addToList(path) {
    this.setState(function({project}) {
      return {
        project: project.updateIn(path, function(list) {
          if (!list) {
            return Immutable.List([''])
          }
          return list.push('')
        })
      }
    })
  }

  render() {
    return (
      <div>
        <Input type="text" label="Name" bsSize="large" value={this.state.project.get('name')} onChange={this.updateField.call(this, ['name'])} placeholder="Gorgeous giraffes"/>
        <div>
          <label>Pages</label>
        </div>
        {this.state.project.has('pages') && this.state.project.get('pages').map(this.pageInput.bind(this))}
        <Button onClick={this.addToList.bind(this, ['pages'])}>Add Page</Button>
        <div style={STYLES.bottomButtonRow}>
          <Button bsStyle='danger' onClick={() => this.props.flux.getActions('projects').destroy(this.props.project.id)}>Delete</Button>
          <Button style={STYLES.doneButton} onClick={this.finishEditing.bind(this)}>Done</Button>
        </div>
      </div>
    )
  }
}

export default ProjectsEditForm
