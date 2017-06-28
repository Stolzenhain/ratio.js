//TODO: add as param
var childSelector = '*:first-child';

var childRatio = function() {
  
var _self = this;

this.update = function (){

Array.prototype.forEach.call(frames, function( frame ){
  
  var child = frame.querySelectorAll(childSelector)[0];
  
  //TODO: get frame inner content ratio
  //TODO: update child ratio only when called w/ extra parameter
  
  /* get float offsets incl. padding, but w/o margin */ 
  offset = {
    'frame' : frame.getBoundingClientRect(),
    'child' : child.getBoundingClientRect()
  }
  
  //remove existing classes
  //TODO: use a more elegant solution
  child.classList.remove('child-portrait');
  child.classList.remove('child-landscape');

  if (
    //frame ratio
    offset.frame.width/offset.frame.height
    <=
    //child ratio
    offset.child.width/offset.child.height
  ) {
    //frame is thinner or same ratio – child behaves as landscape
    child.classList.add('child-landscape');
  } else {
    //frame is wider – child behaves as portrait
    child.classList.add('child-portrait');
  }
  
});

}

//init
_self.update();

return this;

}
