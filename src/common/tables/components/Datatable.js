import React from 'react';

import $ from 'jquery';

require('datatables.net-bs');
require('datatables.net-buttons-bs');
require('datatables.net-buttons/js/buttons.colVis.js');
require('datatables.net-buttons/js/buttons.flash.js');
require('datatables.net-buttons/js/buttons.html5.js');
require('datatables.net-buttons/js/buttons.print.js');
require('datatables.net-colreorder-bs');
require('datatables.net-responsive-bs');
require('datatables.net-select-bs');

export default class Datatable extends React.Component {
  componentDidMount() {
    this.datatable(this.props.data);
  }

  datatable() {
    const element = $(this.refs.table);
    console.log({ element });
    let { options } = { ...this.props } || {};

    let toolbar = '';
    if (options.buttons) toolbar += 'B';
    if (this.props.paginationLength) toolbar += 'l';
    if (this.props.columnsHide) toolbar += 'C';

    if (typeof options.ajax === 'string') {
      const url = options.ajax;
      options.ajax = {
        url,
        complete(xhr) {
          // AjaxActions.contentLoaded(xhr)
        },
      };
    }

    options = {
      ...options,
      ...{
        dom:
          `<'dt-toolbar'<'col col-xs-12 col-sm-6'f><'col col-sm-6 col-xs-12 hidden-xs text-right'${toolbar}>r>` +
          't' +
          "<'dt-toolbar-footer'<'col col-sm-6 col-xs-12 hidden-xs'i><'col col-xs-12 col-sm-6'p>>",
        oLanguage: {
          sSearch:
            "<span class='input-group-addon input-sm'><i class='glyphicon glyphicon-search'></i></span> ",
          sLengthMenu: '_MENU_',
        },
        autoWidth: false,
        retrieve: true,
        responsive: true,
      },
    };

    const _dataTable = element.DataTable(options);

    if (this.props.filter) {
      // Apply the filter
      element.on('keyup change', 'thead th input[type=text]', function () {
        _dataTable
          .column(`${$(this).parent().index()}:visible`)
          .search(this.value)
          .draw();
      });
    }

    /* if (!toolbar) {
      element
        .parent()
        .find('.dt-toolbar')
        .append(
          '<div class="text-right"><img src="assets/img/logo.png" alt="SmartAdmin" style="width: 111px; margin-top: 3px; margin-right: 10px;"></div>',
        );
    } */

    if (this.props.detailsFormat) {
      const format = this.props.detailsFormat;
      element.on('click', 'td.details-control', function () {
        const tr = $(this).closest('tr');
        const data = tr.attr('data-contract');
        const row = _dataTable.row(tr);
        if (row.child.isShown()) {
          row.child.hide();
          tr.removeClass('shown');
        } else {
          row.child(format({ ...row.data(), data })).show();
          tr.addClass('shown');
        }
      });
    }
  }

  render() {
    const {
      children,
      options,
      detailsFormat,
      paginationLength,
      ...props
    } = this.props;
    return (
      <table {...props} ref="table">
        {children}
      </table>
    );
  }
}
