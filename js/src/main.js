require.config({
    baseUrl: 'js/lib',
    // alias libraries paths
    paths: {
        // the left side is the module ID,
        // the right side is the path to
        // the jQuery file, relative to baseUrl.
        // Also, the path should NOT include
        // the '.js' file extension. This example
        // is using jQuery 1.9.0 located at
        // js/lib/jquery-1.9.0.js, relative to
        // the HTML page.
        jquery: 'jquery.min',
        domReady: 'domReady',
        angular: 'angular',
        angularRoute: 'angularRoute',
        // angularResource: 'angular-resource.min',
        'app': '../src/app',
        'routes': '../src/routes',
        'controller': '../src/controllers/module',
        d3v3: 'd3.v3.min',
        d3hex: 'd3.hexbin.min'
        // app: '../src/app'
    },
    // angular does not support AMD out of the box, put it in a shim
    shim: {
        'angular': {
            exports: 'angular'
        },
    },
    // kick off application
    deps: ['../src/bootstrap']
});

