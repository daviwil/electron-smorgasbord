import * as React from 'react';
import { observer } from 'mobx-react';

import { AppState } from '../state';

export interface LogProps {
  appState: AppState;
}

/**
 * Everything above the editors, so buttons and the address bar.
 *
 * @class Log
 * @extends {React.Component<LogProps, {}>}
 */
@observer
export class Log extends React.Component<LogProps, {}> {
  public render() {
    const { serverLog, appLog } = this.props.appState;

    return (
      <div className='log'>
        <h3>Server Log</h3>
        <pre className='server-log'>{serverLog}</pre>
        <h3>App Log</h3>
        <pre className='app-log'>{appLog}</pre>
      </div>
    );
  }
}
