# ratiospy.js

Compare ratios of DOM elements – easily shim the [`object-fit`](https://developer.mozilla.org/de/docs/Web/CSS/object-fit) property on older browsers.

## How does it work?

Run the script to compare a DOM element – the frame - and a descendant – the child. 
The child receives a class: either `ratio-portrait` or `ratio-landscape`. 

On applying little CSS, you can use these two classes to do most of the magic of
`object-fit`.

## Browser support

- TBD
- current CSS fails on Opera Mini due to using `transform`

## See also

- Element queries
