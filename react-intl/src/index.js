import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider, addLocaleData } from 'react-intl';

import locale_en from 'react-intl/locale-data/en';
import locale_de from 'react-intl/locale-data/de';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import messages_de from './translations/de.json';
import messages_en from './translations/en.json';

addLocaleData([...locale_en, ...locale_de]);

const messages = {
    de: messages_de,
    en: messages_en
};
const language = navigator.language.split(/[-_]/)[0];
console.log('language: ', language);

ReactDOM.render(
    <IntlProvider locale={language} messages={messages[language]}>
        <App />
    </IntlProvider>,
    document.getElementById('root')
);
registerServiceWorker();

// https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-react-app-with-react-intl
