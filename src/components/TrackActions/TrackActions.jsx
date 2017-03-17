import React from 'react'
import Paper from 'material-ui/Paper'
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import FontIcon from 'material-ui/FontIcon'
import IconButton from 'material-ui/IconButton'
import { amber500 } from 'material-ui/styles/colors'
import { Grid, Row, Col } from 'react-flexbox-grid/lib'
import * as _ from 'lodash'

export const TrackActions = (props) => (
  <Row>
    <Col md={12} sm={12} lg={12} xs={12}>
      <Paper>
          <Row>
            <Col md={12} sm={12} lg={12} xs={12}>
                { _.range(1, props.track.Rating + 1).map((value) => {
                  return (
                    <IconButton key={ value } onClick={() => props.addRating(value)}>
                      <FontIcon
                        className='material-icons'
                        color={ amber500 }>
                        star
                      </FontIcon>
                    </IconButton>
                  )
                })}
                { _.range(props.track.Rating + 1, 6).map((value) => {
                  return (
                    <IconButton key={ value } onClick={() => props.addRating(value)}>
                      <FontIcon
                        className='material-icons'
                        hoverColor={ amber500 }>
                        star_border
                      </FontIcon>
                    </IconButton>
                  )
                })}
            </Col>
            <Col md={12} sm={12} lg={12} xs={12}>
                <IconButton onClick={() => props.saveTrack(props.track)}>
                  <FontIcon className='material-icons'>
                    save
                  </FontIcon>
                </IconButton>
                <IconButton onClick={() => props.discardTrackFromPlayer(props.track)}>
                  <FontIcon className='material-icons'>
                    not_interested
                  </FontIcon>
                </IconButton>
            </Col>
          </Row>
      </Paper>
    </Col>
  </Row>
)

TrackActions.propTypes = {
  track: React.PropTypes.object,
  addRating: React.PropTypes.func,
  addTrackToGenre: React.PropTypes.func,
  discardTrackFromPlayer: React.PropTypes.func,
}

export default TrackActions
