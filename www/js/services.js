angular.module('app.services', [])

.service('Store', function () {

    var fashion_items = [
        {
            id: '1',
            department: 'Gentlemen',
            name: 'Inakaya Denim',
            desc: 'Inakaya Denim jeans are the latest farm-fresh Japanese-inspired fashion item',
            image: 'https://insideretail.asia/wp-content/uploads/2016/07/Inakaya-denim.png',
            price: 120,
            quantity: 0
        },
        {
            id: '2',
            department: 'Ladies',
            name: 'Ann Taylor Petite',
            desc: 'This well known American brand is synonymous with a classic and sophisticated style. They have a wide range of petite clothing.',
            image: 'https://i2.wp.com/laceandlocks.com/blog/wp-content/uploads/2015/01/lace-and-locks-petite-fashion-blogger-ann-taylor-pants-office-wear-01.jpg?fit=500%2C334',
            price: 2000,
            quantity: 0
        },
        {
            id: '3',
            department: 'Gentlemen',
            name: 'GANT Polo Shirt',
            desc: '70’s/retro style',
            image: 'http://m2clothing.co.uk/wp-content/uploads/2016/03/polo-m2clothing-720x540.jpg',
            price: 250,
            quantity: 0
        },
        {
            id: '4',
            department: 'Ladies',
            name: 'Joel Round Simple Knit Best ',
            desc: 'Simple, Layered to Good Hajji woven Knit Vest!',
            image: 'http://styleberry.cdn.smart-img.com/2014_img/img/glob-img1.jpg',
            price: 240,
            quantity: 0
        }
    ];
    this.getLadiesItems = function () {
        return fashion_items.filter(function (item) {
            return item.department === 'Ladies';
        });
    };
    
    this.getMenItems = function () {
        return fashion_items.filter(function (item) {
            return item.department === 'Gentlemen';
        });
    };

    this.getItem = function (id) {

        return fashion_items.filter(function (item) {
            return item.id === id;
        })[0] || null;
        
    };

    this.getSelected = function() {

        return fashion_items.filter(function(item) {
            return item.quantity > 0;
        });
        
    }
    
    this.clearSelected = function() {
        
        fashion_items.forEach( function (item) {
            item.quantity = 0;
        });
    }


})
.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}]);
