!function (e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.arangojs = t() : e.arangojs = t(); }(window, (function () { return function (e) { var t = {}; function r(n) { if (t[n])
    return t[n].exports; var o = t[n] = { i: n, l: !1, exports: {} }; return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports; } return r.m = e, r.c = t, r.d = function (e, t, n) { r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }); }, r.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }); }, r.t = function (e, t) { if (1 & t && (e = r(e)), 8 & t)
    return e; if (4 & t && "object" == typeof e && e && e.__esModule)
    return e; var n = Object.create(null); if (r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
    for (var o in e)
        r.d(n, o, function (t) { return e[t]; }.bind(null, o)); return n; }, r.n = function (e) { var t = e && e.__esModule ? function () { return e.default; } : function () { return e; }; return r.d(t, "a", t), t; }, r.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t); }, r.p = "", r(r.s = 13); }([function (e, t, r) {
        "use strict";
        r.r(t), r.d(t, "isArangoCollection", (function () { return b; })), r.d(t, "collectionToString", (function () { return m; })), r.d(t, "CollectionType", (function () { return u; })), r.d(t, "CollectionStatus", (function () { return s; })), r.d(t, "Collection", (function () { return g; }));
        var n = r(5), o = r(2), i = r(1);
        function a(e, t) { if ("string" != typeof e) {
            if (e.id)
                return a(e.id, t);
            throw new Error("Index handle must be a string or an object with an id attribute");
        } if (e.includes("/")) {
            if (!e.startsWith("".concat(t, "/")))
                throw new Error('Index ID "'.concat(e, '" does not match collection name "').concat(t, '"'));
            return e;
        } return "".concat(t, "/").concat(e); }
        var u, s, c = r(3);
        function h(e, t) { var r = Object.keys(e); if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable; }))), r.push.apply(r, n);
        } return r; }
        function l(e) { for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? h(Object(r), !0).forEach((function (t) { v(e, t, r[t]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : h(Object(r)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)); }));
        } return e; }
        function f(e, t) { if (null == e)
            return {}; var r, n, o = function (e, t) { if (null == e)
            return {}; var r, n, o = {}, i = Object.keys(e); for (n = 0; n < i.length; n++)
            r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]); return o; }(e, t); if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (n = 0; n < i.length; n++)
                r = i[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
        } return o; }
        function p(e, t, r, n, o, i, a) { try {
            var u = e[i](a), s = u.value;
        }
        catch (e) {
            return void r(e);
        } u.done ? t(s) : Promise.resolve(s).then(n, o); }
        function d(e) { return function () { var t = this, r = arguments; return new Promise((function (n, o) { var i = e.apply(t, r); function a(e) { p(i, n, o, a, u, "next", e); } function u(e) { p(i, n, o, a, u, "throw", e); } a(void 0); })); }; }
        function y(e, t) { for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        } }
        function v(e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e; }
        function b(e) { return Boolean(e && e.isArangoCollection); }
        function m(e) { return b(e) ? String(e.name) : String(e); }
        !function (e) { e[e.DOCUMENT_COLLECTION = 2] = "DOCUMENT_COLLECTION", e[e.EDGE_COLLECTION = 3] = "EDGE_COLLECTION"; }(u || (u = {})), function (e) { e[e.NEWBORN = 1] = "NEWBORN", e[e.UNLOADED = 2] = "UNLOADED", e[e.LOADED = 3] = "LOADED", e[e.UNLOADING = 4] = "UNLOADING", e[e.DELETED = 5] = "DELETED", e[e.LOADING = 6] = "LOADING"; }(s || (s = {}));
        var g = function () { function e(t, r) { !function (e, t) { if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function"); }(this, e), v(this, "_name", void 0), v(this, "_db", void 0), this._name = r, this._db = t; } var t, r, u, s, h, p, b, m, g, w; return t = e, (r = [{ key: "_get", value: function (e, t) { return this._db.request({ path: "/_api/collection/".concat(this._name, "/").concat(e), qs: t }, (function (e) { return e.body; })); } }, { key: "_put", value: function (e, t) { return this._db.request({ method: "PUT", path: "/_api/collection/".concat(this._name, "/").concat(e), body: t }, (function (e) { return e.body; })); } }, { key: "get", value: function () { return this._db.request({ path: "/_api/collection/".concat(this._name) }, (function (e) { return e.body; })); } }, { key: "exists", value: (w = d(regeneratorRuntime.mark((function e() { return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0: return e.prev = 0, e.next = 3, this.get();
                        case 3: return e.abrupt("return", !0);
                        case 6:
                            if (e.prev = 6, e.t0 = e.catch(0), !Object(i.c)(e.t0) || e.t0.errorNum !== c.b) {
                                e.next = 10;
                                break;
                            }
                            return e.abrupt("return", !1);
                        case 10: throw e.t0;
                        case 11:
                        case "end": return e.stop();
                    } }), e, this, [[0, 6]]); }))), function () { return w.apply(this, arguments); }) }, { key: "create", value: function (e) { var t = e || {}, r = t.waitForSyncReplication, n = void 0 === r ? void 0 : r, o = t.enforceReplicationFactor, i = void 0 === o ? void 0 : o, a = f(t, ["waitForSyncReplication", "enforceReplicationFactor"]), u = {}; return "boolean" == typeof n && (u.waitForSyncReplication = n ? 1 : 0), "boolean" == typeof i && (u.enforceReplicationFactor = i ? 1 : 0), this._db.request({ method: "POST", path: "/_api/collection", qs: u, body: l(l({}, a), {}, { name: this.name }) }, (function (e) { return e.body; })); } }, { key: "properties", value: function (e) { function t(t) { return e.apply(this, arguments); } return t.toString = function () { return e.toString(); }, t; }((function (e) { return e ? this._put("properties", e) : this._get("properties"); })) }, { key: "count", value: function () { return this._get("count"); } }, { key: "recalculateCount", value: (g = d(regeneratorRuntime.mark((function e() { var t; return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0: return e.next = 2, this._put("recalculateCount");
                        case 2: return t = e.sent, e.abrupt("return", t.result);
                        case 4:
                        case "end": return e.stop();
                    } }), e, this); }))), function () { return g.apply(this, arguments); }) }, { key: "figures", value: function () { return this._get("figures"); } }, { key: "revision", value: function () { return this._get("revision"); } }, { key: "checksum", value: function (e) { return this._get("checksum", e); } }, { key: "load", value: function (e) { return this._put("load", "boolean" == typeof e ? { count: e } : void 0); } }, { key: "loadIndexes", value: (m = d(regeneratorRuntime.mark((function e() { var t; return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0: return e.next = 2, this._put("loadIndexesIntoMemory");
                        case 2: return t = e.sent, e.abrupt("return", t.result);
                        case 4:
                        case "end": return e.stop();
                    } }), e, this); }))), function () { return m.apply(this, arguments); }) }, { key: "unload", value: function () { return this._put("unload"); } }, { key: "rename", value: (b = d(regeneratorRuntime.mark((function e(t) { var r; return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0: return e.next = 2, this._db.renameCollection(this._name, t);
                        case 2: return r = e.sent, this._name = t, e.abrupt("return", r);
                        case 5:
                        case "end": return e.stop();
                    } }), e, this); }))), function (e) { return b.apply(this, arguments); }) }, { key: "rotate", value: (p = d(regeneratorRuntime.mark((function e() { var t; return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0: return e.next = 2, this._put("rotate");
                        case 2: return t = e.sent, e.abrupt("return", t.result);
                        case 4:
                        case "end": return e.stop();
                    } }), e, this); }))), function () { return p.apply(this, arguments); }) }, { key: "truncate", value: function () { return this._put("truncate"); } }, { key: "drop", value: function (e) { return this._db.request({ method: "DELETE", path: "/_api/collection/".concat(this._name), qs: e }, (function (e) { return e.body; })); } }, { key: "getResponsibleShard", value: function (e) { return this._db.request({ method: "PUT", path: "/_api/collection/".concat(this.name, "/responsibleShard"), body: e }, (function (e) { return e.body.shardId; })); } }, { key: "documentId", value: function (e) { return Object(o.a)(e, this._name); } }, { key: "documentExists", value: (h = d(regeneratorRuntime.mark((function e(t) { return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0: return e.prev = 0, e.next = 3, this._db.request({ method: "HEAD", path: "/_api/document/".concat(Object(o.a)(t, this._name)) }, (function () { return !0; }));
                        case 3: return e.abrupt("return", e.sent);
                        case 6:
                            if (e.prev = 6, e.t0 = e.catch(0), 404 !== e.t0.code) {
                                e.next = 10;
                                break;
                            }
                            return e.abrupt("return", !1);
                        case 10: throw e.t0;
                        case 11:
                        case "end": return e.stop();
                    } }), e, this, [[0, 6]]); }))), function (e) { return h.apply(this, arguments); }) }, { key: "document", value: (s = d(regeneratorRuntime.mark((function e(t) { var r, n, a, u, s, h, l, f = arguments; return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0:
                            if ("boolean" == typeof (r = f.length > 1 && void 0 !== f[1] ? f[1] : {}) && (r = { graceful: r }), a = (n = r).allowDirtyRead, u = void 0 === a ? void 0 : a, s = n.graceful, h = void 0 !== s && s, l = this._db.request({ path: "/_api/document/".concat(Object(o.a)(t, this._name)), allowDirtyRead: u }, (function (e) { return e.body; })), h) {
                                e.next = 6;
                                break;
                            }
                            return e.abrupt("return", l);
                        case 6: return e.prev = 6, e.next = 9, l;
                        case 9: return e.abrupt("return", e.sent);
                        case 12:
                            if (e.prev = 12, e.t0 = e.catch(6), !Object(i.c)(e.t0) || e.t0.errorNum !== c.d) {
                                e.next = 16;
                                break;
                            }
                            return e.abrupt("return", null);
                        case 16: throw e.t0;
                        case 17:
                        case "end": return e.stop();
                    } }), e, this, [[6, 12]]); }))), function (e) { return s.apply(this, arguments); }) }, { key: "save", value: function (e, t) { return this._db.request({ method: "POST", path: "/_api/document/".concat(this._name), body: e, qs: t }, (function (e) { return t && t.silent ? void 0 : e.body; })); } }, { key: "saveAll", value: function (e, t) { return this._db.request({ method: "POST", path: "/_api/document/".concat(this._name), body: e, qs: t }, (function (e) { return t && t.silent ? void 0 : e.body; })); } }, { key: "replace", value: function (e, t, r) { return this._db.request({ method: "PUT", path: "/_api/document/".concat(Object(o.a)(e, this._name)), body: t, qs: r }, (function (e) { return r && r.silent ? void 0 : e.body; })); } }, { key: "replaceAll", value: function (e, t) { return this._db.request({ method: "PUT", path: "/_api/document/".concat(this._name), body: e, qs: t }, (function (e) { return t && t.silent ? void 0 : e.body; })); } }, { key: "update", value: function (e, t, r) { return this._db.request({ method: "PATCH", path: "/_api/document/".concat(Object(o.a)(e, this._name)), body: t, qs: r }, (function (e) { return r && r.silent ? void 0 : e.body; })); } }, { key: "updateAll", value: function (e, t) { return this._db.request({ method: "PATCH", path: "/_api/document/".concat(this._name), body: e, qs: t }, (function (e) { return t && t.silent ? void 0 : e.body; })); } }, { key: "remove", value: function (e, t) { return this._db.request({ method: "DELETE", path: "/_api/document/".concat(Object(o.a)(e, this._name)), qs: t }, (function (e) { return t && t.silent ? void 0 : e.body; })); } }, { key: "removeAll", value: function (e, t) { var r = this; return this._db.request({ method: "DELETE", path: "/_api/document/".concat(this._name), body: e.map((function (e) { return Object(o.a)(e, r._name); })), qs: t }, (function (e) { return t && t.silent ? void 0 : e.body; })); } }, { key: "import", value: function (e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = l(l({}, t), {}, { collection: this._name }); if (Array.isArray(e)) {
                    r.type = Array.isArray(e[0]) ? void 0 : "documents";
                    var n = e;
                    e = n.map((function (e) { return JSON.stringify(e); })).join("\r\n") + "\r\n";
                } return this._db.request({ method: "POST", path: "/_api/import", body: e, isBinary: !0, qs: r }, (function (e) { return e.body; })); } }, { key: "_edges", value: function (e, t) { return this._db.request({ path: "/_api/edges/".concat(this._name), qs: { direction: t, vertex: Object(o.a)(e, this._name) } }, (function (e) { return e.body; })); } }, { key: "edges", value: function (e) { return this._edges(e); } }, { key: "inEdges", value: function (e) { return this._edges(e, "in"); } }, { key: "outEdges", value: function (e) { return this._edges(e, "out"); } }, { key: "traversal", value: function (e, t) { return this._db.request({ method: "POST", path: "/_api/traversal", body: l(l({}, t), {}, { startVertex: e, edgeCollection: this._name }) }, (function (e) { return e.body.result; })); } }, { key: "list", value: function () { var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "id"; return this._db.request({ method: "PUT", path: "/_api/simple/all-keys", body: { type: t, collection: this._name } }, (function (t) { return new n.a(e._db, t.body, t.arangojsHostId).items; })); } }, { key: "all", value: function (e) { var t = this; return this._db.request({ method: "PUT", path: "/_api/simple/all", body: l(l({}, e), {}, { collection: this._name }) }, (function (e) { return new n.a(t._db, e.body, e.arangojsHostId).items; })); } }, { key: "any", value: function () { return this._db.request({ method: "PUT", path: "/_api/simple/any", body: { collection: this._name } }, (function (e) { return e.body.document; })); } }, { key: "byExample", value: function (e, t) { var r = this; return this._db.request({ method: "PUT", path: "/_api/simple/by-example", body: l(l({}, t), {}, { example: e, collection: this._name }) }, (function (e) { return new n.a(r._db, e.body, e.arangojsHostId).items; })); } }, { key: "firstExample", value: function (e) { return this._db.request({ method: "PUT", path: "/_api/simple/first-example", body: { example: e, collection: this._name } }, (function (e) { return e.body.document; })); } }, { key: "removeByExample", value: function (e, t) { return this._db.request({ method: "PUT", path: "/_api/simple/remove-by-example", body: l(l({}, t), {}, { example: e, collection: this._name }) }, (function (e) { return e.body; })); } }, { key: "replaceByExample", value: function (e, t, r) { return this._db.request({ method: "PUT", path: "/_api/simple/replace-by-example", body: l(l({}, r), {}, { example: e, newData: t, collection: this._name }) }, (function (e) { return e.body; })); } }, { key: "updateByExample", value: function (e, t, r) { return this._db.request({ method: "PUT", path: "/_api/simple/update-by-example", body: l(l({}, r), {}, { example: e, newData: t, collection: this._name }) }, (function (e) { return e.body; })); } }, { key: "lookupByKeys", value: function (e) { return this._db.request({ method: "PUT", path: "/_api/simple/lookup-by-keys", body: { keys: e, collection: this._name } }, (function (e) { return e.body.documents; })); } }, { key: "removeByKeys", value: function (e, t) { return this._db.request({ method: "PUT", path: "/_api/simple/remove-by-keys", body: { options: t, keys: e, collection: this._name } }, (function (e) { return e.body; })); } }, { key: "indexes", value: function () { return this._db.request({ path: "/_api/index", qs: { collection: this._name } }, (function (e) { return e.body.indexes; })); } }, { key: "index", value: function (e) { return this._db.request({ path: "/_api/index/".concat(a(e, this._name)) }, (function (e) { return e.body; })); } }, { key: "ensureIndex", value: function (e) { return this._db.request({ method: "POST", path: "/_api/index", body: e, qs: { collection: this._name } }, (function (e) { return e.body; })); } }, { key: "dropIndex", value: function (e) { return this._db.request({ method: "DELETE", path: "/_api/index/".concat(a(e, this._name)) }, (function (e) { return e.body; })); } }, { key: "fulltext", value: function (e, t) { var r = this, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i = o.index, u = f(o, ["index"]); return this._db.request({ method: "PUT", path: "/_api/simple/fulltext", body: l(l({}, u), {}, { index: i ? a(i, this._name) : void 0, attribute: e, query: t, collection: this._name }) }, (function (e) { return new n.a(r._db, e.body, e.arangojsHostId).items; })); } }, { key: "isArangoCollection", get: function () { return !0; } }, { key: "name", get: function () { return this._name; } }]) && y(t.prototype, r), u && y(t, u), e; }();
    }, function (e, t, r) {
        "use strict";
        r.d(t, "c", (function () { return g; })), r.d(t, "d", (function () { return w; })), r.d(t, "e", (function () { return _; })), r.d(t, "a", (function () { return k; })), r.d(t, "b", (function () { return x; }));
        var n = r(17), o = n.default || n;
        function i(e) { return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e; } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e; })(e); }
        function a(e, t) { var r; if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (r = function (e, t) { if (!e)
                return; if ("string" == typeof e)
                return u(e, t); var r = Object.prototype.toString.call(e).slice(8, -1); "Object" === r && e.constructor && (r = e.constructor.name); if ("Map" === r || "Set" === r)
                return Array.from(e); if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                return u(e, t); }(e)) || t && e && "number" == typeof e.length) {
                r && (e = r);
                var n = 0, o = function () { };
                return { s: o, n: function () { return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] }; }, e: function (e) { throw e; }, f: o };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        } var i, a = !0, s = !1; return { s: function () { r = e[Symbol.iterator](); }, n: function () { var e = r.next(); return a = e.done, e; }, e: function (e) { s = !0, i = e; }, f: function () { try {
                a || null == r.return || r.return();
            }
            finally {
                if (s)
                    throw i;
            } } }; }
        function u(e, t) { (null == t || t > e.length) && (t = e.length); for (var r = 0, n = new Array(t); r < t; r++)
            n[r] = e[r]; return n; }
        function s(e, t) { if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function"); }
        function c(e, t) { for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        } }
        function h(e, t) { if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function"); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && l(e, t); }
        function l(e, t) { return (l = Object.setPrototypeOf || function (e, t) { return e.__proto__ = t, e; })(e, t); }
        function f(e) { var t = function () { if ("undefined" == typeof Reflect || !Reflect.construct)
            return !1; if (Reflect.construct.sham)
            return !1; if ("function" == typeof Proxy)
            return !0; try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], (function () { }))), !0;
        }
        catch (e) {
            return !1;
        } }(); return function () { var r, n = y(e); if (t) {
            var o = y(this).constructor;
            r = Reflect.construct(n, arguments, o);
        }
        else
            r = n.apply(this, arguments); return p(this, r); }; }
        function p(e, t) { return !t || "object" !== i(t) && "function" != typeof t ? d(e) : t; }
        function d(e) { if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
        function y(e) { return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) { return e.__proto__ || Object.getPrototypeOf(e); })(e); }
        function v(e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e; }
        var b = { 0: "Network Error", 400: "Bad RequestData", 401: "Unauthorized", 402: "Payment Required", 403: "Forbidden", 404: "Not Found", 405: "Method Not Allowed", 406: "Not Acceptable", 407: "Proxy Authentication Required", 408: "RequestData Timeout", 409: "Conflict", 410: "Gone", 411: "Length Required", 412: "Precondition Failed", 413: "Payload Too Large", 414: "RequestData-URI Too Long", 415: "Unsupported Media Type", 416: "Requested Range Not Satisfiable", 417: "Expectation Failed", 418: "I'm a teapot", 421: "Misdirected RequestData", 422: "Unprocessable Entity", 423: "Locked", 424: "Failed Dependency", 426: "Upgrade Required", 428: "Precondition Required", 429: "Too Many Requests", 431: "RequestData Header Fields Too Large", 444: "Connection Closed Without Response", 451: "Unavailable For Legal Reasons", 499: "Client Closed RequestData", 500: "Internal Server Error", 501: "Not Implemented", 502: "Bad Gateway", 503: "Service Unavailable", 504: "Gateway Timeout", 505: "HTTP Version Not Supported", 506: "Variant Also Negotiates", 507: "Insufficient Storage", 508: "Loop Detected", 510: "Not Extended", 511: "Network Authentication Required", 599: "Network Connect Timeout Error" }, m = ["fileName", "lineNumber", "columnNumber", "stack", "description", "number"];
        function g(e) { return Boolean(e && e.isArangoError); }
        function w(e) { return e && e.hasOwnProperty("error") && e.hasOwnProperty("code") && e.hasOwnProperty("errorMessage") && e.hasOwnProperty("errorNum"); }
        function _(e) { return Object.getPrototypeOf(e) === Error.prototype && e.hasOwnProperty("code") && e.hasOwnProperty("errno") && e.hasOwnProperty("syscall"); }
        var k = function (e) { h(i, e); var t, r, n, o = f(i); function i(e) { var t; s(this, i), v(d(t = o.call(this)), "name", "ArangoError"), v(d(t), "errorNum", void 0), v(d(t), "code", void 0), v(d(t), "response", void 0), t.response = e, t.message = e.body.errorMessage, t.errorNum = e.body.errorNum, t.code = e.body.code; var r = new Error(t.message); r.name = t.name; var n, u = a(m); try {
            for (u.s(); !(n = u.n()).done;) {
                var c = n.value;
                r[c] && (t[c] = r[c]);
            }
        }
        catch (r) {
            u.e(r);
        }
        finally {
            u.f();
        } return t; } return t = i, (r = [{ key: "isArangoError", get: function () { return !0; } }]) && c(t.prototype, r), n && c(t, n), i; }(o), x = function (e) { h(r, e); var t = f(r); function r(e) { var n; s(this, r), v(d(n = t.call(this)), "name", "HttpError"), v(d(n), "response", void 0), v(d(n), "code", void 0), n.response = e, n.code = e.statusCode || 500, n.message = b[n.code] || b[500]; var o = new Error(n.message); o.name = n.name; var i, u = a(m); try {
            for (u.s(); !(i = u.n()).done;) {
                var c = i.value;
                o[c] && (n[c] = o[c]);
            }
        }
        catch (o) {
            u.e(o);
        }
        finally {
            u.f();
        } return n; } return r; }(o);
    }, function (e, t, r) {
        "use strict";
        function n(e, t) { if ("string" != typeof e) {
            if (e._id)
                return n(e._id, t);
            if (e._key)
                return n(e._key, t);
            throw new Error("Document handle must be a string or an object with a _key or _id attribute");
        } if (e.includes("/")) {
            if (!e.startsWith("".concat(t, "/")))
                throw new Error('Document ID "'.concat(e, '" does not match collection name "').concat(t, '"'));
            return e;
        } return "".concat(t, "/").concat(e); }
        r.d(t, "a", (function () { return n; }));
    }, function (e, t, r) {
        "use strict";
        r.d(t, "f", (function () { return n; })), r.d(t, "a", (function () { return o; })), r.d(t, "d", (function () { return i; })), r.d(t, "b", (function () { return a; })), r.d(t, "g", (function () { return u; })), r.d(t, "c", (function () { return s; })), r.d(t, "e", (function () { return c; }));
        var n = 10, o = 1202, i = 1202, a = 1203, u = 1203, s = 1228, c = 1924;
    }, function (e, t, r) {
        "use strict";
        r.r(t), r.d(t, "isAqlQuery", (function () { return l; })), r.d(t, "isGeneratedAqlQuery", (function () { return f; })), r.d(t, "isAqlLiteral", (function () { return p; })), r.d(t, "aql", (function () { return d; }));
        var n, o = r(0), i = r(6);
        function a() { var e = s(["", ""]); return a = function () { return e; }, e; }
        function u() { var e = s([""]); return u = function () { return e; }, e; }
        function s(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
        function c(e) { return function (e) { if (Array.isArray(e))
            return h(e); }(e) || function (e) { if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
            return Array.from(e); }(e) || function (e, t) { if (!e)
            return; if ("string" == typeof e)
            return h(e, t); var r = Object.prototype.toString.call(e).slice(8, -1); "Object" === r && e.constructor && (r = e.constructor.name); if ("Map" === r || "Set" === r)
            return Array.from(e); if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
            return h(e, t); }(e) || function () { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }(); }
        function h(e, t) { (null == t || t > e.length) && (t = e.length); for (var r = 0, n = new Array(t); r < t; r++)
            n[r] = e[r]; return n; }
        function l(e) { return Boolean(e && "string" == typeof e.query && e.bindVars); }
        function f(e) { return l(e) && "function" == typeof e._source; }
        function p(e) { return Boolean(e && "function" == typeof e.toAQL); }
        function d(e) { for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
            r[n - 1] = arguments[n]; for (var a = c(e), u = {}, s = [], h = a[0], l = 0; l < r.length; l++) {
            var d = r[l], y = d;
            if (f(d)) {
                var v = d._source();
                v.args.length ? (h += v.strings[0], r.splice.apply(r, [l, 1].concat(c(v.args))), a.splice.apply(a, [l, 2, a[l] + v.strings[0]].concat(c(v.strings.slice(1, v.args.length)), [v.strings[v.args.length] + a[l + 1]]))) : (h += d.query + a[l + 1], r.splice(l, 1), a.splice(l, 2, a[l] + d.query + a[l + 1])), l -= 1;
            }
            else if (void 0 !== d)
                if (p(d))
                    h += "".concat(d.toAQL()).concat(a[l + 1]);
                else {
                    var b = s.indexOf(d), m = -1 !== b, g = "value".concat(m ? b : s.length);
                    (Object(o.isArangoCollection)(d) || Object(i.isArangoView)(d)) && (g = "@".concat(g), y = d.name), m || (s.push(d), u[g] = y), h += "@".concat(g).concat(a[l + 1]);
                }
            else
                h += a[l + 1];
        } return { query: h, bindVars: u, _source: function () { return { strings: a, args: r }; } }; }
        (n = d || (d = {})).literal = function (e) { return p(e) ? e : { toAQL: function () { return void 0 === e ? "" : String(e); } }; }, n.join = function (e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " "; return e.length ? 1 === e.length ? d(a(), e[0]) : d.apply(void 0, [[""].concat(c(Array(e.length - 1).fill(t)), [""])].concat(c(e))) : d(u()); };
    }, function (e, t, r) {
        "use strict";
        r.d(t, "a", (function () { return b; }));
        var n, o, i = r(7);
        function a(e) { return function (e) { if (Array.isArray(e))
            return u(e); }(e) || function (e) { if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
            return Array.from(e); }(e) || function (e, t) { if (!e)
            return; if ("string" == typeof e)
            return u(e, t); var r = Object.prototype.toString.call(e).slice(8, -1); "Object" === r && e.constructor && (r = e.constructor.name); if ("Map" === r || "Set" === r)
            return Array.from(e); if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
            return u(e, t); }(e) || function () { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }(); }
        function u(e, t) { (null == t || t > e.length) && (t = e.length); for (var r = 0, n = new Array(t); r < t; r++)
            n[r] = e[r]; return n; }
        function s(e, t, r, n, o, i, a) { try {
            var u = e[i](a), s = u.value;
        }
        catch (e) {
            return void r(e);
        } u.done ? t(s) : Promise.resolve(s).then(n, o); }
        function c(e) { return function () { var t = this, r = arguments; return new Promise((function (n, o) { var i = e.apply(t, r); function a(e) { s(i, n, o, a, u, "next", e); } function u(e) { s(i, n, o, a, u, "throw", e); } a(void 0); })); }; }
        function h(e, t) { if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function"); }
        function l(e, t) { for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        } }
        function f(e, t, r) { return t && l(e.prototype, t), r && l(e, r), e; }
        function p(e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e; }
        function d(e) { return function () { return new y(e.apply(this, arguments)); }; }
        function y(e) { var t, r; function n(t, r) { try {
            var i = e[t](r), a = i.value, u = a instanceof v;
            Promise.resolve(u ? a.wrapped : a).then((function (e) { u ? n("return" === t ? "return" : "next", e) : o(i.done ? "return" : "normal", e); }), (function (e) { n("throw", e); }));
        }
        catch (e) {
            o("throw", e);
        } } function o(e, o) { switch (e) {
            case "return":
                t.resolve({ value: o, done: !0 });
                break;
            case "throw":
                t.reject(o);
                break;
            default: t.resolve({ value: o, done: !1 });
        } (t = t.next) ? n(t.key, t.arg) : r = null; } this._invoke = function (e, o) { return new Promise((function (i, a) { var u = { key: e, arg: o, resolve: i, reject: a, next: null }; r ? r = r.next = u : (t = r = u, n(e, o)); })); }, "function" != typeof e.return && (this.return = void 0); }
        function v(e) { this.wrapped = e; }
        "function" == typeof Symbol && Symbol.asyncIterator && (y.prototype[Symbol.asyncIterator] = function () { return this; }), y.prototype.next = function (e) { return this._invoke("next", e); }, y.prototype.throw = function (e) { return this._invoke("throw", e); }, y.prototype.return = function (e) { return this._invoke("return", e); }, n = Symbol.asyncIterator;
        var b = function () { function e(t, r, n, o) { var a = this; h(this, e), p(this, "_db", void 0), p(this, "_batches", void 0), p(this, "_count", void 0), p(this, "_extra", void 0), p(this, "_hasMore", void 0), p(this, "_id", void 0), p(this, "_host", void 0), p(this, "_allowDirtyRead", void 0), p(this, "_itemsCursor", void 0); var u = new i.LinkedList(r.result), s = new i.LinkedList([u]); this._db = t, this._batches = s, this._id = r.id, this._hasMore = Boolean(r.id && r.hasMore), this._host = n, this._count = r.count, this._extra = r.extra, this._allowDirtyRead = o, this._itemsCursor = new m(this, { get isEmpty() { return !s.length; }, more: function () { return a._more(); }, shift: function () { for (var e, t = null === (e = s.first) || void 0 === e ? void 0 : e.value; t && !t.length;) {
                var r;
                s.shift(), t = null === (r = s.first) || void 0 === r ? void 0 : r.value;
            } if (t) {
                var n = t.shift();
                return t.length || s.shift(), n;
            } } }); } var t, r, o, u, s, l, y, v, b; return f(e, [{ key: "_more", value: (b = c(regeneratorRuntime.mark((function e() { var t; return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0:
                            if (this.hasMore) {
                                e.next = 2;
                                break;
                            }
                            return e.abrupt("return");
                        case 2: return e.next = 4, this._db.request({ method: "PUT", path: "/_api/cursor/".concat(this._id), host: this._host, allowDirtyRead: this._allowDirtyRead });
                        case 4: t = e.sent, this._batches.push(new i.LinkedList(t.body.result)), this._hasMore = t.body.hasMore;
                        case 7:
                        case "end": return e.stop();
                    } }), e, this); }))), function () { return b.apply(this, arguments); }) }, { key: n, value: function () { var e = this; return d(regeneratorRuntime.mark((function t() { return regeneratorRuntime.wrap((function (t) { for (;;)
                    switch (t.prev = t.next) {
                        case 0:
                            if (!e.hasNext) {
                                t.next = 5;
                                break;
                            }
                            return t.next = 3, e.next();
                        case 3:
                            t.next = 0;
                            break;
                        case 5: return t.abrupt("return", void 0);
                        case 6:
                        case "end": return t.stop();
                    } }), t); })))(); } }, { key: "loadAll", value: (v = c(regeneratorRuntime.mark((function e() { return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0:
                            if (!this._hasMore) {
                                e.next = 5;
                                break;
                            }
                            return e.next = 3, this._more();
                        case 3:
                            e.next = 0;
                            break;
                        case 5:
                        case "end": return e.stop();
                    } }), e, this); }))), function () { return v.apply(this, arguments); }) }, { key: "all", value: (y = c(regeneratorRuntime.mark((function e() { return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0: return e.abrupt("return", this.map((function (e) { return e; })));
                        case 1:
                        case "end": return e.stop();
                    } }), e, this); }))), function () { return y.apply(this, arguments); }) }, { key: "next", value: (l = c(regeneratorRuntime.mark((function e() { var t; return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0:
                            if (this._batches.length || !this.hasNext) {
                                e.next = 5;
                                break;
                            }
                            return e.next = 3, this._more();
                        case 3:
                            e.next = 0;
                            break;
                        case 5:
                            if (this._batches.length) {
                                e.next = 7;
                                break;
                            }
                            return e.abrupt("return", void 0);
                        case 7: return t = this._batches.shift(), e.abrupt("return", t && a(t.values()));
                        case 9:
                        case "end": return e.stop();
                    } }), e, this); }))), function () { return l.apply(this, arguments); }) }, { key: "forEach", value: (s = c(regeneratorRuntime.mark((function e(t) { var r, n, o; return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0: r = 0;
                        case 1:
                            if (!this.hasNext) {
                                e.next = 14;
                                break;
                            }
                            return e.next = 4, this.next();
                        case 4:
                            if (n = e.sent, o = t(n, r, this), r++, !1 !== o) {
                                e.next = 9;
                                break;
                            }
                            return e.abrupt("return", o);
                        case 9:
                            if (!this.hasNext) {
                                e.next = 12;
                                break;
                            }
                            return e.next = 12, this._more();
                        case 12:
                            e.next = 1;
                            break;
                        case 14: return e.abrupt("return", !0);
                        case 15:
                        case "end": return e.stop();
                    } }), e, this); }))), function (e) { return s.apply(this, arguments); }) }, { key: "map", value: (u = c(regeneratorRuntime.mark((function e(t) { var r, n, o; return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0: r = 0, n = [];
                        case 2:
                            if (!this.hasNext) {
                                e.next = 10;
                                break;
                            }
                            return e.next = 5, this.next();
                        case 5:
                            o = e.sent, n.push(t(o, r, this)), r++, e.next = 2;
                            break;
                        case 10: return e.abrupt("return", n);
                        case 11:
                        case "end": return e.stop();
                    } }), e, this); }))), function (e) { return u.apply(this, arguments); }) }, { key: "flatMap", value: (o = c(regeneratorRuntime.mark((function e(t) { var r, n, o, i; return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0: r = 0, n = [];
                        case 2:
                            if (!this.hasNext) {
                                e.next = 11;
                                break;
                            }
                            return e.next = 5, this.next();
                        case 5:
                            o = e.sent, i = t(o, r, this), Array.isArray(i) ? n.push.apply(n, a(i)) : n.push(i), r++, e.next = 2;
                            break;
                        case 11: return e.abrupt("return", n);
                        case 12:
                        case "end": return e.stop();
                    } }), e, this); }))), function (e) { return o.apply(this, arguments); }) }, { key: "reduce", value: (r = c(regeneratorRuntime.mark((function e(t, r) { var n, o, i; return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0:
                            if (n = 0, this.hasNext) {
                                e.next = 3;
                                break;
                            }
                            return e.abrupt("return", r);
                        case 3:
                            if (void 0 !== r) {
                                e.next = 8;
                                break;
                            }
                            return e.next = 6, this.next();
                        case 6: r = e.sent, n += 1;
                        case 8: o = r;
                        case 9:
                            if (!this.hasNext) {
                                e.next = 17;
                                break;
                            }
                            return e.next = 12, this.next();
                        case 12:
                            i = e.sent, o = t(o, i, n, this), n++, e.next = 9;
                            break;
                        case 17: return e.abrupt("return", o);
                        case 18:
                        case "end": return e.stop();
                    } }), e, this); }))), function (e, t) { return r.apply(this, arguments); }) }, { key: "kill", value: (t = c(regeneratorRuntime.mark((function e() { var t = this; return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0:
                            if (this.hasNext) {
                                e.next = 2;
                                break;
                            }
                            return e.abrupt("return", void 0);
                        case 2: return e.abrupt("return", this._db.request({ method: "DELETE", path: "/_api/cursor/".concat(this._id) }, (function () { t._hasMore = !1; })));
                        case 3:
                        case "end": return e.stop();
                    } }), e, this); }))), function () { return t.apply(this, arguments); }) }, { key: "items", get: function () { return this._itemsCursor; } }, { key: "extra", get: function () { return this._extra; } }, { key: "count", get: function () { return this._count; } }, { key: "hasMore", get: function () { return this._hasMore; } }, { key: "hasNext", get: function () { return this.hasMore || Boolean(this._batches.length); } }]), e; }();
        o = Symbol.asyncIterator;
        var m = function () { function e(t, r) { h(this, e), p(this, "_batches", void 0), p(this, "_view", void 0), this._batches = t, this._view = r; } var t, r, n, i, u, s, l; return f(e, [{ key: o, value: function () { var e = this; return d(regeneratorRuntime.mark((function t() { return regeneratorRuntime.wrap((function (t) { for (;;)
                    switch (t.prev = t.next) {
                        case 0:
                            if (!e.hasNext) {
                                t.next = 5;
                                break;
                            }
                            return t.next = 3, e.next();
                        case 3:
                            t.next = 0;
                            break;
                        case 5: return t.abrupt("return", void 0);
                        case 6:
                        case "end": return t.stop();
                    } }), t); })))(); } }, { key: "all", value: (l = c(regeneratorRuntime.mark((function e() { return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0: return e.abrupt("return", this.batches.flatMap((function (e) { return e; })));
                        case 1:
                        case "end": return e.stop();
                    } }), e, this); }))), function () { return l.apply(this, arguments); }) }, { key: "next", value: (s = c(regeneratorRuntime.mark((function e() { return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0:
                            if (!this._view.isEmpty || !this.batches.hasMore) {
                                e.next = 5;
                                break;
                            }
                            return e.next = 3, this._view.more();
                        case 3:
                            e.next = 0;
                            break;
                        case 5:
                            if (!this._view.isEmpty) {
                                e.next = 7;
                                break;
                            }
                            return e.abrupt("return", void 0);
                        case 7: return e.abrupt("return", this._view.shift());
                        case 8:
                        case "end": return e.stop();
                    } }), e, this); }))), function () { return s.apply(this, arguments); }) }, { key: "forEach", value: (u = c(regeneratorRuntime.mark((function e(t) { var r, n, o; return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0: r = 0;
                        case 1:
                            if (!this.hasNext) {
                                e.next = 11;
                                break;
                            }
                            return e.next = 4, this.next();
                        case 4:
                            if (n = e.sent, o = t(n, r, this), r++, !1 !== o) {
                                e.next = 9;
                                break;
                            }
                            return e.abrupt("return", o);
                        case 9:
                            e.next = 1;
                            break;
                        case 11: return e.abrupt("return", !0);
                        case 12:
                        case "end": return e.stop();
                    } }), e, this); }))), function (e) { return u.apply(this, arguments); }) }, { key: "map", value: (i = c(regeneratorRuntime.mark((function e(t) { var r, n, o; return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0: r = 0, n = [];
                        case 2:
                            if (!this.hasNext) {
                                e.next = 10;
                                break;
                            }
                            return e.next = 5, this.next();
                        case 5:
                            o = e.sent, n.push(t(o, r, this)), r++, e.next = 2;
                            break;
                        case 10: return e.abrupt("return", n);
                        case 11:
                        case "end": return e.stop();
                    } }), e, this); }))), function (e) { return i.apply(this, arguments); }) }, { key: "flatMap", value: (n = c(regeneratorRuntime.mark((function e(t) { var r, n, o, i; return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0: r = 0, n = [];
                        case 2:
                            if (!this.hasNext) {
                                e.next = 11;
                                break;
                            }
                            return e.next = 5, this.next();
                        case 5:
                            o = e.sent, i = t(o, r, this), Array.isArray(i) ? n.push.apply(n, a(i)) : n.push(i), r++, e.next = 2;
                            break;
                        case 11: return e.abrupt("return", n);
                        case 12:
                        case "end": return e.stop();
                    } }), e, this); }))), function (e) { return n.apply(this, arguments); }) }, { key: "reduce", value: (r = c(regeneratorRuntime.mark((function e(t, r) { var n, o, i, a; return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0:
                            if (n = 0, this.hasNext) {
                                e.next = 3;
                                break;
                            }
                            return e.abrupt("return", r);
                        case 3:
                            if (void 0 !== r) {
                                e.next = 9;
                                break;
                            }
                            return e.next = 6, this.next();
                        case 6: o = e.sent, r = o, n += 1;
                        case 9: i = r;
                        case 10:
                            if (!this.hasNext) {
                                e.next = 18;
                                break;
                            }
                            return e.next = 13, this.next();
                        case 13:
                            a = e.sent, i = t(i, a, n, this), n++, e.next = 10;
                            break;
                        case 18: return e.abrupt("return", i);
                        case 19:
                        case "end": return e.stop();
                    } }), e, this); }))), function (e, t) { return r.apply(this, arguments); }) }, { key: "kill", value: (t = c(regeneratorRuntime.mark((function e() { return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0: return e.abrupt("return", this.batches.kill());
                        case 1:
                        case "end": return e.stop();
                    } }), e, this); }))), function () { return t.apply(this, arguments); }) }, { key: "batches", get: function () { return this._batches; } }, { key: "extra", get: function () { return this.batches.extra; } }, { key: "count", get: function () { return this.batches.count; } }, { key: "hasNext", get: function () { return this.batches.hasNext; } }]), e; }();
    }, function (e, t, r) {
        "use strict";
        r.r(t), r.d(t, "ViewType", (function () { return n; })), r.d(t, "isArangoView", (function () { return f; })), r.d(t, "View", (function () { return p; }));
        var n, o = r(1), i = r(3);
        function a(e, t) { var r = Object.keys(e); if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable; }))), r.push.apply(r, n);
        } return r; }
        function u(e) { for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? a(Object(r), !0).forEach((function (t) { l(e, t, r[t]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)); }));
        } return e; }
        function s(e, t, r, n, o, i, a) { try {
            var u = e[i](a), s = u.value;
        }
        catch (e) {
            return void r(e);
        } u.done ? t(s) : Promise.resolve(s).then(n, o); }
        function c(e) { return function () { var t = this, r = arguments; return new Promise((function (n, o) { var i = e.apply(t, r); function a(e) { s(i, n, o, a, u, "next", e); } function u(e) { s(i, n, o, a, u, "throw", e); } a(void 0); })); }; }
        function h(e, t) { for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        } }
        function l(e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e; }
        function f(e) { return Boolean(e && e.isArangoView); }
        !function (e) { e.ARANGOSEARCH_VIEW = "arangosearch"; }(n || (n = {}));
        var p = function () { function e(t, r) { !function (e, t) { if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function"); }(this, e), l(this, "_name", void 0), l(this, "_db", void 0), this._db = t, this._name = r; } var t, r, a, s, f; return t = e, (r = [{ key: "get", value: function () { return this._db.request({ path: "/_api/view/".concat(this.name) }, (function (e) { return e.body; })); } }, { key: "exists", value: (f = c(regeneratorRuntime.mark((function e() { return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0: return e.prev = 0, e.next = 3, this.get();
                        case 3: return e.abrupt("return", !0);
                        case 6:
                            if (e.prev = 6, e.t0 = e.catch(0), !Object(o.c)(e.t0) || e.t0.errorNum !== i.g) {
                                e.next = 10;
                                break;
                            }
                            return e.abrupt("return", !1);
                        case 10: throw e.t0;
                        case 11:
                        case "end": return e.stop();
                    } }), e, this, [[0, 6]]); }))), function () { return f.apply(this, arguments); }) }, { key: "create", value: function (e) { return this._db.request({ method: "POST", path: "/_api/view", body: u(u({ type: n.ARANGOSEARCH_VIEW }, e || {}), {}, { name: this.name }) }, (function (e) { return e.body; })); } }, { key: "rename", value: (s = c(regeneratorRuntime.mark((function e(t) { var r; return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0: return r = this._db.renameView(this._name, t), this._name = t, e.abrupt("return", r);
                        case 3:
                        case "end": return e.stop();
                    } }), e, this); }))), function (e) { return s.apply(this, arguments); }) }, { key: "properties", value: function () { return this._db.request({ path: "/_api/view/".concat(this.name, "/properties") }, (function (e) { return e.body; })); } }, { key: "updateProperties", value: function (e) { return this._db.request({ method: "PATCH", path: "/_api/view/".concat(this.name, "/properties"), body: e || {} }, (function (e) { return e.body; })); } }, { key: "replaceProperties", value: function (e) { return this._db.request({ method: "PUT", path: "/_api/view/".concat(this.name, "/properties"), body: e || {} }, (function (e) { return e.body; })); } }, { key: "drop", value: function () { return this._db.request({ method: "DELETE", path: "/_api/view/".concat(this.name) }, (function (e) { return e.body.result; })); } }, { key: "isArangoView", get: function () { return !0; } }, { key: "name", get: function () { return this._name; } }]) && h(t.prototype, r), a && h(t, a), e; }();
    }, function (e, t, r) {
        "use strict";
        function n(e) { for (var r in e)
            t.hasOwnProperty(r) || (t[r] = e[r]); }
        Object.defineProperty(t, "__esModule", { value: !0 }), n(r(16)), n(r(10));
    }, function (e, t, r) {
        "use strict";
        t.decode = t.parse = r(18), t.encode = t.stringify = r(19);
    }, function (e, t, r) {
        "use strict";
        var n = r(20), o = r(22);
        function i() { this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null; }
        t.parse = g, t.resolve = function (e, t) { return g(e, !1, !0).resolve(t); }, t.resolveObject = function (e, t) { return e ? g(e, !1, !0).resolveObject(t) : t; }, t.format = function (e) { o.isString(e) && (e = g(e)); return e instanceof i ? e.format() : i.prototype.format.call(e); }, t.Url = i;
        var a = /^([a-z0-9.+-]+:)/i, u = /:[0-9]*$/, s = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, c = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]), h = ["'"].concat(c), l = ["%", "/", "?", ";", "#"].concat(h), f = ["/", "?", "#"], p = /^[+a-z0-9A-Z_-]{0,63}$/, d = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, y = { javascript: !0, "javascript:": !0 }, v = { javascript: !0, "javascript:": !0 }, b = { http: !0, https: !0, ftp: !0, gopher: !0, file: !0, "http:": !0, "https:": !0, "ftp:": !0, "gopher:": !0, "file:": !0 }, m = r(8);
        function g(e, t, r) { if (e && o.isObject(e) && e instanceof i)
            return e; var n = new i; return n.parse(e, t, r), n; }
        i.prototype.parse = function (e, t, r) { if (!o.isString(e))
            throw new TypeError("Parameter 'url' must be a string, not " + typeof e); var i = e.indexOf("?"), u = -1 !== i && i < e.indexOf("#") ? "?" : "#", c = e.split(u); c[0] = c[0].replace(/\\/g, "/"); var g = e = c.join(u); if (g = g.trim(), !r && 1 === e.split("#").length) {
            var w = s.exec(g);
            if (w)
                return this.path = g, this.href = g, this.pathname = w[1], w[2] ? (this.search = w[2], this.query = t ? m.parse(this.search.substr(1)) : this.search.substr(1)) : t && (this.search = "", this.query = {}), this;
        } var _ = a.exec(g); if (_) {
            var k = (_ = _[0]).toLowerCase();
            this.protocol = k, g = g.substr(_.length);
        } if (r || _ || g.match(/^\/\/[^@\/]+@[^@\/]+/)) {
            var x = "//" === g.substr(0, 2);
            !x || _ && v[_] || (g = g.substr(2), this.slashes = !0);
        } if (!v[_] && (x || _ && !b[_])) {
            for (var O, j, q = -1, E = 0; E < f.length; E++) {
                -1 !== (S = g.indexOf(f[E])) && (-1 === q || S < q) && (q = S);
            }
            -1 !== (j = -1 === q ? g.lastIndexOf("@") : g.lastIndexOf("@", q)) && (O = g.slice(0, j), g = g.slice(j + 1), this.auth = decodeURIComponent(O)), q = -1;
            for (E = 0; E < l.length; E++) {
                var S;
                -1 !== (S = g.indexOf(l[E])) && (-1 === q || S < q) && (q = S);
            }
            -1 === q && (q = g.length), this.host = g.slice(0, q), g = g.slice(q), this.parseHost(), this.hostname = this.hostname || "";
            var P = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
            if (!P)
                for (var T = this.hostname.split(/\./), R = (E = 0, T.length); E < R; E++) {
                    var A = T[E];
                    if (A && !A.match(p)) {
                        for (var C = "", D = 0, L = A.length; D < L; D++)
                            A.charCodeAt(D) > 127 ? C += "x" : C += A[D];
                        if (!C.match(p)) {
                            var I = T.slice(0, E), N = T.slice(E + 1), U = A.match(d);
                            U && (I.push(U[1]), N.unshift(U[2])), N.length && (g = "/" + N.join(".") + g), this.hostname = I.join(".");
                            break;
                        }
                    }
                }
            this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), P || (this.hostname = n.toASCII(this.hostname));
            var H = this.port ? ":" + this.port : "", B = this.hostname || "";
            this.host = B + H, this.href += this.host, P && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== g[0] && (g = "/" + g));
        } if (!y[k])
            for (E = 0, R = h.length; E < R; E++) {
                var M = h[E];
                if (-1 !== g.indexOf(M)) {
                    var F = encodeURIComponent(M);
                    F === M && (F = escape(M)), g = g.split(M).join(F);
                }
            } var V = g.indexOf("#"); -1 !== V && (this.hash = g.substr(V), g = g.slice(0, V)); var G = g.indexOf("?"); if (-1 !== G ? (this.search = g.substr(G), this.query = g.substr(G + 1), t && (this.query = m.parse(this.query)), g = g.slice(0, G)) : t && (this.search = "", this.query = {}), g && (this.pathname = g), b[k] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
            H = this.pathname || "";
            var z = this.search || "";
            this.path = H + z;
        } return this.href = this.format(), this; }, i.prototype.format = function () { var e = this.auth || ""; e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":"), e += "@"); var t = this.protocol || "", r = this.pathname || "", n = this.hash || "", i = !1, a = ""; this.host ? i = e + this.host : this.hostname && (i = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (i += ":" + this.port)), this.query && o.isObject(this.query) && Object.keys(this.query).length && (a = m.stringify(this.query)); var u = this.search || a && "?" + a || ""; return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || b[t]) && !1 !== i ? (i = "//" + (i || ""), r && "/" !== r.charAt(0) && (r = "/" + r)) : i || (i = ""), n && "#" !== n.charAt(0) && (n = "#" + n), u && "?" !== u.charAt(0) && (u = "?" + u), t + i + (r = r.replace(/[?#]/g, (function (e) { return encodeURIComponent(e); }))) + (u = u.replace("#", "%23")) + n; }, i.prototype.resolve = function (e) { return this.resolveObject(g(e, !1, !0)).format(); }, i.prototype.resolveObject = function (e) { if (o.isString(e)) {
            var t = new i;
            t.parse(e, !1, !0), e = t;
        } for (var r = new i, n = Object.keys(this), a = 0; a < n.length; a++) {
            var u = n[a];
            r[u] = this[u];
        } if (r.hash = e.hash, "" === e.href)
            return r.href = r.format(), r; if (e.slashes && !e.protocol) {
            for (var s = Object.keys(e), c = 0; c < s.length; c++) {
                var h = s[c];
                "protocol" !== h && (r[h] = e[h]);
            }
            return b[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"), r.href = r.format(), r;
        } if (e.protocol && e.protocol !== r.protocol) {
            if (!b[e.protocol]) {
                for (var l = Object.keys(e), f = 0; f < l.length; f++) {
                    var p = l[f];
                    r[p] = e[p];
                }
                return r.href = r.format(), r;
            }
            if (r.protocol = e.protocol, e.host || v[e.protocol])
                r.pathname = e.pathname;
            else {
                for (var d = (e.pathname || "").split("/"); d.length && !(e.host = d.shift());)
                    ;
                e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== d[0] && d.unshift(""), d.length < 2 && d.unshift(""), r.pathname = d.join("/");
            }
            if (r.search = e.search, r.query = e.query, r.host = e.host || "", r.auth = e.auth, r.hostname = e.hostname || e.host, r.port = e.port, r.pathname || r.search) {
                var y = r.pathname || "", m = r.search || "";
                r.path = y + m;
            }
            return r.slashes = r.slashes || e.slashes, r.href = r.format(), r;
        } var g = r.pathname && "/" === r.pathname.charAt(0), w = e.host || e.pathname && "/" === e.pathname.charAt(0), _ = w || g || r.host && e.pathname, k = _, x = r.pathname && r.pathname.split("/") || [], O = (d = e.pathname && e.pathname.split("/") || [], r.protocol && !b[r.protocol]); if (O && (r.hostname = "", r.port = null, r.host && ("" === x[0] ? x[0] = r.host : x.unshift(r.host)), r.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === d[0] ? d[0] = e.host : d.unshift(e.host)), e.host = null), _ = _ && ("" === d[0] || "" === x[0])), w)
            r.host = e.host || "" === e.host ? e.host : r.host, r.hostname = e.hostname || "" === e.hostname ? e.hostname : r.hostname, r.search = e.search, r.query = e.query, x = d;
        else if (d.length)
            x || (x = []), x.pop(), x = x.concat(d), r.search = e.search, r.query = e.query;
        else if (!o.isNullOrUndefined(e.search)) {
            if (O)
                r.hostname = r.host = x.shift(), (P = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = P.shift(), r.host = r.hostname = P.shift());
            return r.search = e.search, r.query = e.query, o.isNull(r.pathname) && o.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.href = r.format(), r;
        } if (!x.length)
            return r.pathname = null, r.search ? r.path = "/" + r.search : r.path = null, r.href = r.format(), r; for (var j = x.slice(-1)[0], q = (r.host || e.host || x.length > 1) && ("." === j || ".." === j) || "" === j, E = 0, S = x.length; S >= 0; S--)
            "." === (j = x[S]) ? x.splice(S, 1) : ".." === j ? (x.splice(S, 1), E++) : E && (x.splice(S, 1), E--); if (!_ && !k)
            for (; E--; E)
                x.unshift(".."); !_ || "" === x[0] || x[0] && "/" === x[0].charAt(0) || x.unshift(""), q && "/" !== x.join("/").substr(-1) && x.push(""); var P, T = "" === x[0] || x[0] && "/" === x[0].charAt(0); O && (r.hostname = r.host = T ? "" : x.length ? x.shift() : "", (P = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = P.shift(), r.host = r.hostname = P.shift())); return (_ = _ || r.host && x.length) && !T && x.unshift(""), x.length ? r.pathname = x.join("/") : (r.pathname = null, r.path = null), o.isNull(r.pathname) && o.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.auth = e.auth || r.auth, r.slashes = r.slashes || e.slashes, r.href = r.format(), r; }, i.prototype.parseHost = function () { var e = this.host, t = u.exec(e); t && (":" !== (t = t[0]) && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e); };
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        t.LinkedListItem = class {
            constructor(e, t) { this.value = e, this.unlinkCleanup = t; }
            insertBehind(e) { if (e.insertBefore(this), this.behind) {
                let t = e;
                for (; t.behind;)
                    t = t.behind;
                this.behind.insertBefore(t), t.insertBehind(this.behind);
            } this.behind = e; }
            unlink(e = !1) { this.before && (this.before.behind = this.behind), this.behind && (this.behind.before = this.before), this.unlinkCleanup && this.unlinkCleanup(this), this.unlinkCleanup = void 0, e && (this.before = this.behind = void 0); }
            insertBefore(e) { this.before = e, this.unlinkCleanup || (this.unlinkCleanup = e.unlinkCleanup); }
        };
    }, function (e, t) { var r; r = function () { return this; }(); try {
        r = r || new Function("return this")();
    }
    catch (e) {
        "object" == typeof window && (r = window);
    } e.exports = r; }, function (e, t, r) { (function (e) { function r(e, t) { for (var r = 0, n = e.length - 1; n >= 0; n--) {
        var o = e[n];
        "." === o ? e.splice(n, 1) : ".." === o ? (e.splice(n, 1), r++) : r && (e.splice(n, 1), r--);
    } if (t)
        for (; r--; r)
            e.unshift(".."); return e; } function n(e, t) { if (e.filter)
        return e.filter(t); for (var r = [], n = 0; n < e.length; n++)
        t(e[n], n, e) && r.push(e[n]); return r; } t.resolve = function () { for (var t = "", o = !1, i = arguments.length - 1; i >= -1 && !o; i--) {
        var a = i >= 0 ? arguments[i] : e.cwd();
        if ("string" != typeof a)
            throw new TypeError("Arguments to path.resolve must be strings");
        a && (t = a + "/" + t, o = "/" === a.charAt(0));
    } return (o ? "/" : "") + (t = r(n(t.split("/"), (function (e) { return !!e; })), !o).join("/")) || "."; }, t.normalize = function (e) { var i = t.isAbsolute(e), a = "/" === o(e, -1); return (e = r(n(e.split("/"), (function (e) { return !!e; })), !i).join("/")) || i || (e = "."), e && a && (e += "/"), (i ? "/" : "") + e; }, t.isAbsolute = function (e) { return "/" === e.charAt(0); }, t.join = function () { var e = Array.prototype.slice.call(arguments, 0); return t.normalize(n(e, (function (e, t) { if ("string" != typeof e)
        throw new TypeError("Arguments to path.join must be strings"); return e; })).join("/")); }, t.relative = function (e, r) { function n(e) { for (var t = 0; t < e.length && "" === e[t]; t++)
        ; for (var r = e.length - 1; r >= 0 && "" === e[r]; r--)
        ; return t > r ? [] : e.slice(t, r - t + 1); } e = t.resolve(e).substr(1), r = t.resolve(r).substr(1); for (var o = n(e.split("/")), i = n(r.split("/")), a = Math.min(o.length, i.length), u = a, s = 0; s < a; s++)
        if (o[s] !== i[s]) {
            u = s;
            break;
        } var c = []; for (s = u; s < o.length; s++)
        c.push(".."); return (c = c.concat(i.slice(u))).join("/"); }, t.sep = "/", t.delimiter = ":", t.dirname = function (e) { if ("string" != typeof e && (e += ""), 0 === e.length)
        return "."; for (var t = e.charCodeAt(0), r = 47 === t, n = -1, o = !0, i = e.length - 1; i >= 1; --i)
        if (47 === (t = e.charCodeAt(i))) {
            if (!o) {
                n = i;
                break;
            }
        }
        else
            o = !1; return -1 === n ? r ? "/" : "." : r && 1 === n ? "/" : e.slice(0, n); }, t.basename = function (e, t) { var r = function (e) { "string" != typeof e && (e += ""); var t, r = 0, n = -1, o = !0; for (t = e.length - 1; t >= 0; --t)
        if (47 === e.charCodeAt(t)) {
            if (!o) {
                r = t + 1;
                break;
            }
        }
        else
            -1 === n && (o = !1, n = t + 1); return -1 === n ? "" : e.slice(r, n); }(e); return t && r.substr(-1 * t.length) === t && (r = r.substr(0, r.length - t.length)), r; }, t.extname = function (e) { "string" != typeof e && (e += ""); for (var t = -1, r = 0, n = -1, o = !0, i = 0, a = e.length - 1; a >= 0; --a) {
        var u = e.charCodeAt(a);
        if (47 !== u)
            -1 === n && (o = !1, n = a + 1), 46 === u ? -1 === t ? t = a : 1 !== i && (i = 1) : -1 !== t && (i = -1);
        else if (!o) {
            r = a + 1;
            break;
        }
    } return -1 === t || -1 === n || 0 === i || 1 === i && t === n - 1 && t === r + 1 ? "" : e.slice(t, n); }; var o = "b" === "ab".substr(-1) ? function (e, t, r) { return e.substr(t, r); } : function (e, t, r) { return t < 0 && (t = e.length + t), e.substr(t, r); }; }).call(this, r(23)); }, function (e, t, r) { r(14), e.exports = r(15); }, function (e, t, r) { var n = function (e) {
        "use strict";
        var t = Object.prototype, r = t.hasOwnProperty, n = "function" == typeof Symbol ? Symbol : {}, o = n.iterator || "@@iterator", i = n.asyncIterator || "@@asyncIterator", a = n.toStringTag || "@@toStringTag";
        function u(e, t, r, n) { var o = t && t.prototype instanceof h ? t : h, i = Object.create(o.prototype), a = new k(n || []); return i._invoke = function (e, t, r) { var n = "suspendedStart"; return function (o, i) { if ("executing" === n)
            throw new Error("Generator is already running"); if ("completed" === n) {
            if ("throw" === o)
                throw i;
            return O();
        } for (r.method = o, r.arg = i;;) {
            var a = r.delegate;
            if (a) {
                var u = g(a, r);
                if (u) {
                    if (u === c)
                        continue;
                    return u;
                }
            }
            if ("next" === r.method)
                r.sent = r._sent = r.arg;
            else if ("throw" === r.method) {
                if ("suspendedStart" === n)
                    throw n = "completed", r.arg;
                r.dispatchException(r.arg);
            }
            else
                "return" === r.method && r.abrupt("return", r.arg);
            n = "executing";
            var h = s(e, t, r);
            if ("normal" === h.type) {
                if (n = r.done ? "completed" : "suspendedYield", h.arg === c)
                    continue;
                return { value: h.arg, done: r.done };
            }
            "throw" === h.type && (n = "completed", r.method = "throw", r.arg = h.arg);
        } }; }(e, r, a), i; }
        function s(e, t, r) { try {
            return { type: "normal", arg: e.call(t, r) };
        }
        catch (e) {
            return { type: "throw", arg: e };
        } }
        e.wrap = u;
        var c = {};
        function h() { }
        function l() { }
        function f() { }
        var p = {};
        p[o] = function () { return this; };
        var d = Object.getPrototypeOf, y = d && d(d(x([])));
        y && y !== t && r.call(y, o) && (p = y);
        var v = f.prototype = h.prototype = Object.create(p);
        function b(e) { ["next", "throw", "return"].forEach((function (t) { e[t] = function (e) { return this._invoke(t, e); }; })); }
        function m(e, t) { var n; this._invoke = function (o, i) { function a() { return new t((function (n, a) { !function n(o, i, a, u) { var c = s(e[o], e, i); if ("throw" !== c.type) {
            var h = c.arg, l = h.value;
            return l && "object" == typeof l && r.call(l, "__await") ? t.resolve(l.__await).then((function (e) { n("next", e, a, u); }), (function (e) { n("throw", e, a, u); })) : t.resolve(l).then((function (e) { h.value = e, a(h); }), (function (e) { return n("throw", e, a, u); }));
        } u(c.arg); }(o, i, n, a); })); } return n = n ? n.then(a, a) : a(); }; }
        function g(e, t) { var r = e.iterator[t.method]; if (void 0 === r) {
            if (t.delegate = null, "throw" === t.method) {
                if (e.iterator.return && (t.method = "return", t.arg = void 0, g(e, t), "throw" === t.method))
                    return c;
                t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return c;
        } var n = s(r, e.iterator, t.arg); if ("throw" === n.type)
            return t.method = "throw", t.arg = n.arg, t.delegate = null, c; var o = n.arg; return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, c) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, c); }
        function w(e) { var t = { tryLoc: e[0] }; 1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t); }
        function _(e) { var t = e.completion || {}; t.type = "normal", delete t.arg, e.completion = t; }
        function k(e) { this.tryEntries = [{ tryLoc: "root" }], e.forEach(w, this), this.reset(!0); }
        function x(e) { if (e) {
            var t = e[o];
            if (t)
                return t.call(e);
            if ("function" == typeof e.next)
                return e;
            if (!isNaN(e.length)) {
                var n = -1, i = function t() { for (; ++n < e.length;)
                    if (r.call(e, n))
                        return t.value = e[n], t.done = !1, t; return t.value = void 0, t.done = !0, t; };
                return i.next = i;
            }
        } return { next: O }; }
        function O() { return { value: void 0, done: !0 }; }
        return l.prototype = v.constructor = f, f.constructor = l, f[a] = l.displayName = "GeneratorFunction", e.isGeneratorFunction = function (e) { var t = "function" == typeof e && e.constructor; return !!t && (t === l || "GeneratorFunction" === (t.displayName || t.name)); }, e.mark = function (e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, f) : (e.__proto__ = f, a in e || (e[a] = "GeneratorFunction")), e.prototype = Object.create(v), e; }, e.awrap = function (e) { return { __await: e }; }, b(m.prototype), m.prototype[i] = function () { return this; }, e.AsyncIterator = m, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new m(u(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then((function (e) { return e.done ? e.value : a.next(); })); }, b(v), v[a] = "Generator", v[o] = function () { return this; }, v.toString = function () { return "[object Generator]"; }, e.keys = function (e) { var t = []; for (var r in e)
            t.push(r); return t.reverse(), function r() { for (; t.length;) {
            var n = t.pop();
            if (n in e)
                return r.value = n, r.done = !1, r;
        } return r.done = !0, r; }; }, e.values = x, k.prototype = { constructor: k, reset: function (e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(_), !e)
                for (var t in this)
                    "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0); }, stop: function () { this.done = !0; var e = this.tryEntries[0].completion; if ("throw" === e.type)
                throw e.arg; return this.rval; }, dispatchException: function (e) { if (this.done)
                throw e; var t = this; function n(r, n) { return a.type = "throw", a.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n; } for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o], a = i.completion;
                if ("root" === i.tryLoc)
                    return n("end");
                if (i.tryLoc <= this.prev) {
                    var u = r.call(i, "catchLoc"), s = r.call(i, "finallyLoc");
                    if (u && s) {
                        if (this.prev < i.catchLoc)
                            return n(i.catchLoc, !0);
                        if (this.prev < i.finallyLoc)
                            return n(i.finallyLoc);
                    }
                    else if (u) {
                        if (this.prev < i.catchLoc)
                            return n(i.catchLoc, !0);
                    }
                    else {
                        if (!s)
                            throw new Error("try statement without catch or finally");
                        if (this.prev < i.finallyLoc)
                            return n(i.finallyLoc);
                    }
                }
            } }, abrupt: function (e, t) { for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var o = this.tryEntries[n];
                if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                    var i = o;
                    break;
                }
            } i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = e, a.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, c) : this.complete(a); }, complete: function (e, t) { if ("throw" === e.type)
                throw e.arg; return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), c; }, finish: function (e) { for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                    return this.complete(r.completion, r.afterLoc), _(r), c;
            } }, catch: function (e) { for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                        var o = n.arg;
                        _(r);
                    }
                    return o;
                }
            } throw new Error("illegal catch attempt"); }, delegateYield: function (e, t, r) { return this.delegate = { iterator: x(e), resultName: t, nextLoc: r }, "next" === this.method && (this.arg = void 0), c; } }, e;
    }(e.exports); try {
        regeneratorRuntime = n;
    }
    catch (e) {
        Function("r", "regeneratorRuntime = r")(n);
    } }, function (e, t, r) {
        "use strict";
        var n = r(4).aql, o = r(0), i = o.CollectionStatus, a = o.CollectionType, u = r(6).ViewType, s = r(29).Database;
        function c(e) { return "string" == typeof e || Array.isArray(e), new s(e); }
        e.exports = c, Object.assign(c, { aql: n, arangojs: c, CollectionStatus: i, CollectionType: a, Database: s, ViewType: u });
    }, function (e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        const n = r(10);
        class o {
            constructor(e) { if (this.length = 0, this.unlinkCleanup = e => { this.first === e && (this.first = this.first.behind), this.last === e && (this.last = this.last.before), this.length--; }, e) {
                e instanceof o && (e = e.values());
                for (const t of e)
                    this.push(t);
            } }
            clear(e = !1) { if (e)
                for (; this.first;)
                    this.first.unlink(!0); this.first = this.last = void 0, this.length = 0; }
            every(e, t) { t && (e = e.bind(t)); for (const t of this.keys())
                if (!e(t.value, t, this))
                    return !1; return !0; }
            filter(e, t) { t && (e = e.bind(t)); const r = new o; for (const [t, n] of this)
                e(n, t, this) && r.push(n); return r; }
            find(e, t) { t && (e = e.bind(t)); for (const [t, r] of this)
                if (e(r, t, this))
                    return r; }
            findItem(e, t) { t && (e = e.bind(t)); for (const [t, r] of this)
                if (e(r, t, this))
                    return t; }
            forEach(e, t) { t && (e = e.bind(t)); for (const [t, r] of this)
                e(r, t, this); }
            includes(e, t = 0) { let r = this.getItemByIndex(t); for (; r;) {
                if (r.value === e)
                    return !0;
                r = r.behind;
            } return !1; }
            itemOf(e, t = 0) { let r = this.getItemByIndex(t); for (; r;) {
                if (r.value === e)
                    return r;
                r = r.behind;
            } }
            lastItemOf(e, t = -1) { let r = this.getItemByIndex(t); for (; r;) {
                if (r.value === e)
                    return r;
                r = r.before;
            } }
            map(e, t) { t && (e = e.bind(t)); const r = new o; for (const [t, n] of this)
                r.push(e(n, t, this)); return r; }
            reduce(e, t) { let r = this.first; if (!r) {
                if (!t)
                    throw new TypeError("Empty accumulator on empty LinkedList is not allowed.");
                return t;
            } if (void 0 === t) {
                if (t = r.value, !r.behind)
                    return t;
                r = r.behind;
            } do {
                t = e(t, r.value, r, this), r = r.behind;
            } while (r); return t; }
            reduceRight(e, t) { let r = this.last; if (!r) {
                if (!t)
                    throw new TypeError("Empty accumulator on empty LinkedList is not allowed.");
                return t;
            } if (void 0 === t) {
                if (t = r.value, !r.before)
                    return t;
                r = r.before;
            } do {
                t = e(t, r.value, r, this), r = r.before;
            } while (r); return t; }
            some(e, t) { t && (e = e.bind(t)); for (const [t, r] of this)
                if (e(r, t, this))
                    return !0; return !1; }
            join(e) { return [...this.values()].join(e); }
            concat(...e) { const t = new o(this); for (const r of e)
                r instanceof o ? t.push(...r.values()) : t.push(r); return t; }
            pop() { if (!this.last)
                return; const e = this.last; return e.unlink(), e.value; }
            push(...e) { for (const t of e) {
                const e = new n.LinkedListItem(t, this.unlinkCleanup);
                this.first && this.last ? (this.last.insertBehind(e), this.last = e) : this.first = this.last = e, this.length++;
            } return this.length; }
            unshift(...e) { for (const t of e) {
                const e = new n.LinkedListItem(t, this.unlinkCleanup);
                this.last && this.first ? (e.insertBehind(this.first), this.first = e) : this.first = this.last = e, this.length++;
            } return this.length; }
            remove(e) { for (const t of this.keys())
                if (t.value === e)
                    return t.unlink(), !0; return !1; }
            removeAllOccurrences(e) { let t = !1; for (const r of this.keys())
                r.value === e && (r.unlink(), t = !0); return t; }
            shift() { if (!this.first)
                return; const e = this.first; return e.unlink(), e.value; }
            *[Symbol.iterator]() { let e = this.first; if (e)
                do {
                    yield [e, e.value], e = e.behind;
                } while (e); }
            entries() { return this[Symbol.iterator](); }
            *keys() { let e = this.first; if (e)
                do {
                    yield e, e = e.behind;
                } while (e); }
            *values() { let e = this.first; if (e)
                do {
                    yield e.value, e = e.behind;
                } while (e); }
            getItemByIndex(e) { if (void 0 === e)
                throw new Error("index must be a number!"); if (!this.first)
                return; let t; if (e > 0)
                for (t = this.first; t && e--;)
                    t = t.behind;
            else {
                if (!(e < 0))
                    return this.first;
                for (t = this.last; t && ++e;)
                    t = t.before;
            } return t; }
        }
        t.LinkedList = o;
    }, function (e, t, r) {
        "use strict";
        function n(e, t) { if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function"); }
        function o(e, t) { if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t; }
        r.r(t);
        var i = function (e) { function t() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""; n(this, t); var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)); return Object.defineProperty(r, "message", { configurable: !0, enumerable: !1, value: e, writable: !0 }), Object.defineProperty(r, "name", { configurable: !0, enumerable: !1, value: r.constructor.name, writable: !0 }), Error.hasOwnProperty("captureStackTrace") ? (Error.captureStackTrace(r, r.constructor), o(r)) : (Object.defineProperty(r, "stack", { configurable: !0, enumerable: !1, value: new Error(e).stack, writable: !0 }), r); } return function (e, t) { if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t); }(t, e), t; }(function (e) { function t() { e.apply(this, arguments); } return t.prototype = Object.create(e.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e, t; }(Error));
        t.default = i;
    }, function (e, t, r) {
        "use strict";
        function n(e, t) { return Object.prototype.hasOwnProperty.call(e, t); }
        e.exports = function (e, t, r, i) { t = t || "&", r = r || "="; var a = {}; if ("string" != typeof e || 0 === e.length)
            return a; var u = /\+/g; e = e.split(t); var s = 1e3; i && "number" == typeof i.maxKeys && (s = i.maxKeys); var c = e.length; s > 0 && c > s && (c = s); for (var h = 0; h < c; ++h) {
            var l, f, p, d, y = e[h].replace(u, "%20"), v = y.indexOf(r);
            v >= 0 ? (l = y.substr(0, v), f = y.substr(v + 1)) : (l = y, f = ""), p = decodeURIComponent(l), d = decodeURIComponent(f), n(a, p) ? o(a[p]) ? a[p].push(d) : a[p] = [a[p], d] : a[p] = d;
        } return a; };
        var o = Array.isArray || function (e) { return "[object Array]" === Object.prototype.toString.call(e); };
    }, function (e, t, r) {
        "use strict";
        var n = function (e) { switch (typeof e) {
            case "string": return e;
            case "boolean": return e ? "true" : "false";
            case "number": return isFinite(e) ? e : "";
            default: return "";
        } };
        e.exports = function (e, t, r, u) { return t = t || "&", r = r || "=", null === e && (e = void 0), "object" == typeof e ? i(a(e), (function (a) { var u = encodeURIComponent(n(a)) + r; return o(e[a]) ? i(e[a], (function (e) { return u + encodeURIComponent(n(e)); })).join(t) : u + encodeURIComponent(n(e[a])); })).join(t) : u ? encodeURIComponent(n(u)) + r + encodeURIComponent(n(e)) : ""; };
        var o = Array.isArray || function (e) { return "[object Array]" === Object.prototype.toString.call(e); };
        function i(e, t) { if (e.map)
            return e.map(t); for (var r = [], n = 0; n < e.length; n++)
            r.push(t(e[n], n)); return r; }
        var a = Object.keys || function (e) { var t = []; for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && t.push(r); return t; };
    }, function (e, t, r) { (function (e, n) { var o; /*! https://mths.be/punycode v1.4.1 by @mathias */ /*! https://mths.be/punycode v1.4.1 by @mathias */ !function (i) { t && t.nodeType, e && e.nodeType; var a = "object" == typeof n && n; a.global !== a && a.window !== a && a.self; var u, s = 2147483647, c = /^xn--/, h = /[^\x20-\x7E]/, l = /[\x2E\u3002\uFF0E\uFF61]/g, f = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" }, p = Math.floor, d = String.fromCharCode; function y(e) { throw new RangeError(f[e]); } function v(e, t) { for (var r = e.length, n = []; r--;)
        n[r] = t(e[r]); return n; } function b(e, t) { var r = e.split("@"), n = ""; return r.length > 1 && (n = r[0] + "@", e = r[1]), n + v((e = e.replace(l, ".")).split("."), t).join("."); } function m(e) { for (var t, r, n = [], o = 0, i = e.length; o < i;)
        (t = e.charCodeAt(o++)) >= 55296 && t <= 56319 && o < i ? 56320 == (64512 & (r = e.charCodeAt(o++))) ? n.push(((1023 & t) << 10) + (1023 & r) + 65536) : (n.push(t), o--) : n.push(t); return n; } function g(e) { return v(e, (function (e) { var t = ""; return e > 65535 && (t += d((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += d(e); })).join(""); } function w(e, t) { return e + 22 + 75 * (e < 26) - ((0 != t) << 5); } function _(e, t, r) { var n = 0; for (e = r ? p(e / 700) : e >> 1, e += p(e / t); e > 455; n += 36)
        e = p(e / 35); return p(n + 36 * e / (e + 38)); } function k(e) { var t, r, n, o, i, a, u, c, h, l, f, d = [], v = e.length, b = 0, m = 128, w = 72; for ((r = e.lastIndexOf("-")) < 0 && (r = 0), n = 0; n < r; ++n)
        e.charCodeAt(n) >= 128 && y("not-basic"), d.push(e.charCodeAt(n)); for (o = r > 0 ? r + 1 : 0; o < v;) {
        for (i = b, a = 1, u = 36; o >= v && y("invalid-input"), ((c = (f = e.charCodeAt(o++)) - 48 < 10 ? f - 22 : f - 65 < 26 ? f - 65 : f - 97 < 26 ? f - 97 : 36) >= 36 || c > p((s - b) / a)) && y("overflow"), b += c * a, !(c < (h = u <= w ? 1 : u >= w + 26 ? 26 : u - w)); u += 36)
            a > p(s / (l = 36 - h)) && y("overflow"), a *= l;
        w = _(b - i, t = d.length + 1, 0 == i), p(b / t) > s - m && y("overflow"), m += p(b / t), b %= t, d.splice(b++, 0, m);
    } return g(d); } function x(e) { var t, r, n, o, i, a, u, c, h, l, f, v, b, g, k, x = []; for (v = (e = m(e)).length, t = 128, r = 0, i = 72, a = 0; a < v; ++a)
        (f = e[a]) < 128 && x.push(d(f)); for (n = o = x.length, o && x.push("-"); n < v;) {
        for (u = s, a = 0; a < v; ++a)
            (f = e[a]) >= t && f < u && (u = f);
        for (u - t > p((s - r) / (b = n + 1)) && y("overflow"), r += (u - t) * b, t = u, a = 0; a < v; ++a)
            if ((f = e[a]) < t && ++r > s && y("overflow"), f == t) {
                for (c = r, h = 36; !(c < (l = h <= i ? 1 : h >= i + 26 ? 26 : h - i)); h += 36)
                    k = c - l, g = 36 - l, x.push(d(w(l + k % g, 0))), c = p(k / g);
                x.push(d(w(c, 0))), i = _(r, b, n == o), r = 0, ++n;
            }
        ++r, ++t;
    } return x.join(""); } u = { version: "1.4.1", ucs2: { decode: m, encode: g }, decode: k, encode: x, toASCII: function (e) { return b(e, (function (e) { return h.test(e) ? "xn--" + x(e) : e; })); }, toUnicode: function (e) { return b(e, (function (e) { return c.test(e) ? k(e.slice(4).toLowerCase()) : e; })); } }, void 0 === (o = function () { return u; }.call(t, r, t, e)) || (e.exports = o); }(); }).call(this, r(21)(e), r(11)); }, function (e, t) { e.exports = function (e) { return e.webpackPolyfill || (e.deprecate = function () { }, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", { enumerable: !0, get: function () { return e.l; } }), Object.defineProperty(e, "id", { enumerable: !0, get: function () { return e.i; } }), e.webpackPolyfill = 1), e; }; }, function (e, t, r) {
        "use strict";
        e.exports = { isString: function (e) { return "string" == typeof e; }, isObject: function (e) { return "object" == typeof e && null !== e; }, isNull: function (e) { return null === e; }, isNullOrUndefined: function (e) { return null == e; } };
    }, function (e, t) { var r, n, o = e.exports = {}; function i() { throw new Error("setTimeout has not been defined"); } function a() { throw new Error("clearTimeout has not been defined"); } function u(e) { if (r === setTimeout)
        return setTimeout(e, 0); if ((r === i || !r) && setTimeout)
        return r = setTimeout, setTimeout(e, 0); try {
        return r(e, 0);
    }
    catch (t) {
        try {
            return r.call(null, e, 0);
        }
        catch (t) {
            return r.call(this, e, 0);
        }
    } } !function () { try {
        r = "function" == typeof setTimeout ? setTimeout : i;
    }
    catch (e) {
        r = i;
    } try {
        n = "function" == typeof clearTimeout ? clearTimeout : a;
    }
    catch (e) {
        n = a;
    } }(); var s, c = [], h = !1, l = -1; function f() { h && s && (h = !1, s.length ? c = s.concat(c) : l = -1, c.length && p()); } function p() { if (!h) {
        var e = u(f);
        h = !0;
        for (var t = c.length; t;) {
            for (s = c, c = []; ++l < t;)
                s && s[l].run();
            l = -1, t = c.length;
        }
        s = null, h = !1, function (e) { if (n === clearTimeout)
            return clearTimeout(e); if ((n === a || !n) && clearTimeout)
            return n = clearTimeout, clearTimeout(e); try {
            n(e);
        }
        catch (t) {
            try {
                return n.call(null, e);
            }
            catch (t) {
                return n.call(this, e);
            }
        } }(e);
    } } function d(e, t) { this.fun = e, this.array = t; } function y() { } o.nextTick = function (e) { var t = new Array(arguments.length - 1); if (arguments.length > 1)
        for (var r = 1; r < arguments.length; r++)
            t[r - 1] = arguments[r]; c.push(new d(e, t)), 1 !== c.length || h || u(p); }, d.prototype.run = function () { this.fun.apply(null, this.array); }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = y, o.addListener = y, o.once = y, o.off = y, o.removeListener = y, o.removeAllListeners = y, o.emit = y, o.prependListener = y, o.prependOnceListener = y, o.listeners = function (e) { return []; }, o.binding = function (e) { throw new Error("process.binding is not supported"); }, o.cwd = function () { return "/"; }, o.chdir = function (e) { throw new Error("process.chdir is not supported"); }, o.umask = function () { return 0; }; }, function (e, t, r) {
        "use strict";
        var n = r(25), o = r(26), i = r(27), a = r(28);
        function u(e, t, r) { var n = e; return o(t) ? (r = t, "string" == typeof e && (n = { uri: e })) : n = a(t, { uri: e }), n.callback = r, n; }
        function s(e, t, r) { return c(t = u(e, t, r)); }
        function c(e) { if (void 0 === e.callback)
            throw new Error("promise argument missing"); var t = !1, r = function (r, n, o) { t || (t = !0, e.callback(r, n, o)); }; function n() { var e = void 0; if (e = h.response ? h.response : h.responseText || function (e) { try {
            if ("document" === e.responseType)
                return e.responseXML;
            var t = e.responseXML && "parsererror" === e.responseXML.documentElement.nodeName;
            if ("" === e.responseType && !t)
                return e.responseXML;
        }
        catch (e) { } return null; }(h), b)
            try {
                e = JSON.parse(e);
            }
            catch (e) { } return e; } function o(e) { return clearTimeout(l), e instanceof Error || (e = new Error("" + (e || "Unknown XMLHttpRequest Error"))), e.statusCode = 0, r(e, m); } function a() { if (!c) {
            var t;
            clearTimeout(l), t = e.useXDR && void 0 === h.status ? 200 : 1223 === h.status ? 204 : h.status;
            var o = m, a = null;
            return 0 !== t ? (o = { body: n(), statusCode: t, method: p, headers: {}, url: f, rawRequest: h }, h.getAllResponseHeaders && (o.headers = i(h.getAllResponseHeaders()))) : a = new Error("Internal XMLHttpRequest Error"), r(a, o, o.body);
        } } var u, c, h = e.xhr || null; h || (h = e.cors || e.useXDR ? new s.XDomainRequest : new s.XMLHttpRequest); var l, f = h.url = e.uri || e.url, p = h.method = e.method || "GET", d = e.body || e.data, y = h.headers = e.headers || {}, v = !!e.sync, b = !1, m = { body: void 0, headers: {}, statusCode: 0, method: p, url: f, rawRequest: h }; if ("json" in e && !1 !== e.json && (b = !0, y.accept || y.Accept || (y.Accept = "application/json"), "GET" !== p && "HEAD" !== p && (y["content-type"] || y["Content-Type"] || (y["Content-Type"] = "application/json"), d = JSON.stringify(!0 === e.json ? d : e.json))), h.onreadystatechange = function () { 4 === h.readyState && setTimeout(a, 0); }, h.onload = a, h.onerror = o, h.onprogress = function () { }, h.onabort = function () { c = !0; }, h.ontimeout = o, h.open(p, f, !v, e.username, e.password), v || (h.withCredentials = !!e.withCredentials), !v && e.timeout > 0 && (l = setTimeout((function () { if (!c) {
            c = !0, h.abort("timeout");
            var e = new Error("XMLHttpRequest timeout");
            e.code = "ETIMEDOUT", o(e);
        } }), e.timeout)), h.setRequestHeader)
            for (u in y)
                y.hasOwnProperty(u) && h.setRequestHeader(u, y[u]);
        else if (e.headers && !function (e) { for (var t in e)
            if (e.hasOwnProperty(t))
                return !1; return !0; }(e.headers))
            throw new Error("Headers cannot be set on an XDomainRequest object"); return "responseType" in e && (h.responseType = e.responseType), "beforeSend" in e && "function" == typeof e.beforeSend && e.beforeSend(h), h.send(d || null), h; }
        e.exports = s, e.exports.default = s, s.XMLHttpRequest = n.XMLHttpRequest || function () { }, s.XDomainRequest = "withCredentials" in new s.XMLHttpRequest ? s.XMLHttpRequest : n.XDomainRequest, function (e, t) { for (var r = 0; r < e.length; r++)
            t(e[r]); }(["get", "put", "post", "patch", "head", "delete"], (function (e) { s["delete" === e ? "del" : e] = function (t, r, n) { return (r = u(t, r, n)).method = e.toUpperCase(), c(r); }; }));
    }, function (e, t, r) { (function (t) { var r; r = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {}, e.exports = r; }).call(this, r(11)); }, function (e, t) { e.exports = function (e) { if (!e)
        return !1; var t = r.call(e); return "[object Function]" === t || "function" == typeof e && "[object RegExp]" !== t || "undefined" != typeof window && (e === window.setTimeout || e === window.alert || e === window.confirm || e === window.prompt); }; var r = Object.prototype.toString; }, function (e, t) { var r = function (e) { return e.replace(/^\s+|\s+$/g, ""); }; e.exports = function (e) { if (!e)
        return {}; for (var t, n = {}, o = r(e).split("\n"), i = 0; i < o.length; i++) {
        var a = o[i], u = a.indexOf(":"), s = r(a.slice(0, u)).toLowerCase(), c = r(a.slice(u + 1));
        void 0 === n[s] ? n[s] = c : (t = n[s], "[object Array]" === Object.prototype.toString.call(t) ? n[s].push(c) : n[s] = [n[s], c]);
    } return n; }; }, function (e, t) { e.exports = function () { for (var e = {}, t = 0; t < arguments.length; t++) {
        var n = arguments[t];
        for (var o in n)
            r.call(n, o) && (e[o] = n[o]);
    } return e; }; var r = Object.prototype.hasOwnProperty; }, function (e, t, r) {
        "use strict";
        r.r(t), r.d(t, "isArangoDatabase", (function () { return xe; })), r.d(t, "Database", (function () { return je; }));
        var n = r(1), o = r(3);
        function i(e, t) { var r = Object.keys(e); if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable; }))), r.push.apply(r, n);
        } return r; }
        function a(e) { for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? i(Object(r), !0).forEach((function (t) { c(e, t, r[t]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)); }));
        } return e; }
        function u(e, t, r, n, o, i, a) { try {
            var u = e[i](a), s = u.value;
        }
        catch (e) {
            return void r(e);
        } u.done ? t(s) : Promise.resolve(s).then(n, o); }
        function s(e, t) { for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        } }
        function c(e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e; }
        var h = function () { function e(t, r) { !function (e, t) { if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function"); }(this, e), c(this, "_name", void 0), c(this, "_db", void 0), this._db = t, this._name = r; } var t, r, i, h, l; return t = e, (r = [{ key: "exists", value: (h = regeneratorRuntime.mark((function e() { return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0: return e.prev = 0, e.next = 3, this.get();
                        case 3: return e.abrupt("return", !0);
                        case 6:
                            if (e.prev = 6, e.t0 = e.catch(0), !Object(n.c)(e.t0) || e.t0.errorNum !== o.a) {
                                e.next = 10;
                                break;
                            }
                            return e.abrupt("return", !1);
                        case 10: throw e.t0;
                        case 11:
                        case "end": return e.stop();
                    } }), e, this, [[0, 6]]); })), l = function () { var e = this, t = arguments; return new Promise((function (r, n) { var o = h.apply(e, t); function i(e) { u(o, r, n, i, a, "next", e); } function a(e) { u(o, r, n, i, a, "throw", e); } i(void 0); })); }, function () { return l.apply(this, arguments); }) }, { key: "get", value: function () { return this._db.request({ path: "/_api/analyzer/".concat(this.name) }, (function (e) { return e.body; })); } }, { key: "create", value: function (e) { return this._db.request({ method: "POST", path: "/_api/analyzer", body: a({ name: this.name }, e) }, (function (e) { return e.body; })); } }, { key: "drop", value: function () { var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]; return this._db.request({ method: "DELETE", path: "/_api/analyzer/".concat(this.name), qs: { force: e } }, (function (e) { return e.body; })); } }, { key: "isArangoAnalyzer", get: function () { return !0; } }, { key: "name", get: function () { return this._name; } }]) && s(t.prototype, r), i && s(t, i), e; }(), l = r(4), f = r(0), p = r(8), d = r(7);
        function y(e) { return window.btoa(e); }
        var v = r(9), b = r(12);
        var m = r(24);
        function g(e, t) { var r = Object.keys(e); if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable; }))), r.push.apply(r, n);
        } return r; }
        function w(e) { for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? g(Object(r), !0).forEach((function (t) { _(e, t, r[t]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : g(Object(r)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)); }));
        } return e; }
        function _(e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e; }
        function k(e, t) { if (null == e)
            return {}; var r, n, o = function (e, t) { if (null == e)
            return {}; var r, n, o = {}, i = Object.keys(e); for (n = 0; n < i.length; n++)
            r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]); return o; }(e, t); if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (n = 0; n < i.length; n++)
                r = i[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
        } return o; }
        function x(e, t) { var r = Object(v.parse)(e), n = r.auth, o = k(r, ["auth"]), i = function (e, t) { for (var r = {}, n = 0, o = Object.keys(e); n < o.length; n++) {
            var i = o[n];
            t.includes(i) || (r[i] = e[i]);
        } return r; }(t, ["maxSockets"]); return function (e, t) { var r = e.method, a = e.url, u = e.headers, s = e.body, c = e.timeout, h = e.expectBinary, l = w(w({}, o), {}, { pathname: a.pathname ? o.pathname ? Object(b.join)(o.pathname, a.pathname) : a.pathname : o.pathname, search: a.search ? o.search ? "".concat(o.search, "&").concat(a.search.slice(1)) : a.search : o.search }); u.authorization || (u.authorization = "Basic ".concat(y(n || "root:"))); var f = function (e, r) { f = function () { }, t(e, r); }, p = m(w(w({ useXDR: !0, withCredentials: !0 }, i), {}, { responseType: h ? "blob" : "text", url: Object(v.format)(l), body: s, method: r, headers: u, timeout: c }), (function (e, t) { if (e) {
            var r = e;
            r.request = p, i.after && i.after(r), f(r);
        }
        else {
            var n = t;
            n.request = p, n.body || (n.body = ""), i.after && i.after(null, n), f(null, n);
        } })); i.before && i.before(p); }; }
        function O(e) { return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e; } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e; })(e); }
        function j(e, t) { if (null == e)
            return {}; var r, n, o = function (e, t) { if (null == e)
            return {}; var r, n, o = {}, i = Object.keys(e); for (n = 0; n < i.length; n++)
            r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]); return o; }(e, t); if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (n = 0; n < i.length; n++)
                r = i[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
        } return o; }
        function q(e) { return function (e) { if (Array.isArray(e))
            return P(e); }(e) || function (e) { if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
            return Array.from(e); }(e) || S(e) || function () { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }(); }
        function E(e, t) { return function (e) { if (Array.isArray(e))
            return e; }(e) || function (e, t) { if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
            return; var r = [], n = !0, o = !1, i = void 0; try {
            for (var a, u = e[Symbol.iterator](); !(n = (a = u.next()).done) && (r.push(a.value), !t || r.length !== t); n = !0)
                ;
        }
        catch (e) {
            o = !0, i = e;
        }
        finally {
            try {
                n || null == u.return || u.return();
            }
            finally {
                if (o)
                    throw i;
            }
        } return r; }(e, t) || S(e, t) || function () { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }(); }
        function S(e, t) { if (e) {
            if ("string" == typeof e)
                return P(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? P(e, t) : void 0;
        } }
        function P(e, t) { (null == t || t > e.length) && (t = e.length); for (var r = 0, n = new Array(t); r < t; r++)
            n[r] = e[r]; return n; }
        function T(e, t) { var r = Object.keys(e); if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable; }))), r.push.apply(r, n);
        } return r; }
        function R(e) { for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? T(Object(r), !0).forEach((function (t) { D(e, t, r[t]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : T(Object(r)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)); }));
        } return e; }
        function A(e, t) { if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function"); }
        function C(e, t) { for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        } }
        function D(e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e; }
        var L = /\/(json|javascript)(\W|$)/;
        function I(e) { return e.hasOwnProperty("token"); }
        var N = function () { function e() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; A(this, e), D(this, "_activeTasks", 0), D(this, "_agent", void 0), D(this, "_agentOptions", void 0), D(this, "_arangoVersion", 30400), D(this, "_headers", void 0), D(this, "_loadBalancingStrategy", void 0), D(this, "_useFailOver", void 0), D(this, "_shouldRetry", void 0), D(this, "_maxRetries", void 0), D(this, "_maxTasks", void 0), D(this, "_queue", new d.LinkedList), D(this, "_databases", new Map), D(this, "_hosts", []), D(this, "_urls", []), D(this, "_activeHost", void 0), D(this, "_activeDirtyHost", void 0), D(this, "_transactionId", null), D(this, "_precaptureStackTraces", void 0), void 0 !== t.arangoVersion && (this._arangoVersion = t.arangoVersion), this._agent = t.agent, this._agentOptions = R({ maxSockets: 3 }, t.agentOptions), this._maxTasks = this._agentOptions.maxSockets, this._agentOptions.keepAlive && (this._maxTasks *= 2), this._headers = R({}, t.headers), this._loadBalancingStrategy = t.loadBalancingStrategy || "NONE", this._useFailOver = "ROUND_ROBIN" !== this._loadBalancingStrategy, this._precaptureStackTraces = Boolean(t.precaptureStackTraces), !1 === t.maxRetries ? (this._shouldRetry = !1, this._maxRetries = 0) : (this._shouldRetry = !0, this._maxRetries = t.maxRetries || 0); var r = t.url ? Array.isArray(t.url) ? t.url : [t.url] : ["http://localhost:8529"]; this.addToHostList(r), t.auth && (I(t.auth) ? this.setBearerAuth(t.auth) : this.setBasicAuth(t.auth)), "ONE_RANDOM" === this._loadBalancingStrategy ? (this._activeHost = Math.floor(Math.random() * this._hosts.length), this._activeDirtyHost = Math.floor(Math.random() * this._hosts.length)) : (this._activeHost = 0, this._activeDirtyHost = 0); } var t, r, o; return t = e, (r = [{ key: "_runQueue", value: function () { var e = this; if (this._queue.length && !(this._activeTasks >= this._maxTasks)) {
                    var t = this._queue.shift(), r = this._activeHost;
                    void 0 !== t.host ? r = t.host : t.allowDirtyRead ? (r = this._activeDirtyHost, this._activeDirtyHost = (this._activeDirtyHost + 1) % this._hosts.length, t.options.headers["x-arango-allow-dirty-read"] = "true") : "ROUND_ROBIN" === this._loadBalancingStrategy && (this._activeHost = (this._activeHost + 1) % this._hosts.length), this._activeTasks += 1;
                    var o = function (o, i) { if (e._activeTasks -= 1, o)
                        !t.allowDirtyRead && e._hosts.length > 1 && e._activeHost === r && e._useFailOver && (e._activeHost = (e._activeHost + 1) % e._hosts.length), !t.host && e._shouldRetry && t.retries < (e._maxRetries || e._hosts.length - 1) && Object(n.e)(o) && "connect" === o.syscall && "ECONNREFUSED" === o.code ? (t.retries += 1, e._queue.push(t)) : (t.stack && (o.stack += t.stack), t.reject(o));
                    else {
                        var a = i;
                        if (503 === a.statusCode && a.headers["x-arango-endpoint"]) {
                            var u = a.headers["x-arango-endpoint"], s = E(e.addToHostList(u), 1)[0];
                            t.host = s, e._activeHost === r && (e._activeHost = s), e._queue.push(t);
                        }
                        else
                            a.arangojsHostId = r, t.resolve(a);
                    } e._runQueue(); };
                    try {
                        this._hosts[r](t.options, o);
                    }
                    catch (e) {
                        o(e);
                    }
                } } }, { key: "_buildUrl", value: function (e) { var t, r = e.basePath, n = e.path, o = e.qs, i = "".concat(r || "").concat(n || ""); return o && (t = "?".concat("string" == typeof o ? o : Object(p.stringify)(function (e) { for (var t = {}, r = 0, n = Object.keys(e); r < n.length; r++) {
                    var o = n[r], i = e[o];
                    void 0 !== i && (t[o] = i);
                } return t; }(o)))), t ? { pathname: i, search: t } : { pathname: i }; } }, { key: "setBearerAuth", value: function (e) { this.setHeader("authorization", "Bearer ".concat(e.token)); } }, { key: "setBasicAuth", value: function (e) { this.setHeader("authorization", "Basic ".concat(y("".concat(e.username, ":").concat(e.password)))); } }, { key: "database", value: function (e) { function t(t, r) { return e.apply(this, arguments); } return t.toString = function () { return e.toString(); }, t; }((function (e, t) { if (null !== t)
                    return t ? (this._databases.set(e, t), t) : this._databases.get(e); this._databases.delete(e); })) }, { key: "addToHostList", value: function (e) { var t, r, n = this, o = (Array.isArray(e) ? e : [e]).map((function (e) { return function (e) { var t = e.match(/^(tcp|ssl|tls)((?::|\+).+)/); t && (e = ("tcp" === t[1] ? "http" : "https") + t[2]); var r = e.match(/^(?:(https?)\+)?unix:\/\/(\/.+)/); return r && (e = "".concat(r[1] || "http", "://unix:").concat(r[2])), e; }(e); })), i = o.filter((function (e) { return -1 === n._urls.indexOf(e); })); return (t = this._urls).push.apply(t, q(i)), (r = this._hosts).push.apply(r, q(i.map((function (e) { return x(e, n._agentOptions, n._agent); })))), o.map((function (e) { return n._urls.indexOf(e); })); } }, { key: "setTransactionId", value: function (e) { this._transactionId = e; } }, { key: "clearTransactionId", value: function () { this._transactionId = null; } }, { key: "setHeader", value: function (e, t) { null === t ? delete this._headers[e] : this._headers[e] = t; } }, { key: "close", value: function () { var e, t = function (e, t) { var r; if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (r = S(e)) || t && e && "number" == typeof e.length) {
                        r && (e = r);
                        var n = 0, o = function () { };
                        return { s: o, n: function () { return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] }; }, e: function (e) { throw e; }, f: o };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                } var i, a = !0, u = !1; return { s: function () { r = e[Symbol.iterator](); }, n: function () { var e = r.next(); return a = e.done, e; }, e: function (e) { u = !0, i = e; }, f: function () { try {
                        a || null == r.return || r.return();
                    }
                    finally {
                        if (u)
                            throw i;
                    } } }; }(this._hosts); try {
                    for (t.s(); !(e = t.n()).done;) {
                        var r = e.value;
                        r.close && r.close();
                    }
                }
                catch (e) {
                    t.e(e);
                }
                finally {
                    t.f();
                } } }, { key: "request", value: function (e, t) { var r = this, o = e.host, i = e.method, a = void 0 === i ? "GET" : i, u = e.body, s = e.expectBinary, c = void 0 !== s && s, h = e.isBinary, l = void 0 !== h && h, f = e.allowDirtyRead, p = void 0 !== f && f, d = e.timeout, y = void 0 === d ? 0 : d, v = e.headers, b = j(e, ["host", "method", "body", "expectBinary", "isBinary", "allowDirtyRead", "timeout", "headers"]); return new Promise((function (e, i) { var s = "TextArea/plain"; l ? s = "application/octet-stream" : u && ("object" === O(u) ? (u = JSON.stringify(u), s = "application/json") : u = String(u)); var h = R(R({}, r._headers), {}, { "content-type": s, "x-arango-version": String(r._arangoVersion) }); r._transactionId && (h["x-arango-trx-id"] = r._transactionId); var f = { retries: 0, host: o, allowDirtyRead: p, options: { url: r._buildUrl(b), headers: R(R({}, h), v), timeout: y, method: a, expectBinary: c, body: u }, reject: i, resolve: function (r) { var o = r.headers["content-type"], a = void 0; if (r.body.length && o && o.match(L))
                        try {
                            a = r.body, a = JSON.parse(a);
                        }
                        catch (e) {
                            if (!c)
                                return "string" != typeof a && (a = r.body.toString("utf-8")), e.response = r, void i(e);
                        }
                    else
                        a = r.body && !c ? r.body.toString("utf-8") : r.body; Object(n.d)(a) ? (r.body = a, i(new n.a(r))) : r.statusCode && r.statusCode >= 400 ? (r.body = a, i(new n.b(r))) : (c || (r.body = a), e(t ? t(r) : r)); } }; if (r._precaptureStackTraces)
                    if ("function" == typeof Error.captureStackTrace)
                        Error.captureStackTrace(f), f.stack = "\n".concat(f.stack.split("\n").slice(3).join("\n"));
                    else {
                        var d = function () { var e = new Error; if (!e.stack)
                            try {
                                throw e;
                            }
                            catch (t) {
                                e = t;
                            } return e.stack; }();
                        d && (f.stack = "\n".concat(d.split("\n").slice(4).join("\n")));
                    } r._queue.push(f), r._runQueue(); })); } }, { key: "isArangoConnection", get: function () { return !0; } }]) && C(t.prototype, r), o && C(t, o), e; }(), U = r(5), H = r(2);
        function B(e) { return (B = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e; } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e; })(e); }
        function M(e, t, r, n, o, i, a) { try {
            var u = e[i](a), s = u.value;
        }
        catch (e) {
            return void r(e);
        } u.done ? t(s) : Promise.resolve(s).then(n, o); }
        function F(e) { return function () { var t = this, r = arguments; return new Promise((function (n, o) { var i = e.apply(t, r); function a(e) { M(i, n, o, a, u, "next", e); } function u(e) { M(i, n, o, a, u, "throw", e); } a(void 0); })); }; }
        function V(e, t) { if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function"); }
        function G(e, t) { for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        } }
        function z(e, t, r) { return t && G(e.prototype, t), r && G(e, r), e; }
        function X(e, t) { var r = Object.keys(e); if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable; }))), r.push.apply(r, n);
        } return r; }
        function Q(e) { for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? X(Object(r), !0).forEach((function (t) { $(e, t, r[t]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : X(Object(r)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)); }));
        } return e; }
        function $(e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e; }
        function W(e, t) { if (null == e)
            return {}; var r, n, o = function (e, t) { if (null == e)
            return {}; var r, n, o = {}, i = Object.keys(e); for (n = 0; n < i.length; n++)
            r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]); return o; }(e, t); if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (n = 0; n < i.length; n++)
                r = i[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
        } return o; }
        function J(e) { var t = function (e, t) { if ("object" !== B(e) || null === e)
            return e; var r = e[Symbol.toPrimitive]; if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== B(n))
                return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
        } return ("string" === t ? String : Number)(e); }(e, "string"); return "symbol" === B(t) ? t : String(t); }
        function K(e, t) { var r = e.new, n = e.old, o = e[t], i = Q(Q({}, W(e, ["new", "old", t].map(J))), o); return void 0 !== r && (i.new = r), void 0 !== n && (i.old = n), i; }
        function Y(e) { var t = {}; return t.collection = Object(f.collectionToString)(e.collection), t.from = Array.isArray(e.from) ? e.from.map(f.collectionToString) : [Object(f.collectionToString)(e.from)], t.to = Array.isArray(e.to) ? e.to.map(f.collectionToString) : [Object(f.collectionToString)(e.to)], t; }
        var Z = function () { function e(t, r, n) { V(this, e), $(this, "_db", void 0), $(this, "_name", void 0), $(this, "_graph", void 0), $(this, "_collection", void 0), this._db = t, this._name = r, this._graph = n, this._collection = t.collection(r); } var t, r; return z(e, [{ key: "vertexExists", value: (r = F(regeneratorRuntime.mark((function e(t) { return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0: return e.prev = 0, e.next = 3, this._db.request({ method: "HEAD", path: "/_api/gharial/".concat(this.graph.name, "/vertex/").concat(Object(H.a)(t, this._name)) }, (function () { return !0; }));
                        case 3: return e.abrupt("return", e.sent);
                        case 6:
                            if (e.prev = 6, e.t0 = e.catch(0), 404 !== e.t0.code) {
                                e.next = 10;
                                break;
                            }
                            return e.abrupt("return", !1);
                        case 10: throw e.t0;
                        case 11:
                        case "end": return e.stop();
                    } }), e, this, [[0, 6]]); }))), function (e) { return r.apply(this, arguments); }) }, { key: "vertex", value: (t = F(regeneratorRuntime.mark((function e(t) { var r, i, a, u, s, c, h, l, f, p, d = arguments; return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0:
                            if ("boolean" == typeof (r = d.length > 1 && void 0 !== d[1] ? d[1] : {}) && (r = { graceful: r }), a = (i = r).allowDirtyRead, u = void 0 === a ? void 0 : a, s = i.graceful, c = void 0 !== s && s, h = i.rev, l = W(i, ["allowDirtyRead", "graceful", "rev"]), f = {}, h && (f["if-match"] = h), p = this._db.request({ path: "/_api/gharial/".concat(this.graph.name, "/vertex/").concat(Object(H.a)(t, this._name)), headers: f, qs: l, allowDirtyRead: u }, (function (e) { return e.body.vertex; })), c) {
                                e.next = 8;
                                break;
                            }
                            return e.abrupt("return", p);
                        case 8: return e.prev = 8, e.next = 11, p;
                        case 11: return e.abrupt("return", e.sent);
                        case 14:
                            if (e.prev = 14, e.t0 = e.catch(8), !Object(n.c)(e.t0) || e.t0.errorNum !== o.d) {
                                e.next = 18;
                                break;
                            }
                            return e.abrupt("return", null);
                        case 18: throw e.t0;
                        case 19:
                        case "end": return e.stop();
                    } }), e, this, [[8, 14]]); }))), function (e) { return t.apply(this, arguments); }) }, { key: "save", value: function (e, t) { return this._db.request({ method: "POST", path: "/_api/gharial/".concat(this.graph.name, "/vertex/").concat(this._name), body: e, qs: t }, (function (e) { return K(e.body, "vertex"); })); } }, { key: "replace", value: function (e, t) { var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}; "string" == typeof r && (r = { rev: r }); var n = r, o = n.rev, i = W(n, ["rev"]), a = {}; return o && (a["if-match"] = o), this._db.request({ method: "PUT", path: "/_api/gharial/".concat(this.graph.name, "/vertex/").concat(Object(H.a)(e, this._name)), body: t, qs: i, headers: a }, (function (e) { return K(e.body, "vertex"); })); } }, { key: "update", value: function (e, t) { var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}; "string" == typeof r && (r = { rev: r }); var n = {}, o = r, i = o.rev, a = W(o, ["rev"]); return i && (n["if-match"] = i), this._db.request({ method: "PATCH", path: "/_api/gharial/".concat(this.graph.name, "/vertex/").concat(Object(H.a)(e, this._name)), body: t, qs: a, headers: n }, (function (e) { return K(e.body, "vertex"); })); } }, { key: "remove", value: function (e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; "string" == typeof t && (t = { rev: t }); var r = {}, n = t, o = n.rev, i = W(n, ["rev"]); return o && (r["if-match"] = o), this._db.request({ method: "DELETE", path: "/_api/gharial/".concat(this.graph.name, "/vertex/").concat(Object(H.a)(e, this._name)), qs: i, headers: r }, (function (e) { return K(e.body, "removed"); })); } }, { key: "isArangoCollection", get: function () { return !0; } }, { key: "name", get: function () { return this._name; } }, { key: "collection", get: function () { return this._collection; } }, { key: "graph", get: function () { return this._graph; } }]), e; }(), ee = function () { function e(t, r, n) { V(this, e), $(this, "_db", void 0), $(this, "_name", void 0), $(this, "_graph", void 0), $(this, "_collection", void 0), this._db = t, this._name = r, this._graph = n, this._collection = t.collection(r); } var t, r; return z(e, [{ key: "edgeExists", value: (r = F(regeneratorRuntime.mark((function e(t) { return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0: return e.prev = 0, e.next = 3, this._db.request({ method: "HEAD", path: "/_api/gharial/".concat(this.graph.name, "/edge/").concat(Object(H.a)(t, this._name)) }, (function () { return !0; }));
                        case 3: return e.abrupt("return", e.sent);
                        case 6:
                            if (e.prev = 6, e.t0 = e.catch(0), 404 !== e.t0.code) {
                                e.next = 10;
                                break;
                            }
                            return e.abrupt("return", !1);
                        case 10: throw e.t0;
                        case 11:
                        case "end": return e.stop();
                    } }), e, this, [[0, 6]]); }))), function (e) { return r.apply(this, arguments); }) }, { key: "edge", value: (t = F(regeneratorRuntime.mark((function e(t) { var r, i, a, u, s, c, h, l, f, p, d = arguments; return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0:
                            if ("boolean" == typeof (r = d.length > 1 && void 0 !== d[1] ? d[1] : {}) && (r = { graceful: r }), a = (i = r).allowDirtyRead, u = void 0 === a ? void 0 : a, s = i.graceful, c = void 0 !== s && s, h = i.rev, l = W(i, ["allowDirtyRead", "graceful", "rev"]), f = {}, h && (f["if-match"] = h), p = this._db.request({ path: "/_api/gharial/".concat(this.graph.name, "/edge/").concat(Object(H.a)(t, this._name)), qs: l, allowDirtyRead: u }, (function (e) { return e.body.edge; })), c) {
                                e.next = 8;
                                break;
                            }
                            return e.abrupt("return", p);
                        case 8: return e.prev = 8, e.next = 11, p;
                        case 11: return e.abrupt("return", e.sent);
                        case 14:
                            if (e.prev = 14, e.t0 = e.catch(8), !Object(n.c)(e.t0) || e.t0.errorNum !== o.d) {
                                e.next = 18;
                                break;
                            }
                            return e.abrupt("return", null);
                        case 18: throw e.t0;
                        case 19:
                        case "end": return e.stop();
                    } }), e, this, [[8, 14]]); }))), function (e) { return t.apply(this, arguments); }) }, { key: "save", value: function (e, t) { return this._db.request({ method: "POST", path: "/_api/gharial/".concat(this.graph.name, "/edge/").concat(this._name), body: e, qs: t }, (function (e) { return K(e.body, "edge"); })); } }, { key: "replace", value: function (e, t) { var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}; "string" == typeof r && (r = { rev: r }); var n = r, o = n.rev, i = W(n, ["rev"]), a = {}; return o && (a["if-match"] = o), this._db.request({ method: "PUT", path: "/_api/gharial/".concat(this.graph.name, "/edge/").concat(Object(H.a)(e, this._name)), body: t, qs: i, headers: a }, (function (e) { return K(e.body, "edge"); })); } }, { key: "update", value: function (e, t) { var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}; "string" == typeof r && (r = { rev: r }); var n = r, o = n.rev, i = W(n, ["rev"]), a = {}; return o && (a["if-match"] = o), this._db.request({ method: "PATCH", path: "/_api/gharial/".concat(this.graph.name, "/edge/").concat(Object(H.a)(e, this._name)), body: t, qs: i, headers: a }, (function (e) { return K(e.body, "edge"); })); } }, { key: "remove", value: function (e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; "string" == typeof t && (t = { rev: t }); var r = t, n = r.rev, o = W(r, ["rev"]), i = {}; return n && (i["if-match"] = n), this._db.request({ method: "DELETE", path: "/_api/gharial/".concat(this.graph.name, "/edge/").concat(Object(H.a)(e, this._name)), qs: o, headers: i }, (function (e) { return K(e.body, "removed"); })); } }, { key: "isArangoCollection", get: function () { return !0; } }, { key: "name", get: function () { return this._name; } }, { key: "collection", get: function () { return this._collection; } }, { key: "graph", get: function () { return this._graph; } }]), e; }(), te = function () { function e(t, r) { V(this, e), $(this, "_name", void 0), $(this, "_db", void 0), this._name = r, this._db = t; } var t, r, i; return z(e, [{ key: "exists", value: (i = F(regeneratorRuntime.mark((function e() { return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0: return e.prev = 0, e.next = 3, this.get();
                        case 3: return e.abrupt("return", !0);
                        case 6:
                            if (e.prev = 6, e.t0 = e.catch(0), !Object(n.c)(e.t0) || e.t0.errorNum !== o.e) {
                                e.next = 10;
                                break;
                            }
                            return e.abrupt("return", !1);
                        case 10: throw e.t0;
                        case 11:
                        case "end": return e.stop();
                    } }), e, this, [[0, 6]]); }))), function () { return i.apply(this, arguments); }) }, { key: "get", value: function () { return this._db.request({ path: "/_api/gharial/".concat(this._name) }, (function (e) { return e.body.graph; })); } }, { key: "create", value: function (e, t) { var r = t || {}, n = r.orphanCollections, o = r.waitForSync, i = r.isSmart, a = r.isDisjoint, u = W(r, ["orphanCollections", "waitForSync", "isSmart", "isDisjoint"]); return this._db.request({ method: "POST", path: "/_api/gharial", body: { orphanCollections: n && (Array.isArray(n) ? n.map(f.collectionToString) : [Object(f.collectionToString)(n)]), edgeDefinitions: e.map(Y), isSmart: i, isDisjoint: a, name: this._name, options: u }, qs: { waitForSync: o } }, (function (e) { return e.body.graph; })); } }, { key: "drop", value: function () { var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]; return this._db.request({ method: "DELETE", path: "/_api/gharial/".concat(this._name), qs: { dropCollections: e } }, (function (e) { return e.body.removed; })); } }, { key: "vertexCollection", value: function (e) { return Object(f.isArangoCollection)(e) && (e = e.name), new Z(this._db, e, this); } }, { key: "listVertexCollections", value: function () { return this._db.request({ path: "/_api/gharial/".concat(this._name, "/vertex") }, (function (e) { return e.body.collections; })); } }, { key: "vertexCollections", value: (r = F(regeneratorRuntime.mark((function e() { var t, r = this; return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0: return e.next = 2, this.listVertexCollections();
                        case 2: return t = e.sent, e.abrupt("return", t.map((function (e) { return new Z(r._db, e, r); })));
                        case 4:
                        case "end": return e.stop();
                    } }), e, this); }))), function () { return r.apply(this, arguments); }) }, { key: "addVertexCollection", value: function (e) { return Object(f.isArangoCollection)(e) && (e = e.name), this._db.request({ method: "POST", path: "/_api/gharial/".concat(this._name, "/vertex"), body: { collection: e } }, (function (e) { return e.body.graph; })); } }, { key: "removeVertexCollection", value: function (e) { var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]; return Object(f.isArangoCollection)(e) && (e = e.name), this._db.request({ method: "DELETE", path: "/_api/gharial/".concat(this._name, "/vertex/").concat(e), qs: { dropCollection: t } }, (function (e) { return e.body.graph; })); } }, { key: "edgeCollection", value: function (e) { return Object(f.isArangoCollection)(e) && (e = e.name), new ee(this._db, e, this); } }, { key: "listEdgeCollections", value: function () { return this._db.request({ path: "/_api/gharial/".concat(this._name, "/edge") }, (function (e) { return e.body.collections; })); } }, { key: "edgeCollections", value: (t = F(regeneratorRuntime.mark((function e() { var t, r = this; return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0: return e.next = 2, this.listEdgeCollections();
                        case 2: return t = e.sent, e.abrupt("return", t.map((function (e) { return new ee(r._db, e, r); })));
                        case 4:
                        case "end": return e.stop();
                    } }), e, this); }))), function () { return t.apply(this, arguments); }) }, { key: "addEdgeDefinition", value: function (e) { return this._db.request({ method: "POST", path: "/_api/gharial/".concat(this._name, "/edge"), body: Y(e) }, (function (e) { return e.body.graph; })); } }, { key: "replaceEdgeDefinition", value: function (e, t) { return t || (e = (t = e).collection), Object(f.isArangoCollection)(e) && (e = e.name), this._db.request({ method: "PUT", path: "/_api/gharial/".concat(this._name, "/edge/").concat(e), body: Y(t) }, (function (e) { return e.body.graph; })); } }, { key: "removeEdgeDefinition", value: function (e) { var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]; return Object(f.isArangoCollection)(e) && (e = e.name), this._db.request({ method: "DELETE", path: "/_api/gharial/".concat(this._name, "/edge/").concat(e), qs: { dropCollection: t } }, (function (e) { return e.body.graph; })); } }, { key: "traversal", value: function (e, t) { return this._db.request({ method: "POST", path: "/_api/traversal", body: Q(Q({}, t), {}, { startVertex: e, graphName: this._name }) }, (function (e) { return e.body.result; })); } }, { key: "name", get: function () { return this._name; } }]), e; }();
        function re(e) { return (re = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e; } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e; })(e); }
        function ne(e, t) { var r; try {
            r = new FormData;
            for (var n = 0, o = Object.keys(e); n < o.length; n++) {
                var i = o[n], a = e[i];
                void 0 !== a && (a instanceof Blob || "object" !== re(a) && "function" != typeof a || (a = JSON.stringify(a)), r.append(i, a));
            }
        }
        catch (e) {
            return void t(e);
        } t(null, { body: r }); }
        function oe(e, t) { var r = Object.keys(e); if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable; }))), r.push.apply(r, n);
        } return r; }
        function ie(e) { for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? oe(Object(r), !0).forEach((function (t) { se(e, t, r[t]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : oe(Object(r)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)); }));
        } return e; }
        function ae(e, t) { if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function"); }
        function ue(e, t) { for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        } }
        function se(e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e; }
        var ce = function () { function e(t) { var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}; ae(this, e), se(this, "_db", void 0), se(this, "_path", void 0), se(this, "_headers", void 0), r ? "/" !== r.charAt(0) && (r = "/".concat(r)) : r = "", this._db = t, this._path = r, this._headers = n; } var t, r, n; return t = e, (r = [{ key: "route", value: function (t, r) { return t ? "/" !== t.charAt(0) && (t = "/".concat(t)) : t = "", new e(this._db, this._path + t, ie(ie({}, this._headers), r)); } }, { key: "request", value: function (e) { var t = ie({}, e); return t.path && "/" !== t.path ? this._path && "/" !== t.path.charAt(0) ? t.path = "/".concat(t.path) : t.path = t.path : t.path = "", t.basePath = this._path, t.headers = ie(ie({}, this._headers), t.headers), t.method = t.method ? t.method.toUpperCase() : "GET", this._db.request(t); } }, { key: "delete", value: function () { for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
                    t[r] = arguments[r]; var n = "string" == typeof t[0] ? t.shift() : void 0, o = t[0], i = t[1]; return this.request({ method: "DELETE", path: n, qs: o, headers: i }); } }, { key: "get", value: function () { for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
                    t[r] = arguments[r]; var n = "string" == typeof t[0] ? t.shift() : void 0, o = t[0], i = t[1]; return this.request({ method: "GET", path: n, qs: o, headers: i }); } }, { key: "head", value: function () { for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
                    t[r] = arguments[r]; var n = "string" == typeof t[0] ? t.shift() : void 0, o = t[0], i = t[1]; return this.request({ method: "HEAD", path: n, qs: o, headers: i }); } }, { key: "patch", value: function () { for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
                    t[r] = arguments[r]; var n = "string" == typeof t[0] ? t.shift() : void 0, o = t[0], i = t[1], a = t[2]; return this.request({ method: "DELETE", path: n, body: o, qs: i, headers: a }); } }, { key: "post", value: function () { for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
                    t[r] = arguments[r]; var n = "string" == typeof t[0] ? t.shift() : void 0, o = t[0], i = t[1], a = t[2]; return this.request({ method: "POST", path: n, body: o, qs: i, headers: a }); } }, { key: "put", value: function () { for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
                    t[r] = arguments[r]; var n = "string" == typeof t[0] ? t.shift() : void 0, o = t[0], i = t[1], a = t[2]; return this.request({ method: "PUT", path: n, body: o, qs: i, headers: a }); } }]) && ue(t.prototype, r), n && ue(t, n), e; }();
        function he(e, t, r, n, o, i, a) { try {
            var u = e[i](a), s = u.value;
        }
        catch (e) {
            return void r(e);
        } u.done ? t(s) : Promise.resolve(s).then(n, o); }
        function le(e, t) { for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        } }
        function fe(e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e; }
        var pe = function () { function e(t, r) { !function (e, t) { if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function"); }(this, e), fe(this, "_db", void 0), fe(this, "_id", void 0), this._db = t, this._id = r; } var t, r, i, a, u; return t = e, (r = [{ key: "exists", value: (a = regeneratorRuntime.mark((function e() { return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0: return e.prev = 0, e.next = 3, this.get();
                        case 3: return e.abrupt("return", !0);
                        case 6:
                            if (e.prev = 6, e.t0 = e.catch(0), !Object(n.c)(e.t0) || e.t0.errorNum !== o.f) {
                                e.next = 10;
                                break;
                            }
                            return e.abrupt("return", !1);
                        case 10: throw e.t0;
                        case 11:
                        case "end": return e.stop();
                    } }), e, this, [[0, 6]]); })), u = function () { var e = this, t = arguments; return new Promise((function (r, n) { var o = a.apply(e, t); function i(e) { he(o, r, n, i, u, "next", e); } function u(e) { he(o, r, n, i, u, "throw", e); } i(void 0); })); }, function () { return u.apply(this, arguments); }) }, { key: "get", value: function () { return this._db.request({ path: "/_api/transaction/".concat(this.id) }, (function (e) { return e.body.result; })); } }, { key: "commit", value: function () { return this._db.request({ method: "PUT", path: "/_api/transaction/".concat(this.id) }, (function (e) { return e.body.result; })); } }, { key: "abort", value: function () { return this._db.request({ method: "DELETE", path: "/_api/transaction/".concat(this.id) }, (function (e) { return e.body.result; })); } }, { key: "step", value: function (e) { var t = this._db._connection; t.setTransactionId(this.id); try {
                    var r = e();
                    if (!r)
                        throw new Error("Transaction promise was not an async function or did not return a promise!");
                    return Promise.resolve(r);
                }
                finally {
                    t.clearTransactionId();
                } } }, { key: "isArangoTransaction", get: function () { return !0; } }, { key: "id", get: function () { return this._id; } }]) && le(t.prototype, r), i && le(t, i), e; }(), de = r(6);
        function ye(e, t, r, n, o, i, a) { try {
            var u = e[i](a), s = u.value;
        }
        catch (e) {
            return void r(e);
        } u.done ? t(s) : Promise.resolve(s).then(n, o); }
        function ve(e) { return function () { var t = this, r = arguments; return new Promise((function (n, o) { var i = e.apply(t, r); function a(e) { ye(i, n, o, a, u, "next", e); } function u(e) { ye(i, n, o, a, u, "throw", e); } a(void 0); })); }; }
        function be(e, t) { var r = Object.keys(e); if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function (t) { return Object.getOwnPropertyDescriptor(e, t).enumerable; }))), r.push.apply(r, n);
        } return r; }
        function me(e) { for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? be(Object(r), !0).forEach((function (t) { ke(e, t, r[t]); })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : be(Object(r)).forEach((function (t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t)); }));
        } return e; }
        function ge(e, t) { if (null == e)
            return {}; var r, n, o = function (e, t) { if (null == e)
            return {}; var r, n, o = {}, i = Object.keys(e); for (n = 0; n < i.length; n++)
            r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]); return o; }(e, t); if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (n = 0; n < i.length; n++)
                r = i[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
        } return o; }
        function we(e, t) { if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function"); }
        function _e(e, t) { for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        } }
        function ke(e, t, r) { return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e; }
        function xe(e) { return Boolean(e && e.isArangoDatabase); }
        function Oe(e) { if ("string" == typeof e)
            return { write: [e] }; if (Array.isArray(e))
            return { write: e.map(f.collectionToString) }; if (Object(f.isArangoCollection)(e))
            return { write: Object(f.collectionToString)(e) }; var t = {}; return e && (void 0 !== e.allowImplicit && (t.allowImplicit = e.allowImplicit), e.read && (t.read = Array.isArray(e.read) ? e.read.map(f.collectionToString) : Object(f.collectionToString)(e.read)), e.write && (t.write = Array.isArray(e.write) ? e.write.map(f.collectionToString) : Object(f.collectionToString)(e.write)), e.exclusive && (t.exclusive = Array.isArray(e.exclusive) ? e.exclusive.map(f.collectionToString) : Object(f.collectionToString)(e.exclusive))), t; }
        var je = function () { function e() { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0; if (we(this, e), ke(this, "_connection", void 0), ke(this, "_name", void 0), ke(this, "_analyzers", new Map), ke(this, "_collections", new Map), ke(this, "_graphs", new Map), ke(this, "_views", new Map), xe(t)) {
            var n = t._connection, o = r || t.name;
            this._connection = n, this._name = o;
            var i = n.database(o);
            if (i)
                return i;
        }
        else {
            var a = t, u = "string" == typeof a || Array.isArray(a) ? { databaseName: r, url: a } : a, s = u.databaseName, c = ge(u, ["databaseName"]);
            this._connection = new N(c), this._name = s || "_system";
        } } var t, r, i, a, u, s, c, p, d, y, v, b, m, g, w, _, k, x, O, j, q, E, S, P, T, R; return t = e, (r = [{ key: "version", value: function (e) { return this.request({ method: "GET", path: "/_api/version", qs: { details: e } }, (function (e) { return e.body; })); } }, { key: "route", value: function (e, t) { return new ce(this, e, t); } }, { key: "request", value: function (e, t) { var r = e.absolutePath, n = void 0 !== r && r, o = e.basePath, i = ge(e, ["absolutePath", "basePath"]); return n || (o = "/_db/".concat(this.name).concat(o || "")), this._connection.request(me({ basePath: o }, i), t); } }, { key: "acquireHostList", value: (R = ve(regeneratorRuntime.mark((function e() { var t; return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0: return e.next = 2, this.request({ path: "/_api/cluster/endpoints" }, (function (e) { return e.body.endpoints.map((function (e) { return e.endpoint; })); }));
                        case 2: t = e.sent, this._connection.addToHostList(t);
                        case 4:
                        case "end": return e.stop();
                    } }), e, this); }))), function () { return R.apply(this, arguments); }) }, { key: "close", value: function () { this._connection.close(); } }, { key: "useDatabase", value: function (e) { return this._connection.database(this._name, null), this._name = e, this; } }, { key: "useBasicAuth", value: function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "root", t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""; return this._connection.setBasicAuth({ username: e, password: t }), this; } }, { key: "useBearerAuth", value: function (e) { return this._connection.setBearerAuth({ token: e }), this; } }, { key: "login", value: function () { var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "root", r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""; return this.request({ method: "POST", path: "/_open/auth", body: { username: t, password: r } }, (function (t) { return e.useBearerAuth(t.body.jwt), t.body.jwt; })); } }, { key: "database", value: function (t) { return new e(this, t); } }, { key: "get", value: function () { return this.request({ path: "/_api/database/current" }, (function (e) { return e.body.result; })); } }, { key: "exists", value: (T = ve(regeneratorRuntime.mark((function e() { return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0: return e.prev = 0, e.next = 3, this.get();
                        case 3: return e.abrupt("return", !0);
                        case 6:
                            if (e.prev = 6, e.t0 = e.catch(0), !Object(n.c)(e.t0) || e.t0.errorNum !== o.c) {
                                e.next = 10;
                                break;
                            }
                            return e.abrupt("return", !1);
                        case 10: throw e.t0;
                        case 11:
                        case "end": return e.stop();
                    } }), e, this, [[0, 6]]); }))), function () { return T.apply(this, arguments); }) }, { key: "createDatabase", value: function (e, t) { var r = this, n = Array.isArray(t) ? { users: t } : t || {}, o = n.users, i = ge(n, ["users"]); return this.request({ method: "POST", path: "/_api/database", body: { name: e, users: o, options: i } }, (function () { return r.database(e); })); } }, { key: "listDatabases", value: function () { return this.request({ path: "/_api/database" }, (function (e) { return e.body.result; })); } }, { key: "listUserDatabases", value: function () { return this.request({ path: "/_api/database/user" }, (function (e) { return e.body.result; })); } }, { key: "databases", value: function () { var e = this; return this.request({ path: "/_api/database" }, (function (t) { return t.body.result.map((function (t) { return e.database(t); })); })); } }, { key: "userDatabases", value: function () { var e = this; return this.request({ path: "/_api/database/user" }, (function (t) { return t.body.result.map((function (t) { return e.database(t); })); })); } }, { key: "dropDatabase", value: function (e) { return this.request({ method: "DELETE", path: "/_api/database/".concat(e) }, (function (e) { return e.body.result; })); } }, { key: "collection", value: function (e) { return this._collections.has(e) || this._collections.set(e, new f.Collection(this, e)), this._collections.get(e); } }, { key: "createCollection", value: (P = ve(regeneratorRuntime.mark((function e(t, r) { var n; return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0: return n = this.collection(t), e.next = 3, n.create(r);
                        case 3: return e.abrupt("return", n);
                        case 4:
                        case "end": return e.stop();
                    } }), e, this); }))), function (e, t) { return P.apply(this, arguments); }) }, { key: "createEdgeCollection", value: (S = ve(regeneratorRuntime.mark((function e(t, r) { return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0: return e.abrupt("return", this.createCollection(t, me(me({}, r), {}, { type: f.CollectionType.EDGE_COLLECTION })));
                        case 1:
                        case "end": return e.stop();
                    } }), e, this); }))), function (e, t) { return S.apply(this, arguments); }) }, { key: "renameCollection", value: (E = ve(regeneratorRuntime.mark((function e(t, r) { var n; return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0: return e.next = 2, this.request({ method: "PUT", path: "/_api/collection/".concat(t, "/rename"), body: { name: r } }, (function (e) { return e.body; }));
                        case 2: return n = e.sent, this._collections.delete(t), e.abrupt("return", n);
                        case 5:
                        case "end": return e.stop();
                    } }), e, this); }))), function (e, t) { return E.apply(this, arguments); }) }, { key: "listCollections", value: function () { var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]; return this.request({ path: "/_api/collection", qs: { excludeSystem: e } }, (function (e) { return e.body.result; })); } }, { key: "collections", value: (q = ve(regeneratorRuntime.mark((function e() { var t, r, n = this, o = arguments; return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0: return t = !(o.length > 0 && void 0 !== o[0]) || o[0], e.next = 3, this.listCollections(t);
                        case 3: return r = e.sent, e.abrupt("return", r.map((function (e) { return n.collection(e.name); })));
                        case 5:
                        case "end": return e.stop();
                    } }), e, this); }))), function () { return q.apply(this, arguments); }) }, { key: "graph", value: function (e) { return this._graphs.has(e) || this._graphs.set(e, new te(this, e)), this._graphs.get(e); } }, { key: "createGraph", value: (j = ve(regeneratorRuntime.mark((function e(t, r, n) { var o; return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0: return o = this.graph(t), e.next = 3, o.create(r, n);
                        case 3: return e.abrupt("return", o);
                        case 4:
                        case "end": return e.stop();
                    } }), e, this); }))), function (e, t, r) { return j.apply(this, arguments); }) }, { key: "listGraphs", value: function () { return this.request({ path: "/_api/gharial" }, (function (e) { return e.body.graphs; })); } }, { key: "graphs", value: (O = ve(regeneratorRuntime.mark((function e() { var t, r = this; return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0: return e.next = 2, this.listGraphs();
                        case 2: return t = e.sent, e.abrupt("return", t.map((function (e) { return r.graph(e._key); })));
                        case 4:
                        case "end": return e.stop();
                    } }), e, this); }))), function () { return O.apply(this, arguments); }) }, { key: "view", value: function (e) { return this._views.has(e) || this._views.set(e, new de.View(this, e)), this._views.get(e); } }, { key: "createView", value: (x = ve(regeneratorRuntime.mark((function e(t, r) { var n; return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0: return n = this.view(t), e.next = 3, n.create(me(me({}, r), {}, { type: de.ViewType.ARANGOSEARCH_VIEW }));
                        case 3: return e.abrupt("return", n);
                        case 4:
                        case "end": return e.stop();
                    } }), e, this); }))), function (e, t) { return x.apply(this, arguments); }) }, { key: "renameView", value: (k = ve(regeneratorRuntime.mark((function e(t, r) { var n; return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0: return e.next = 2, this.request({ method: "PUT", path: "/_api/view/".concat(t, "/rename"), body: { name: r } }, (function (e) { return e.body; }));
                        case 2: return n = e.sent, this._views.delete(t), e.abrupt("return", n);
                        case 5:
                        case "end": return e.stop();
                    } }), e, this); }))), function (e, t) { return k.apply(this, arguments); }) }, { key: "listViews", value: function () { return this.request({ path: "/_api/view" }, (function (e) { return e.body.result; })); } }, { key: "views", value: (_ = ve(regeneratorRuntime.mark((function e() { var t, r = this; return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0: return e.next = 2, this.listViews();
                        case 2: return t = e.sent, e.abrupt("return", t.map((function (e) { return r.view(e.name); })));
                        case 4:
                        case "end": return e.stop();
                    } }), e, this); }))), function () { return _.apply(this, arguments); }) }, { key: "analyzer", value: function (e) { return this._analyzers.has(e) || this._analyzers.set(e, new h(this, e)), this._analyzers.get(e); } }, { key: "createAnalyzer", value: (w = ve(regeneratorRuntime.mark((function e(t, r) { var n; return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0: return n = this.analyzer(t), e.next = 3, n.create(r);
                        case 3: return e.abrupt("return", n);
                        case 4:
                        case "end": return e.stop();
                    } }), e, this); }))), function (e, t) { return w.apply(this, arguments); }) }, { key: "listAnalyzers", value: function () { return this.request({ path: "/_api/analyzer" }, (function (e) { return e.body.result; })); } }, { key: "analyzers", value: (g = ve(regeneratorRuntime.mark((function e() { var t, r = this; return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0: return e.next = 2, this.listAnalyzers();
                        case 2: return t = e.sent, e.abrupt("return", t.map((function (e) { return r.analyzer(e.name); })));
                        case 4:
                        case "end": return e.stop();
                    } }), e, this); }))), function () { return g.apply(this, arguments); }) }, { key: "executeTransaction", value: function (e, t, r) { return this.request({ method: "POST", path: "/_api/transaction", body: me({ collections: Oe(e), action: t }, r) }, (function (e) { return e.body.result; })); } }, { key: "transaction", value: function (e) { return new pe(this, e); } }, { key: "beginTransaction", value: function (e, t) { var r = this; return this.request({ method: "POST", path: "/_api/transaction/begin", body: me({ collections: Oe(e) }, t) }, (function (e) { return new pe(r, e.body.result.id); })); } }, { key: "listTransactions", value: function () { return this._connection.request({ path: "/_api/transaction" }, (function (e) { return e.body.transactions; })); } }, { key: "transactions", value: (m = ve(regeneratorRuntime.mark((function e() { var t, r = this; return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0: return e.next = 2, this.listTransactions();
                        case 2: return t = e.sent, e.abrupt("return", t.map((function (e) { return r.transaction(e.id); })));
                        case 4:
                        case "end": return e.stop();
                    } }), e, this); }))), function () { return m.apply(this, arguments); }) }, { key: "query", value: function (e) { function t(t, r, n) { return e.apply(this, arguments); } return t.toString = function () { return e.toString(); }, t; }((function (e, t, r) { var n = this; Object(l.isAqlQuery)(e) ? (r = t, t = e.bindVars, e = e.query) : Object(l.isAqlLiteral)(e) && (e = e.toAQL()); var o = r || {}, i = o.allowDirtyRead, a = o.count, u = o.batchSize, s = o.cache, c = o.memoryLimit, h = o.ttl, f = o.timeout, p = ge(o, ["allowDirtyRead", "count", "batchSize", "cache", "memoryLimit", "ttl", "timeout"]); return this.request({ method: "POST", path: "/_api/cursor", body: { query: e, bindVars: t, count: a, batchSize: u, cache: s, memoryLimit: c, ttl: h, options: p }, allowDirtyRead: i, timeout: f }, (function (e) { return new U.a(n, e.body, e.arangojsHostId, i).items; })); })) }, { key: "explain", value: function (e, t, r) { return Object(l.isAqlQuery)(e) ? (r = t, t = e.bindVars, e = e.query) : Object(l.isAqlLiteral)(e) && (e = e.toAQL()), this.request({ method: "POST", path: "/_api/explain", body: { query: e, bindVars: t, options: r } }, (function (e) { return e.body; })); } }, { key: "parse", value: function (e) { return Object(l.isAqlQuery)(e) ? e = e.query : Object(l.isAqlLiteral)(e) && (e = e.toAQL()), this.request({ method: "POST", path: "/_api/query", body: { query: e } }, (function (e) { return e.body; })); } }, { key: "queryTracking", value: function (e) { return this.request(e ? { method: "PUT", path: "/_api/query/properties", body: e } : { method: "GET", path: "/_api/query/properties" }, (function (e) { return e.body; })); } }, { key: "listRunningQueries", value: function () { return this.request({ method: "GET", path: "/_api/query/current" }, (function (e) { return e.body; })); } }, { key: "listSlowQueries", value: function () { return this.request({ method: "GET", path: "/_api/query/slow" }, (function (e) { return e.body; })); } }, { key: "clearSlowQueries", value: function () { return this.request({ method: "DELETE", path: "/_api/query/slow" }, (function () { })); } }, { key: "killQuery", value: function (e) { return this.request({ method: "DELETE", path: "/_api/query/".concat(e) }, (function () { })); } }, { key: "listFunctions", value: function () { return this.request({ path: "/_api/aqlfunction" }, (function (e) { return e.body.result; })); } }, { key: "createFunction", value: function (e, t) { var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]; return this.request({ method: "POST", path: "/_api/aqlfunction", body: { name: e, code: t, isDeterministic: r } }, (function (e) { return e.body; })); } }, { key: "dropFunction", value: function (e) { var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]; return this.request({ method: "DELETE", path: "/_api/aqlfunction/".concat(e), qs: { group: t } }, (function (e) { return e.body; })); } }, { key: "listServices", value: function () { var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]; return this.request({ path: "/_api/foxx", qs: { excludeSystem: e } }, (function (e) { return e.body; })); } }, { key: "installService", value: (b = ve(regeneratorRuntime.mark((function e(t, r) { var n, o, i, a, u, s = arguments; return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0: return n = s.length > 2 && void 0 !== s[2] ? s[2] : {}, o = n.configuration, i = n.dependencies, a = ge(n, ["configuration", "dependencies"]), e.next = 4, ne({ configuration: o, dependencies: i, source: r });
                        case 4: return u = e.sent, e.next = 7, this.request(me(me({}, u), {}, { method: "POST", path: "/_api/foxx", isBinary: !0, qs: me(me({}, a), {}, { mount: t }) }), (function (e) { return e.body; }));
                        case 7: return e.abrupt("return", e.sent);
                        case 8:
                        case "end": return e.stop();
                    } }), e, this); }))), function (e, t) { return b.apply(this, arguments); }) }, { key: "replaceService", value: (v = ve(regeneratorRuntime.mark((function e(t, r) { var n, o, i, a, u, s = arguments; return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0: return n = s.length > 2 && void 0 !== s[2] ? s[2] : {}, o = n.configuration, i = n.dependencies, a = ge(n, ["configuration", "dependencies"]), e.next = 4, ne({ configuration: o, dependencies: i, source: r });
                        case 4: return u = e.sent, e.next = 7, this.request(me(me({}, u), {}, { method: "PUT", path: "/_api/foxx/service", isBinary: !0, qs: me(me({}, a), {}, { mount: t }) }), (function (e) { return e.body; }));
                        case 7: return e.abrupt("return", e.sent);
                        case 8:
                        case "end": return e.stop();
                    } }), e, this); }))), function (e, t) { return v.apply(this, arguments); }) }, { key: "upgradeService", value: (y = ve(regeneratorRuntime.mark((function e(t, r) { var n, o, i, a, u, s = arguments; return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0: return n = s.length > 2 && void 0 !== s[2] ? s[2] : {}, o = n.configuration, i = n.dependencies, a = ge(n, ["configuration", "dependencies"]), e.next = 4, ne({ configuration: o, dependencies: i, source: r });
                        case 4: return u = e.sent, e.next = 7, this.request(me(me({}, u), {}, { method: "PATCH", path: "/_api/foxx/service", isBinary: !0, qs: me(me({}, a), {}, { mount: t }) }), (function (e) { return e.body; }));
                        case 7: return e.abrupt("return", e.sent);
                        case 8:
                        case "end": return e.stop();
                    } }), e, this); }))), function (e, t) { return y.apply(this, arguments); }) }, { key: "uninstallService", value: function (e, t) { return this.request({ method: "DELETE", path: "/_api/foxx/service", qs: me(me({}, t), {}, { mount: e }) }, (function () { })); } }, { key: "getService", value: function (e) { return this.request({ path: "/_api/foxx/service", qs: { mount: e } }, (function (e) { return e.body; })); } }, { key: "getServiceConfiguration", value: (d = ve(regeneratorRuntime.mark((function e(t) { var r, n, o, i, a, u, s = arguments; return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0: return r = s.length > 1 && void 0 !== s[1] && s[1], e.next = 3, this.request({ path: "/_api/foxx/configuration", qs: { mount: t, minimal: r } }, (function (e) { return e.body; }));
                        case 3:
                            if (n = e.sent, r && Object.keys(n).every((function (e) { return n[e].title; }))) {
                                e.next = 6;
                                break;
                            }
                            return e.abrupt("return", n);
                        case 6:
                            for (o = {}, i = 0, a = Object.keys(n); i < a.length; i++)
                                u = a[i], o[u] = n[u].current;
                            return e.abrupt("return", o);
                        case 9:
                        case "end": return e.stop();
                    } }), e, this); }))), function (e) { return d.apply(this, arguments); }) }, { key: "replaceServiceConfiguration", value: (p = ve(regeneratorRuntime.mark((function e(t, r) { var n, o, i, a, u, s, c = arguments; return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0: return n = c.length > 2 && void 0 !== c[2] && c[2], e.next = 3, this.request({ method: "PUT", path: "/_api/foxx/configuration", body: r, qs: { mount: t, minimal: n } }, (function (e) { return e.body; }));
                        case 3:
                            if (o = e.sent, !n && o.values && Object.keys(o.values).every((function (e) { return o.values[e].title; }))) {
                                e.next = 6;
                                break;
                            }
                            return e.abrupt("return", o);
                        case 6: return e.next = 8, this.getServiceConfiguration(t, !1);
                        case 8:
                            if (i = e.sent, o.warnings)
                                for (a = 0, u = Object.keys(i); a < u.length; a++)
                                    s = u[a], i[s].warning = o.warnings[s];
                            return e.abrupt("return", i);
                        case 11:
                        case "end": return e.stop();
                    } }), e, this); }))), function (e, t) { return p.apply(this, arguments); }) }, { key: "updateServiceConfiguration", value: (c = ve(regeneratorRuntime.mark((function e(t, r) { var n, o, i, a, u, s, c = arguments; return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0: return n = c.length > 2 && void 0 !== c[2] && c[2], e.next = 3, this.request({ method: "PATCH", path: "/_api/foxx/configuration", body: r, qs: { mount: t, minimal: n } }, (function (e) { return e.body; }));
                        case 3:
                            if (o = e.sent, !n && o.values && Object.keys(o.values).every((function (e) { return o.values[e].title; }))) {
                                e.next = 6;
                                break;
                            }
                            return e.abrupt("return", o);
                        case 6: return e.next = 8, this.getServiceConfiguration(t, !1);
                        case 8:
                            if (i = e.sent, o.warnings)
                                for (a = 0, u = Object.keys(i); a < u.length; a++)
                                    s = u[a], i[s].warning = o.warnings[s];
                            return e.abrupt("return", i);
                        case 11:
                        case "end": return e.stop();
                    } }), e, this); }))), function (e, t) { return c.apply(this, arguments); }) }, { key: "getServiceDependencies", value: (s = ve(regeneratorRuntime.mark((function e(t) { var r, n, o, i, a, u, s = arguments; return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0: return r = s.length > 1 && void 0 !== s[1] && s[1], e.next = 3, this.request({ path: "/_api/foxx/dependencies", qs: { mount: t, minimal: r } }, (function (e) { return e.body; }));
                        case 3:
                            if (n = e.sent, r && Object.keys(n).every((function (e) { return n[e].title; }))) {
                                e.next = 6;
                                break;
                            }
                            return e.abrupt("return", n);
                        case 6:
                            for (o = {}, i = 0, a = Object.keys(n); i < a.length; i++)
                                u = a[i], o[u] = n[u].current;
                            return e.abrupt("return", o);
                        case 9:
                        case "end": return e.stop();
                    } }), e, this); }))), function (e) { return s.apply(this, arguments); }) }, { key: "replaceServiceDependencies", value: (u = ve(regeneratorRuntime.mark((function e(t, r) { var n, o, i, a, u, s, c = arguments; return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0: return n = c.length > 2 && void 0 !== c[2] && c[2], e.next = 3, this.request({ method: "PUT", path: "/_api/foxx/dependencies", body: r, qs: { mount: t, minimal: n } }, (function (e) { return e.body; }));
                        case 3:
                            if (o = e.sent, !n && o.values && Object.keys(o.values).every((function (e) { return o.values[e].title; }))) {
                                e.next = 6;
                                break;
                            }
                            return e.abrupt("return", o);
                        case 6: return e.next = 8, this.getServiceDependencies(t, !1);
                        case 8:
                            if (i = e.sent, o.warnings)
                                for (a = 0, u = Object.keys(i); a < u.length; a++)
                                    s = u[a], i[s].warning = o.warnings[s];
                            return e.abrupt("return", i);
                        case 11:
                        case "end": return e.stop();
                    } }), e, this); }))), function (e, t) { return u.apply(this, arguments); }) }, { key: "updateServiceDependencies", value: (a = ve(regeneratorRuntime.mark((function e(t, r) { var n, o, i, a, u, s, c = arguments; return regeneratorRuntime.wrap((function (e) { for (;;)
                    switch (e.prev = e.next) {
                        case 0: return n = c.length > 2 && void 0 !== c[2] && c[2], e.next = 3, this.request({ method: "PATCH", path: "/_api/foxx/dependencies", body: r, qs: { mount: t, minimal: n } }, (function (e) { return e.body; }));
                        case 3:
                            if (o = e.sent, !n && o.values && Object.keys(o.values).every((function (e) { return o.values[e].title; }))) {
                                e.next = 6;
                                break;
                            }
                            return e.abrupt("return", o);
                        case 6: return e.next = 8, this.getServiceDependencies(t, !1);
                        case 8:
                            if (i = e.sent, o.warnings)
                                for (a = 0, u = Object.keys(i); a < u.length; a++)
                                    s = u[a], i[s].warning = o.warnings[s];
                            return e.abrupt("return", i);
                        case 11:
                        case "end": return e.stop();
                    } }), e, this); }))), function (e, t) { return a.apply(this, arguments); }) }, { key: "setServiceDevelopmentMode", value: function (e) { var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]; return this.request({ method: t ? "POST" : "DELETE", path: "/_api/foxx/development", qs: { mount: e } }, (function (e) { return e.body; })); } }, { key: "listServiceScripts", value: function (e) { return this.request({ path: "/_api/foxx/scripts", qs: { mount: e } }, (function (e) { return e.body; })); } }, { key: "runServiceScript", value: function (e, t, r) { return this.request({ method: "POST", path: "/_api/foxx/scripts/".concat(t), body: r, qs: { mount: e } }, (function (e) { return e.body; })); } }, { key: "runServiceTests", value: function (e, t) { return this.request({ method: "POST", path: "/_api/foxx/tests", qs: me(me({}, t), {}, { mount: e }) }, (function (e) { return e.body; })); } }, { key: "getServiceReadme", value: function (e) { return this.request({ path: "/_api/foxx/readme", qs: { mount: e } }, (function (e) { return e.body; })); } }, { key: "getServiceDocumentation", value: function (e) { return this.request({ path: "/_api/foxx/swagger", qs: { mount: e } }, (function (e) { return e.body; })); } }, { key: "downloadService", value: function (e) { return this.request({ method: "POST", path: "/_api/foxx/download", qs: { mount: e }, expectBinary: !0 }, (function (e) { return e.body; })); } }, { key: "commitLocalServiceState", value: function () { var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]; return this.request({ method: "POST", path: "/_api/foxx/commit", qs: { replace: e } }, (function () { })); } }, { key: "isArangoDatabase", get: function () { return !0; } }, { key: "name", get: function () { return this._name; } }]) && _e(t.prototype, r), i && _e(t, i), e; }();
    }]); }));
//# sourceMappingURL=web.js.map
