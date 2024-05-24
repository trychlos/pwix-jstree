Package.describe({
    name: 'pwix:jstree',
    version: '1.0.6',
    summary: 'A jstree Meteor package (workaround #12524)',
    git: 'https://github.com/trychlos/pwix-jquery-ui',
    documentation: 'README.md'
});

Package.onUse( function( api ){
    configure( api );
    api.export([
    ]);
    api.mainModule( 'src/client/js/index.js', 'client' );
    api.mainModule( 'src/server/js/index.js', 'server' );
    api.addFiles( 'resources/css/jstree-style.css', 'client' );
    api.addAssets([
        'resources/png/32px.png',
        'resources/png/40px.png',
        'resources/png/throbber.gif'
    ], 'client' );
});

Package.onTest( function( api ){
    configure( api );
    api.use( 'tinytest' );
    api.use( 'pwix:jstree' );
    api.mainModule( 'test/js/index.js' );
});

function configure( api ){
    api.versionsFrom([ '2.9.0', '3.0-rc.0' ]);
    api.use( 'ecmascript' );
    api.use( 'tmeasday:check-npm-versions@1.0.2 || 2.0.0-beta.0', 'server' );
    api.use( 'webapp', 'server' );
}

// NPM dependencies are checked in /src/server/js/check_npms.js
// See also https://guide.meteor.com/writing-atmosphere-packages.html#peer-npm-dependencies
