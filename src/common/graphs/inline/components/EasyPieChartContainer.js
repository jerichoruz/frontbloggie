import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import 'smartadmin-plugins/bower_components/jquery.easy-pie-chart/dist/jquery.easypiechart.min.js';

export default class EasyPieChartContainer extends React.Component {
  componentDidMount() {
    $('.easy-pie-chart', $(ReactDOM.findDOMNode(this))).each((idx, element) => {
      const $this = $(element);
      const barColor = $this.css('color') || $this.data('pie-color');
      const trackColor = $this.data('pie-track-color') || 'rgba(0,0,0,0.04)';
      const size = parseInt($this.data('pie-size'), 10) || 25;

      $this.easyPieChart({
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
    });
  }

  render() {
    return <div className={this.props.className}>{this.props.children}</div>;
  }
}
