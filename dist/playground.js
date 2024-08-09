import { jsxs as N, jsx as n, Fragment as we } from "react/jsx-runtime";
import { c as T, B as J, A as Pe, I as _e, T as Ge, d as Fe, e as Ee, b as Ae } from "./tabs-CsKd-j5x.js";
import * as i from "react";
import C, { forwardRef as _ } from "react";
import "react-dom";
import { Slot as M } from "@radix-ui/react-slot";
import { cva as Me } from "class-variance-authority";
import { ChevronRight as ke } from "lucide-react";
const E = _(
  ({ title: e, content: t, className: o }, r) => /* @__PURE__ */ N("div", { ref: r, className: T("flex flex-col gap-[0.15rem]", o), children: [
    /* @__PURE__ */ n("p", { className: "text-sm text-secondary-foreground", children: e }),
    /* @__PURE__ */ n("p", { className: "text-sm font-medium text-foreground", children: t })
  ] })
);
E.displayName = "DetailsItem";
function U(e, t = []) {
  let o = [];
  function r(c, a) {
    const l = i.createContext(a), f = o.length;
    o = [...o, a];
    function d(p) {
      const { scope: g, children: b, ...u } = p, x = (g == null ? void 0 : g[e][f]) || l, y = i.useMemo(() => u, Object.values(u));
      return /* @__PURE__ */ n(x.Provider, { value: y, children: b });
    }
    function m(p, g) {
      const b = (g == null ? void 0 : g[e][f]) || l, u = i.useContext(b);
      if (u) return u;
      if (a !== void 0) return a;
      throw new Error(`\`${p}\` must be used within \`${c}\``);
    }
    return d.displayName = c + "Provider", [d, m];
  }
  const s = () => {
    const c = o.map((a) => i.createContext(a));
    return function(l) {
      const f = (l == null ? void 0 : l[e]) || c;
      return i.useMemo(
        () => ({ [`__scope${e}`]: { ...l, [e]: f } }),
        [l, f]
      );
    };
  };
  return s.scopeName = e, [r, De(s, ...t)];
}
function De(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const o = () => {
    const r = e.map((s) => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return function(c) {
      const a = r.reduce((l, { useScope: f, scopeName: d }) => {
        const p = f(c)[`__scope${d}`];
        return { ...l, ...p };
      }, {});
      return i.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return o.scopeName = t.scopeName, o;
}
var Be = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], A = Be.reduce((e, t) => {
  const o = i.forwardRef((r, s) => {
    const { asChild: c, ...a } = r, l = c ? M : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ n(l, { ...a, ref: s });
  });
  return o.displayName = `Primitive.${t}`, { ...e, [t]: o };
}, {});
function S(e, t, { checkForDefaultPrevented: o = !0 } = {}) {
  return function(s) {
    if (e == null || e(s), o === !1 || !s.defaultPrevented)
      return t == null ? void 0 : t(s);
  };
}
function Oe(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Le(...e) {
  return (t) => e.forEach((o) => Oe(o, t));
}
function $(...e) {
  return i.useCallback(Le(...e), e);
}
function $e(e) {
  const t = e + "CollectionProvider", [o, r] = U(t), [s, c] = o(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), a = (b) => {
    const { scope: u, children: x } = b, y = C.useRef(null), v = C.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ n(s, { scope: u, itemMap: v, collectionRef: y, children: x });
  };
  a.displayName = t;
  const l = e + "CollectionSlot", f = C.forwardRef(
    (b, u) => {
      const { scope: x, children: y } = b, v = c(l, x), h = $(u, v.collectionRef);
      return /* @__PURE__ */ n(M, { ref: h, children: y });
    }
  );
  f.displayName = l;
  const d = e + "CollectionItemSlot", m = "data-radix-collection-item", p = C.forwardRef(
    (b, u) => {
      const { scope: x, children: y, ...v } = b, h = C.useRef(null), w = $(u, h), P = c(d, x);
      return C.useEffect(() => (P.itemMap.set(h, { ref: h, ...v }), () => void P.itemMap.delete(h))), /* @__PURE__ */ n(M, { [m]: "", ref: w, children: y });
    }
  );
  p.displayName = d;
  function g(b) {
    const u = c(e + "CollectionConsumer", b);
    return C.useCallback(() => {
      const y = u.collectionRef.current;
      if (!y) return [];
      const v = Array.from(y.querySelectorAll(`[${m}]`));
      return Array.from(u.itemMap.values()).sort(
        (P, F) => v.indexOf(P.ref.current) - v.indexOf(F.ref.current)
      );
    }, [u.collectionRef, u.itemMap]);
  }
  return [
    { Provider: a, Slot: f, ItemSlot: p },
    g,
    r
  ];
}
var Ve = globalThis != null && globalThis.document ? i.useLayoutEffect : () => {
}, Ke = i.useId || (() => {
}), Ue = 0;
function ze(e) {
  const [t, o] = i.useState(Ke());
  return Ve(() => {
    o((r) => r ?? String(Ue++));
  }, [e]), t ? `radix-${t}` : "";
}
function z(e) {
  const t = i.useRef(e);
  return i.useEffect(() => {
    t.current = e;
  }), i.useMemo(() => (...o) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...o);
  }, []);
}
function D({
  prop: e,
  defaultProp: t,
  onChange: o = () => {
  }
}) {
  const [r, s] = je({ defaultProp: t, onChange: o }), c = e !== void 0, a = c ? e : r, l = z(o), f = i.useCallback(
    (d) => {
      if (c) {
        const p = typeof d == "function" ? d(e) : d;
        p !== e && l(p);
      } else
        s(d);
    },
    [c, e, s, l]
  );
  return [a, f];
}
function je({
  defaultProp: e,
  onChange: t
}) {
  const o = i.useState(e), [r] = o, s = i.useRef(r), c = z(t);
  return i.useEffect(() => {
    s.current !== r && (c(r), s.current = r);
  }, [r, s, c]), o;
}
var We = i.createContext(void 0);
function X(e) {
  const t = i.useContext(We);
  return e || t || "ltr";
}
var L = "rovingFocusGroup.onEntryFocus", Ye = { bubbles: !1, cancelable: !0 }, B = "RovingFocusGroup", [V, Z, qe] = $e(B), [Je, H] = U(
  B,
  [qe]
), [Qe, Xe] = Je(B), ee = i.forwardRef(
  (e, t) => /* @__PURE__ */ n(V.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ n(V.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ n(Ze, { ...e, ref: t }) }) })
);
ee.displayName = B;
var Ze = i.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: o,
    orientation: r,
    loop: s = !1,
    dir: c,
    currentTabStopId: a,
    defaultCurrentTabStopId: l,
    onCurrentTabStopIdChange: f,
    onEntryFocus: d,
    preventScrollOnEntryFocus: m = !1,
    ...p
  } = e, g = i.useRef(null), b = $(t, g), u = X(c), [x = null, y] = D({
    prop: a,
    defaultProp: l,
    onChange: f
  }), [v, h] = i.useState(!1), w = z(d), P = Z(o), F = i.useRef(!1), [Ie, Y] = i.useState(0);
  return i.useEffect(() => {
    const I = g.current;
    if (I)
      return I.addEventListener(L, w), () => I.removeEventListener(L, w);
  }, [w]), /* @__PURE__ */ n(
    Qe,
    {
      scope: o,
      orientation: r,
      dir: u,
      loop: s,
      currentTabStopId: x,
      onItemFocus: i.useCallback(
        (I) => y(I),
        [y]
      ),
      onItemShiftTab: i.useCallback(() => h(!0), []),
      onFocusableItemAdd: i.useCallback(
        () => Y((I) => I + 1),
        []
      ),
      onFocusableItemRemove: i.useCallback(
        () => Y((I) => I - 1),
        []
      ),
      children: /* @__PURE__ */ n(
        A.div,
        {
          tabIndex: v || Ie === 0 ? -1 : 0,
          "data-orientation": r,
          ...p,
          ref: b,
          style: { outline: "none", ...e.style },
          onMouseDown: S(e.onMouseDown, () => {
            F.current = !0;
          }),
          onFocus: S(e.onFocus, (I) => {
            const Ne = !F.current;
            if (I.target === I.currentTarget && Ne && !v) {
              const q = new CustomEvent(L, Ye);
              if (I.currentTarget.dispatchEvent(q), !q.defaultPrevented) {
                const O = P().filter((R) => R.focusable), Te = O.find((R) => R.active), Re = O.find((R) => R.id === x), Se = [Te, Re, ...O].filter(
                  Boolean
                ).map((R) => R.ref.current);
                re(Se, m);
              }
            }
            F.current = !1;
          }),
          onBlur: S(e.onBlur, () => h(!1))
        }
      )
    }
  );
}), te = "RovingFocusGroupItem", oe = i.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: o,
      focusable: r = !0,
      active: s = !1,
      tabStopId: c,
      ...a
    } = e, l = ze(), f = c || l, d = Xe(te, o), m = d.currentTabStopId === f, p = Z(o), { onFocusableItemAdd: g, onFocusableItemRemove: b } = d;
    return i.useEffect(() => {
      if (r)
        return g(), () => b();
    }, [r, g, b]), /* @__PURE__ */ n(
      V.ItemSlot,
      {
        scope: o,
        id: f,
        focusable: r,
        active: s,
        children: /* @__PURE__ */ n(
          A.span,
          {
            tabIndex: m ? 0 : -1,
            "data-orientation": d.orientation,
            ...a,
            ref: t,
            onMouseDown: S(e.onMouseDown, (u) => {
              r ? d.onItemFocus(f) : u.preventDefault();
            }),
            onFocus: S(e.onFocus, () => d.onItemFocus(f)),
            onKeyDown: S(e.onKeyDown, (u) => {
              if (u.key === "Tab" && u.shiftKey) {
                d.onItemShiftTab();
                return;
              }
              if (u.target !== u.currentTarget) return;
              const x = tt(u, d.orientation, d.dir);
              if (x !== void 0) {
                if (u.metaKey || u.ctrlKey || u.altKey || u.shiftKey) return;
                u.preventDefault();
                let v = p().filter((h) => h.focusable).map((h) => h.ref.current);
                if (x === "last") v.reverse();
                else if (x === "prev" || x === "next") {
                  x === "prev" && v.reverse();
                  const h = v.indexOf(u.currentTarget);
                  v = d.loop ? ot(v, h + 1) : v.slice(h + 1);
                }
                setTimeout(() => re(v));
              }
            })
          }
        )
      }
    );
  }
);
oe.displayName = te;
var He = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function et(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function tt(e, t, o) {
  const r = et(e.key, o);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return He[r];
}
function re(e, t = !1) {
  const o = document.activeElement;
  for (const r of e)
    if (r === o || (r.focus({ preventScroll: t }), document.activeElement !== o)) return;
}
function ot(e, t) {
  return e.map((o, r) => e[(t + r) % e.length]);
}
var rt = ee, nt = oe, st = "Toggle", j = i.forwardRef((e, t) => {
  const { pressed: o, defaultPressed: r = !1, onPressedChange: s, ...c } = e, [a = !1, l] = D({
    prop: o,
    onChange: s,
    defaultProp: r
  });
  return /* @__PURE__ */ n(
    A.button,
    {
      type: "button",
      "aria-pressed": a,
      "data-state": a ? "on" : "off",
      "data-disabled": e.disabled ? "" : void 0,
      ...c,
      ref: t,
      onClick: S(e.onClick, () => {
        e.disabled || l(!a);
      })
    }
  );
});
j.displayName = st;
var ne = j, G = "ToggleGroup", [se, Tt] = U(G, [
  H
]), ae = H(), W = C.forwardRef((e, t) => {
  const { type: o, ...r } = e;
  if (o === "single")
    return /* @__PURE__ */ n(at, { ...r, ref: t });
  if (o === "multiple")
    return /* @__PURE__ */ n(ct, { ...r, ref: t });
  throw new Error(`Missing prop \`type\` expected on \`${G}\``);
});
W.displayName = G;
var [ce, le] = se(G), at = C.forwardRef((e, t) => {
  const {
    value: o,
    defaultValue: r,
    onValueChange: s = () => {
    },
    ...c
  } = e, [a, l] = D({
    prop: o,
    defaultProp: r,
    onChange: s
  });
  return /* @__PURE__ */ n(
    ce,
    {
      scope: e.__scopeToggleGroup,
      type: "single",
      value: a ? [a] : [],
      onItemActivate: l,
      onItemDeactivate: C.useCallback(() => l(""), [l]),
      children: /* @__PURE__ */ n(ie, { ...c, ref: t })
    }
  );
}), ct = C.forwardRef((e, t) => {
  const {
    value: o,
    defaultValue: r,
    onValueChange: s = () => {
    },
    ...c
  } = e, [a = [], l] = D({
    prop: o,
    defaultProp: r,
    onChange: s
  }), f = C.useCallback(
    (m) => l((p = []) => [...p, m]),
    [l]
  ), d = C.useCallback(
    (m) => l((p = []) => p.filter((g) => g !== m)),
    [l]
  );
  return /* @__PURE__ */ n(
    ce,
    {
      scope: e.__scopeToggleGroup,
      type: "multiple",
      value: a,
      onItemActivate: f,
      onItemDeactivate: d,
      children: /* @__PURE__ */ n(ie, { ...c, ref: t })
    }
  );
});
W.displayName = G;
var [lt, it] = se(G), ie = C.forwardRef(
  (e, t) => {
    const {
      __scopeToggleGroup: o,
      disabled: r = !1,
      rovingFocus: s = !0,
      orientation: c,
      dir: a,
      loop: l = !0,
      ...f
    } = e, d = ae(o), m = X(a), p = { role: "group", dir: m, ...f };
    return /* @__PURE__ */ n(lt, { scope: o, rovingFocus: s, disabled: r, children: s ? /* @__PURE__ */ n(
      rt,
      {
        asChild: !0,
        ...d,
        orientation: c,
        dir: m,
        loop: l,
        children: /* @__PURE__ */ n(A.div, { ...p, ref: t })
      }
    ) : /* @__PURE__ */ n(A.div, { ...p, ref: t }) });
  }
), k = "ToggleGroupItem", ue = C.forwardRef(
  (e, t) => {
    const o = le(k, e.__scopeToggleGroup), r = it(k, e.__scopeToggleGroup), s = ae(e.__scopeToggleGroup), c = o.value.includes(e.value), a = r.disabled || e.disabled, l = { ...e, pressed: c, disabled: a }, f = C.useRef(null);
    return r.rovingFocus ? /* @__PURE__ */ n(
      nt,
      {
        asChild: !0,
        ...s,
        focusable: !a,
        active: c,
        ref: f,
        children: /* @__PURE__ */ n(Q, { ...l, ref: t })
      }
    ) : /* @__PURE__ */ n(Q, { ...l, ref: t });
  }
);
ue.displayName = k;
var Q = C.forwardRef(
  (e, t) => {
    const { __scopeToggleGroup: o, value: r, ...s } = e, c = le(k, o), a = { role: "radio", "aria-checked": e.pressed, "aria-pressed": void 0 }, l = c.type === "single" ? a : void 0;
    return /* @__PURE__ */ n(
      j,
      {
        ...l,
        ...s,
        ref: t,
        onPressedChange: (f) => {
          f ? c.onItemActivate(r) : c.onItemDeactivate(r);
        }
      }
    );
  }
), de = W, fe = ue;
const pe = Me(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), ut = i.forwardRef(({ className: e, variant: t, size: o, ...r }, s) => /* @__PURE__ */ n(
  ne,
  {
    ref: s,
    className: T(pe({ variant: t, size: o, className: e })),
    ...r
  }
));
ut.displayName = ne.displayName;
const me = i.createContext({
  size: "default",
  variant: "default"
}), ge = i.forwardRef(({ className: e, variant: t, size: o, children: r, ...s }, c) => /* @__PURE__ */ n(
  de,
  {
    ref: c,
    className: T("flex items-center justify-center gap-1", e),
    ...s,
    children: /* @__PURE__ */ n(me.Provider, { value: { variant: t, size: o }, children: r })
  }
));
ge.displayName = de.displayName;
const ve = i.forwardRef(({ className: e, children: t, variant: o, size: r, ...s }, c) => {
  const a = i.useContext(me);
  return /* @__PURE__ */ n(
    fe,
    {
      ref: c,
      className: T(
        pe({
          variant: a.variant || o,
          size: a.size || r
        }),
        e
      ),
      ...s,
      children: t
    }
  );
});
ve.displayName = fe.displayName;
const dt = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
], ft = _(
  ({ daysOfTheWeek: e = dt, activatedDays: t = [] }, o) => /* @__PURE__ */ n(
    ge,
    {
      type: "multiple",
      value: t,
      disabled: !0,
      className: "flex justify-start",
      ref: o,
      children: e.map((r) => /* @__PURE__ */ n(
        ve,
        {
          value: r,
          className: "h-6 w-6 disabled:bg-muted disabled:text-card-foreground disabled:opacity-100 disabled:data-[state=on]:bg-secondary-foreground disabled:data-[state=on]:text-card",
          children: /* @__PURE__ */ n("p", { className: "h-auto text-xs", children: r[0] })
        },
        r
      ))
    }
  )
), pt = _(
  ({ details: e, activatedDays: t, manager: o, teams: r, title: s }, c) => /* @__PURE__ */ N("div", { ref: c, className: "flex flex-col gap-4", children: [
    !!s && /* @__PURE__ */ n("p", { className: "mb-1 text-sm font-medium text-foreground", children: s }),
    e.map((a, l) => /* @__PURE__ */ n(
      E,
      {
        title: a.title,
        content: a.content
      },
      a.title + l
    )),
    /* @__PURE__ */ n(
      E,
      {
        title: "Workable days",
        className: "gap-2",
        content: /* @__PURE__ */ n(ft, { activatedDays: t })
      }
    ),
    !!o && /* @__PURE__ */ n(
      E,
      {
        title: "Manager",
        className: "gap-2",
        content: /* @__PURE__ */ n(
          J,
          {
            text: o,
            avatar: {
              src: "https://github.com/dani-moreno.png",
              alt: o[0]
            }
          }
        )
      }
    ),
    !!(r != null && r.length) && /* @__PURE__ */ n(
      E,
      {
        title: "Team",
        className: "flex flex-col gap-2",
        content: /* @__PURE__ */ n("div", { className: "flex flex-row flex-wrap gap-2", children: r.map((a) => a ? /* @__PURE__ */ n(J, { text: a, avatar: { alt: a[0] } }) : null) })
      }
    )
  ] })
), mt = _(
  ({ title: e, subtitle: t, src: o, alt: r }, s) => /* @__PURE__ */ N("div", { className: "flex px-10 py-6", ref: s, children: [
    /* @__PURE__ */ n(Pe, { size: "xlarge", src: o, alt: r }),
    /* @__PURE__ */ N("div", { className: "flex flex-col gap-2 pl-5", children: [
      /* @__PURE__ */ n("h1", { className: "pt-2 text-2xl font-medium text-foreground", children: e }),
      /* @__PURE__ */ n("h2", { className: "text-lg font-normal text-intermediate", children: t })
    ] })
  ] })
), be = i.forwardRef(({ ...e }, t) => /* @__PURE__ */ n("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
be.displayName = "Breadcrumb";
const xe = i.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  "ol",
  {
    ref: o,
    className: T(
      "flex list-none flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground",
      e
    ),
    ...t
  }
));
xe.displayName = "BreadcrumbList";
const K = i.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  "li",
  {
    ref: o,
    className: T("inline-flex items-center gap-1.5", e),
    ...t
  }
));
K.displayName = "BreadcrumbItem";
const he = i.forwardRef(({ asChild: e, className: t, ...o }, r) => /* @__PURE__ */ n(
  e ? M : "a",
  {
    ref: r,
    className: T(
      "text-foreground no-underline transition-colors hover:text-primary-foreground",
      t
    ),
    ...o
  }
));
he.displayName = "BreadcrumbLink";
const Ce = i.forwardRef(({ className: e, ...t }, o) => /* @__PURE__ */ n(
  "span",
  {
    ref: o,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: T("text-secondary-foreground", e),
    ...t
  }
));
Ce.displayName = "BreadcrumbPage";
const ye = ({
  children: e,
  className: t,
  ...o
}) => /* @__PURE__ */ n(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: T(
      "flex align-bottom text-secondary-foreground [&>svg]:size-3.5",
      t
    ),
    ...o,
    children: e ?? /* @__PURE__ */ n(ke, {})
  }
);
ye.displayName = "BreadcrumbSeparator";
const gt = _(
  ({ icon: e, routes: t, title: o }, r) => /* @__PURE__ */ N(
    be,
    {
      className: "flex min-h-6 flex-row border-x-0 border-t-0 border-dashed border-b-muted px-5 py-3",
      ref: r,
      children: [
        /* @__PURE__ */ n("span", { className: "flex items-center pr-1 text-primary-foreground", children: /* @__PURE__ */ n(_e, { size: "md", icon: e }) }),
        /* @__PURE__ */ N(xe, { children: [
          t.map((s, c) => /* @__PURE__ */ N(we, { children: [
            /* @__PURE__ */ n(K, { children: /* @__PURE__ */ n(he, { href: s.url, children: s.title }) }, s.title + c),
            /* @__PURE__ */ n(ye, {})
          ] })),
          /* @__PURE__ */ n(K, { children: /* @__PURE__ */ n(Ce, { children: o }) })
        ] })
      ]
    }
  )
), Rt = _(
  ({
    tabs: e,
    title: t,
    subtitle: o,
    src: r,
    alt: s,
    breadcrumbTitle: c,
    routes: a,
    icon: l,
    defaultTab: f = e[0].key,
    details: d = [],
    activatedDays: m = [],
    manager: p,
    teams: g
  }, b) => /* @__PURE__ */ N("main", { ref: b, className: "h-full bg-background", children: [
    /* @__PURE__ */ n(gt, { icon: l, routes: a, title: c }),
    /* @__PURE__ */ n(mt, { title: t, subtitle: o, src: r, alt: s }),
    /* @__PURE__ */ N(Ge, { defaultValue: f, children: [
      /* @__PURE__ */ n(Fe, { className: "h-auto w-full justify-start rounded-none border-b border-l-0 border-r-0 border-t-0 border-solid border-b-muted bg-transparent px-10 py-3", children: e.map((u) => /* @__PURE__ */ n(
        Ee,
        {
          className: "flex text-intermediate data-[state=active]:rounded-lg data-[state=active]:bg-muted data-[state=active]:text-foreground data-[state=active]:underline data-[state=active]:underline-offset-[1.4rem] data-[state=active]:shadow-none",
          value: u.key,
          children: u.name
        },
        u.key
      )) }),
      /* @__PURE__ */ N("div", { className: "grid grid-cols-1 divide-x divide-y-0 divide-dashed divide-muted sm:grid-cols-[2fr_1fr]", children: [
        /* @__PURE__ */ n("div", { className: "order-2 pl-10 pr-8 pt-6 sm:order-1", children: e.map((u) => /* @__PURE__ */ n(Ae, { value: u.key, children: u.content }, u.key)) }),
        /* @__PURE__ */ n("div", { className: "order-1 pl-8 pr-10 pt-6 sm:order-2", children: /* @__PURE__ */ n(
          pt,
          {
            details: d,
            activatedDays: m,
            manager: p,
            teams: g
          }
        ) })
      ] })
    ] })
  ] })
);
export {
  pt as Details,
  mt as Header,
  Rt as Tabs
};
