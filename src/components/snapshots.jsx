import React, { Component } from 'react'
import {Grid, Row, Col, ListGroup, ListGroupItem, Button} from 'react-bootstrap'
import Icon from 'react-fontawesome'

import Panel from './generic/panel'

export default class Snapshots extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <Panel headerText="Snapshots">
              <ListGroup>
                <ListGroupItem header="CM: Added a swordfight"><Icon name='cog' spin/> Status: working ; Pages: 9 ; Average diff: 0%</ListGroupItem>
                <ListGroupItem header="CM: Fixed the stickbar"><Icon name='thumbs-up'/> Status: finished ; Pages: 9 ; Average diff: 0%</ListGroupItem>
                <ListGroupItem header="CM: Broke a whole page"><Icon name='exclamation-triangle'/> Status: finished ; Pages: 9 ; Average diff: 25%</ListGroupItem>
              </ListGroup>
              <div style={{marginBottom: 0, fontSize: '.75em', display: 'flex', alignItems: 'center'}}><span>Showing builds 1-3 of 455.</span> <Button bsStyle='link'>Show more</Button></div>
            </Panel>
          </Col>
        </Row>
      </Grid>
    )
  }
}
