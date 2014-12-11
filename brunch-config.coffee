exports.config =
    files:
        javascripts:
            joinTo:
                'js/app.js': /^(vendor|bower_components|app)/

            order:
                after: ['bower_components/swag/lib/swag.js']

            pluginHelpers: 'js/app.js'

        stylesheets:
            joinTo:
                'css/app.css': /^(vendor|bower_components|app)/

        templates:
            joinTo: 'js/app.js'

    plugins:
        jadePages:
            pattern: /^app\/pages\/.*\.jade$/
            destination: (path) ->
                path.replace /^app[\/\\](.*)\.jade$/, "$1.html"
            jade:
                doctype: "html"
            htmlmin: false

        stylus:
            plugins: ['jeet','rupture','stylus-type-utils']

        autoReload:
            enabled:
                js: on
                css: on
                assets: off

        imageoptimizer:
            path: 'images'
            smushit: no

        coffeelint:
            pattern: /^app\/.*\.coffee$/

            options:
                indentation:
                    value: 4
                    level: "warn"

                max_line_length:
                    level: "ignore"  
    conventions:
        assets: /(assets|vendor\/assets|font)/
