
$(function() {

    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('doest not have a blank URL', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).not.toBe('');
            }
        });

        it('doest not have a blank feed name', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).not.toBe('');
            }
        });
    });

    describe('The menu', function() {

        it('start hidden', function() {
            var menu = $('body');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        it('is toggled on click', function() {
            var menuIcon = $('.menu-icon-link');
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    });

    describe('Initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(1, done);
        });

        it('should have at least on element', function(done) {
            expect($('.feed a').length).not.toBe(0);
            done();
        });

        afterEach(function(done) {
            loadFeed(0, done);
        });

    });

    describe('New Feed Selection', function() {

        var oldList;

        beforeEach(function(done) {
            oldList = $('.feed h2');
            loadFeed(1, done);
        });

        it('should be different after loading new feed', function(done) {
            var newList = $('.feed h2');
            expect(oldList.eq(0).html()).not.toBe(newList.eq(0).html());
            done();
        });

        afterEach(function(done) {
            loadFeed(0, done);
        });

    });

}());
