# Leaflet.Mapcodes
Mapcode control for Leaflet - A leaflet plugin to view mapcodes of the mouse ponter on mouse move

[Live Demo](http://matlads.github.io/Leaflet.Mapcodes/example/demo.html)

### Usage

Include mapcode-js files, before this plugins javascript, and css code

``` html
<script type="text/javascript" src="mapcode-js/ndata.js"></script>
<script type="text/javascript" src="mapcode-js/ctrynams.js"></script>
<script type="text/javascript" src="mapcode-js/mapcode.js"></script>

<link rel="stylesheet" src="Leaflet.Mapcode.css" />
<script type="text/javascript" src="Leaflet.Mapcodes.js"></script>
```

Then add the control to the map like so:

```javascript
L.control.Mapcode({
    position: "bottomleft",  // optional default "bottomright"
    labelTemplate: "Mapcode: {0}", // optional default "{0}"
}).addTo(map);
```
