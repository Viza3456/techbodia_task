// quasar-user-options.js
import 'quasar/dist/quasar.sass';
import iconSet from 'quasar/icon-set/material-icons';
import lang from 'quasar/lang/en-us';
import { Notify } from 'quasar';

export default {
  config: {},
  plugins: {
    Notify,
  },
  iconSet: iconSet,
  lang: lang,
};
