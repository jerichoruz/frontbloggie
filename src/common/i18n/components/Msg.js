import React from 'react';

class Msg extends React.Component {
  render() {
    return <span> </span>;
    /* const key = this.props.phrase;
    const phrase = this.props.phrases[key] || key;
    return <span>{phrase}</span>; */
  }
}

const mapStateToProps = (state) => state.i18n;

// export default connect(mapStateToProps)(Msg);

export default Msg;
