/*
 * L.Control.Mapcodes is used to display the mapcode for the current mouse
 * coordinates on the map.
 */
(function (factory, window) {

    // define an AMD module that relies on 'leaflet'
    if (typeof define === 'function' && define.amd) {
        define(['leaflet'], factory);

    // define a Common JS module that relies on 'leaflet'
    } else if (typeof exports === 'object') {
        module.exports = factory(require('leaflet'));
    }

    // attach your plugin to the global 'L' variable
    if (typeof window !== 'undefined' && window.L) {
        window.L.Control.Mapcodes = factory(L);
    }
}(function (L) {

	var MapcodesControl = L.Control.extend({
	    options: {
		position: 'bottomright',

		// label templates for usiage if no labelFormatter function is defined
		labelTemplate: "{0}",

		// label formatter function
		labelFormatter: undefined
	    },

	    onAdd: function(map){
		this._map = map;

		var className = 'leaflet-control-mapcodes',
		    container = this._container = L.DomUtil.create('div', className),
		    options = this.options;

		// label container
		this._labelcontainer = L.DomUtil.create("div", "uiElement label", container);
		this._label = L.DomUtil.create("span", "labelFirst", this._labelcontainer);

		// connect to mouseevents
		map.on("mousemove", this._update, this);
		map.whenReady(this._update, this);

		// return the container
		return container;
	    },

	    onRemove: function(map){
		map.off("mousemove", this._update, this);
	    },

	    /**
	     * Mousemove callback function updating the label
	     */
	    _update: function(evt){
		var pos = evt.latlng;
		var opts = this.options;

		if (pos) {
		    pos = pos.wrap();
		    this._currentPos = pos;
		    var mapcode = this._LatLngToMapcode(pos);
		    this._label.innerHTML = this._createMapcodeLabel(mapcode);
		}
	    },

	    _LatLngToMapcode: function(point){
		var lng = point.lng;
		var lat = point.lat;

		var results = encodeShortest(lat, lng);

		if (results){
		     return results[0].fullmapcode;
		}
	    },

	    /**
	     * Creates the label according to the given options and formatters
	     */
	    _createMapcodeLabel: function(mapcode){
		var opts = this.options, l;
		if (opts.labelFormatter) {
		    l = opts.labelFormatter(mapcode);
		} else {
		     l = L.Util.template(opts.labelTemplate, {0: mapcode});
		}
		return l;
	    }
	});

	// constructor registration
	L.control.mapcodes = function(options){
	    return new MapcodesControl(options);
	};

	// map init hook
	L.Map.mergeOptions({
	    MapcodeControl: false
	});

	L.Map.addInitHook(function(){
	    if (this.options.MapcodeControl){
		this.MapcodeControl = new L.Control.Mapcodes();
		this.addControl(this.MapcodeControl);
	    }
	});

	return MapcodesControl;
}, window));
