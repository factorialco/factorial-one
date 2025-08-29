import { C as A, L as dt, c as ft, P as $e, a as k, f as pt, b as vt, A as gt, B as mt, d as yt, e as ht, g as bt, V as wt, h as He, i as xt, j as Dt, M as We, I as Ke, F as Ct, D as St, k as Pt, l as Ot, m as Tt, n as Ue, S as Et, o as Nt, p as B, U as qe, q as At, r as jt, s as he, t as Mt, u as Ye, v as Lt, w as It, x as Ft, y as kt, z as Rt, E as Bt, G as $t, H as Ht, J as Wt, X as Kt, K as Ut, N as qt, O as Yt, Q as Vt } from "./useSelectable-D4aIcNHB.js";
import { at as Un, R as qn, az as Yn, T as Vn, W as zn, Y as Xn, Z as Gn, _ as Jn, $ as Qn, a0 as Zn, a1 as _n, a2 as ea, a3 as ta, a4 as ra, a5 as na, a7 as aa, a8 as oa, a9 as ia, aa as la, ad as sa, ae as ua, af as ca, ag as da, ah as fa, aj as pa, a6 as va, ai as ga, ac as ma, aw as ya, ao as ha, au as ba, ar as wa, an as xa, aA as Da, am as Ca, al as Sa, ab as Pa, ak as Oa, ap as Ta, aB as Ea, aq as Na, av as Aa, ay as ja, as as Ma, ax as La } from "./useSelectable-D4aIcNHB.js";
import { jsx as u, jsxs as D, Fragment as ue } from "react/jsx-runtime";
import * as ce from "react";
import zt, { forwardRef as Q, useRef as de, useImperativeHandle as Xt, Children as Gt, useState as M, useEffect as z, useMemo as Jt, createContext as Ve, useContext as Qt } from "react";
const bn = {
  approvals: {
    history: "Approval history",
    statuses: {
      waiting: "Waiting",
      pending: "Pending",
      approved: "Approved",
      rejected: "Rejected"
    },
    requiredNumbers: {
      one: "One approval required",
      other: "{{count}} approvals required"
    }
  },
  navigation: {
    sidebar: "Main navigation",
    previous: "Previous",
    next: "Next"
  },
  actions: {
    add: "Add",
    edit: "Edit",
    save: "Save",
    cancel: "Cancel",
    copy: "Copy",
    close: "Close",
    showAll: "Show all",
    showLess: "Show less",
    skipToContent: "Skip to content",
    view: "View",
    unselect: "Unselect",
    search: "Search",
    clear: "Clear",
    more: "More",
    moveUp: "Move up",
    moveDown: "Move down",
    thumbsUp: "Like",
    thumbsDown: "Dislike",
    other: "Other actions",
    toggle: "Toggle"
  },
  status: {
    selected: {
      singular: "Selected",
      plural: "Selected"
    }
  },
  filters: {
    label: "Filters",
    applyFilters: "Apply filters",
    cancel: "Cancel",
    failedToLoadOptions: "Failed to load options",
    retry: "Retry"
  },
  collections: {
    sorting: {
      noSorting: "No sorting",
      toggleDirection: "Toggle sorting direction",
      sortBy: "Sort by"
    },
    grouping: {
      noGrouping: "No grouping",
      groupBy: "Group by",
      toggleDirection: "Toggle direction"
    },
    actions: {
      actions: "Actions"
    },
    visualizations: {
      table: "Table view",
      card: "Card view",
      list: "List view",
      pagination: {
        of: "of"
      }
    },
    itemsCount: "items",
    emptyStates: {
      noData: {
        title: "No data",
        description: "No data available"
      },
      noResults: {
        title: "No results",
        description: "No results found try another search or clear the filters",
        clearFilters: "Clear filters"
      },
      error: {
        title: "Error",
        description: "An error occurred while loading the data",
        retry: "Retry"
      }
    },
    summaries: {
      types: {
        sum: "sum"
      }
    }
  },
  shortcut: "Shortcut",
  date: {
    from: "From",
    to: "To",
    none: "None",
    date: "Date",
    custom: "Custom period",
    selectDate: "Select Date",
    compareTo: "Compare to",
    presets: {
      last7Days: "Last 7 days",
      last30Days: "Last 30 days",
      last3Months: "Last 3 months",
      last6Months: "Last 6 months",
      lastYear: "Last year",
      last3Years: "Last 3 years",
      last100Years: "Last 100 years"
    },
    range: "Range",
    selectedBy: "Selected by",
    groups: {
      today: "Today",
      yesterday: "Yesterday",
      lastWeek: "Last week",
      lastMonth: "Last month",
      other: "Other"
    },
    granularities: {
      day: {
        currentDate: "Today",
        label: "Day"
      },
      week: {
        currentDate: "This week",
        label: "Week"
      },
      month: {
        currentDate: "This month",
        label: "Month"
      },
      quarter: {
        currentDate: "This quarter",
        label: "Quarter"
      },
      halfyear: {
        currentDate: "This half year",
        label: "Half year"
      },
      year: {
        currentDate: "This year",
        label: "Year"
      },
      range: {
        currentDate: "Today",
        label: "Range"
      }
    },
    month: {
      january: "January",
      february: "February",
      march: "March",
      april: "April",
      may: "May",
      june: "June",
      july: "July",
      august: "August",
      september: "September",
      october: "October",
      november: "November",
      december: "December"
    }
  },
  favorites: {
    favorites: "Favorites",
    remove: "Remove favorite"
  },
  notifications: "Notifications",
  ai: {
    description: "Chat with AI",
    newChat: "New Chat",
    openChat: "Open Chat",
    scrollToBottom: "Scroll to bottom"
  }
}, wn = A(
  {
    name: "Link",
    type: "info"
  },
  dt
);
var fe = "Progress", pe = 100, [Zt, xn] = ft(fe), [_t, er] = Zt(fe), ze = ce.forwardRef(
  (e, r) => {
    const {
      __scopeProgress: t,
      value: n = null,
      max: a,
      getValueLabel: o = tr,
      ...l
    } = e;
    (a || a === 0) && !be(a) && console.error(rr(`${a}`, "Progress"));
    const s = be(a) ? a : pe;
    n !== null && !we(n, s) && console.error(nr(`${n}`, "Progress"));
    const i = we(n, s) ? n : null, d = J(i) ? o(i, s) : void 0;
    return /* @__PURE__ */ u(_t, { scope: t, value: i, max: s, children: /* @__PURE__ */ u(
      $e.div,
      {
        "aria-valuemax": s,
        "aria-valuemin": 0,
        "aria-valuenow": J(i) ? i : void 0,
        "aria-valuetext": d,
        role: "progressbar",
        "data-state": Je(i, s),
        "data-value": i ?? void 0,
        "data-max": s,
        ...l,
        ref: r
      }
    ) });
  }
);
ze.displayName = fe;
var Xe = "ProgressIndicator", Ge = ce.forwardRef(
  (e, r) => {
    const { __scopeProgress: t, ...n } = e, a = er(Xe, t);
    return /* @__PURE__ */ u(
      $e.div,
      {
        "data-state": Je(a.value, a.max),
        "data-value": a.value ?? void 0,
        "data-max": a.max,
        ...n,
        ref: r
      }
    );
  }
);
Ge.displayName = Xe;
function tr(e, r) {
  return `${Math.round(e / r * 100)}%`;
}
function Je(e, r) {
  return e == null ? "indeterminate" : e === r ? "complete" : "loading";
}
function J(e) {
  return typeof e == "number";
}
function be(e) {
  return J(e) && !isNaN(e) && e > 0;
}
function we(e, r) {
  return J(e) && !isNaN(e) && e <= r && e >= 0;
}
function rr(e, r) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${pe}\`.`;
}
function nr(e, r) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${pe} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var Qe = ze, ar = Ge;
const Ze = ce.forwardRef(({ className: e, value: r, ...t }, n) => /* @__PURE__ */ u(
  Qe,
  {
    ref: n,
    className: k(
      "relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary",
      e
    ),
    ...t,
    children: /* @__PURE__ */ u(
      ar,
      {
        className: "h-full w-full flex-1 transition-all",
        style: {
          backgroundColor: t.color,
          transform: `translateX(-${100 - (r || 0)}%)`
        }
      }
    )
  }
));
Ze.displayName = Qe.displayName;
const or = ({ value: e, max: r = 100, label: t, color: n }, a) => {
  const o = n || vt(0), l = e / r * 100;
  return /* @__PURE__ */ D("div", { className: "flex items-center space-x-2", "aria-live": "polite", children: [
    /* @__PURE__ */ u("div", { className: "flex-grow", children: /* @__PURE__ */ u(
      Ze,
      {
        color: o,
        value: l,
        className: "w-full",
        "aria-valuemin": 0,
        "aria-valuemax": r,
        "aria-valuenow": e,
        "aria-label": `${l.toFixed(1)}%`
      }
    ) }),
    t && /* @__PURE__ */ u("div", { className: "flex-shrink-0 text-sm font-medium", children: t })
  ] });
}, ir = pt(or), Dn = A(
  {
    name: "AreaChart",
    type: "info"
  },
  gt
), Cn = A(
  {
    name: "BarChart",
    type: "info"
  },
  mt
), Sn = A(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  yt
), Pn = A(
  {
    name: "LineChart",
    type: "info"
  },
  ht
), On = A(
  {
    name: "PieChart",
    type: "info"
  },
  bt
), Tn = A(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  wt
), En = A(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  ir
), lr = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, sr = Q(function({ widgets: r, children: t }, n) {
  const a = de(null);
  Xt(n, () => a.current);
  const o = Gt.toArray(r).filter((l) => !!l).map((l, s) => /* @__PURE__ */ u("div", { className: "h-full @5xl:h-auto [&>div]:h-full", children: l }, s));
  return /* @__PURE__ */ u(He, { layout: "home", children: /* @__PURE__ */ D("div", { ref: a, className: "@container", children: [
    /* @__PURE__ */ D("div", { className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden", children: [
      /* @__PURE__ */ u(xt, { columns: lr, showArrows: !1, children: o }),
      /* @__PURE__ */ u("main", { children: t })
    ] }),
    /* @__PURE__ */ D("div", { className: "hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid", children: [
      /* @__PURE__ */ u("div", { className: "col-span-3 flex flex-row gap-5 *:flex-1", children: o.slice(0, 3) }),
      /* @__PURE__ */ u("main", { className: "col-span-2", children: t }),
      /* @__PURE__ */ u("div", { className: "flex flex-1 flex-col gap-5", children: o.slice(3) })
    ] })
  ] }) });
}), ur = Q(
  function({ children: r, sideContent: t, mainColumnPosition: n = "left" }, a) {
    return /* @__PURE__ */ u("div", { ref: a, className: "h-full overflow-auto", children: /* @__PURE__ */ D(
      "div",
      {
        className: k(
          "flex h-full overflow-auto text-f1-foreground sm:flex-row",
          n === "right" ? "flex-col" : "flex-col-reverse"
        ),
        children: [
          n === "right" && /* @__PURE__ */ u(xe, { children: t }),
          /* @__PURE__ */ u(
            "main",
            {
              className: k(
                "h-fit min-h-full border-0 px-6 py-5 sm:basis-3/4 sm:border-solid",
                n === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary"
              ),
              children: r
            }
          ),
          n === "left" && /* @__PURE__ */ u(xe, { children: t })
        ]
      }
    ) });
  }
), xe = ({ children: e }) => /* @__PURE__ */ u("aside", { className: "py-5 pl-2 pr-4 sm:basis-1/4 sm:pb-6", children: e }), cr = Dt({
  base: "relative flex min-h-full w-full flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), _e = zt.forwardRef(({ children: e, variant: r, className: t, ...n }, a) => /* @__PURE__ */ u(He, { layout: "standard", children: /* @__PURE__ */ u(
  "section",
  {
    ref: a,
    className: k("relative flex-1 overflow-auto", t),
    ...n,
    children: /* @__PURE__ */ u("div", { className: k(cr({ variant: r })), children: e })
  }
) }));
_e.displayName = "StandardLayout";
const Nn = A(
  {
    name: "StandardLayout",
    type: "layout"
  },
  _e
), An = A(
  {
    name: "TwoColumnLayout",
    type: "layout"
  },
  ur
), jn = A(
  {
    name: "HomeLayout",
    type: "layout"
  },
  sr
), dr = ({ benefits: e }) => /* @__PURE__ */ u("div", { className: "flex flex-col gap-2", children: e.map((r, t) => /* @__PURE__ */ u(fr, { text: r }, t)) }), fr = ({ text: e }) => /* @__PURE__ */ D("div", { className: "flex flex-row items-start gap-2", children: [
  /* @__PURE__ */ u(Ke, { icon: Ct, size: "md", className: "text-f1-icon-positive" }),
  /* @__PURE__ */ u("span", { children: e })
] }), et = Q(
  ({ title: e, image: r, benefits: t, actions: n, withShadow: a = !0, icon: o, moduleName: l }, s) => /* @__PURE__ */ D(
    "div",
    {
      ref: s,
      className: k(
        "bg-white flex flex-row rounded-xl border border-f1-border-secondary",
        a && "shadow-md"
      ),
      children: [
        /* @__PURE__ */ u("div", { className: "aspect-auto flex-shrink-0 overflow-hidden rounded-xl py-1 pl-1", children: /* @__PURE__ */ u(
          "img",
          {
            src: r,
            alt: "",
            className: "h-full w-full rounded-lg object-cover"
          }
        ) }),
        /* @__PURE__ */ D("div", { className: "flex flex-col justify-center gap-8 px-8 py-5", children: [
          /* @__PURE__ */ D("div", { className: "flex flex-col gap-5", children: [
            /* @__PURE__ */ D("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ D("div", { className: "flex flex-row items-center gap-2", children: [
                o && /* @__PURE__ */ u(We, { icon: o }),
                l && /* @__PURE__ */ u("p", { className: "text-base font-medium text-f1-foreground", children: l })
              ] }),
              /* @__PURE__ */ u("h2", { className: "font-bold text-xl text-f1-foreground", children: e })
            ] }),
            /* @__PURE__ */ u(dr, { benefits: t })
          ] }),
          n && /* @__PURE__ */ u("div", { className: "flex gap-3", children: n })
        ] })
      ]
    }
  )
);
et.displayName = "ProductBlankslate";
function pr({
  isOpen: e,
  onClose: r,
  title: t,
  children: n,
  icon: a,
  portalContainer: o
}) {
  const [l, s] = M(e);
  return z(() => {
    s(e);
  }, [e]), /* @__PURE__ */ u(St, { open: l, onOpenChange: (d) => {
    s(d), d || r();
  }, modal: !0, children: /* @__PURE__ */ D(
    Pt,
    {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: o,
      children: [
        /* @__PURE__ */ D("div", { className: "flex flex-row items-center justify-between px-4 py-4", children: [
          /* @__PURE__ */ D(Ot, { className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground", children: [
            a && /* @__PURE__ */ u(We, { icon: a, size: "lg" }),
            t
          ] }),
          /* @__PURE__ */ u(
            Tt,
            {
              variant: "outline",
              icon: Ue,
              onClick: r,
              label: "Close modal",
              hideLabel: !0
            }
          )
        ] }),
        /* @__PURE__ */ D(Et, { className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col", children: [
          n,
          /* @__PURE__ */ u(
            Nt,
            {
              orientation: "vertical",
              className: "[&_div]:bg-f1-background"
            }
          )
        ] })
      ]
    }
  ) });
}
function Mn({
  isOpen: e,
  onClose: r,
  title: t,
  image: n,
  benefits: a,
  errorMessage: o,
  successMessage: l,
  loadingState: s,
  nextSteps: i,
  closeLabel: d,
  primaryAction: f,
  modalTitle: p,
  modalIcon: C,
  secondaryAction: c,
  portalContainer: v
}) {
  const [m, y] = M(e), [P, h] = M(null), [S, w] = M(!1), b = async () => {
    if (f != null && f.onClick) {
      w(!0);
      try {
        await f.onClick(), y(!1), h("success");
      } catch {
        h("error");
      } finally {
        w(!1);
      }
    }
  }, g = () => {
    y(!1), r == null || r();
  }, T = S;
  return /* @__PURE__ */ D(ue, { children: [
    /* @__PURE__ */ u(
      pr,
      {
        isOpen: m,
        onClose: g,
        title: p,
        icon: C,
        portalContainer: v,
        children: /* @__PURE__ */ u("div", { className: "pb-4 pl-4", children: /* @__PURE__ */ u(
          et,
          {
            title: t,
            image: n,
            benefits: a,
            withShadow: !1,
            actions: /* @__PURE__ */ D("div", { className: "flex gap-3", children: [
              f && /* @__PURE__ */ u(
                B,
                {
                  variant: f.variant,
                  label: T ? s.label : f.label,
                  icon: f.icon || void 0,
                  onClick: b,
                  loading: f.loading,
                  size: f.size
                }
              ),
              c && /* @__PURE__ */ u(
                B,
                {
                  onClick: c.onClick,
                  label: c.label,
                  variant: c.variant,
                  size: c.size,
                  icon: c.icon
                }
              )
            ] })
          }
        ) })
      }
    ),
    P && /* @__PURE__ */ u(
      qe,
      {
        open: !0,
        onClose: () => {
          g(), h(null);
        },
        success: P === "success",
        errorMessage: o,
        successMessage: l,
        nextSteps: i,
        closeLabel: d,
        portalContainer: v
      }
    )
  ] });
}
function vr({
  mediaUrl: e,
  title: r,
  description: t,
  onClose: n,
  dismissible: a,
  width: o,
  trackVisibility: l,
  actions: s,
  showConfirmation: i = !0
}) {
  const [d, f] = M(!1), p = () => {
    f(!0), n && n();
  };
  z(() => {
    l && l(!d);
  }, [l, d]);
  const C = e == null ? void 0 : e.includes(".mp4");
  return /* @__PURE__ */ u(ue, { children: d ? null : /* @__PURE__ */ D(At, { style: { width: o }, className: "relative bg-f1-background p-1", children: [
    /* @__PURE__ */ D(jt, { children: [
      a && /* @__PURE__ */ u("div", { className: "absolute right-2 top-2 z-10", children: /* @__PURE__ */ u(
        B,
        {
          variant: "ghost",
          icon: Ue,
          size: "sm",
          hideLabel: !0,
          onClick: p,
          label: "Close"
        }
      ) }),
      /* @__PURE__ */ D("div", { children: [
        /* @__PURE__ */ u("div", { children: e && (C ? /* @__PURE__ */ u(
          "video",
          {
            src: e,
            autoPlay: !0,
            muted: !0,
            loop: !0,
            playsInline: !0,
            className: "h-full w-full rounded-md"
          }
        ) : /* @__PURE__ */ u(
          "img",
          {
            src: e,
            alt: r,
            className: "h-full w-full rounded-md"
          }
        )) }),
        /* @__PURE__ */ D("div", { className: "flex flex-col gap-[2px] p-3", children: [
          /* @__PURE__ */ u(he, { className: "text-lg font-medium", children: r }),
          /* @__PURE__ */ u(he, { className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary", children: t })
        ] })
      ] })
    ] }),
    s && /* @__PURE__ */ u(Mt, { className: "p-3", children: s.map(
      (c) => c.type === "upsell" ? /* @__PURE__ */ u(
        Ye,
        {
          label: c.label,
          onRequest: c.onClick,
          errorMessage: c.errorMessage,
          successMessage: c.successMessage,
          loadingState: c.loadingState,
          nextSteps: c.nextSteps,
          closeLabel: c.closeLabel,
          showConfirmation: i && c.showConfirmation,
          variant: c.variant
        },
        c.label
      ) : /* @__PURE__ */ u(
        B,
        {
          label: c.label,
          onClick: c.onClick,
          variant: c.variant
        },
        c.label
      )
    ) })
  ] }) });
}
const gr = Q(
  function({ primaryAction: r, secondaryAction: t, ...n }, a) {
    const o = (i) => i.variant === "promote" ? /* @__PURE__ */ u(
      Ye,
      {
        label: i.label,
        onRequest: async () => {
          await i.onClick();
        },
        errorMessage: i.errorMessage,
        successMessage: i.successMessage,
        loadingState: i.loadingState,
        nextSteps: i.nextSteps,
        closeLabel: i.closeLabel,
        showIcon: i.showIcon,
        showConfirmation: i.showConfirmation,
        variant: i.variant
      }
    ) : /* @__PURE__ */ u(
      B,
      {
        onClick: i.onClick,
        label: i.label,
        variant: i.variant || "default",
        size: "md",
        icon: i.icon
      }
    ), l = (r == null ? void 0 : r.variant) !== "promote" ? r : void 0, s = (t == null ? void 0 : t.variant) !== "promote" ? t : void 0;
    return /* @__PURE__ */ D(
      Lt,
      {
        ref: a,
        ...n,
        primaryAction: l,
        secondaryAction: s,
        children: [
          (r == null ? void 0 : r.variant) === "promote" && o(r),
          (t == null ? void 0 : t.variant) === "promote" && o(t)
        ]
      }
    );
  }
);
gr.displayName = "UpsellingBanner";
function Ln({
  isOpen: e,
  setIsOpen: r,
  label: t,
  variant: n = "promote",
  size: a = "md",
  showIcon: o = !0,
  side: l = "right",
  align: s = "center",
  icon: i = kt,
  mediaUrl: d,
  title: f,
  description: p,
  width: C = "300px",
  trackVisibility: c,
  actions: v,
  onClick: m,
  hideLabel: y = !1
}) {
  const [P, h] = M(!1), [S, w] = M(null), [b, g] = M(null), T = (x) => {
    r(x), m && m();
  }, O = async (x) => {
    if (x.type === "upsell") {
      g(x);
      try {
        await x.onClick(), x.showConfirmation && (h(!0), w("success"));
      } catch {
        h(!0), w("error");
      }
    }
  }, E = () => {
    w(null), h(!1), g(null), r(!1);
  }, N = e && !P, j = v == null ? void 0 : v.map((x) => x.type === "upsell" ? {
    ...x,
    onClick: () => O(x)
  } : x);
  return /* @__PURE__ */ D(ue, { children: [
    /* @__PURE__ */ D(It, { open: N, onOpenChange: T, children: [
      /* @__PURE__ */ u(Ft, { asChild: !0, children: /* @__PURE__ */ u(
        B,
        {
          variant: n,
          label: t,
          size: a,
          icon: o ? i : void 0,
          onClick: () => r(e),
          hideLabel: y
        }
      ) }),
      /* @__PURE__ */ u(
        Rt,
        {
          side: l,
          align: s,
          className: "w-fit border-none bg-transparent p-2 shadow-none",
          children: /* @__PURE__ */ u(
            vr,
            {
              mediaUrl: d,
              title: f,
              description: p,
              onClose: () => r(!1),
              dismissible: !1,
              width: C,
              trackVisibility: c,
              actions: j,
              showConfirmation: !1
            }
          )
        }
      )
    ] }),
    (b == null ? void 0 : b.type) === "upsell" && b.showConfirmation && S && /* @__PURE__ */ u(
      qe,
      {
        open: !0,
        onClose: E,
        success: S === "success",
        errorMessage: b.errorMessage,
        successMessage: b.successMessage,
        nextSteps: b.nextSteps,
        closeLabel: b.closeLabel,
        portalContainer: null
      }
    )
  ] });
}
const In = A(
  {
    name: "Icon",
    type: "info"
  },
  Ke
);
function q(e) {
  "@babel/helpers - typeof";
  return q = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, q(e);
}
function mr(e, r) {
  if (q(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(e, r);
    if (q(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
function yr(e) {
  var r = mr(e, "string");
  return q(r) == "symbol" ? r : r + "";
}
function X(e, r, t) {
  return (r = yr(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function De(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function Ce(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? De(Object(t), !0).forEach(function(n) {
      X(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : De(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
var hr = {
  top: function(r, t) {
    return Math.abs(t.y - r.top);
  },
  right: function(r, t) {
    return Math.abs(r.right - t.x);
  },
  bottom: function(r, t) {
    return Math.abs(r.bottom - t.y);
  },
  left: function(r, t) {
    return Math.abs(t.x - r.left);
  }
}, br = Symbol("closestEdge");
function wr(e, r) {
  var t, n, a = r.element, o = r.input, l = r.allowedEdges, s = {
    x: o.clientX,
    y: o.clientY
  }, i = a.getBoundingClientRect(), d = l.map(function(p) {
    return {
      edge: p,
      value: hr[p](i, s)
    };
  }), f = (t = (n = d.sort(function(p, C) {
    return p.value - C.value;
  })[0]) === null || n === void 0 ? void 0 : n.edge) !== null && t !== void 0 ? t : null;
  return Ce(Ce({}, e), {}, X({}, br, f));
}
function Z() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  return function() {
    r.forEach(function(a) {
      return a();
    });
  };
}
function xr(e) {
  if (Array.isArray(e)) return e;
}
function Dr(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var n, a, o, l, s = [], i = !0, d = !1;
    try {
      if (o = (t = t.call(e)).next, r !== 0) for (; !(i = (n = o.call(t)).done) && (s.push(n.value), s.length !== r); i = !0) ;
    } catch (f) {
      d = !0, a = f;
    } finally {
      try {
        if (!i && t.return != null && (l = t.return(), Object(l) !== l)) return;
      } finally {
        if (d) throw a;
      }
    }
    return s;
  }
}
function oe(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function tt(e, r) {
  if (e) {
    if (typeof e == "string") return oe(e, r);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? oe(e, r) : void 0;
  }
}
function Cr() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rt(e, r) {
  return xr(e) || Dr(e, r) || tt(e, r) || Cr();
}
var ee = {}, K = {}, Se;
function nt() {
  if (Se) return K;
  Se = 1, Object.defineProperty(K, "__esModule", { value: !0 }), K.bind = void 0;
  function e(r, t) {
    var n = t.type, a = t.listener, o = t.options;
    return r.addEventListener(n, a, o), function() {
      r.removeEventListener(n, a, o);
    };
  }
  return K.bind = e, K;
}
var F = {}, Pe;
function Sr() {
  if (Pe) return F;
  Pe = 1;
  var e = F && F.__assign || function() {
    return e = Object.assign || function(o) {
      for (var l, s = 1, i = arguments.length; s < i; s++) {
        l = arguments[s];
        for (var d in l) Object.prototype.hasOwnProperty.call(l, d) && (o[d] = l[d]);
      }
      return o;
    }, e.apply(this, arguments);
  };
  Object.defineProperty(F, "__esModule", { value: !0 }), F.bindAll = void 0;
  var r = /* @__PURE__ */ nt();
  function t(o) {
    if (!(typeof o > "u"))
      return typeof o == "boolean" ? {
        capture: o
      } : o;
  }
  function n(o, l) {
    if (l == null)
      return o;
    var s = e(e({}, o), { options: e(e({}, t(l)), t(o.options)) });
    return s;
  }
  function a(o, l, s) {
    var i = l.map(function(d) {
      var f = n(d, s);
      return (0, r.bind)(o, f);
    });
    return function() {
      i.forEach(function(f) {
        return f();
      });
    };
  }
  return F.bindAll = a, F;
}
var Oe;
function Pr() {
  return Oe || (Oe = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.bindAll = e.bind = void 0;
    var r = /* @__PURE__ */ nt();
    Object.defineProperty(e, "bind", { enumerable: !0, get: function() {
      return r.bind;
    } });
    var t = /* @__PURE__ */ Sr();
    Object.defineProperty(e, "bindAll", { enumerable: !0, get: function() {
      return t.bindAll;
    } });
  }(ee)), ee;
}
var $ = /* @__PURE__ */ Pr(), at = "data-pdnd-honey-pot";
function ot(e) {
  return e instanceof Element && e.hasAttribute(at);
}
function it(e) {
  var r = document.elementsFromPoint(e.x, e.y), t = rt(r, 2), n = t[0], a = t[1];
  return n ? ot(n) ? a ?? null : n : null;
}
var Or = 2147483647;
function Te(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function Ee(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Te(Object(t), !0).forEach(function(n) {
      X(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Te(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
var Y = 2, Ne = Y / 2;
function Tr(e) {
  return {
    x: Math.floor(e.x),
    y: Math.floor(e.y)
  };
}
function Er(e) {
  return {
    x: e.x - Ne,
    y: e.y - Ne
  };
}
function Nr(e) {
  return {
    x: Math.max(e.x, 0),
    y: Math.max(e.y, 0)
  };
}
function Ar(e) {
  return {
    x: Math.min(e.x, window.innerWidth - Y),
    y: Math.min(e.y, window.innerHeight - Y)
  };
}
function Ae(e) {
  var r = e.client, t = Ar(Nr(Er(Tr(r))));
  return DOMRect.fromRect({
    x: t.x,
    y: t.y,
    width: Y,
    height: Y
  });
}
function je(e) {
  var r = e.clientRect;
  return {
    left: "".concat(r.left, "px"),
    top: "".concat(r.top, "px"),
    width: "".concat(r.width, "px"),
    height: "".concat(r.height, "px")
  };
}
function jr(e) {
  var r = e.client, t = e.clientRect;
  return (
    // is within horizontal bounds
    r.x >= t.x && r.x <= t.x + t.width && // is within vertical bounds
    r.y >= t.y && r.y <= t.y + t.height
  );
}
function Mr(e) {
  var r = e.initial, t = document.createElement("div");
  t.setAttribute(at, "true");
  var n = Ae({
    client: r
  });
  Object.assign(t.style, Ee(Ee({
    // Setting a background color explicitly to avoid any inherited styles.
    // Looks like this could be `opacity: 0`, but worried that _might_
    // cause the element to be ignored on some platforms.
    // When debugging, set backgroundColor to something like "red".
    backgroundColor: "transparent",
    position: "fixed",
    // Being explicit to avoid inheriting styles
    padding: 0,
    margin: 0,
    boxSizing: "border-box"
  }, je({
    clientRect: n
  })), {}, {
    // We want this element to absorb pointer events,
    // it's kind of the whole point 😉
    pointerEvents: "auto",
    // Want to make sure the honey pot is top of everything else.
    // Don't need to worry about native drag previews, as they will
    // have been rendered (and removed) before the honey pot is rendered
    zIndex: Or
  })), document.body.appendChild(t);
  var a = $.bind(window, {
    type: "pointermove",
    listener: function(l) {
      var s = {
        x: l.clientX,
        y: l.clientY
      };
      n = Ae({
        client: s
      }), Object.assign(t.style, je({
        clientRect: n
      }));
    },
    // using capture so we are less likely to be impacted by event stopping
    options: {
      capture: !0
    }
  });
  return function(l) {
    var s = l.current;
    if (a(), jr({
      client: s,
      clientRect: n
    })) {
      t.remove();
      return;
    }
    function i() {
      d(), t.remove();
    }
    var d = $.bindAll(window, [
      {
        type: "pointerdown",
        listener: i
      },
      {
        type: "pointermove",
        listener: i
      },
      {
        type: "focusin",
        listener: i
      },
      {
        type: "focusout",
        listener: i
      },
      // a 'pointerdown' should happen before 'dragstart', but just being super safe
      {
        type: "dragstart",
        listener: i
      },
      // if the user has dragged something out of the window
      // and then is dragging something back into the window
      // the first events we will see are "dragenter" (and then "dragover").
      // So if we see any of these we need to clear the post drag fix.
      {
        type: "dragenter",
        listener: i
      },
      {
        type: "dragover",
        listener: i
      }
      // Not adding a "wheel" event listener, as "wheel" by itself does not
      // resolve the bug.
    ], {
      // Using `capture` so less likely to be impacted by other code stopping events
      capture: !0
    });
  };
}
function Lr() {
  var e = null;
  function r() {
    return e = null, $.bind(window, {
      type: "pointermove",
      listener: function(a) {
        e = {
          x: a.clientX,
          y: a.clientY
        };
      },
      // listening for pointer move in capture phase
      // so we are less likely to be impacted by events being stopped.
      options: {
        capture: !0
      }
    });
  }
  function t() {
    var n = null;
    return function(o) {
      var l = o.eventName, s = o.payload;
      if (l === "onDragStart") {
        var i = s.location.initial.input, d = e ?? {
          x: i.clientX,
          y: i.clientY
        };
        n = Mr({
          initial: d
        });
      }
      if (l === "onDrop") {
        var f, p = s.location.current.input;
        (f = n) === null || f === void 0 || f({
          current: {
            x: p.clientX,
            y: p.clientY
          }
        }), n = null, e = null;
      }
    };
  }
  return {
    bindEvents: r,
    getOnPostDispatch: t
  };
}
function Ir(e) {
  if (Array.isArray(e)) return oe(e);
}
function Fr(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function kr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lt(e) {
  return Ir(e) || Fr(e) || tt(e) || kr();
}
function H(e) {
  var r = null;
  return function() {
    if (!r) {
      for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++)
        a[o] = arguments[o];
      var l = e.apply(this, a);
      r = {
        result: l
      };
    }
    return r.result;
  };
}
var Rr = H(function() {
  return process.env.NODE_ENV === "test" ? !1 : navigator.userAgent.includes("Firefox");
}), ve = H(function() {
  if (process.env.NODE_ENV === "test")
    return !1;
  var r = navigator, t = r.userAgent;
  return t.includes("AppleWebKit") && !t.includes("Chrome");
}), ie = {
  isLeavingWindow: Symbol("leaving"),
  isEnteringWindow: Symbol("entering")
};
function Br(e) {
  var r = e.dragLeave;
  return ve() ? r.hasOwnProperty(ie.isLeavingWindow) : !1;
}
(function() {
  if (typeof window > "u" || process.env.NODE_ENV === "test" || !ve())
    return;
  function r() {
    return {
      enterCount: 0,
      isOverWindow: !1
    };
  }
  var t = r();
  function n() {
    t = r();
  }
  $.bindAll(
    window,
    [{
      type: "dragstart",
      listener: function() {
        t.enterCount = 0, t.isOverWindow = !0;
      }
    }, {
      type: "drop",
      listener: n
    }, {
      type: "dragend",
      listener: n
    }, {
      type: "dragenter",
      listener: function(o) {
        !t.isOverWindow && t.enterCount === 0 && (o[ie.isEnteringWindow] = !0), t.isOverWindow = !0, t.enterCount++;
      }
    }, {
      type: "dragleave",
      listener: function(o) {
        t.enterCount--, t.isOverWindow && t.enterCount === 0 && (o[ie.isLeavingWindow] = !0, t.isOverWindow = !1);
      }
    }],
    // using `capture: true` so that adding event listeners
    // in bubble phase will have the correct symbols
    {
      capture: !0
    }
  );
})();
function $r(e) {
  return "nodeName" in e;
}
function Hr(e) {
  return $r(e) && e.ownerDocument !== document;
}
function Wr(e) {
  var r = e.dragLeave, t = r.type, n = r.relatedTarget;
  return t !== "dragleave" ? !1 : ve() ? Br({
    dragLeave: r
  }) : n == null ? !0 : Rr() ? Hr(n) : n instanceof HTMLIFrameElement;
}
function Kr(e) {
  var r = e.onDragEnd;
  return [
    // ## Detecting drag ending for removed draggables
    //
    // If a draggable element is removed during a drag and the user drops:
    // 1. if over a valid drop target: we get a "drop" event to know the drag is finished
    // 2. if not over a valid drop target (or cancelled): we get nothing
    // The "dragend" event will not fire on the source draggable if it has been
    // removed from the DOM.
    // So we need to figure out if a drag operation has finished by looking at other events
    // We can do this by looking at other events
    // ### First detection: "pointermove" events
    // 1. "pointermove" events cannot fire during a drag and drop operation
    // according to the spec. So if we get a "pointermove" it means that
    // the drag and drop operations has finished. So if we get a "pointermove"
    // we know that the drag is over
    // 2. 🦊😤 Drag and drop operations are _supposed_ to suppress
    // other pointer events. However, firefox will allow a few
    // pointer event to get through after a drag starts.
    // The most I've seen is 3
    {
      type: "pointermove",
      listener: /* @__PURE__ */ function() {
        var t = 0;
        return function() {
          if (t < 20) {
            t++;
            return;
          }
          r();
        };
      }()
    },
    // ### Second detection: "pointerdown" events
    // If we receive this event then we know that a drag operation has finished
    // and potentially another one is about to start.
    // Note: `pointerdown` fires on all browsers / platforms before "dragstart"
    {
      type: "pointerdown",
      listener: r
    }
  ];
}
function U(e) {
  return {
    altKey: e.altKey,
    button: e.button,
    buttons: e.buttons,
    ctrlKey: e.ctrlKey,
    metaKey: e.metaKey,
    shiftKey: e.shiftKey,
    clientX: e.clientX,
    clientY: e.clientY,
    pageX: e.pageX,
    pageY: e.pageY
  };
}
var Ur = function(r) {
  var t = [], n = null, a = function() {
    for (var l = arguments.length, s = new Array(l), i = 0; i < l; i++)
      s[i] = arguments[i];
    t = s, !n && (n = requestAnimationFrame(function() {
      n = null, r.apply(void 0, t);
    }));
  };
  return a.cancel = function() {
    n && (cancelAnimationFrame(n), n = null);
  }, a;
}, te = Ur(function(e) {
  return e();
}), G = /* @__PURE__ */ function() {
  var e = null;
  function r(n) {
    var a = requestAnimationFrame(function() {
      e = null, n();
    });
    e = {
      frameId: a,
      fn: n
    };
  }
  function t() {
    e && (cancelAnimationFrame(e.frameId), e.fn(), e = null);
  }
  return {
    schedule: r,
    flush: t
  };
}();
function qr(e) {
  var r = e.source, t = e.initial, n = e.dispatchEvent, a = {
    dropTargets: []
  };
  function o(s) {
    n(s), a = {
      dropTargets: s.payload.location.current.dropTargets
    };
  }
  var l = {
    start: function(i) {
      var d = i.nativeSetDragImage, f = {
        current: t,
        previous: a,
        initial: t
      };
      o({
        eventName: "onGenerateDragPreview",
        payload: {
          source: r,
          location: f,
          nativeSetDragImage: d
        }
      }), G.schedule(function() {
        o({
          eventName: "onDragStart",
          payload: {
            source: r,
            location: f
          }
        });
      });
    },
    dragUpdate: function(i) {
      var d = i.current;
      G.flush(), te.cancel(), o({
        eventName: "onDropTargetChange",
        payload: {
          source: r,
          location: {
            initial: t,
            previous: a,
            current: d
          }
        }
      });
    },
    drag: function(i) {
      var d = i.current;
      te(function() {
        G.flush();
        var f = {
          initial: t,
          previous: a,
          current: d
        };
        o({
          eventName: "onDrag",
          payload: {
            source: r,
            location: f
          }
        });
      });
    },
    drop: function(i) {
      var d = i.current, f = i.updatedSourcePayload;
      G.flush(), te.cancel(), o({
        eventName: "onDrop",
        payload: {
          source: f ?? r,
          location: {
            current: d,
            previous: a,
            initial: t
          }
        }
      });
    }
  };
  return l;
}
var le = {
  isActive: !1
};
function st() {
  return !le.isActive;
}
function Yr(e) {
  return e.dataTransfer ? e.dataTransfer.setDragImage.bind(e.dataTransfer) : null;
}
function Vr(e) {
  var r = e.current, t = e.next;
  if (r.length !== t.length)
    return !0;
  for (var n = 0; n < r.length; n++)
    if (r[n].element !== t[n].element)
      return !0;
  return !1;
}
function zr(e) {
  var r = e.event, t = e.dragType, n = e.getDropTargetsOver, a = e.dispatchEvent;
  if (!st())
    return;
  var o = Xr({
    event: r,
    dragType: t,
    getDropTargetsOver: n
  });
  le.isActive = !0;
  var l = {
    current: o
  };
  re({
    event: r,
    current: o.dropTargets
  });
  var s = qr({
    source: t.payload,
    dispatchEvent: a,
    initial: o
  });
  function i(c) {
    var v = Vr({
      current: l.current.dropTargets,
      next: c.dropTargets
    });
    l.current = c, v && s.dragUpdate({
      current: l.current
    });
  }
  function d(c) {
    var v = U(c), m = ot(c.target) ? it({
      x: v.clientX,
      y: v.clientY
    }) : c.target, y = n({
      target: m,
      input: v,
      source: t.payload,
      current: l.current.dropTargets
    });
    y.length && (c.preventDefault(), re({
      event: c,
      current: y
    })), i({
      dropTargets: y,
      input: v
    });
  }
  function f() {
    l.current.dropTargets.length && i({
      dropTargets: [],
      input: l.current.input
    }), s.drop({
      current: l.current,
      updatedSourcePayload: null
    }), p();
  }
  function p() {
    le.isActive = !1, C();
  }
  var C = $.bindAll(
    window,
    [{
      // 👋 Note: we are repurposing the `dragover` event as our `drag` event
      // this is because firefox does not publish pointer coordinates during
      // a `drag` event, but does for every other type of drag event
      // `dragover` fires on all elements that are being dragged over
      // Because we are binding to `window` - our `dragover` is effectively the same as a `drag`
      // 🦊😤
      type: "dragover",
      listener: function(v) {
        d(v), s.drag({
          current: l.current
        });
      }
    }, {
      type: "dragenter",
      listener: d
    }, {
      type: "dragleave",
      listener: function(v) {
        Wr({
          dragLeave: v
        }) && (i({
          input: l.current.input,
          dropTargets: []
        }), t.startedFrom === "external" && f());
      }
    }, {
      // A "drop" can only happen if the browser allowed the drop
      type: "drop",
      listener: function(v) {
        if (l.current = {
          dropTargets: l.current.dropTargets,
          input: U(v)
        }, !l.current.dropTargets.length) {
          f();
          return;
        }
        v.preventDefault(), re({
          event: v,
          current: l.current.dropTargets
        }), s.drop({
          current: l.current,
          // When dropping something native, we need to extract the latest
          // `.items` from the "drop" event as it is now accessible
          updatedSourcePayload: t.type === "external" ? t.getDropPayload(v) : null
        }), p();
      }
    }, {
      // "dragend" fires when on the drag source (eg a draggable element)
      // when the drag is finished.
      // "dragend" will fire after "drop" (if there was a successful drop)
      // "dragend" does not fire if the draggable source has been removed during the drag
      // or for external drag sources (eg files)
      // This "dragend" listener will not fire if there was a successful drop
      // as we will have already removed the event listener
      type: "dragend",
      listener: function(v) {
        l.current = {
          dropTargets: l.current.dropTargets,
          input: U(v)
        }, f();
      }
    }].concat(lt(Kr({
      onDragEnd: f
    }))),
    // Once we have started a managed drag operation it is important that we see / own all drag events
    // We got one adoption bug pop up where some code was stopping (`event.stopPropagation()`)
    // all "drop" events in the bubble phase on the `document.body`.
    // This meant that we never saw the "drop" event.
    {
      capture: !0
    }
  );
  s.start({
    nativeSetDragImage: Yr(r)
  });
}
function re(e) {
  var r, t = e.event, n = e.current, a = (r = n[0]) === null || r === void 0 ? void 0 : r.dropEffect;
  a != null && t.dataTransfer && (t.dataTransfer.dropEffect = a);
}
function Xr(e) {
  var r = e.event, t = e.dragType, n = e.getDropTargetsOver, a = U(r);
  if (t.startedFrom === "external")
    return {
      input: a,
      dropTargets: []
    };
  var o = n({
    input: a,
    source: t.payload,
    target: r.target,
    current: []
  });
  return {
    input: a,
    dropTargets: o
  };
}
var Me = {
  canStart: st,
  start: zr
}, se = /* @__PURE__ */ new Map();
function Gr(e) {
  var r = e.typeKey, t = e.mount, n = se.get(r);
  if (n)
    return n.usageCount++, n;
  var a = {
    typeKey: r,
    unmount: t(),
    usageCount: 1
  };
  return se.set(r, a), a;
}
function Jr(e) {
  var r = Gr(e);
  return function() {
    r.usageCount--, !(r.usageCount > 0) && (r.unmount(), se.delete(e.typeKey));
  };
}
function ut(e, r) {
  var t = r.attribute, n = r.value;
  return e.setAttribute(t, n), function() {
    return e.removeAttribute(t);
  };
}
function Le(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function I(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Le(Object(t), !0).forEach(function(n) {
      X(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Le(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function ne(e, r) {
  var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!t) {
    if (Array.isArray(e) || (t = Qr(e)) || r) {
      t && (e = t);
      var n = 0, a = function() {
      };
      return { s: a, n: function() {
        return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
      }, e: function(d) {
        throw d;
      }, f: a };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o, l = !0, s = !1;
  return { s: function() {
    t = t.call(e);
  }, n: function() {
    var d = t.next();
    return l = d.done, d;
  }, e: function(d) {
    s = !0, o = d;
  }, f: function() {
    try {
      l || t.return == null || t.return();
    } finally {
      if (s) throw o;
    }
  } };
}
function Qr(e, r) {
  if (e) {
    if (typeof e == "string") return Ie(e, r);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Ie(e, r) : void 0;
  }
}
function Ie(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function ae(e) {
  return e.slice(0).reverse();
}
function Zr(e) {
  var r = e.typeKey, t = e.defaultDropEffect, n = /* @__PURE__ */ new WeakMap(), a = "data-drop-target-for-".concat(r), o = "[".concat(a, "]");
  function l(c) {
    return n.set(c.element, c), function() {
      return n.delete(c.element);
    };
  }
  function s(c) {
    if (process.env.NODE_ENV !== "production") {
      var v = n.get(c.element);
      v && console.warn("You have already registered a [".concat(r, "] dropTarget on the same element"), {
        existing: v,
        proposed: c
      }), c.element instanceof HTMLIFrameElement && console.warn(`
            We recommend not registering <iframe> elements as drop targets
            as it can result in some strange browser event ordering.
          `.replace(/\s{2,}/g, " ").trim());
    }
    var m = Z(ut(c.element, {
      attribute: a,
      value: "true"
    }), l(c));
    return H(m);
  }
  function i(c) {
    var v, m, y, P, h = c.source, S = c.target, w = c.input, b = c.result, g = b === void 0 ? [] : b;
    if (S == null)
      return g;
    if (!(S instanceof Element))
      return S instanceof Node ? i({
        source: h,
        target: S.parentElement,
        input: w,
        result: g
      }) : g;
    var T = S.closest(o);
    if (T == null)
      return g;
    var O = n.get(T);
    if (O == null)
      return g;
    var E = {
      input: w,
      source: h,
      element: O.element
    };
    if (O.canDrop && !O.canDrop(E))
      return i({
        source: h,
        target: O.element.parentElement,
        input: w,
        result: g
      });
    var N = (v = (m = O.getData) === null || m === void 0 ? void 0 : m.call(O, E)) !== null && v !== void 0 ? v : {}, j = (y = (P = O.getDropEffect) === null || P === void 0 ? void 0 : P.call(O, E)) !== null && y !== void 0 ? y : t, x = {
      data: N,
      element: O.element,
      dropEffect: j,
      // we are collecting _actual_ drop targets, so these are
      // being applied _not_ due to stickiness
      isActiveDueToStickiness: !1
    };
    return i({
      source: h,
      target: O.element.parentElement,
      input: w,
      // Using bubble ordering. Same ordering as `event.getPath()`
      result: [].concat(lt(g), [x])
    });
  }
  function d(c) {
    var v = c.eventName, m = c.payload, y = ne(m.location.current.dropTargets), P;
    try {
      for (y.s(); !(P = y.n()).done; ) {
        var h, S = P.value, w = n.get(S.element), b = I(I({}, m), {}, {
          self: S
        });
        w == null || (h = w[v]) === null || h === void 0 || h.call(
          w,
          // I cannot seem to get the types right here.
          // TS doesn't seem to like that one event can need `nativeSetDragImage`
          // @ts-expect-error
          b
        );
      }
    } catch (g) {
      y.e(g);
    } finally {
      y.f();
    }
  }
  var f = {
    onGenerateDragPreview: d,
    onDrag: d,
    onDragStart: d,
    onDrop: d,
    onDropTargetChange: function(v) {
      var m = v.payload, y = new Set(m.location.current.dropTargets.map(function(W) {
        return W.element;
      })), P = /* @__PURE__ */ new Set(), h = ne(m.location.previous.dropTargets), S;
      try {
        for (h.s(); !(S = h.n()).done; ) {
          var w, b = S.value;
          P.add(b.element);
          var g = n.get(b.element), T = y.has(b.element), O = I(I({}, m), {}, {
            self: b
          });
          if (g == null || (w = g.onDropTargetChange) === null || w === void 0 || w.call(g, O), !T) {
            var E;
            g == null || (E = g.onDragLeave) === null || E === void 0 || E.call(g, O);
          }
        }
      } catch (W) {
        h.e(W);
      } finally {
        h.f();
      }
      var N = ne(m.location.current.dropTargets), j;
      try {
        for (N.s(); !(j = N.n()).done; ) {
          var x, R, _ = j.value;
          if (!P.has(_.element)) {
            var ye = I(I({}, m), {}, {
              self: _
            }), L = n.get(_.element);
            L == null || (x = L.onDropTargetChange) === null || x === void 0 || x.call(L, ye), L == null || (R = L.onDragEnter) === null || R === void 0 || R.call(L, ye);
          }
        }
      } catch (W) {
        N.e(W);
      } finally {
        N.f();
      }
    }
  };
  function p(c) {
    f[c.eventName](c);
  }
  function C(c) {
    var v = c.source, m = c.target, y = c.input, P = c.current, h = i({
      source: v,
      target: m,
      input: y
    });
    if (h.length >= P.length)
      return h;
    for (var S = ae(P), w = ae(h), b = [], g = 0; g < S.length; g++) {
      var T, O = S[g], E = w[g];
      if (E != null) {
        b.push(E);
        continue;
      }
      var N = b[g - 1], j = S[g - 1];
      if ((N == null ? void 0 : N.element) !== (j == null ? void 0 : j.element))
        break;
      var x = n.get(O.element);
      if (!x)
        break;
      var R = {
        input: y,
        source: v,
        element: x.element
      };
      if (x.canDrop && !x.canDrop(R) || !((T = x.getIsSticky) !== null && T !== void 0 && T.call(x, R)))
        break;
      b.push(I(I({}, O), {}, {
        // making it clear to consumers this drop target is active due to stickiness
        isActiveDueToStickiness: !0
      }));
    }
    return ae(b);
  }
  return {
    dropTargetForConsumers: s,
    getIsOver: C,
    dispatchEvent: p
  };
}
function _r(e, r) {
  var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!t) {
    if (Array.isArray(e) || (t = en(e)) || r) {
      t && (e = t);
      var n = 0, a = function() {
      };
      return { s: a, n: function() {
        return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
      }, e: function(d) {
        throw d;
      }, f: a };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o, l = !0, s = !1;
  return { s: function() {
    t = t.call(e);
  }, n: function() {
    var d = t.next();
    return l = d.done, d;
  }, e: function(d) {
    s = !0, o = d;
  }, f: function() {
    try {
      l || t.return == null || t.return();
    } finally {
      if (s) throw o;
    }
  } };
}
function en(e, r) {
  if (e) {
    if (typeof e == "string") return Fe(e, r);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Fe(e, r) : void 0;
  }
}
function Fe(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function ke(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function tn(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ke(Object(t), !0).forEach(function(n) {
      X(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ke(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function rn() {
  var e = /* @__PURE__ */ new Set(), r = null;
  function t(o) {
    r && (!o.canMonitor || o.canMonitor(r.canMonitorArgs)) && r.active.add(o);
  }
  function n(o) {
    var l = tn({}, o);
    e.add(l), t(l);
    function s() {
      e.delete(l), r && r.active.delete(l);
    }
    return H(s);
  }
  function a(o) {
    var l = o.eventName, s = o.payload;
    if (l === "onGenerateDragPreview") {
      r = {
        canMonitorArgs: {
          initial: s.location.initial,
          source: s.source
        },
        active: /* @__PURE__ */ new Set()
      };
      var i = _r(e), d;
      try {
        for (i.s(); !(d = i.n()).done; ) {
          var f = d.value;
          t(f);
        }
      } catch (y) {
        i.e(y);
      } finally {
        i.f();
      }
    }
    if (r) {
      for (var p = Array.from(r.active), C = 0, c = p; C < c.length; C++) {
        var v = c[C];
        if (r.active.has(v)) {
          var m;
          (m = v[l]) === null || m === void 0 || m.call(v, s);
        }
      }
      l === "onDrop" && (r.active.clear(), r = null);
    }
  }
  return {
    dispatchEvent: a,
    monitorForConsumers: n
  };
}
function nn(e) {
  var r = e.typeKey, t = e.mount, n = e.dispatchEventToSource, a = e.onPostDispatch, o = e.defaultDropEffect, l = rn(), s = Zr({
    typeKey: r,
    defaultDropEffect: o
  });
  function i(p) {
    n == null || n(p), s.dispatchEvent(p), l.dispatchEvent(p), a == null || a(p);
  }
  function d(p) {
    var C = p.event, c = p.dragType;
    Me.start({
      event: C,
      dragType: c,
      getDropTargetsOver: s.getIsOver,
      dispatchEvent: i
    });
  }
  function f() {
    function p() {
      var C = {
        canStart: Me.canStart,
        start: d
      };
      return t(C);
    }
    return Jr({
      typeKey: r,
      mount: p
    });
  }
  return {
    registerUsage: f,
    dropTarget: s.dropTargetForConsumers,
    monitor: l.monitorForConsumers
  };
}
var an = H(function() {
  return navigator.userAgent.toLocaleLowerCase().includes("android");
}), on = "pdnd:android-fallback", Re = "text/plain", ln = "text/uri-list", sn = "application/vnd.pdnd", V = /* @__PURE__ */ new WeakMap();
function un(e) {
  return V.set(e.element, e), function() {
    V.delete(e.element);
  };
}
var Be = Lr(), ge = nn({
  typeKey: "element",
  defaultDropEffect: "move",
  mount: function(r) {
    return Z(Be.bindEvents(), $.bind(document, {
      type: "dragstart",
      listener: function(n) {
        var a, o, l, s, i, d;
        if (r.canStart(n) && !n.defaultPrevented) {
          if (!n.dataTransfer) {
            process.env.NODE_ENV !== "production" && console.warn(`
              It appears as though you have are not testing DragEvents correctly.

              - If you are unit testing, ensure you have polyfilled DragEvent.
              - If you are browser testing, ensure you are dispatching drag events correctly.

              Please see our testing guides for more information:
              https://atlassian.design/components/pragmatic-drag-and-drop/core-package/testing
            `.replace(/ {2}/g, ""));
            return;
          }
          var f = n.target;
          if (!(f instanceof HTMLElement))
            return null;
          var p = V.get(f);
          if (!p)
            return null;
          var C = U(n), c = {
            element: p.element,
            dragHandle: (a = p.dragHandle) !== null && a !== void 0 ? a : null,
            input: C
          };
          if (p.canDrag && !p.canDrag(c))
            return n.preventDefault(), null;
          if (p.dragHandle) {
            var v = it({
              x: C.clientX,
              y: C.clientY
            });
            if (!p.dragHandle.contains(v))
              return n.preventDefault(), null;
          }
          var m = (o = (l = p.getInitialDataForExternal) === null || l === void 0 ? void 0 : l.call(p, c)) !== null && o !== void 0 ? o : null;
          if (m)
            for (var y = 0, P = Object.entries(m); y < P.length; y++) {
              var h = rt(P[y], 2), S = h[0], w = h[1];
              n.dataTransfer.setData(S, w ?? "");
            }
          an() && !n.dataTransfer.types.includes(Re) && !n.dataTransfer.types.includes(ln) && n.dataTransfer.setData(Re, on), n.dataTransfer.setData(sn, "");
          var b = {
            element: p.element,
            dragHandle: (s = p.dragHandle) !== null && s !== void 0 ? s : null,
            data: (i = (d = p.getInitialData) === null || d === void 0 ? void 0 : d.call(p, c)) !== null && i !== void 0 ? i : {}
          }, g = {
            type: "element",
            payload: b,
            startedFrom: "internal"
          };
          r.start({
            event: n,
            dragType: g
          });
        }
      }
    }));
  },
  dispatchEventToSource: function(r) {
    var t, n, a = r.eventName, o = r.payload;
    (t = V.get(o.source.element)) === null || t === void 0 || (n = t[a]) === null || n === void 0 || n.call(
      t,
      // I cannot seem to get the types right here.
      // TS doesn't seem to like that one event can need `nativeSetDragImage`
      // @ts-expect-error
      o
    );
  },
  onPostDispatch: Be.getOnPostDispatch()
}), cn = ge.dropTarget, dn = ge.monitor;
function fn(e) {
  if (process.env.NODE_ENV !== "production" && e.dragHandle && !e.element.contains(e.dragHandle) && console.warn("Drag handle element must be contained in draggable element", {
    element: e.element,
    dragHandle: e.dragHandle
  }), process.env.NODE_ENV !== "production") {
    var r = V.get(e.element);
    r && console.warn("You have already registered a `draggable` on the same element", {
      existing: r,
      proposed: e
    });
  }
  var t = Z(
    // making the draggable register the adapter rather than drop targets
    // this is because you *must* have a draggable element to start a drag
    // but you _might_ not have any drop targets immediately
    // (You might create drop targets async)
    ge.registerUsage(),
    un(e),
    ut(e.element, {
      attribute: "draggable",
      value: "true"
    })
  );
  return H(t);
}
function Fn(e) {
  const r = /* @__PURE__ */ new Set();
  return Z(
    dn({
      canMonitor(t) {
        return t.source.data.instanceId === e;
      },
      onDragStart(t) {
        const n = t.source.data;
        r.forEach((a) => a({ phase: "start", source: n }));
      },
      onDrop(t) {
        const n = t.source.data;
        r.forEach((a) => a({ phase: "drop", source: n }));
      },
      onDropTargetChange(t) {
        const n = t.source.data;
        r.forEach((a) => a({ phase: "over", source: n }));
      }
    })
  ), {
    registerDraggable(t, { payload: n, disabled: a, handle: o }) {
      return a ? () => {
      } : fn({
        element: t,
        getInitialData: () => ({ ...n, instanceId: e }),
        dragHandle: o ?? void 0
      });
    },
    registerDroppable(t, { id: n }) {
      return cn({
        element: t,
        getData: ({ input: a, element: o }) => wr(
          { type: "list-droppable", index: 0, id: n },
          {
            input: a,
            element: o,
            allowedEdges: ["top", "bottom"]
          }
        )
      });
    },
    subscribe(t) {
      return r.add(t), () => r.delete(t);
    }
  };
}
const ct = Ve(null);
function me() {
  return Qt(ct);
}
function kn({
  driver: e,
  children: r
}) {
  const t = de(e), n = Jt(
    () => ({ driver: t.current }),
    []
  );
  return /* @__PURE__ */ u(ct.Provider, { value: n, children: r });
}
function Rn(e) {
  const r = me(), { ref: t, payload: n, disabled: a, handleRef: o } = e;
  z(() => {
    if (t.current && !(!r || a))
      return r.driver.registerDraggable(t.current, {
        payload: n,
        disabled: a,
        handle: (o == null ? void 0 : o.current) ?? null
      });
  }, [r, t, n, a, o]);
}
function Bn(e) {
  const r = me(), { ref: t, id: n, accepts: a } = e;
  z(() => {
    if (t.current && r)
      return r.driver.registerDroppable(t.current, { id: n, accepts: a });
  }, [r, t, n, a]);
}
function $n(e) {
  const r = me();
  z(
    () => r ? r.driver.subscribe(e) : void 0,
    [r, e]
  );
}
const pn = Ve(
  null
), vn = ({ children: e, fullScreen: r = !0 }) => {
  const t = de(null), [n, a] = M(t.current);
  return Vt(() => {
    a(t.current);
  }, []), /* @__PURE__ */ u(pn.Provider, { value: { element: n }, children: /* @__PURE__ */ u(
    "div",
    {
      ref: t,
      id: "factorial-one-layout",
      className: k({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": r
      }),
      children: e
    }
  ) });
}, gn = ({
  children: e
}) => /* @__PURE__ */ u(Yt, { reducedMotion: "user", children: e }), Hn = ({
  children: e,
  layout: r,
  link: t,
  privacyModeInitiallyEnabled: n,
  image: a,
  i18n: o,
  l10n: l,
  isDev: s = !1,
  showExperimentalWarnings: i = !1
}) => /* @__PURE__ */ u(gn, { children: /* @__PURE__ */ u(
  Bt,
  {
    isDev: s,
    showExperimentalWarnings: i,
    children: /* @__PURE__ */ u($t, { ...l, children: /* @__PURE__ */ u(Ht, { ...o, children: /* @__PURE__ */ u(Wt, { ...t, children: /* @__PURE__ */ u(vn, { ...r, children: /* @__PURE__ */ u(Kt, { children: /* @__PURE__ */ u(
      Ut,
      {
        initiallyEnabled: n,
        children: /* @__PURE__ */ u(qt, { ...a, children: e })
      }
    ) }) }) }) }) })
  }
) });
export {
  Dn as AreaChart,
  Un as Await,
  Cn as BarChart,
  B as Button,
  Sn as CategoryBarChart,
  qn as CopyButton,
  kn as DndProvider,
  Yn as EmojiImage,
  Vn as F0Avatar,
  zn as F0AvatarAlert,
  Xn as F0AvatarCompany,
  Gn as F0AvatarDate,
  Jn as F0AvatarEmoji,
  Qn as F0AvatarFile,
  Zn as F0AvatarIcon,
  _n as F0AvatarList,
  ea as F0AvatarPerson,
  ta as F0AvatarTeam,
  ra as F0Card,
  na as F0Checkbox,
  aa as F0TagAlert,
  oa as F0TagBalance,
  ia as F0TagCompany,
  la as F0TagDot,
  sa as F0TagList,
  ua as F0TagPerson,
  ca as F0TagRaw,
  da as F0TagStatus,
  fa as F0TagTeam,
  Hn as FactorialOneProvider,
  pa as GROUP_ID_SYMBOL,
  jn as HomeLayout,
  In as Icon,
  Pn as LineChart,
  wn as Link,
  va as OneFilterPicker,
  On as PieChart,
  Ut as PrivacyModeProvider,
  et as ProductBlankslate,
  ga as ProductCard,
  Mn as ProductModal,
  vr as ProductWidget,
  En as ProgressBarChart,
  Nn as StandardLayout,
  ma as TagCounter,
  An as TwoColumnLayout,
  qe as UpsellRequestResponseDialog,
  gr as UpsellingBanner,
  Ye as UpsellingButton,
  Ln as UpsellingPopover,
  Tn as VerticalBarChart,
  ya as buildTranslations,
  Fn as createAtlaskitDriver,
  ha as createDataSourceDefinition,
  bn as defaultTranslations,
  ba as experimental,
  wa as getAnimationVariants,
  xa as getDataSourcePaginationType,
  Da as getEmojiLabel,
  Ca as isInfiniteScrollPagination,
  Sa as isPageBasedPagination,
  Pa as tagDotColors,
  Oa as useData,
  Ta as useDataSource,
  $n as useDndEvents,
  Rn as useDraggable,
  Bn as useDroppableList,
  Ea as useEmojiConfetti,
  Na as useGroups,
  Aa as usePrivacyMode,
  ja as useReducedMotion,
  Ma as useSelectable,
  La as useXRay
};
