import {Actions, Store, Flux} from 'flummox'
import {append, reject, sort, eqDeep} from 'ramda'

import {Projects} from './db'

function logDbError(e) {
  console.error('Error while communicating with the server', e)
}

class ProjectActions extends Actions {
  create(body) {
    return Projects.create(body).catch(logDbError)
  }

  getAll() {
    return Projects.findAll().catch(logDbError)
  }

  get(id) {
    return Projects.find(id).catch(logDbError)
  }

  update(body) {
    return this.get(body.id).then(function(item) {
      if (eqDeep(body, item)) {
        return item
      } else {
        return Projects.update(body.id, body)
      }
    }).catch(logDbError)
  }

  destroy(id) {
    return Projects.destroy(id).then(function() {
      return Projects.findAll()
    }).catch(logDbError)
  }
}

class ProjectStore extends Store {
  constructor(flux) {
    super()

    const projectActionIds = flux.getActionIds('projects')
    this.register(projectActionIds.create, this.handleCreate)
    this.register(projectActionIds.getAll, this.handleGetAll)
    this.register(projectActionIds.update, this.handleUpdate)
    this.register(projectActionIds.destroy, this.handleDestroy)

    this.state = {
      projects: []
    }
  }

  handleCreate(project) {
    this.setState({
      projects: append(project, this.state.projects)
    })
  }

  handleGetAll(projects) {
    var sorted = sort((a, b) => a.name < b.name ? -1 : 1, projects)
    this.setState({
      projects: sorted
    })
  }

  handleUpdate(project) {
    var without = reject((i) => i.id == project.id, this.state.projects)
    var appended = append(project, without)
    this.handleGetAll(appended)
  }

  handleDestroy(projects) {
    this.handleGetAll(projects)
  }
}

class AppFlux extends Flux {
  constructor() {
    super()

    this.createActions('projects', ProjectActions)
    this.createStore('projects', ProjectStore, this)
  }
}

export default new AppFlux()
