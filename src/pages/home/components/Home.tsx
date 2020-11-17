import React from 'react';

import { BigBreadcrumbs, WidgetGrid, JarvisWidget } from '../../../common';
import Datatable from '../../../common/tables/components/Datatable';

export default class Home extends React.Component {
  onClick = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div id="content">
        <div className="row">
          <BigBreadcrumbs
            items={['Home']}
            icon="fa fa-home"
            className="col-xs-12 col-sm-7 col-md-7 col-lg-4"
          />
        </div>

        <WidgetGrid>
          <div className="row">
            <article className="col-sm-12 col-md-12 col-lg-12">
              <JarvisWidget id="wid-id-3" editbutton={false} color="blueDark">
                <header>
                  <span className="widget-icon">
                    <i className="fa fa-table" />
                  </span>
                  <h2>Export to PDF / Excel</h2>
                </header>
                <div>
                  <div className="widget-body no-padding">
                    <Datatable
                      options={{
                        ajax: 'assets/api/tables/datatables.standard.json',
                        columns: [
                          { data: 'id' },
                          { data: 'name' },
                          { data: 'phone' },
                          { data: 'company' },
                          { data: 'zip' },
                          { data: 'city' },
                          { data: 'date' },
                        ],
                        buttons: ['copy', 'excel', 'pdf'],
                      }}
                      className="table table-striped table-bordered table-hover"
                      width="100%"
                    >
                      <thead>
                        <tr>
                          <th data-hide="mobile-p">ID</th>
                          <th data-class="expand">Name</th>
                          <th>Phone</th>
                          <th data-hide="mobile-p">Company</th>
                          <th data-hide="mobile-p,tablet-p">Zip</th>
                          <th data-hide="mobile-p,tablet-p">City</th>
                          <th data-hide="mobile-p,tablet-p">Date</th>
                        </tr>
                      </thead>
                    </Datatable>
                  </div>
                </div>
              </JarvisWidget>
            </article>
          </div>
        </WidgetGrid>
      </div>
    );
  }
}
