"use strict";

(function () {
  var g = {
    CONTENT_ENCODING_MULTIPLE: 1.5,
    DEFAULT_CONTENT_LENGTH: 1048576,
    DECOMPRESSED_CONTENT_LENGTH_HEADER: "x-decompressed-content-length"
  };
  if (window.Proxy) {
    var h = XMLHttpRequest,
        k = function (a, c) {
      var b = 0;
      a["decompressed-content-length"] && (b = a["decompressed-content-length"]);
      try {
        if (!b) {
          var d = c.target.getResponseHeader(a.DECOMPRESSED_CONTENT_LENGTH_HEADER);
          void 0 != d && (b = parseInt(d));
        }
        if (!b) {
          var e = c.target.getResponseHeader("content-length");
          if (e) {
            e = parseInt(e);
            var f = c.target.getResponseHeader("content-encoding");
            b = f && "identity" != f ? e * a.CONTENT_ENCODING_MULTIPLE | 0 : e;
          }
        }
      } catch (p) {}
      b || (b = a.DEFAULT_CONTENT_LENGTH);
      return b;
    },
        l = function (a, c) {
      var b = 0;
      return function (d) {
        if (d && (d instanceof ProgressEvent || a.no_type_check) && ("progress" == d.type || "load" == d.type || "loadend" == d.type)) if (0 == d.lengthComputable) {
          var e = d;
          d = new Proxy(d, {
            get: function get(c, d) {
              return "lengthComputable" == d ? !0 : "loaded" == d ? (b || (b = k(a, e)), a.loadFinished ? b : Math.min(e.loaded, b - 1)) : "total" == d ? (b || (b = k(a, e)), b) : c[d];
            }
          });
        } else a.lengthComputable = !0;
        a.latestProgress = d;
        c && c(d);
      };
    },
        n = {
      set: function set(a, c, b) {
        a.xmlHTTPRequestLengthComputable && 0 == c.indexOf("on") && a.xmlHTTPRequestLengthComputable.listeners[c.substr(2)] ? (a.xmlHTTPRequestLengthComputable.listeners[c.substr(2)].on && delete a.xmlHTTPRequestLengthComputable.listeners[c.substr(2)].on, b ? (a[c] = l(a.xmlHTTPRequestLengthComputable, b), a.xmlHTTPRequestLengthComputable.listeners[c.substr(2)].on = b) : a[c] = b) : a[c] = b;
        return !0;
      },
      get: function get(a, c) {
        return "addEventListener" == c ? function () {
          if (a.xmlHTTPRequestLengthComputable.listeners[arguments[0]]) {
            var b = l(a.xmlHTTPRequestLengthComputable, arguments[1]);
            a.xmlHTTPRequestLengthComputable.listeners[arguments[0]].listeners.push([b, arguments[1]]);
            return a[c].call(a, arguments[0], b, arguments[2], arguments[3]);
          }
          return a[c].apply(a, arguments);
        } : "removeEventListener" == c ? function () {
          if (a.xmlHTTPRequestLengthComputable.listeners[arguments[0]]) for (var b = a.xmlHTTPRequestLengthComputable.listeners[arguments[0]].listeners, d = 0; d < b.length; ++d) {
            if (b[d][1] == arguments[1]) return b = b.splice(d)[0], a[c].call(a, arguments[0], b[0], arguments[2], arguments[3]);
          } else return a[c].apply(a, arguments);
        } : "function" == typeof a[c] ? function () {
          return a[c].apply(a, arguments);
        } : a[c];
      }
    };
    window.XMLHttpRequest = function (a) {
      var c = new h(a),
          b = new Proxy(c, n),
          d = window.xmlHTTPRequestLengthComputable || g;
      a && a.xmlHTTPRequestLengthComputable && (d = a.xmlHTTPRequestLengthComputable);
      var e = {};
      for (var f in g) {
        e[f] = d[f] || g[f];
      }d["decompressed-content-length"] && (e["decompressed-content-length"] = d["decompressed-content-length"]);
      e.listeners = {
        progress: { listeners: [] },
        load: { listeners: [] },
        loadend: { listeners: [] }
      };
      c.addEventListener("load", function (a) {
        if (!e.lengthComputable && (e.loadFinished = !0, e.latestProgress)) {
          if (e.listeners.progress.on) e.listeners.progress.on(e.latestProgress);
          a = e.listeners.progress.listeners;
          for (var b = 0; b < a.length; ++b) {
            if (a[b][1]) a[b][1](e.latestProgress);
          }
        }
      });
      e.xmlhttprequest = c;
      b.xmlHTTPRequestLengthComputable = e;
      return b;
    };
    for (var m in h) {
      window.XMLHttpRequest[m] = h[m];
    }
  }
})();