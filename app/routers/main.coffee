class MainRouter extends Backbone.Router
    routes:
        '': 'index'
        'aboutus': 'aboutus'

    index: ->
        IndexView = require 'views/index'
        index = new IndexView()
    aboutus: ->
        AboutUsView = require 'views/aboutus'
        aboutus = new AboutUsView()

main = new MainRouter()
module.exports = main
