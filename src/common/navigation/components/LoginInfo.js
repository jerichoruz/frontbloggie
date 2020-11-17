import React from 'react';

import { connect } from 'react-redux';
import ToggleShortcut from './ToggleShortcut';
import { getMe } from '../../../services/userService';

class LoginInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentWillMount() {
    this.getMe();
  }

  async getMe() {
    try {
      const resp = await getMe();
      this.setState({ user: resp });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { avatar, name, apaterno } = this.state.user;
    return (
      <div className="login-info">
        <span>
          <ToggleShortcut>
            <img src={avatar} alt="me" className="online" />
            <span>
              {name} {apaterno}
            </span>
            <i className="fa fa-angle-down" />
          </ToggleShortcut>
        </span>
      </div>
    );
  }
}

const mapStateToProps = (state) => state.user;

export default connect(mapStateToProps)(LoginInfo);
