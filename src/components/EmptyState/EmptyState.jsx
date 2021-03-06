import React from 'react'
import FontIcon from 'material-ui/FontIcon'
import Paper from 'material-ui/Paper'
import FlatButton from 'material-ui/FlatButton'
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card'
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar'
import { grey500 } from 'material-ui/styles/colors'
import _ from 'lodash'

const withEmptyState = (WrappedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      const { message, dataType, requiredData, actionLabel, dataAction } = this.props
      const shouldShowEmptyState = _.isEmpty(requiredData) || typeof(requiredData) === undefined || !requiredData
      const emptyContent = (
        <Card>
          <CardTitle title={`No ${dataType} found`} />
          <CardText>{ message }</CardText>
          { dataAction && <CardActions>
              <FlatButton label={ actionLabel } onClick={ dataAction } />
            </CardActions>
          }
        </Card>
      )
      return shouldShowEmptyState ? emptyContent : <WrappedComponent {...this.props} />;
    }
  };
}

export default withEmptyState
