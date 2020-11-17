import React from 'react';
import $ from 'jquery';

export default class DraggableEvent extends React.Component {
  componentDidMount() {
    $(this.refs.elementRef).data('eventObject', this.props.event).draggable({
      zIndex: 999,
      revert: true, // will cause the event to go back to its
      revertDuration: 0, //  original position after the drag
    });
  }

  render() {
    const { children, event, ...props } = this.props;
    return (
      <li {...props} ref="elementRef">
        {children}
      </li>
    );
  }
}