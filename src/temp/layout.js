/*
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DashboardLayout from './DashboardLayout';
import { getAgents } from '../../actions/agents';
import { updateGeofences } from '../../actions/geofences';
import { updateThings } from '../../actions/things';
import { selectCard } from '../../actions/leftPanel';
import { isLoading } from '../../selectors/LeftPanel.selector';
import { updateSharedLocations } from '../../actions/sharedLocations';


function mapStateToProps(state) {
  return {
    isLoading: isLoading(state),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getAgents,
    updateGeofences,
    updateThings,
    selectCard,
    updateSharedLocations,
  }, dispatch);
}

const mapDispatchToProps = dispatch => {
  return {
    fetch: id => dispatch(actions.fetch(id)),
  }
}

// abreviacion de la anterior
const mapDispatchToProps = {
  setLoading,
  requestLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardLayout);

*************************** usando redux thunk***********************
const requestLogin = formData => {
  return (dispatch, getState) => {
      const codes = getState().PickupsReducer.rentalCodes

    axios.post(`${AccountManager}/login/backoffice`, formData)
      .then(response => {
        dispatch(processAuthentication(response))
      })
      .catch(response => {
        dispatch(setLoading(false))
        showAlertError(response)
      })
  }
}
*/
