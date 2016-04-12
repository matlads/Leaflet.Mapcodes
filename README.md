# Leaflet.Mapcodes

[Mapcode](http://mapcode.com) control for [LeafletJS](http://leafletjs.com)

A [Leaflet](https://github.com/Leaflet/Leaflet) plugin to view mapcodes of the
mouse pointer on mouse move.

[Live Demo](http://matlads.github.io/Leaflet.Mapcodes/example/demo.html)

### Usage
```javascript
L.control.Mapcode({
    position: "bottomleft",  // optional default "bottomright"
    labelTemplate: "Mapcode: {0}", // optional default "{0}"
}).addTo(map);
```


### License
Distributed under [GNU General Public License V2 or greater](http://www.gnu.org/licenses/gpl.html)
