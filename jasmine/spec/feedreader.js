/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('doest not have a blank URL', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).not.toBe("");
            }
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('doest not have a blank feed name', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).not.toBe("");
            }
        });
    });

    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('start hidden', function() {
            var menu = $("body");
            expect($("body").hasClass("menu-hidden")).toBe(true);
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('is toggled on click', function() {
            var menuIcon = $('.menu-icon-link');
            menuIcon.click();
            expect($("body").hasClass("menu-hidden")).toBe(false);
            menuIcon.click();
            expect($("body").hasClass("menu-hidden")).toBe(true);
        });

    });

    /* TODO: Write a new test suite named "The menu" */
    describe('Initial Entries', function() {

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done){
            loadFeed(1, done);
        });

        it('should have at least on element', function(done){
            expect($('.feed a').length).not.toBe(0);
            done();
        });

        afterEach(function(done){
            loadFeed(0, done);
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        var oldList;

        beforeEach(function(done){
            oldList = $('.feed h2');
            loadFeed(1, done);
        });

        it('should be different after loading new feed', function(done){
            var newList = $('.feed h2');
            expect(oldList.eq(0).html()).not.toBe(newList.eq(0).html());
            done();
        });

    });

}());
