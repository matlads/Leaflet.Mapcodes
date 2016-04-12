# Leaflet.Mapcodes

[Mapcode](http://mapcode.com) control for [LeafletJS](http://leafletjs.com)

A [Leaflet](https://github.com/Leaflet/Leaflet) plugin to view mapcodes of the
mouse pointer on mouse move.

[Live Demo](http://matlads.github.io/Leaflet.Mapcodes/examples/demo.html)

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
L.control.Mapcode({
    position: "bottomleft",  // optional default "bottomright"
    labelTemplate: "Mapcode: {0}", // optional default "{0}"
}).addTo(map);
```


### License
Distributed under [GNU General Public License V2 or greater](http://www.gnu.org/licenses/gpl.html)
