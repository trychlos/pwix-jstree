/*
 * pwix:jstree/src/server/js/check_npms.js
 */

import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

if( false ){
    // white listing packages
}

checkNpmVersions({
    'jstree': '^3.3.15'
},
    'pwix:jstree'
);
