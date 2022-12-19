!(function e(t, o, r) {
  function i(s, a) {
    if (!o[s]) {
      if (!t[s]) {
        var l = "function" == typeof require && require;
        if (!a && l) return l(s, !0);
        if (n) return n(s, !0);
        var p = new Error("Cannot find module '" + s + "'");
        throw ((p.code = "MODULE_NOT_FOUND"), p);
      }
      var c = (o[s] = { exports: {} });
      t[s][0].call(
        c.exports,
        function (e) {
          var o = t[s][1][e];
          return i(o || e);
        },
        c,
        c.exports,
        e,
        t,
        o,
        r
      );
    }
    return o[s].exports;
  }
  for (
    var n = "function" == typeof require && require, s = 0;
    s < r.length;
    s++
  )
    i(r[s]);
  return i;
})(
  {
    1: [
      function (e, t, o) {
        function r(e, t) {
          if (!(this instanceof r))
            throw new Error(
              "MapboxMarkers needs to be called with the new keyword"
            );
          (this.URLSearchParams = new URLSearchParams(
            new URL(window.location).search
          )),
            (this._sourceName = "markerspec"),
            (this._geojson = e),
            (this._rendered = !1),
            (this.options = Object.assign(
              {
                enabled: this.URLSearchParams.get("enabled") || !0,
                showControl: this.URLSearchParams.get("show-control") || !0,
                marker: {
                  image:
                    "https://www.mapbox.com/help/demos/custom-markers-gl-js/mapbox-icon.png",
                },
                popup: { description: "<i>No description provided</i>" },
                style: {
                  label: "{name}",
                  labelSize: 10,
                  color: this.URLSearchParams.get("style-color") || "blue",
                  size: 2,
                  opacity: 0.1,
                  icon: "marker",
                  layers: null,
                },
              },
              t
            )),
            (this.toggle = this.toggle.bind(this)),
            (this.render = this.render.bind(this)),
            (this._toggleLayers = this._toggleLayers.bind(this)),
            (this._updateMap = this._updateMap.bind(this)),
            (this._toggle = new i({
              show: this.options.showControl,
              onToggle: this.toggle.bind(this),
            }));
        }
        function i(e) {
          var t, o;
          (e = Object.assign({ show: !0, onToggle: function () {} }, e)),
            (this._btn =
              (((t = document.createElement("button")).className =
                "mapboxgl-ctrl-icon mapboxgl-ctrl-markers"),
              (t.type = "button"),
              (t["aria-label"] = "Inspect"),
              t)),
            (this._btn.onclick = e.onToggle),
            (this._input =
              (((o = document.createElement("input")).id = "marker-search"),
              (o.type = "text"),
              (o.placeholder = "Marker Search"),
              (o.style.display = "none"),
              o)),
            (this.elem = (function (e, t, o) {
              var r = document.createElement("div");
              return (
                (r.className = "mapboxgl-ctrl mapboxgl-ctrl-group markerspec"),
                r.appendChild(e),
                o || (r.style.display = "none"),
                r
              );
            })(this._btn, this._input, e.show));
        }
        (r.prototype.onAdd = function (e) {
          return (
            (this._map = e),
            e.on("load", this.render),
            e.on("moveend", this._updateMap),
            this._toggle.elem
          );
        }),
          (r.prototype.onRemove = function () {
            this._map.off("load", this.render);
            var e = this._toggle.elem;
            e.parentNode.removeChild(e), (this._map = void 0);
          }),
          (r.prototype.toggle = function () {
            (this.options.enabled = !this.options.enabled), this.render();
          }),
          (r.prototype.render = function () {
            if (!this._rendered) {
              var e = this;
              if (this.URLSearchParams.get("data")) {
                var t = new XMLHttpRequest();
                (t.onreadystatechange = function () {
                  t.readyState == XMLHttpRequest.DONE &&
                    ((e._geojson = JSON.parse(t.responseText)), o());
                }),
                  t.open("GET", this.URLSearchParams.get("data"), !0),
                  t.send(null);
              } else o();
              function o() {
                e._geojson.features.forEach(function (t) {
                  if ("Point" == t.geometry.type) {
                    var o = document.createElement("div");
                    (o.className = "markerspec marker"),
                      (o.style = `background-image:url('${
                        t.properties["marker-image"] || e.options.marker.image
                      }')`),
                      (o.onclick = function (e) {
                        map.flyTo({ center: t.geometry.coordinates });
                      });
                    var r =
                      (void 0 !== t.properties.title
                        ? `<h3>${t.properties.title}</h3>`
                        : "") +
                      (void 0 !== t.properties.image
                        ? `<img src='${t.properties.image}' width=200 alt='${t.properties.title}'>`
                        : "") +
                      (void 0 !== t.properties.description
                        ? `<p>${t.properties.description}</p>`
                        : `<p>${e.options.popup.description}</p>`) +
                      (void 0 !== t.properties.website
                        ? `<a href='${t.properties.website}' target='_blank' class='button'>クイズに挑戦する</a>`
                        : `<a href='https://www.openstreetmap.org/?mlat=${t.geometry.coordinates[1]}&mlon=${t.geometry.coordinates[0]}' target='_blank' class='button'>クイズに挑戦する</a>`);
                    new mapboxgl.Marker(o)
                      .setLngLat(t.geometry.coordinates)
                      .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(r))
                      .addTo(map);
                  }
                }),
                  e._map.addSource("markerspec", {
                    type: "geojson",
                    data: e._geojson,
                  });
                var t,
                  o,
                  r = e._map.getStyle().layers.filter(function (e) {
                    return "road" === e["source-layer"];
                  }),
                  i = r[r.length - 1].id;
                e.options.style.layers ||
                  (e.options.style.layers =
                    ((t = e._sourceName),
                    (o = e.options.style),
                    [
                      {
                        id: `${t} fill`,
                        type: "fill",
                        source: `${t}`,
                        paint: {
                          "fill-color": o.color,
                          "fill-opacity": o.opacity,
                        },
                        filter: ["==", "$type", "Polygon"],
                      },
                      {
                        id: `${t} line`,
                        type: "line",
                        source: `${t}`,
                        paint: {
                          "line-color": o.color,
                          "line-width": o.size,
                          "line-opacity": o.opacity,
                        },
                      },
                      {
                        id: `${t} circle`,
                        type: "circle",
                        source: `${t}`,
                        paint: {
                          "circle-color": o.color,
                          "circle-radius": o.size,
                          "circle-opacity": o.opacity,
                        },
                      },
                      {
                        id: `${t} symbol`,
                        type: "symbol",
                        source: `${t}`,
                        layout: {
                          "text-field": o.label,
                          "text-size": o.labelSize,
                          "text-font": [
                            "Open Sans Semibold",
                            "Arial Unicode MS Bold",
                          ],
                          "text-anchor": "top",
                          "icon-image": "{icon}-15",
                          "icon-allow-overlap": !0,
                        },
                      },
                    ]));
                var n = (function (e, t, o) {
                  for (var r = 0; r < e.layers.length; r++) {
                    var i = e.layers[r];
                    if (o === i.id) {
                      var n = e.layers
                        .slice(0, r)
                        .concat(t)
                        .concat(e.layers.slice(r));
                      return Object.assign({}, e, { layers: n });
                    }
                  }
                  return e;
                })(e._map.getStyle(), e.options.style.layers, i);
                e._map.setStyle(n),
                  (e._toggle._input.onkeypress = (t) => {
                    if ("Enter" === t.key)
                      return (
                        (e.options.query = e._toggle._input.value),
                        e._updateMap(),
                        !0
                      );
                  });
              }
              this._rendered = !0;
            }
            this.options.enabled
              ? (this._toggleLayers(), this._toggle.setMapIcon())
              : (this._toggleLayers(), this._toggle.setPluginIcon());
          }),
          (r.prototype._updateMap = function () {
            this.options.enabled &&
              this.options._geojson &&
              console.log("Nothing to update");
          }),
          (i.prototype.setPluginIcon = function () {
            this._btn.className = "mapboxgl-ctrl-icon mapboxgl-ctrl-markers";
          }),
          (i.prototype.setMapIcon = function () {
            this._btn.className = "mapboxgl-ctrl-icon mapboxgl-ctrl-map";
          }),
          (r.prototype._toggleLayers = function () {
            var e = this.options.enabled;
            Array.from(
              document.getElementsByClassName("markerspec marker")
            ).forEach(function (t) {
              t.style.display = e ? "inline" : "none";
            });
            var t = new RegExp(this._sourceName),
              o = this._map.getStyle();
            o.layers.forEach(function (o) {
              t.test(o.source) &&
                ((o.layout = o.layout || {}),
                (o.layout.visibility = e ? "visible" : "none"));
            }),
              this._map.setStyle(o),
              (this._toggle._input.style.display = e ? "inline" : "none");
          }),
          void 0 !== t && void 0 !== t.exports
            ? (window.MapboxMarkers = r)
            : (t.exports = r);
      },
      {},
    ],
  },
  {},
  [1]
);
