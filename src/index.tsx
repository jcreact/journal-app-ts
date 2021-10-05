import React from 'react';
import ReactDOM from 'react-dom';
import JournalApp from './JournalApp';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <JournalApp />
    </React.StrictMode>,
    document.getElementById('root')
);
