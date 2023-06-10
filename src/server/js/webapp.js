/*
 * pwix:jstree/src/server/js/webapp.js
 *
 * See https://stackoverflow.com/questions/75402993/does-serving-static-files-from-multiple-routes-in-meteor-implies-to-multiply-pu/
 * 
 * Note that this work-around requires the use of a specially patched css on client side.
 */

// returns true if the url has been redirected (so it is no worth to try others redirecters)
const _redirect = function( url, res, stringIdentifier ){
    const indexOf = url.indexOf( stringIdentifier );
    if( indexOf > 0 ){
        const newurl = url.substring( indexOf );
        //console.debug( 'redirect', url, 'to', newurl );
        res.writeHead( 301, {
            Location: newurl
        });
        res.end();
        return true;
    }
    return false;
}

WebApp.connectHandlers.use( function( req, res, next ){
    if( !_redirect( req.url, res, '/packages/pwix_jstree/resources/png/' )){
        next();
    }
});
