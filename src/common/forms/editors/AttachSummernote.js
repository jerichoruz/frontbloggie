import React from 'react';
import $ from 'jquery';
import 'summernote/dist/summernote.min';

export default class AttachSummernote extends React.Component {
  onClick = () => {
    $(this.props.target).summernote({
      focus: true,
    });
  };

  componentWillUnmount() {
    $(this.props.target).summernote('destroy');
  }

  render() {
    let { children, ...props } = this.props;
    return (
      <button onClick={this.onClick} {...props}>
        {children}
      </button>
    );
  }
}
