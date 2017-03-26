import React from 'react'
import QueueItem from 'components/QueueItem'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';

export const Queue = (props) => (
  <div>
    {props.queue.map((track, i) =>
      <QueueItem key={`${track.SpotifyID}_${i}`}
        removeFromQueue={props.removeFromQueue}
        setTrack={props.setTrack}
        addGenre={props.addGenre}
        discardTrackFromQueue={ props.discardTrackFromQueue }
        track={track} />
    )}
  </div>
)

Queue.propTypes = {
  queue: React.PropTypes.array,
  setTrack: React.PropTypes.func,
  removeFromQueue: React.PropTypes.func,
  discardTrackFromQueue: React.PropTypes.func,
  clearQueue: React.PropTypes.func,
}

const mapStateToProps = (state) => {
  return {}
}

export const QueueContainer = connect(mapStateToProps)(Queue)

export default QueueContainer
