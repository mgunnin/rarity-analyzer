;(this["webpackJsonp@crypto-dev-amigos/client"] =
  this["webpackJsonp@crypto-dev-amigos/client"] || []).push([
  [0],
  {
    112: function (t, e, n) {},
    113: function (t, e, n) {},
    114: function (t, e, n) {},
    117: function (t, e, n) {
      "use strict"
      n.r(e)
      var r = n(2),
        c = n.n(r),
        i = n(57),
        a = n.n(i),
        s = (n(112), n(113), n(114), n(5)),
        o = n.n(s),
        l = n(8),
        u = n(6),
        d = n(4),
        j = n(1),
        f = function (t) {
          var e = t.ratio,
            n = t.text,
            r = t.textRight
          return Object(j.jsxs)("div", {
            className: "bar-graph",
            style: { position: "relative" },
            children: [
              Object(j.jsx)("div", {
                className: "bar-graph-background",
                style: {
                  position: "absolute",
                  zIndex: 0,
                  width: "".concat((100 * e).toFixed(0), "%"),
                  height: "100%",
                },
              }),
              Object(j.jsxs)("div", {
                style: {
                  position: "relative",
                  zIndex: 10,
                  display: "flex",
                  flexDirection: "row",
                },
                children: [
                  Object(j.jsx)("div", {
                    className: "bar-graph-text-right",
                    style: { opacity: 0 },
                    children: r,
                  }),
                  Object(j.jsx)("div", {
                    className: "bar-graph-text",
                    style: { flex: 1 },
                    children:
                      null !== n && void 0 !== n
                        ? n
                        : "".concat((100 * e).toFixed(2), "%"),
                  }),
                  Object(j.jsx)("div", {
                    className: "bar-graph-text-right",
                    style: {},
                    children: r,
                  }),
                ],
              }),
            ],
          })
        },
        v = n(58),
        p = n(24),
        b = n(59),
        h = n(18),
        x = function (t) {
          switch (t.icon) {
            case "twitter":
              return Object(j.jsx)(v.a, {})
            case "discord":
              return Object(j.jsx)(p.a, {})
            case "link":
              return Object(j.jsx)(b.a, {})
            case "eth":
              return Object(j.jsx)(p.b, {})
            case "collapsed":
              return Object(j.jsx)(h.b, {})
            case "expanded":
              return Object(j.jsx)(h.a, {})
            case "loading":
              return Object(j.jsx)(h.c, {})
          }
          return Object(j.jsx)(j.Fragment, {})
        },
        O = function () {
          return Object(j.jsx)("div", {
            className: "loading",
            children: Object(j.jsx)(x, { icon: "loading" }),
          })
        },
        m = function (t) {
          var e = t.url,
            n = t.icon,
            r = t.iconUrl
          return Object(j.jsx)(j.Fragment, {
            children:
              !!e &&
              Object(j.jsxs)("a", {
                href: e,
                style: {
                  display: "inline-block",
                  width: 32,
                  height: 32,
                  fontSize: 20,
                },
                children: [
                  !!n && Object(j.jsx)(x, { icon: n }),
                  !!r &&
                    Object(j.jsx)("img", {
                      style: { width: 20, height: 20 },
                      src: r,
                      alt: "link",
                    }),
                ],
              }),
          })
        },
        y = function (t) {
          return "/data/".concat(t, "/project.json")
        },
        k = function (t, e) {
          return "/data/".concat(t, "/").concat(e, ".json")
        },
        g = function (t) {
          return t.replace("ipfs://", "https://metagallery.com/ipfs/")
        }
      function w(t) {
        return I.apply(this, arguments)
      }
      function I() {
        return (I = Object(u.a)(
          o.a.mark(function t(e) {
            return o.a.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.next = 2),
                      new Promise(function (t) {
                        setTimeout(t, e)
                      })
                    )
                  case 2:
                    return t.abrupt("return", t.sent)
                  case 3:
                  case "end":
                    return t.stop()
                }
            }, t)
          })
        )).apply(this, arguments)
      }
      Date.now()
      var S = [],
        _ = 0,
        N = (function () {
          var t = Object(u.a)(
            o.a.mark(function t() {
              var e, n, r
              return o.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return _++, (e = _), (t.next = 4), w(100)
                    case 4:
                      n = 0
                    case 5:
                      if (!(n < S.length)) {
                        t.next = 15
                        break
                      }
                      if (!(r = S[n]) || !r()) {
                        t.next = 10
                        break
                      }
                      return (t.next = 10), w(25)
                    case 10:
                      if ((n++, e === _)) {
                        t.next = 13
                        break
                      }
                      return t.abrupt("return")
                    case 13:
                      t.next = 5
                      break
                    case 15:
                    case "end":
                      return t.stop()
                  }
              }, t)
            })
          )
          return function () {
            return t.apply(this, arguments)
          }
        })()
      window.addEventListener("scroll", N),
        window.addEventListener("load", function () {
          new IntersectionObserver(N).observe(
            document.getElementsByTagName("body")[0]
          )
        })
      var C = 0,
        F = function (t) {
          var e = t.children,
            n = t.onLoad,
            c = Object(r.useRef)(null),
            i = Object(r.useState)(!1),
            a = Object(d.a)(i, 2),
            s = a[0],
            o = a[1],
            l = Object(r.useRef)(!1)
          Object(r.useRef)(C++)
          return (
            Object(r.useEffect)(
              function () {
                if (c.current) {
                  var t = c.current
                  l.current = !1
                  var e = S.length
                  S.push(function () {
                    if (!c.current) return !1
                    if (l.current) return !1
                    var e = t.getBoundingClientRect(),
                      i = window.scrollY + window.innerHeight
                    return (
                      e.top < i &&
                      ((l.current = !0),
                      r(),
                      o(!0),
                      N(),
                      null === n || void 0 === n || n(),
                      !0)
                    )
                  })
                  var r = function () {
                    S[e] = null
                  }
                  return (
                    N(),
                    function () {
                      ;(l.current = !0), r()
                    }
                  )
                }
              },
              [e, n]
            ),
            Object(j.jsxs)(j.Fragment, {
              children: [
                !s &&
                  Object(j.jsx)("div", {
                    ref: c,
                    style: { minWidth: 100, minHeight: 100 },
                  }),
                s && e,
              ],
            })
          )
        },
        R = function (t) {
          var e = t.src,
            n = t.alt,
            c = t.style,
            i = Object(r.useState)(!0),
            a = Object(d.a)(i, 2),
            s = a[0],
            o = a[1],
            l = Object(r.useState)(!1),
            u = Object(d.a)(l, 2),
            f = u[0],
            v = u[1],
            p = Object(r.useRef)(1),
            b = Object(r.useRef)(0),
            h = function () {
              clearTimeout(b.current),
                p.current > 5 ||
                  (b.current = setTimeout(function () {
                    p.current++, v(!1)
                  }, 1e3 * Math.pow(2, p.current)))
            }
          return (
            Object(r.useEffect)(function () {
              return function () {
                clearTimeout(b.current)
              }
            }, []),
            e
              ? Object(j.jsx)(j.Fragment, {
                  children: Object(j.jsxs)(F, {
                    children: [
                      s && Object(j.jsx)(O, {}),
                      !f &&
                        Object(j.jsx)(
                          "img",
                          {
                            alt: n,
                            style: c,
                            src: g(e),
                            onLoadStart: h,
                            onLoad: function () {
                              clearTimeout(b.current), o(!1)
                            },
                            onError: function () {
                              clearTimeout(b.current),
                                p.current > 5 || (v(!0), h())
                            },
                          },
                          p.current
                        ),
                    ],
                  }),
                })
              : Object(j.jsx)(j.Fragment, {})
          )
        },
        T = function (t) {
          var e = t.price
          return e
            ? Object(j.jsxs)(j.Fragment, {
                children: [
                  Object(j.jsxs)("div", {
                    style: { display: "inline-block", minWidth: 100 },
                    children: [
                      Object(j.jsx)("span", { children: e.price.toFixed(3) }),
                      e.symbol &&
                        ("eth" === e.symbol.toLowerCase()
                          ? Object(j.jsx)("span", {
                              className: "black-or-white",
                              children: Object(j.jsx)(x, { icon: "eth" }),
                            })
                          : "weth" === e.symbol.toLowerCase()
                          ? Object(j.jsx)("span", {
                              style: { color: "#ca477b" },
                              children: Object(j.jsx)(x, { icon: "eth" }),
                            })
                          : Object(j.jsx)("span", { children: e.symbol })),
                    ],
                  }),
                  Object(j.jsx)("div", {
                    style: { display: "inline-block", minWidth: 100 },
                    children: Object(j.jsx)("span", {
                      children: e.priceUsd
                        ? " $".concat(e.priceUsd.toFixed(2))
                        : "",
                    }),
                  }),
                ],
              })
            : Object(j.jsx)("span", { children: "-?-" })
        },
        M = function (t) {
          return Object(j.jsx)(j.Fragment, {
            children: Object(j.jsxs)("div", {
              className: "nft-card",
              children: [
                Object(j.jsx)(O, {}),
                Object(j.jsx)("div", { style: { height: 300 } }),
              ],
            }),
          })
        },
        L = function (t) {
          var e = t.nft,
            n = t.onSelect
          return Object(j.jsx)(j.Fragment, {
            children: Object(j.jsxs)("div", {
              className: "nft-card",
              children: [
                Object(j.jsxs)("div", {
                  className: "nft-card-header",
                  children: [
                    Object(j.jsxs)("div", {
                      className: "nft-card-header-item",
                      children: [
                        Object(j.jsx)("div", {
                          className: "nft-card-header-item-label",
                          children: "Rarity Score:",
                        }),
                        Object(j.jsx)("div", {
                          className: "nft-card-header-item-value",
                          children: e.rarityScore.toFixed(2),
                        }),
                      ],
                    }),
                    Object(j.jsxs)("div", {
                      className: "nft-card-header-item",
                      children: [
                        Object(j.jsx)("div", {
                          className: "nft-card-header-item-label",
                          children: "Rank:",
                        }),
                        Object(j.jsx)("div", {
                          className: "nft-card-header-item-value",
                          children: e.rank,
                        }),
                      ],
                    }),
                    Object(j.jsxs)("div", {
                      className: "nft-card-header-item-2",
                      children: [
                        Object(j.jsx)("div", {
                          className: "nft-card-header-item-label",
                          children: "Last Sell:",
                        }),
                        Object(j.jsx)("div", {
                          className: "nft-card-header-item-value",
                          children: Object(j.jsx)(T, { price: e.lastSell }),
                        }),
                      ],
                    }),
                    Object(j.jsxs)("div", {
                      className: "nft-card-header-item-2",
                      children: [
                        Object(j.jsx)("div", {
                          className: "nft-card-header-item-label",
                          children: "Listing:",
                        }),
                        Object(j.jsx)("div", {
                          className: "nft-card-header-item-value",
                          children: Object(j.jsx)(T, { price: e.listing }),
                        }),
                      ],
                    }),
                    Object(j.jsxs)("div", {
                      className: "nft-card-header-token-id",
                      children: ["TokenId: ", e.nft.id],
                    }),
                    Object(j.jsx)("div", {
                      className: "nft-card-header-title",
                      children: e.nft.name,
                    }),
                  ],
                }),
                Object(j.jsxs)("div", {
                  className: "nft-card-content",
                  children: [
                    Object(j.jsxs)("div", {
                      style: {
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-end",
                      },
                      children: [
                        Object(j.jsx)(m, {
                          url: e.nft.external_url,
                          icon: "link",
                        }),
                        Object(j.jsx)(m, {
                          url: e.openSeaLink,
                          iconUrl: "/media/opensea.png",
                        }),
                      ],
                    }),
                    Object(j.jsx)("div", {
                      className: "nft-card-image",
                      children: Object(j.jsx)(R, {
                        alt: "nft",
                        src: e.nft.image,
                      }),
                    }),
                    Object(j.jsxs)("div", {
                      className: "nft-card-stats",
                      children: [
                        Object(j.jsxs)("div", {
                          className: "nft-card-stats-row nft-card-stats-title",
                          style: { fontSize: "0.8em" },
                          children: [
                            Object(j.jsx)("div", {
                              className: "nft-card-stats-cell",
                              style: { textAlign: "left" },
                              children: "Trait",
                            }),
                            Object(j.jsx)("div", {
                              className: "nft-card-stats-cell",
                              style: { textAlign: "right" },
                              children: "Rarity Score",
                            }),
                          ],
                        }),
                        Object(j.jsxs)("div", {
                          className: "nft-card-stats-row nft-card-stats-title",
                          style: { fontSize: "0.8em" },
                          children: [
                            Object(j.jsx)("div", {
                              className: "nft-card-stats-cell",
                              style: { textAlign: "right" },
                              children: "",
                            }),
                            Object(j.jsx)("div", {
                              className: "nft-card-stats-cell",
                              children: "Commonality",
                            }),
                          ],
                        }),
                        e.attributeRarities.map(function (t) {
                          return Object(j.jsxs)(
                            c.a.Fragment,
                            {
                              children: [
                                Object(j.jsxs)("div", {
                                  className: "nft-card-stats-row",
                                  children: [
                                    Object(j.jsx)("div", {
                                      className:
                                        "nft-card-stats-cell nft-card-stats-title",
                                      style: { textAlign: "left" },
                                      children: t.trait_type,
                                    }),
                                    Object(j.jsx)("div", {
                                      className:
                                        "nft-card-stats-cell numeric-value",
                                      style: { textAlign: "right" },
                                      children: "".concat(
                                        t.ratioScore.toFixed(2)
                                      ),
                                    }),
                                  ],
                                }),
                                Object(j.jsxs)("div", {
                                  className: "nft-card-stats-row",
                                  children: [
                                    Object(j.jsx)("div", {
                                      className: "nft-card-stats-cell ".concat(
                                        n ? "link" : ""
                                      ),
                                      style: { textAlign: "right" },
                                      children: Object(j.jsx)("span", {
                                        onClick: function (e) {
                                          n &&
                                            (e.preventDefault(),
                                            e.stopPropagation(),
                                            n({
                                              traitType: t.trait_type,
                                              value: t.value,
                                            }))
                                        },
                                        style:
                                          "[Missing]" !== t.value
                                            ? { fontWeight: "bold" }
                                            : {},
                                        children: t.value,
                                      }),
                                    }),
                                    Object(j.jsx)("div", {
                                      className:
                                        "nft-card-stats-cell numeric-value",
                                      children: Object(j.jsx)(f, {
                                        ratio: t.ratio,
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            },
                            t.trait_type
                          )
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })
        },
        E = (function () {
          var t = Object(u.a)(
            o.a.mark(function t(e) {
              var n, r, c, i, a
              return o.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (n = e.contractAddress),
                        (r = e.tokenId),
                        (c = "https://api.opensea.io/api/v1/asset/"
                          .concat(n, "/")
                          .concat(r, "/")),
                        (t.next = 4),
                        fetch(c)
                      )
                    case 4:
                      return (i = t.sent), (t.next = 7), i.json()
                    case 7:
                      return (a = t.sent), t.abrupt("return", a)
                    case 9:
                    case "end":
                      return t.stop()
                  }
              }, t)
            })
          )
          return function (e) {
            return t.apply(this, arguments)
          }
        })(),
        A = function (t) {
          var e,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : ":root",
            r = function (t) {
              return t.replace(/[A-Z]/g, function (t) {
                return "-" + t.toLowerCase()
              })
            },
            c = null !== t && void 0 !== t ? t : {},
            i = "\n"
              .concat(n, " {\n    ")
              .concat(
                Object.keys(c)
                  .filter(function (t) {
                    return c[t] && "string" === typeof c[t]
                  })
                  .map(function (t) {
                    return "\n    --".concat(r(t), ": ").concat(c[t], ";")
                  })
                  .join(""),
                "\n\n    --black-or-white: "
              )
              .concat(
                (null === t || void 0 === t ? void 0 : t.isDark)
                  ? "#FFFFFF"
                  : "#000000",
                "\n}\n    "
              ),
            a = "__themeStyleOverride" + n,
            s = document.getElementById(a)
          null === s || void 0 === s || s.remove()
          var o = document.createElement("style")
          ;(o.innerHTML = i),
            (o.id = a),
            document.head.appendChild(o),
            D.changeTheme(
              null === (e = null === t || void 0 === t ? void 0 : t.isDark) ||
                void 0 === e ||
                e
            )
        },
        z = [],
        D = {
          subscribe: function (t) {
            z.push(t)
          },
          changeTheme: function (t) {
            z.forEach(function (e) {
              return e(t)
            })
          },
        },
        K = function (t) {
          var e = t.projectKey,
            n = t.tokenId,
            c = t.contractAddress,
            i = t.onSelect,
            a = Object(r.useState)(null),
            s = Object(d.a)(a, 2),
            f = s[0],
            v = s[1],
            p = Object(r.useState)(""),
            b = Object(d.a)(p, 2),
            h = b[0],
            x = b[1]
          return (
            Object(r.useEffect)(
              function () {
                Object(u.a)(
                  o.a.mark(function t() {
                    var r,
                      i,
                      a,
                      s,
                      u,
                      d,
                      j,
                      f,
                      p,
                      b,
                      h,
                      O,
                      m,
                      g,
                      w,
                      I,
                      S,
                      _,
                      N,
                      C,
                      F,
                      R,
                      T,
                      M,
                      L,
                      z
                    return o.a.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (m = null),
                                (t.prev = 1),
                                (g = k(e, n)),
                                (t.next = 5),
                                fetch(g)
                              )
                            case 5:
                              return (w = t.sent), (t.next = 8), w.json()
                            case 8:
                              ;(m = t.sent), (t.next = 15)
                              break
                            case 11:
                              return (
                                (t.prev = 11),
                                (t.t0 = t.catch(1)),
                                x("Not Found"),
                                t.abrupt("return")
                              )
                            case 15:
                              if (
                                (m.attributeRarities.sort(function (t, e) {
                                  return t.trait_type.localeCompare(
                                    e.trait_type
                                  )
                                }),
                                v(m),
                                c)
                              ) {
                                t.next = 29
                                break
                              }
                              return (I = y(e)), (t.next = 21), fetch(I)
                            case 21:
                              return (S = t.sent), (t.next = 24), S.json()
                            case 24:
                              if (
                                ((_ = t.sent),
                                (c = _.project.contract),
                                A(_.project.theme),
                                c)
                              ) {
                                t.next = 29
                                break
                              }
                              return t.abrupt("return")
                            case 29:
                              return (
                                (t.next = 31),
                                E({ contractAddress: c, tokenId: n })
                              )
                            case 31:
                              ;(N = t.sent),
                                (C =
                                  parseFloat(
                                    null !==
                                      (r =
                                        null === (i = N.last_sale) ||
                                        void 0 === i
                                          ? void 0
                                          : i.total_price) && void 0 !== r
                                      ? r
                                      : "0"
                                  ) /
                                  Math.pow(
                                    10,
                                    null !==
                                      (a =
                                        null === (s = N.last_sale) ||
                                        void 0 === s
                                          ? void 0
                                          : s.payment_token.decimals) &&
                                      void 0 !== a
                                      ? a
                                      : 0
                                  )),
                                (F =
                                  null === (u = N.last_sale) || void 0 === u
                                    ? void 0
                                    : u.payment_token.symbol),
                                (R =
                                  C *
                                  parseFloat(
                                    null !==
                                      (d =
                                        null === (j = N.last_sale) ||
                                        void 0 === j
                                          ? void 0
                                          : j.payment_token.usd_price) &&
                                      void 0 !== d
                                      ? d
                                      : "1"
                                  )),
                                (T =
                                  null === (f = N.orders) ||
                                  void 0 === f ||
                                  null ===
                                    (p = f.filter(function (t) {
                                      return 1 === t.side
                                    })) ||
                                  void 0 === p
                                    ? void 0
                                    : p[0]),
                                (M =
                                  parseFloat(
                                    null !==
                                      (b =
                                        null === T || void 0 === T
                                          ? void 0
                                          : T.current_price) && void 0 !== b
                                      ? b
                                      : "0"
                                  ) /
                                  Math.pow(
                                    10,
                                    null !==
                                      (h =
                                        null === T || void 0 === T
                                          ? void 0
                                          : T.payment_token_contract
                                              .decimals) && void 0 !== h
                                      ? h
                                      : 0
                                  )),
                                (L =
                                  null === T || void 0 === T
                                    ? void 0
                                    : T.payment_token_contract.symbol),
                                (z =
                                  M *
                                  parseFloat(
                                    null !==
                                      (O =
                                        null === T || void 0 === T
                                          ? void 0
                                          : T.payment_token_contract
                                              .usd_price) && void 0 !== O
                                      ? O
                                      : "1"
                                  )),
                                v(
                                  Object(l.a)(
                                    Object(l.a)({}, m),
                                    {},
                                    {
                                      lastSell: N.last_sale
                                        ? { price: C, symbol: F, priceUsd: R }
                                        : void 0,
                                      listing: T
                                        ? { price: M, symbol: L, priceUsd: z }
                                        : void 0,
                                      openSeaLink: N.permalink,
                                    }
                                  )
                                )
                            case 40:
                            case "end":
                              return t.stop()
                          }
                      },
                      t,
                      null,
                      [[1, 11]]
                    )
                  })
                )()
              },
              [e, n]
            ),
            Object(j.jsxs)(j.Fragment, {
              children: [
                h && Object(j.jsx)("div", { children: h }),
                !f && !h && Object(j.jsx)(M, {}),
                f && Object(j.jsx)(L, { nft: f, onSelect: i }),
              ],
            })
          )
        },
        B = n(7),
        P = function (t) {
          var e = t.items,
            n = t.getItemKey,
            i = t.ItemComponent,
            a = Object(r.useState)(12),
            s = Object(d.a)(a, 2),
            o = s[0],
            l = s[1],
            u = Object(r.useRef)(12)
          u.current = o
          var f = e.slice(0, o)
          return Object(j.jsx)(j.Fragment, {
            children: f.map(function (t, e) {
              return Object(j.jsx)(
                c.a.Fragment,
                {
                  children: Object(j.jsx)(F, {
                    onLoad: function () {
                      return (function (t) {
                        u.current === o &&
                          (t + 3 < o ||
                            l(function (t) {
                              return t + 12
                            }))
                      })(e)
                    },
                    children: Object(j.jsx)(i, { item: t }),
                  }),
                },
                n(t)
              )
            }),
          })
        },
        H = "[All]",
        U = n(19),
        W = n(25),
        Y = function (t) {
          var e = t.projectKey,
            n = t.projectRarity,
            c = t.tokenIds,
            i = t.selected,
            a = t.onSelect,
            s = Object(r.useRef)(null),
            l = e + JSON.stringify(i),
            f = Object(r.useState)(!0),
            v = Object(d.a)(f, 2),
            p = v[0],
            b = v[1],
            h = Object(r.useState)(64),
            m = Object(d.a)(h, 2),
            y = m[0],
            k = m[1],
            g = Object(r.useState)(!1),
            w = Object(d.a)(g, 2),
            I = w[0],
            S = w[1]
          Object(r.useEffect)(
            function () {
              if (I) {
                var t = s.current
                if (t) {
                  var e = !0,
                    r = function () {}
                  Object(u.a)(
                    o.a.mark(function s() {
                      var l, u, d, j
                      return o.a.wrap(function (s) {
                        for (;;)
                          switch ((s.prev = s.next)) {
                            case 0:
                              return (
                                J(t, { nodes: [], links: [] }, function () {}),
                                (s.next = 3),
                                X(n, c, i, y)
                              )
                            case 3:
                              if (
                                ((l = s.sent),
                                (u = l.data),
                                (d = l.nodeIdsMap),
                                e)
                              ) {
                                s.next = 8
                                break
                              }
                              return s.abrupt("return")
                            case 8:
                              ;(j = function (t) {
                                var e = t.map(function (t) {
                                  return d.get(t)
                                })
                                console.log("onSelect", {
                                  nodeIds: t,
                                  items: e,
                                }),
                                  e.forEach(function (t) {
                                    t &&
                                      a({
                                        traitType: t.trait_type,
                                        value: t.trait_value,
                                      })
                                  })
                              }),
                                (r = function () {
                                  J(t, u, j)
                                })(),
                                b(!1)
                            case 12:
                            case "end":
                              return s.stop()
                          }
                      }, s)
                    })
                  )(),
                    b(!0)
                  var l = function () {
                    r()
                  }
                  return (
                    window.addEventListener("resize", l),
                    function () {
                      ;(e = !1), window.removeEventListener("resize", l)
                    }
                  )
                }
              }
            },
            [l, c.size, y, I]
          )
          var _ = Math.max(0.25, Math.min(0.75, 0.1 * c.size)),
            N = function (t) {
              var e = t.value
              return Object(j.jsx)("div", {
                className: "link",
                style: { paddingLeft: 8 },
                onClick: function (t) {
                  t.preventDefault(), t.stopPropagation(), k(e)
                },
                children: e,
              })
            }
          return Object(j.jsxs)("div", {
            children: [
              Object(j.jsxs)("div", {
                style: { display: "flex", flexDirection: "row" },
                onClick: function () {
                  return S(function (t) {
                    return !t
                  })
                },
                children: [
                  Object(j.jsx)("div", {
                    style: { fontSize: 18 },
                    children: I
                      ? Object(j.jsx)(x, { icon: "expanded" })
                      : Object(j.jsx)(x, { icon: "collapsed" }),
                  }),
                  Object(j.jsx)("div", {
                    children: "Rarest Trait Combinations",
                  }),
                  Object(j.jsxs)("div", {
                    style: { flex: 1 },
                    children: [c.size, " NFTs"],
                  }),
                  [16, 64, 256, 1024].map(function (t) {
                    return Object(j.jsx)(N, { value: t }, t)
                  }),
                ],
              }),
              I &&
                Object(j.jsxs)("div", {
                  style: { background: "#000000", borderRadius: 0 },
                  children: [
                    p && Object(j.jsx)(O, {}),
                    Object(j.jsx)("svg", {
                      ref: s,
                      style: {
                        width: "100%",
                        minHeight: 600,
                        height: "".concat((100 * _).toFixed(0), "vh"),
                      },
                    }),
                  ],
                }),
            ],
          })
        },
        X = (function () {
          var t = Object(u.a)(
            o.a.mark(function t(e, n, r, c) {
              var i, a, s, d, j, f, v, p, b, h, x, O
              return o.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), w(10)
                    case 2:
                      return (
                        (i = e.tokenLookups),
                        (a = i
                          .filter(function (t) {
                            return t.trait_value !== H
                          })
                          .map(function (t) {
                            return Object(l.a)(
                              Object(l.a)({}, t),
                              {},
                              {
                                tokensInSelectionSet: new Set(
                                  t.tokenIds.filter(function (t) {
                                    return n.has(t)
                                  })
                                ),
                              }
                            )
                          })),
                        (s = (function () {
                          var t = Object(u.a)(
                            o.a.mark(function t() {
                              var e, n, r, c, i, s, l
                              return o.a.wrap(function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      ;(e = []), (n = Date.now()), (r = 0)
                                    case 3:
                                      if (!(r < a.length)) {
                                        t.next = 19
                                        break
                                      }
                                      ;(c = a[r]),
                                        (i = Object(B.a)(
                                          c.tokensInSelectionSet
                                        )),
                                        (s = o.a.mark(function t(r) {
                                          var s, l, u
                                          return o.a.wrap(function (t) {
                                            for (;;)
                                              switch ((t.prev = t.next)) {
                                                case 0:
                                                  if (
                                                    ((s = a[r]),
                                                    c.trait_type !==
                                                      s.trait_type)
                                                  ) {
                                                    t.next = 3
                                                    break
                                                  }
                                                  return t.abrupt(
                                                    "return",
                                                    "continue"
                                                  )
                                                case 3:
                                                  if (!(Date.now() > n + 10)) {
                                                    t.next = 8
                                                    break
                                                  }
                                                  return (
                                                    console.log(
                                                      "getAllPairs delay"
                                                    ),
                                                    (t.next = 7),
                                                    w(0)
                                                  )
                                                case 7:
                                                  n = Date.now()
                                                case 8:
                                                  if (
                                                    ((l = {
                                                      l: c,
                                                      r: s,
                                                      intersectCount: i.filter(
                                                        function (t) {
                                                          return s.tokensInSelectionSet.has(
                                                            t
                                                          )
                                                        }
                                                      ).length,
                                                      unionCount:
                                                        i.filter(function (t) {
                                                          return !s.tokensInSelectionSet.has(
                                                            t
                                                          )
                                                        }).length +
                                                        s.tokensInSelectionSet
                                                          .size,
                                                    }).l.trait_type >
                                                      l.r.trait_type &&
                                                      ((u = l.l),
                                                      (l.l = l.r),
                                                      (l.r = u)),
                                                    l.intersectCount)
                                                  ) {
                                                    t.next = 12
                                                    break
                                                  }
                                                  return t.abrupt(
                                                    "return",
                                                    "continue"
                                                  )
                                                case 12:
                                                  e.push(l)
                                                case 13:
                                                case "end":
                                                  return t.stop()
                                              }
                                          }, t)
                                        })),
                                        (l = r + 1)
                                    case 8:
                                      if (!(l < a.length)) {
                                        t.next = 16
                                        break
                                      }
                                      return t.delegateYield(s(l), "t0", 10)
                                    case 10:
                                      if ("continue" !== t.t0) {
                                        t.next = 13
                                        break
                                      }
                                      return t.abrupt("continue", 13)
                                    case 13:
                                      l++, (t.next = 8)
                                      break
                                    case 16:
                                      r++, (t.next = 3)
                                      break
                                    case 19:
                                      return t.abrupt("return", e)
                                    case 20:
                                    case "end":
                                      return t.stop()
                                  }
                              }, t)
                            })
                          )
                          return function () {
                            return t.apply(this, arguments)
                          }
                        })()),
                        (t.next = 7),
                        s()
                      )
                    case 7:
                      return (
                        (d = t.sent),
                        console.log("allPairs", { allPairs: d }),
                        (j = d.sort(function (t, e) {
                          return t.intersectCount !== e.intersectCount
                            ? t.intersectCount - e.intersectCount
                            : t.unionCount !== e.unionCount
                            ? t.unionCount - e.unionCount
                            : t.l.tokenIds.length !== e.l.tokenIds.length
                            ? t.l.tokenIds.length - e.l.tokenIds.length
                            : t.l.trait_type !== e.l.trait_type
                            ? t.l.trait_type.localeCompare(e.l.trait_type)
                            : t.l.trait_value !== e.l.trait_value
                            ? t.l.trait_value.localeCompare(e.l.trait_value)
                            : t.r.trait_type !== e.r.trait_type
                            ? t.r.trait_type.localeCompare(e.r.trait_type)
                            : t.r.trait_value !== e.r.trait_value
                            ? t.r.trait_value.localeCompare(e.r.trait_value)
                            : 0
                        })),
                        (f = j.slice(0, c)),
                        (v = Object(B.a)(
                          new Set(
                            f.flatMap(function (t) {
                              return [t.l, t.r]
                            })
                          )
                        )),
                        (p = new Map(
                          v.map(function (t, e) {
                            return [t, e]
                          })
                        )),
                        (b = new Map(
                          v.map(function (t, e) {
                            return [e, t]
                          })
                        )),
                        (h = function (t) {
                          var e
                          return null !== (e = p.get(t)) && void 0 !== e ? e : 0
                        }),
                        (x = new Map(
                          Object(B.a)(
                            new Set(
                              v.map(function (t) {
                                return t.trait_type
                              })
                            )
                          ).map(function (t, e) {
                            return [t, e]
                          })
                        )),
                        (O = {
                          nodes: v.map(function (t) {
                            var r
                            return {
                              nodeId: h(t),
                              key: ""
                                .concat(t.trait_type, ":")
                                .concat(t.trait_value),
                              traitTypeIndex:
                                null !== (r = x.get(t.trait_type)) &&
                                void 0 !== r
                                  ? r
                                  : 0,
                              traitTypeCount: x.size,
                              traitType: t.trait_type,
                              traitValue: t.trait_value,
                              tokenCountInSelected: t.tokensInSelectionSet.size,
                              tokenCount: t.tokenIds.length,
                              tokenCountAll: e.tokenLookups.length,
                              tokenCountUsed: n.size,
                            }
                          }),
                          links: f.map(function (t) {
                            return {
                              source: h(t.l),
                              target: h(t.r),
                              value: t.intersectCount,
                            }
                          }),
                        }),
                        t.abrupt("return", { data: O, nodeIdsMap: b })
                      )
                    case 18:
                    case "end":
                      return t.stop()
                  }
              }, t)
            })
          )
          return function (e, n, r, c) {
            return t.apply(this, arguments)
          }
        })(),
        J = function (t, e, n) {
          var r = {
              nodes: e.nodes,
              links: e.links.map(function (t) {
                return {
                  source: t.source,
                  target: t.target,
                  value: t.value,
                  uom: "Widget(s)",
                }
              }),
            },
            c = t.clientWidth,
            i = t.clientHeight,
            a = "#FFFFFF",
            s = "#FFFFFF",
            o = "#000000",
            l = U.c(t)
          if ((l.selectAll("*").remove(), r.nodes.length)) {
            var u = U.a(U.b)
            W.a()
              .nodeWidth(15)
              .nodePadding(2)
              .extent([
                [4, 4],
                [c - 4, i - 4],
              ])(r),
              r.nodes.forEach(function (t) {
                var e,
                  n,
                  r,
                  i =
                    (c - 8 - 20) * (t.traitTypeIndex / (t.traitTypeCount - 1)) -
                    (null !== (e = t.x0) && void 0 !== e ? e : 0)
                ;(t.x0 = i + (null !== (n = t.x0) && void 0 !== n ? n : 0)),
                  (t.x1 = i + (null !== (r = t.x1) && void 0 !== r ? r : 0))
              }),
              r.nodes.forEach(function (t) {
                var e,
                  n,
                  r,
                  i = Math.max(
                    2,
                    ((c - 8 - 20) *
                      (t.tokenCountInSelected / t.tokenCountUsed)) /
                      (t.traitTypeCount - 1)
                  ),
                  a =
                    i -
                    ((null !== (e = t.x1) && void 0 !== e ? e : 0) -
                      (null !== (n = t.x0) && void 0 !== n ? n : 0))
                console.log("override width", {
                  wTarget: i,
                  wDiff: a,
                  x0: t.x0,
                  x1: t.x1,
                  width: c,
                  traitTypeIndex: t.traitTypeIndex,
                  traitTypeCount: t.traitTypeCount,
                  n: t,
                }),
                  (t.x1 = (null !== (r = t.x1) && void 0 !== r ? r : 0) + a)
              })
            var d = l
                .append("g")
                .attr("class", "links")
                .attr("fill", "none")
                .attr("stroke", a)
                .attr("stroke-opacity", 0.2)
                .selectAll("path"),
              j = l
                .append("g")
                .attr("class", "nodes")
                .attr("font-family", "sans-serif")
                .attr("font-size", 10)
                .selectAll("g")
            d.data(r.links)
              .enter()
              .append("path")
              .on("click", function (t, e) {
                console.log("click", { d: e }),
                  n([e.source.nodeId, e.target.nodeId])
              })
              .attr("d", W.b())
              .attr("stroke-width", function (t) {
                var e
                return Math.max(
                  1,
                  null !== (e = t.width) && void 0 !== e ? e : 1
                )
              })
              .append("title")
              .text(function (t) {
                var e, n
                return "\n"
                  .concat(
                    null === (e = t.source) || void 0 === e ? void 0 : e.key,
                    "\n& \n"
                  )
                  .concat(
                    null === (n = t.target) || void 0 === n ? void 0 : n.key,
                    "\n\n"
                  )
                  .concat(t.value, " NFTs in common")
                  .trim()
              })
              .attr("fill", s)
            var f = j
              .data(r.nodes)
              .enter()
              .append("g")
              .on("click", function (t, e) {
                console.log("click", { d: e }), n([e.nodeId])
              })
            f
              .append("rect")
              .attr("x", function (t) {
                var e
                return null !== (e = t.x0) && void 0 !== e ? e : 0
              })
              .attr("y", function (t) {
                var e
                return null !== (e = t.y0) && void 0 !== e ? e : 0
              })
              .attr("height", function (t) {
                var e, n
                return (
                  (null !== (e = t.y1) && void 0 !== e ? e : 0) -
                  (null !== (n = t.y0) && void 0 !== n ? n : 0)
                )
              })
              .attr("width", function (t) {
                var e, n
                return (
                  (null !== (e = t.x1) && void 0 !== e ? e : 0) -
                  (null !== (n = t.x0) && void 0 !== n ? n : 0)
                )
              })
              .attr("fill", function (t) {
                return u(t.key.replace(/ .*/, ""))
              })
              .attr("stroke", o),
              f
                .append("text")
                .attr("fill", s)
                .attr("x", function (t) {
                  var e
                  return (null !== (e = t.x0) && void 0 !== e ? e : 0) - 6
                })
                .attr("y", function (t) {
                  var e, n
                  return (
                    ((null !== (e = t.y1) && void 0 !== e ? e : 0) +
                      (null !== (n = t.y0) && void 0 !== n ? n : 0)) /
                    2
                  )
                })
                .attr("dy", "0.35em")
                .attr("text-anchor", "end")
                .text(function (t) {
                  return "".concat(t.traitType, ": ").concat(t.traitValue)
                })
                .attr("fill", s)
                .filter(function (t) {
                  var e
                  return (null !== (e = t.x0) && void 0 !== e ? e : 0) < c / 2
                })
                .attr("x", function (t) {
                  var e
                  return (null !== (e = t.x1) && void 0 !== e ? e : 0) + 6
                })
                .attr("text-anchor", "start"),
              f
                .append("title")
                .text(function (t) {
                  return ""
                    .concat(t.traitType, ": ")
                    .concat(t.traitValue, "\n")
                    .concat(t.tokenCountInSelected, " NFTs in Selection\n")
                    .concat(t.tokenCount, " NFTs Total")
                })
                .attr("fill", s)
          }
        },
        V = n(3),
        G = function (t) {
          var e = Math.max(0, Math.min((t.h % 360) / 360, 1)),
            n = Math.max(0, Math.min(t.s / 100, 1)),
            r = Math.max(0, Math.min(t.l / 100, 1))
          if (0 === n)
            return {
              r: Math.floor(255 * r),
              g: Math.floor(255 * r),
              b: Math.floor(255 * r),
            }
          var c = function (t, e, n) {
              return (
                n < 0 && (n += 1),
                n > 1 && (n -= 1),
                n < 1 / 6
                  ? t + 6 * (e - t) * n
                  : n < 0.5
                  ? e
                  : n < 2 / 3
                  ? t + (e - t) * (2 / 3 - n) * 6
                  : t
              )
            },
            i = r < 0.5 ? r * (1 + n) : r + (1 - r) * n,
            a = 2 * r - i,
            s = c(a, i, e + 1 / 3),
            o = c(a, i, e),
            l = c(a, i, e - 1 / 3)
          return {
            r: Math.floor(255 * s),
            g: Math.floor(255 * o),
            b: Math.floor(255 * l),
          }
        },
        Z = function (t, e) {
          var n = Object(B.a)(t)
            .sort(function (t, e) {
              return t.trait_value.localeCompare(e.trait_value)
            })
            .sort(function (t, e) {
              return t.trait_type.localeCompare(e.trait_type)
            })
          return "rarity" === e
            ? n.sort(function (t, e) {
                return t.tokenIds.length - e.tokenIds.length
              })
            : n
        },
        $ = function (t) {
          var e = t.projectKey,
            n = t.projectRarity,
            c = t.tokenIds,
            i = t.selected,
            a = t.onSelect,
            s = t.HoverComponent,
            l = Object(r.useRef)(null),
            f = e + JSON.stringify(i),
            v = Object(r.useState)(!0),
            p = Object(d.a)(v, 2),
            b = p[0],
            h = p[1],
            m = Object(r.useState)("default"),
            y = Object(d.a)(m, 2),
            k = y[0],
            g = y[1],
            w = Object(r.useState)(!1),
            I = Object(d.a)(w, 2),
            S = I[0],
            _ = I[1],
            N = Object(r.useState)(null),
            C = Object(d.a)(N, 2),
            F = C[0],
            R = C[1]
          Object(r.useEffect)(
            function () {
              if (S) {
                var t = l.current
                if (t) {
                  var e = function () {},
                    r = function () {}
                  h(!0),
                    Object(u.a)(
                      o.a.mark(function s() {
                        var l
                        return o.a.wrap(function (s) {
                          for (;;)
                            switch ((s.prev = s.next)) {
                              case 0:
                                ;(l = function (t) {
                                  R(t)
                                }),
                                  (e = function () {
                                    var e
                                    r()
                                    var s = q({
                                      canvas: t,
                                      projectRarity: n,
                                      selectedTokenIds: c,
                                      traitFilters: i,
                                      traitSort: k,
                                      onHover: l,
                                      onSelect: function (t) {
                                        return (
                                          t &&
                                          a({
                                            traitType: t.trait.trait_type,
                                            value: t.trait.trait_value,
                                          })
                                        )
                                      },
                                    })
                                    r =
                                      null !==
                                        (e =
                                          null === s || void 0 === s
                                            ? void 0
                                            : s.unsubscribe) && void 0 !== e
                                        ? e
                                        : function () {}
                                  })(),
                                  h(!1)
                              case 4:
                              case "end":
                                return s.stop()
                            }
                        }, s)
                      })
                    )()
                  var s = function () {
                    e()
                  }
                  return (
                    window.addEventListener("resize", s),
                    function () {
                      !1, window.removeEventListener("resize", s), r()
                    }
                  )
                }
              }
            },
            [f, c.size, k, S]
          )
          Math.max(0.25, Math.min(0.75, 0.1 * c.size))
          var T = function (t) {
            var e = t.value
            return Object(j.jsx)("div", {
              className: "link",
              style: { paddingLeft: 8 },
              onClick: function (t) {
                t.preventDefault(), t.stopPropagation(), g(e)
              },
              children: e,
            })
          }
          return Object(j.jsxs)("div", {
            children: [
              Object(j.jsxs)("div", {
                style: { display: "flex", flexDirection: "row" },
                onClick: function () {
                  return _(function (t) {
                    return !t
                  })
                },
                children: [
                  Object(j.jsx)("div", {
                    style: { fontSize: 18 },
                    children: S
                      ? Object(j.jsx)(x, { icon: "expanded" })
                      : Object(j.jsx)(x, { icon: "collapsed" }),
                  }),
                  Object(j.jsx)("div", {
                    children: "Rarity Waterfall: Nft Trait Grid",
                  }),
                  Object(j.jsxs)("div", {
                    style: { flex: 1 },
                    children: [c.size, " NFTs"],
                  }),
                  ["rarity", "default"].map(function (t) {
                    return Object(j.jsx)(T, { value: t }, t)
                  }),
                ],
              }),
              S &&
                Object(j.jsxs)("div", {
                  style: { background: "#000000", borderRadius: 0 },
                  children: [
                    b && Object(j.jsx)(O, {}),
                    Object(j.jsx)("canvas", {
                      ref: l,
                      style: { width: "100%", minHeight: 100 },
                    }),
                  ],
                }),
              F &&
                Object(j.jsx)("div", {
                  style: {
                    position: "fixed",
                    left: Math.max(0, -300 + F.position.clientX),
                    top: Math.max(0, -160 + F.position.clientY),
                    width: 300,
                    height: 160,
                    zIndex: 1e4,
                  },
                  children: Object(j.jsx)(s, { args: F }),
                }),
            ],
          })
        },
        q = function (t) {
          var e,
            n = t.canvas,
            r = t.projectRarity,
            c = t.selectedTokenIds,
            i = t.traitFilters,
            a = t.traitSort,
            s = t.onHover,
            o = t.onSelect,
            l = c,
            u = r.tokenLookups.filter(function (t) {
              return t.trait_value !== H
            }),
            d = Z(u, a),
            j = l.size,
            f = d.length,
            v =
              null === (e = n.parentElement) || void 0 === e
                ? void 0
                : e.clientWidth
          if (v) {
            var p = Math.max(1, Math.floor(v / f)),
              b = Math.max(1, Math.floor(100 / j)),
              h = f * p,
              x = j * b,
              O = x + 24
            ;(n.width = h), (n.height = O)
            var m = n.getContext("2d")
            if (m) {
              m.clearRect(0, 0, h, O)
              for (
                var y = m.getImageData(0, 0, h, O),
                  k = y.data,
                  g = new Map(
                    Object(B.a)(l).map(function (t, e) {
                      return [t, e]
                    })
                  ),
                  w = function (t) {
                    var e,
                      n,
                      c,
                      a = d[t],
                      s = (function (t, e, n) {
                        var r,
                          c =
                            (71 *
                              (null !==
                                (r = new Map(
                                  Object(B.a)(
                                    new Set(
                                      e.map(function (t) {
                                        return t.trait_type
                                      })
                                    )
                                  )
                                    .sort()
                                    .map(function (t, e) {
                                      return [t, e]
                                    })
                                ).get(t.trait_type)) && void 0 !== r
                                ? r
                                : 0)) %
                            360,
                          i = 100 - Math.floor((75 * t.tokenIds.length) / n)
                        return G({ h: c, s: i, l: 50 })
                      })(a, d, r.tokenIdsByRank.length),
                      o = s.r,
                      l = s.g,
                      u = s.b,
                      j = 0,
                      f =
                        !(
                          (null !==
                            (e =
                              null === (n = i[a.trait_type]) || void 0 === n
                                ? void 0
                                : n.value) && void 0 !== e
                            ? e
                            : H) !== H
                        ) ||
                        (null === (c = i[a.trait_type]) || void 0 === c
                          ? void 0
                          : c.value) === a.trait_value
                          ? 255
                          : 200,
                      v = function () {
                        for (var e = 0; e < 8; e++)
                          for (var n = 0; n < p; n++)
                            for (var r = 0; r < 1; r++) {
                              var c = t * p + n,
                                i = 1 * e + r + j
                              ;(k[4 * (c + i * h) + 0] = o),
                                (k[4 * (c + i * h) + 1] = l),
                                (k[4 * (c + i * h) + 2] = u),
                                (k[4 * (c + i * h) + 3] = f)
                            }
                      }
                    v(), (j += 8), (j += 4)
                    var O,
                      m = Object(V.a)(a.tokenIds)
                    try {
                      for (m.s(); !(O = m.n()).done; ) {
                        var y = O.value,
                          w = g.get(y)
                        if (null != w)
                          for (var I = 0; I < p; I++)
                            for (var S = 0; S < b; S++) {
                              var _ = t * p + I,
                                N = w * b + S + j
                              ;(k[4 * (_ + N * h) + 0] = o),
                                (k[4 * (_ + N * h) + 1] = l),
                                (k[4 * (_ + N * h) + 2] = u),
                                (k[4 * (_ + N * h) + 3] = f)
                            }
                      }
                    } catch (C) {
                      m.e(C)
                    } finally {
                      m.f()
                    }
                    ;(j += x), (j += 4), v(), (j += 8)
                  },
                  I = 0;
                I < d.length;
                I++
              )
                w(I)
              m.putImageData(y, 0, 0)
              var S = function (t, e, n) {
                  m.putImageData(y, 0, 0),
                    (m.fillStyle = "rgba(255,255,255,0.5)"),
                    m.fillRect(t * p, 0, p, y.height),
                    m.fillRect(0, e * b + 8 + 4, y.width, b)
                },
                _ = function () {
                  S(-1, -1)
                },
                N = function (t, e) {
                  var r = n.getClientRects()[0]
                  if (!r) return _(), void s(null)
                  var c = (t.clientX - r.left) / (r.right - r.left),
                    i = (t.clientY - r.top - 12) / (r.bottom - r.top - 24),
                    a = c >= 0 && c <= 1 && i >= 0 && i <= 1
                  if (
                    (console.log("handleInput", {
                      isInRect: a,
                      canvasXRatio: c,
                      canvasYRatio: i,
                      rect: r,
                    }),
                    !a)
                  )
                    return _(), void s(null)
                  var u = Math.floor(c * d.length),
                    j = d[u],
                    f = Math.floor(i * l.size),
                    v = Object(B.a)(l)[f]
                  if (!j) return _(), void s(null)
                  !(function (t, e) {
                    S(t, e)
                  })(u, f),
                    e
                      ? o({
                          trait: j,
                          tokenId: v,
                          position: { clientX: t.clientX, clientY: t.clientY },
                        })
                      : s({
                          trait: j,
                          tokenId: v,
                          position: { clientX: t.clientX, clientY: t.clientY },
                        })
                },
                C = function (t) {
                  return N(t, !0)
                },
                F = function (t) {
                  return N(t, !1)
                },
                R = function (t) {
                  return N(t.touches[0], !1)
                }
              return (
                window.addEventListener("mousemove", F),
                window.addEventListener("mousedown", C),
                window.addEventListener("touchstart", R),
                window.addEventListener("touchmove", R),
                {
                  unsubscribe: function () {
                    window.removeEventListener("mousemove", F),
                      window.removeEventListener("mousedown", C),
                      window.removeEventListener("touchstart", R),
                      window.removeEventListener("touchmove", R)
                  },
                }
              )
            }
          }
        },
        Q = function (t) {
          var e = t.projectKey,
            n = Object(r.useState)(null),
            c = Object(d.a)(n, 2),
            i = c[0],
            a = c[1]
          return (
            Object(r.useEffect)(
              function () {
                Object(u.a)(
                  o.a.mark(function t() {
                    var n, r, c, i
                    return o.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (n = y(e)), (t.next = 3), fetch(n)
                          case 3:
                            return (r = t.sent), (t.next = 6), r.json()
                          case 6:
                            ;(c = t.sent), A(c.project.theme), (i = tt(c)), a(i)
                          case 10:
                          case "end":
                            return t.stop()
                        }
                    }, t)
                  })
                )()
              },
              [e]
            ),
            Object(j.jsxs)(j.Fragment, {
              children: [
                !i && Object(j.jsx)(O, {}),
                i && Object(j.jsx)(et, { projectKey: e, projectRarity: i }),
              ],
            })
          )
        },
        tt = function (t) {
          var e = Z(t.tokenLookups, "default"),
            n = Object(B.a)(
              new Set(
                e.map(function (t) {
                  return t.trait_type
                })
              )
            )
          n.forEach(function (n) {
            var r = e.filter(function (t) {
                return t.trait_type === n
              }),
              c = new Set(
                r.flatMap(function (t) {
                  return t.tokenIds
                })
              ),
              i = t.tokenIdsByRank.filter(function (t) {
                return !c.has(t)
              })
            i.length &&
              e.unshift({
                trait_type: n,
                trait_value: "[Missing]",
                tokenIds: i,
              }),
              e.unshift({
                trait_type: n,
                trait_value: H,
                tokenIds: t.tokenIdsByRank,
              })
          })
          var r = e.map(function (e) {
            return Object(l.a)(
              Object(l.a)({}, e),
              {},
              { ratio: e.tokenIds.length / t.tokenIdsByRank.length }
            )
          })
          return (
            r.sort(),
            {
              project: t.project,
              contractAddress: t.project.contract,
              tokenIdsByRank: t.tokenIdsByRank,
              tokenLookups: r,
              traitTypes: n,
            }
          )
        },
        et = function (t) {
          var e = t.projectKey,
            n = t.projectRarity,
            c = Object(r.useState)(""),
            i = Object(d.a)(c, 2),
            a = i[0],
            s = i[1],
            o = Object(r.useState)(new Set(n.tokenIdsByRank)),
            l = Object(d.a)(o, 2),
            u = l[0],
            f = l[1],
            v = Object(r.useRef)(null),
            p = Object(r.useRef)({}),
            b = Object(r.useState)("rarity"),
            h = Object(d.a)(b, 2),
            x = h[0],
            O = h[1],
            m = function (t) {
              var e = p.current
              ;(e[t.traitType] = {
                value: t.value,
                tokenIdsIfAll: new Set([]),
              }),
                Object.keys(e).forEach(function (t) {
                  var r = new Set(n.tokenIdsByRank)
                  Object.entries(e).forEach(function (e) {
                    var c = Object(d.a)(e, 2),
                      i = c[0],
                      a = c[1],
                      s = n.tokenLookups.find(function (t) {
                        return t.trait_type === i && t.trait_value === a.value
                      })
                    s &&
                      i !== t &&
                      (r = new Set(
                        s.tokenIds.filter(function (t) {
                          return r.has(t)
                        })
                      ))
                  }),
                    (e[t].tokenIdsIfAll = r)
                })
              var r = new Set(n.tokenIdsByRank)
              Object.entries(e).forEach(function (t) {
                var e = Object(d.a)(t, 2),
                  c = e[0],
                  i = e[1],
                  a = n.tokenLookups.find(function (t) {
                    return t.trait_type === c && t.trait_value === i.value
                  })
                a &&
                  (r = new Set(
                    a.tokenIds.filter(function (t) {
                      return r.has(t)
                    })
                  ))
              }),
                f(r)
            },
            y = Object(B.a)(u)
          "tokenId" === x &&
            y.sort(function (t, e) {
              return t - e
            })
          var k = [a].concat(Object(B.a)(y)).filter(function (t) {
            return t
          })
          return Object(j.jsx)(j.Fragment, {
            children: Object(j.jsxs)("div", {
              className: "panel-container",
              children: [
                Object(j.jsx)("div", {
                  className: "panel-project-info",
                  children: Object(j.jsx)(rt, { project: n.project }),
                }),
                Object(j.jsx)("div", {
                  className: "panel-trait-types",
                  children: Object(j.jsx)(ct, {
                    projectRarity: n,
                    tokenIds: u,
                    selected: p.current,
                    onSelect: m,
                    onReset: function () {
                      ;(p.current = {}), f(new Set(n.tokenIdsByRank))
                    },
                  }),
                }),
                Object(j.jsxs)("div", {
                  className: "panel-nft-list",
                  children: [
                    Object(j.jsx)("div", {
                      style: { marginTop: 8 },
                      children: "Analysis",
                    }),
                    Object(j.jsx)("div", {
                      children: Object(j.jsx)(Y, {
                        projectKey: e,
                        projectRarity: n,
                        tokenIds: u,
                        selected: p.current,
                        onSelect: m,
                      }),
                    }),
                    Object(j.jsx)("div", {
                      children: Object(j.jsx)($, {
                        projectKey: e,
                        projectRarity: n,
                        tokenIds: u,
                        selected: p.current,
                        onSelect: m,
                        HoverComponent: function (t) {
                          var e = t.args
                          return Object(j.jsx)(nt, {
                            hoverArgs: e,
                            projectRarity: n,
                            tokenIds: u,
                            selected: p.current,
                            onSelect: m,
                          })
                        },
                      }),
                    }),
                    Object(j.jsx)("div", {
                      style: { marginTop: 32 },
                      children: "NFTs",
                    }),
                    Object(j.jsxs)("div", {
                      style: {
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      },
                      children: [
                        Object(j.jsxs)("div", {
                          style: { textAlign: "left" },
                          children: [
                            "Search: ",
                            Object(j.jsx)("input", {
                              type: "text",
                              style: { maxWidth: 100 },
                              value: a,
                              onChange: function (t) {
                                return s(t.target.value)
                              },
                            }),
                          ],
                        }),
                        Object(j.jsxs)("div", {
                          style: {
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-end",
                          },
                          children: [
                            "Sort:",
                            Object(j.jsx)("div", {
                              className: "hover link",
                              style: { marginLeft: 4 },
                              onClick: function () {
                                O("rarity")
                              },
                              children: "Rarity",
                            }),
                            Object(j.jsx)("div", {
                              className: "hover link",
                              style: { marginLeft: 4 },
                              onClick: function () {
                                O("tokenId")
                              },
                              children: "TokenId",
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(j.jsx)("div", {
                      className: "nft-list",
                      ref: v,
                      children:
                        n &&
                        Object(j.jsx)(
                          P,
                          {
                            items: k,
                            getItemKey: function (t) {
                              return "".concat(t)
                            },
                            ItemComponent: function (t) {
                              var r = t.item
                              return Object(j.jsx)(K, {
                                projectKey: e,
                                tokenId: "".concat(r),
                                contractAddress: n.contractAddress,
                                onSelect: m,
                              })
                            },
                          },
                          a + x
                        ),
                    }),
                  ],
                }),
              ],
            }),
          })
        },
        nt = function (t) {
          var e = t.projectRarity,
            n = (t.tokenIds, t.selected),
            r = t.onSelect,
            c = t.hoverArgs,
            i = c.trait,
            a = c.tokenId,
            s = null === n || void 0 === n ? void 0 : n[i.trait_type],
            o =
              (null === s || void 0 === s ? void 0 : s.value) === i.trait_value,
            l = i.tokenIds.length,
            u = i.tokenIds.length / e.tokenIdsByRank.length
          return Object(j.jsxs)("div", {
            className: "hover-popup",
            children: [
              Object(j.jsx)("div", {
                style: { textAlign: "left" },
                children: i.trait_type,
              }),
              Object(j.jsx)("div", {
                className: "nft-trait-value link ".concat(
                  o ? "nft-trait-value-selected" : ""
                ),
                onClick: function () {
                  return r({ traitType: i.trait_type, value: i.trait_value })
                },
                children: Object(j.jsx)(f, {
                  ratio: u,
                  text: i.trait_value,
                  textRight: "".concat(l),
                }),
              }),
              Object(j.jsxs)("div", {
                style: { textAlign: "left" },
                children: ["#", a],
              }),
              Object(j.jsxs)("div", {
                style: { textAlign: "right" },
                children: [
                  "Rank ",
                  e.tokenIdsByRank.findIndex(function (t) {
                    return t === a
                  }) + 1,
                ],
              }),
            ],
          })
        },
        rt = function (t) {
          var e,
            n,
            r,
            c,
            i,
            a = t.project
          return Object(j.jsx)(j.Fragment, {
            children: Object(j.jsxs)("div", {
              className: "project-info",
              children: [
                Object(j.jsx)("div", {
                  className: "project-info-image",
                  children: Object(j.jsx)(R, {
                    alt: "project",
                    src: a.image,
                    style: { objectFit: "contain", width: 150 },
                  }),
                }),
                Object(j.jsxs)("div", {
                  style: {},
                  children: [
                    Object(j.jsxs)("div", {
                      style: {
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-end",
                      },
                      children: [
                        Object(j.jsx)(m, {
                          url: a.external_link,
                          icon: "link",
                        }),
                        Object(j.jsx)(m, {
                          url:
                            null === (e = a.links) || void 0 === e
                              ? void 0
                              : e.opensea,
                          iconUrl: "/media/opensea.png",
                        }),
                        Object(j.jsx)(m, {
                          url:
                            null === (n = a.links) || void 0 === n
                              ? void 0
                              : n.openSea,
                          iconUrl: "/media/opensea.png",
                        }),
                        Object(j.jsx)(m, {
                          url:
                            null === (r = a.links) || void 0 === r
                              ? void 0
                              : r.twitter,
                          icon: "twitter",
                        }),
                        Object(j.jsx)(m, {
                          url:
                            null === (c = a.links) || void 0 === c
                              ? void 0
                              : c.discord,
                          icon: "discord",
                        }),
                        Object.entries(
                          null !== (i = a.links) && void 0 !== i ? i : {}
                        )
                          .filter(function (t) {
                            var e = Object(d.a)(t, 1)[0]
                            return !"opensea openSea discord twitter".includes(
                              e
                            )
                          })
                          .map(function (t) {
                            var e = Object(d.a)(t, 2),
                              n = e[0],
                              r = e[1]
                            return Object(j.jsx)(m, { url: r, icon: "link" }, n)
                          }),
                      ],
                    }),
                    Object(j.jsx)("div", {
                      className: "project-info-title",
                      children: a.name,
                    }),
                    Object(j.jsx)("div", {
                      className: "project-info-description",
                      children: a.description,
                    }),
                    !!a.external_link &&
                      Object(j.jsx)("div", {
                        className: "project-info-link",
                        children: Object(j.jsx)("a", {
                          href: g(a.external_link),
                          children: a.external_link,
                        }),
                      }),
                  ],
                }),
              ],
            }),
          })
        },
        ct = function (t) {
          var e = t.projectRarity,
            n = t.tokenIds,
            i = t.selected,
            a = t.onSelect,
            s = t.onReset,
            o = Object(r.useState)(!0),
            l = Object(d.a)(o, 2),
            u = l[0],
            f = l[1]
          return Object(j.jsxs)(j.Fragment, {
            children: [
              Object(j.jsxs)("div", {
                className: "nft-trait-types-header",
                children: [
                  Object(j.jsx)("div", {
                    className: "nft-trait-types-header-expandable link",
                    onClick: function () {
                      return f(function (t) {
                        return !t
                      })
                    },
                    children: Object(j.jsxs)("div", {
                      style: { position: "relative" },
                      children: [
                        Object(j.jsx)("div", {
                          style: {
                            position: "absolute",
                            left: 4,
                            fontSize: 18,
                          },
                          children: u
                            ? Object(j.jsx)(x, { icon: "expanded" })
                            : Object(j.jsx)(x, { icon: "collapsed" }),
                        }),
                        "Trait Filters",
                      ],
                    }),
                  }),
                  Object(j.jsx)("div", {
                    className: "nft-trait-types-header-simple",
                    children: Object(j.jsx)("div", {
                      children: "Trait Filters",
                    }),
                  }),
                ],
              }),
              Object(j.jsx)("div", {
                className: "nft-trait-type-header link",
                onClick: s,
                children: Object(j.jsxs)("div", {
                  style: { position: "relative" },
                  children: [
                    Object.values(i).some(function (t) {
                      return t.value !== H
                    }) &&
                      Object(j.jsxs)(j.Fragment, {
                        children: [
                          Object(j.jsx)("div", {
                            style: { position: "absolute", right: 4 },
                            children: "\u274c",
                          }),
                          Object(j.jsx)("span", { children: "Reset" }),
                        ],
                      }),
                    Object(j.jsx)("span", { children: "\xa0" }),
                  ],
                }),
              }),
              Object(j.jsx)("div", {
                className: "nft-trait-types",
                children: e.traitTypes.map(function (t) {
                  return Object(j.jsx)(
                    c.a.Fragment,
                    {
                      children: Object(j.jsx)(it, {
                        traitType: t,
                        projectRarity: e,
                        isExpandedAll: u,
                        tokenIds: n,
                        selected: i,
                        onSelect: a,
                      }),
                    },
                    t
                  )
                }),
              }),
            ],
          })
        },
        it = function (t) {
          var e,
            n = t.traitType,
            i = t.projectRarity,
            a = t.isExpandedAll,
            s = t.tokenIds,
            o = t.selected,
            l = t.onSelect,
            u = Object(r.useState)(a),
            v = Object(d.a)(u, 2),
            p = v[0],
            b = v[1]
          Object(r.useEffect)(
            function () {
              b(a)
            },
            [a]
          )
          var h = i.tokenLookups.filter(function (t) {
              return t.trait_type === n
            }),
            O =
              null !== (e = o[n]) && void 0 !== e
                ? e
                : { value: H, tokenIdsIfAll: s },
            m = O.value === H
          console.log("TraitValuesList", {
            isAllSelected: m,
            selectedTraitItem: O,
          })
          var y = h.map(function (t) {
            return {
              x: t,
              isSelected: O.value === t.trait_value,
              count: t.tokenIds.filter(function (t) {
                var e
                return (
                  null !== (e = O.tokenIdsIfAll) && void 0 !== e ? e : s
                ).has(t)
              }).length,
            }
          })
          return Object(j.jsxs)("div", {
            className: "nft-trait-type",
            children: [
              Object(j.jsxs)("div", {
                className: "nft-trait-type-header link",
                onClick: function () {
                  b(function (t) {
                    return !t
                  })
                },
                children: [
                  Object(j.jsxs)("div", {
                    style: { position: "relative" },
                    children: [
                      Object(j.jsx)("div", {
                        style: { position: "absolute", left: 4, fontSize: 18 },
                        children: p
                          ? Object(j.jsx)(x, { icon: "expanded" })
                          : Object(j.jsx)(x, { icon: "collapsed" }),
                      }),
                      !m &&
                        Object(j.jsx)("div", {
                          style: { position: "absolute", right: 4 },
                          onClick: function (t) {
                            t.preventDefault(),
                              t.stopPropagation(),
                              l({ traitType: n, value: H })
                          },
                          children: "\u274c",
                        }),
                      n,
                    ],
                  }),
                  !p &&
                    Object(j.jsx)("div", {
                      className: "nft-trait-value",
                      children: O.value,
                    }),
                ],
              }),
              p &&
                Object(j.jsx)("div", {
                  className: "nft-trait-values",
                  children: y
                    .filter(function (t) {
                      var e = t.count,
                        n = t.isSelected
                      return e || n
                    })
                    .map(function (t) {
                      var e = t.x,
                        n = t.count,
                        r = t.isSelected
                      return Object(j.jsx)(
                        c.a.Fragment,
                        {
                          children: Object(j.jsx)("div", {
                            className: "nft-trait-value link ".concat(
                              r ? "nft-trait-value-selected" : ""
                            ),
                            onClick: function () {
                              return l({
                                traitType: e.trait_type,
                                value: e.trait_value,
                              })
                            },
                            children: Object(j.jsx)(f, {
                              ratio: e.ratio,
                              text: e.trait_value,
                              textRight: "".concat(n),
                            }),
                          }),
                        },
                        "".concat(e.trait_type, ":").concat(e.trait_value)
                      )
                    }),
                }),
            ],
          })
        },
        at = function (t) {
          var e = t.children,
            n = Object(r.useState)(!0),
            c = Object(d.a)(n, 2),
            i = c[0],
            a = c[1]
          return (
            Object(r.useEffect)(function () {
              D.subscribe(a)
            }, []),
            Object(j.jsxs)(j.Fragment, {
              children: [
                Object(j.jsx)("div", {
                  style: { display: "flex", flexDirection: "row", padding: 8 },
                  children: Object(j.jsx)("a", {
                    href: "/",
                    children: Object(j.jsx)("img", {
                      style: { width: 256 },
                      src: i
                        ? "/media/logo_white.png"
                        : "/media/logo_black.png",
                      alt: "site-logo",
                    }),
                  }),
                }),
                Object(j.jsx)("div", { children: e }),
              ],
            })
          )
        },
        st = function (t) {
          var e = Object(r.useState)(null),
            n = Object(d.a)(e, 2),
            c = n[0],
            i = n[1]
          return (
            Object(r.useEffect)(function () {
              Object(u.a)(
                o.a.mark(function t() {
                  var e, n
                  return o.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            "/data/projects.json",
                            (t.next = 3),
                            fetch("/data/projects.json")
                          )
                        case 3:
                          return (e = t.sent), (t.next = 6), e.json()
                        case 6:
                          ;(n = t.sent), i(n)
                        case 8:
                        case "end":
                          return t.stop()
                      }
                  }, t)
                })
              )()
            }, []),
            Object(j.jsxs)(j.Fragment, {
              children: [
                !c && Object(j.jsx)(O, {}),
                c && Object(j.jsx)(ot, { projects: c }),
              ],
            })
          )
        },
        ot = function (t) {
          var e = t.projects
          return Object(j.jsx)(j.Fragment, {
            children: Object(j.jsx)("div", {
              className: "project-list",
              children:
                e &&
                Object(j.jsx)(P, {
                  items: e.projects,
                  getItemKey: function (t) {
                    return "".concat(t.projectKey)
                  },
                  ItemComponent: function (t) {
                    var e = t.item
                    return Object(j.jsx)(lt, {
                      projectKey: e.projectKey,
                      project: e.projectMetadata,
                    })
                  },
                }),
            }),
          })
        },
        lt = function (t) {
          var e = t.projectKey,
            n = t.project,
            c = e + "_theme"
          return (
            Object(r.useEffect)(
              function () {
                A(n.theme, "#".concat(c))
              },
              [c]
            ),
            Object(j.jsx)(j.Fragment, {
              children: Object(j.jsxs)("div", {
                id: c,
                className: "nft-card link",
                style: { position: "relative" },
                onClick: function () {
                  return (window.location.href = "".concat(e))
                },
                children: [
                  Object(j.jsx)("div", {
                    style: {
                      position: "absolute",
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0,
                      opacity: 0,
                    },
                  }),
                  Object(j.jsx)(rt, { project: n }),
                ],
              }),
            })
          )
        },
        ut = function () {
          return Object(j.jsxs)("div", {
            style: {
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              minHeight: "calc(100vh - 100px)",
            },
            children: [
              Object(j.jsx)("div", {
                style: { width: "100%" },
                children: Object(j.jsx)(st, {}),
              }),
              Object(j.jsx)(dt, {}),
            ],
          })
        },
        dt = function (t) {
          return Object(j.jsx)(j.Fragment, {
            children: Object(j.jsxs)("div", {
              style: { display: "flex", flexDirection: "row" },
              children: [
                Object(j.jsx)(jt, {
                  punkId: 4856,
                  name: "@NotChris",
                  link: "https://twitter.com/HemanCalvin",
                }),
                Object(j.jsx)(jt, {
                  punkId: 578,
                  name: "@RickLove",
                  link: "https://twitter.com/Rick_00_Love",
                }),
              ],
            }),
          })
        },
        jt = function (t) {
          var e = t.punkId,
            n = t.name,
            r = t.link
          return Object(j.jsx)(j.Fragment, {
            children: Object(j.jsxs)("div", {
              className: r ? "link" : "",
              style: { padding: 8 },
              onClick: function (t) {
                r && (t.preventDefault(), t.stopPropagation(), window.open(r))
              },
              children: [
                Object(j.jsx)("div", {
                  children: Object(j.jsx)("img", {
                    style: { width: 150, height: 150, objectFit: "contain" },
                    src: "/media/punk".concat(e, ".png"),
                    alt: "punk",
                  }),
                }),
                Object(j.jsxs)("div", {
                  children: [
                    !r && n,
                    !!r &&
                      Object(j.jsx)("a", { href: r, children: "".concat(n) }),
                  ],
                }),
                Object(j.jsx)("div", { children: "OneDayPunk #".concat(e) }),
              ],
            }),
          })
        }
      var ft = function (t) {
          var e,
            n,
            r = window.location.pathname.split("/"),
            c = null !== (e = r[1]) && void 0 !== e ? e : void 0,
            i = null !== (n = r[2]) && void 0 !== n ? n : void 0
          return (
            console.log("route", { route: r, projectKey: c, tokenId: i }),
            c && i
              ? Object(j.jsx)("div", {
                  className: "App",
                  children: Object(j.jsx)("div", {
                    className: "nft-container-single",
                    children: Object(j.jsx)(K, { projectKey: c, tokenId: i }),
                  }),
                })
              : c
              ? Object(j.jsx)("div", {
                  className: "App",
                  children: Object(j.jsx)(Q, { projectKey: c }),
                })
              : Object(j.jsx)("div", {
                  className: "App",
                  children: Object(j.jsx)(ut, {}),
                })
          )
        },
        vt = function () {
          return Object(j.jsx)(at, { children: Object(j.jsx)(ft, {}) })
        },
        pt = function (t) {
          t &&
            t instanceof Function &&
            n
              .e(3)
              .then(n.bind(null, 120))
              .then(function (e) {
                var n = e.getCLS,
                  r = e.getFID,
                  c = e.getFCP,
                  i = e.getLCP,
                  a = e.getTTFB
                n(t), r(t), c(t), i(t), a(t)
              })
        }
      a.a.render(
        Object(j.jsx)(c.a.StrictMode, { children: Object(j.jsx)(vt, {}) }),
        document.getElementById("root")
      ),
        pt()
    },
  },
  [[117, 1, 2]],
])
//# sourceMappingURL=main.607999b7.chunk.js.map
