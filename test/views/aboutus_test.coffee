AboutusView = require 'views/aboutus'

describe 'AboutusView', ->
    beforeEach ->
        @view = new AboutusView()

    it 'should exist', ->
        expect(@view).to.be.ok
