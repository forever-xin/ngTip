# ngTip
angularjs simple tip service with bootstrap alert style

[Demo](http://savokiss.me/ngTip)

`dependencies` : 
 - bootstrap 3+ 
 - angularjs 1.3+

##Install
include the `dist/ngTip.js` and `dist/ngTip.css` in your html

##Usage
- require `ngTip` module

```javascript
angular.module('myApp',['ngTip'])
```

- use `ngTip` service in the controller

```javascript
angular.module('myApp').controller('DemoController',function($scope,ngTip){

  $scope.openTip = function(){
    ngTip.tip('tip message here','success');
  };
})
```

- change the default timeout
the default timeout is 3 seconds, you could change that in the `angular.config`

```
angular.module('myApp').config(function(ngTipProvider){
    ngTipProvider.setDefaultTimeout(1000);
})
```

##API
###`.tip(message, type)`
####message
- the message you'd like to tip

####type
- there're 4 types now: `info`, `success`, `warning`, `danger`
- `info` is the default one. both from bootstrap alert bar style


