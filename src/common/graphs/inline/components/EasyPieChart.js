import React from 'react';

import ReactDOM from 'react-dom';
import $ from 'jquery';

import 'smartadmin-plugins/bower_components/jquery.easy-pie-chart/dist/jquery.easypiechart.min.js';

export default class EasyPieChart extends React.Component {
  componentDidMount() {
    const $element = $(ReactDOM.findDOMNode(this));
    const { props } = this;

    const barColor = $element.css('color') || props.pieColor;
    const trackColor = props.trackColor || 'rgba(0,0,0,0.04)';
    const size = props.pieSize || 25;

    $element.easyPieChart({
      barColor,
      trackColor,
      scaleColor: false,
      lineCap: 'butt',
      lineWidth: parseInt(size / 8.5, 10),
      animate: 1500,
      rotate: -90,
      size,
      onStep(from, to, percent) {
        $(this.el).find('.percent').text(Math.round(percent));
      },
    });
    $element
      .find('canvas')
      .attr('data-reactid', `${$element.data('reactid')}.0.1`);
    $element.data('easyPieChart').update(this.props.percent);
  }

  render() {
    return <div className={this.props.className}>{this.props.children}</div>;
  }
}
