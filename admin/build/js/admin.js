(function(){
  var changeStyleForTheSelected, changeStyleForTable, changeStyle;
  changeStyleForTheSelected = function(event){
    var x$, y$;
    changeStyle('.user-conditon');
    changeStyle('.find-location');
    changeStyle('.find-webpage');
    changeStyle('.title-content');
    x$ = event.target;
    y$ = x$.style;
    y$.borderBottom = 'solid 0px';
  };
  changeStyleForTable = function(event){
    var x$, y$;
    changeStyle('.message');
    changeStyle('.topic');
    changeStyle('.user');
    x$ = event.target;
    y$ = x$.style;
    y$.borderBottom = 'solid 0px';
  };
  changeStyle = function(target1){
    var x$, y$;
    x$ = document.querySelector(target1);
    y$ = x$.style;
    y$.borderBottom = 'solid 1px';
  };
  changeStyle('.find-location');
  changeStyle('.find-webpage');
  changeStyle('.title-content');
  changeStyle('.topic');
  changeStyle('.user');
  document.querySelector('.user-conditon').onclick = changeStyleForTheSelected;
  document.querySelector('.find-location').onclick = changeStyleForTheSelected;
  document.querySelector('.find-webpage').onclick = changeStyleForTheSelected;
  document.querySelector('.title-content').onclick = changeStyleForTheSelected;
  document.querySelector('.topic').onclick = changeStyleForTable;
  document.querySelector('.user').onclick = changeStyleForTable;
  document.querySelector['.message'].onclick = changeStyleForTable;
}).call(this);
