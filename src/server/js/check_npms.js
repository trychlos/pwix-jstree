/*
 * pwix:jstree/src/server/js/check_npms.js
 */

import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

if( false ){
    // white listing packages
    require( 'jstree/package.json' );
}

checkNpmVersions({
    'jstree': '^3.3.0'
},
    'pwix:jstree'
);
