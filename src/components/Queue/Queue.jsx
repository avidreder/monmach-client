import React from 'react'
import QueueItem from 'components/QueueItem'
import { connect } from 'react-redux'

export const Queue = (props) => (
  <div>
    {props.queue.TrackQueue.map(track =>
      <QueueItem key={track.ID}
        removeFromQueue={props.removeFromQueue}
        setTrack={props.setTrack}
        addGenre={props.addGenre}
        track={track} />
    )}
  </div>
)

Queue.propTypes = {
  queue: React.PropTypes.object,
  setTrack: React.PropTypes.func,
  removeFromQueue: React.PropTypes.func
}

const mapStateToProps = (state) => {
  return {
    queue: state.core.get('queue').toJS()
  }
}

export const QueueContainer = connect(mapStateToProps)(Queue)

export default QueueContainer
