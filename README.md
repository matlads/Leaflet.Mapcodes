# Leaflet.Mapcodes

[Mapcode](http://mapcode.com) control for [LeafletJS](http://leafletjs.com)

A [Leaflet](https://github.com/Leaflet/Leaflet) plugin to view mapcodes of the
mouse pointer on mouse move.

### Requirements

Leaflet.Mapcodes requires

* [leaflet](http://github.com/Leaflet/Leaflet)
* [mapcode-js](https://github.com/mapcode-foundation/mapcode-js)

### Standalone demo

A [Live Demo](http://matlads.github.io/Leaflet.Mapcodes/examples/demo.html) is available

### Usage

Install mapcode-js files from the mapcode foundation
[repository](https://github.com/mapcode-foundation/mapcode-js) then include the
mapcode-js files, before this plugins Javascript, and CSS code

``` html
<script type="text/javascript" src="mapcode-js/ndata.js"></script>
<script type="text/javascript" src="mapcode-js/ctrynams.js"></script>
<script type="text/javascript" src="mapcode-js/mapcode.js"></script>

<link rel="stylesheet" src="Leaflet.Mapcode.css" />
<script type="text/javascript" src="Leaflet.Mapcodes.js"></script>
```

Then add the control to the map like so:

```javascript
L.control.mapcode({
    position: "bottomleft",  // optional default "bottomright"
    labelTemplate: "Mapcode: {0}", // optional default "{0}"
}).addTo(map);
```


### License
See the [LICENSE](LICENSE) file in the repo
