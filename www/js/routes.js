angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.ladiesItems', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/ladiesItems.html',
        controller: 'ladiesItemsCtrl'
      }
    }
  })

  .state('tabsController.menItems', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/ladiesItems.html',
        controller: 'menItemsCtrl'
      }
    }
  })

  .state('tabsController.myCart', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/myCart.html',
        controller: 'myCartCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.itemDetails'
      2) Using $state.go programatically:
        $state.go('tabsController.itemDetails');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page5
      /page1/tab3/page5
  */
 .state('tabsController.itemDetails', {
  url: '/page5/:id/:showAdd',
  views: {
    'tab1': {
      templateUrl: 'templates/itemDetails.html',
      controller: 'itemDetailsCtrl'
    },
    'tab2': {
      templateUrl: 'templates/itemDetails.html',
      controller: 'itemDetailsCtrl'
    },
    'tab3': {
      templateUrl: 'templates/itemDetails.html',
      controller: 'itemDetailsCtrl'
    }
  }
})

  .state('tabsController.login', {
    url: '/page6',
    views: {
      'tab3': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('landing', {
    url: '/page7',
    templateUrl: 'templates/landing.html',
    controller: 'landingCtrl'
  })

$urlRouterProvider.otherwise('/page7')


});