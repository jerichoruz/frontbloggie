import React from 'react';

import { Link } from 'react-router-dom';
import ToggleMenu from './ToggleMenu';
import { getMe } from '../../../services/userService';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    this.getMe();
  }

  logout() {
    localStorage.removeItem('token');
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
    console.log(this.state.user);
    const { avatar, name, apaterno } = this.state.user;
    return (
      <header id="header">
        <div id="logo-group">
          <span id="logo">
            <Link to="/">
              <img src="assets/image/logo-white.png" style={{ width: 130 }} />
            </Link>
          </span>
          {/* Note: The activity badge color changes when clicked and resets the number to 0
         Suggestion: You may want to set a flag when this happens to tick off all checked messages / notifications */}

          {/* <Activities /> */}
        </div>

        {/* <RecentProjects /> */}
        <div className="pull-right" /* pulled right: nav area */>
          <ToggleMenu
            className="btn-header pull-right" /* collapse menu button */
          />

          {/* #MOBILE */}
          {/*  Top menu profile link : this shows only when top menu is active */}
          <ul
            id="mobile-profile-img"
            className="header-dropdown-list hidden-xs padding-5"
          >
            <li className="">
              <a
                href="#/"
                className="dropdown-toggle no-margin userdropdown"
                data-toggle="dropdown"
              >
                <span>
                  {name} {apaterno}
                </span>
                <img
                  src={avatar || 'assets/img/avatars/sunny.png'}
                  alt="me"
                  className="online"
                  style={{ margin: 5 }}
                />
              </a>
              <ul className="dropdown-menu pull-right">
                {/* <li>
                  <a
                    href="#/"
                    className="padding-10 padding-top-0 padding-bottom-0"
                  >
                    <i className="fa fa-cog" /> Setting
                  </a>
                </li>
                <li className="divider" /> */}
                <li>
                  <a
                    href="/profile"
                    className="padding-10 padding-top-0 padding-bottom-0"
                  >
                    <i className="fa fa-user" />
                    <u>P</u>rofile
                  </a>
                </li>
                <li className="divider" />
                {/*  <li>
                  <a href="#/"
                    className="padding-10 padding-top-0 padding-bottom-0"
                    data-action="toggleShortcut"
                  >
                    <i className="fa fa-arrow-down" /> <u>S</u>hortcut
                  </a>
                </li>
                <li className="divider" />
                <li>
                  <a href="#/"
                    className="padding-10 padding-top-0 padding-bottom-0"
                    data-action="launchFullscreen"
                  >
                    <i className="fa fa-arrows-alt" /> Full
                    <u>S</u>creen
                  </a>
                </li>
                <li className="divider" /> */}
                <li>
                  <a
                    href="#/login"
                    onClick={this.logout}
                    className="padding-10 padding-top-5 padding-bottom-5"
                    data-action="userLogout"
                  >
                    <i className="fa fa-sign-out fa-lg" />
                    <strong>
                      <u>L</u>ogout
                    </strong>
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          {/* logout button */}
          <div id="logout" className="btn-header transparent pull-right">
            <span>
              <a
                href="/login"
                onClick={this.logout}
                title="Sign Out"
                data-logout-msg="You can improve your security further after logging out by closing this opened browser"
              >
                <i className="fa fa-sign-out" />
              </a>
            </span>
          </div>

          {/* search mobile button (this is hidden till mobile view port) */}
          {/*  <SearchMobile className="btn-header transparent pull-right" /> */}

          {/* input: search field */}
          {/*  <form
            action="#/misc/search.html"
            className="header-search pull-right"
          >
            <input
              id="search-fld"
              type="text"
              name="param"
              placeholder="Find reports and more"
            />
            <button type="submit">
              <i className="fa fa-search" />
            </button>
            <a href="$" id="cancel-search-js" title="Cancel Search">
              <i className="fa fa-times" />
            </a>
          </form> */}

          {/* <SpeechButton className="btn-header transparent pull-right hidden-sm hidden-xs" />

          <FullScreen className="btn-header transparent pull-right" /> */}

          {/* multiple lang dropdown : find all flags in the flags page */}
          {/* <LanguageSelector /> */}
        </div>
        {/* end pulled right: nav area */}
      </header>
    );
  }
}
