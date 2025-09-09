import { C as A, L as ct, c as dt, P as Be, a as k, f as ft, b as pt, A as vt, B as gt, d as mt, e as yt, g as ht, V as bt, h as He, i as wt, j as xt, F as We, k as Dt, l as Ct, m as Ot, D as Tt, n as Pt, o as St, p as Et, q as Ke, S as Nt, r as At, s as $, U as qe, t as jt, u as Mt, v as he, w as Lt, x as Ue, y as It, z as Ft, E as kt, G as Rt, H as $t, I as Bt, J as Ht, K as Wt, M as Kt, X as qt, N as Ut, O as Vt, Q as Yt, R as zt } from "./index-CuD6nmQf.js";
import { ak as Un, T as Vn, aq as Yn, W as zn, Y as Xn, Z as Gn, _ as Jn, $ as Qn, a0 as Zn, a1 as _n, a2 as ea, a4 as ta, a5 as ra, a6 as na, a7 as aa, a9 as oa, aa as ia, ab as la, ac as sa, af as ua, ag as ca, ah as da, ai as fa, a8 as pa, aj as va, ae as ga, an as ma, al as ya, ar as ha, a3 as ba, ad as wa, as as xa, am as Da, ap as Ca, ao as Oa } from "./index-CuD6nmQf.js";
import { jsx as u, jsxs as C, Fragment as ue } from "react/jsx-runtime";
import * as ce from "react";
import Xt, { forwardRef as Q, useRef as de, useImperativeHandle as Gt, Children as Jt, useState as M, useEffect as z, useMemo as Qt, createContext as Ve, useContext as Zt } from "react";
const wn = {
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
        label: "Week",
        long: "Week of %{day} %{month} %{year}"
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
    expandChat: "Expand chat",
    minimizeChat: "Minimize chat window",
    openChat: "Open Chat",
    scrollToBottom: "Scroll to bottom",
    welcome: "I'm One. Ask or make anything.",
    initialMessage: "How can I help you today?"
  }
}, xn = A(
  {
    name: "Link",
    type: "info"
  },
  ct
), Dn = ["person", "team", "company", "file"];
var fe = "Progress", pe = 100, [_t, Cn] = dt(fe), [er, tr] = _t(fe), Ye = ce.forwardRef(
  (e, r) => {
    const {
      __scopeProgress: t,
      value: n = null,
      max: a,
      getValueLabel: o = rr,
      ...l
    } = e;
    (a || a === 0) && !be(a) && console.error(nr(`${a}`, "Progress"));
    const s = be(a) ? a : pe;
    n !== null && !we(n, s) && console.error(ar(`${n}`, "Progress"));
    const i = we(n, s) ? n : null, d = J(i) ? o(i, s) : void 0;
    return /* @__PURE__ */ u(er, { scope: t, value: i, max: s, children: /* @__PURE__ */ u(
      Be.div,
      {
        "aria-valuemax": s,
        "aria-valuemin": 0,
        "aria-valuenow": J(i) ? i : void 0,
        "aria-valuetext": d,
        role: "progressbar",
        "data-state": Ge(i, s),
        "data-value": i ?? void 0,
        "data-max": s,
        ...l,
        ref: r
      }
    ) });
  }
);
Ye.displayName = fe;
var ze = "ProgressIndicator", Xe = ce.forwardRef(
  (e, r) => {
    const { __scopeProgress: t, ...n } = e, a = tr(ze, t);
    return /* @__PURE__ */ u(
      Be.div,
      {
        "data-state": Ge(a.value, a.max),
        "data-value": a.value ?? void 0,
        "data-max": a.max,
        ...n,
        ref: r
      }
    );
  }
);
Xe.displayName = ze;
function rr(e, r) {
  return `${Math.round(e / r * 100)}%`;
}
function Ge(e, r) {
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
function nr(e, r) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${pe}\`.`;
}
function ar(e, r) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${pe} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var Je = Ye, or = Xe;
const Qe = ce.forwardRef(({ className: e, value: r, ...t }, n) => /* @__PURE__ */ u(
  Je,
  {
    ref: n,
    className: k(
      "relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary",
      e
    ),
    ...t,
    children: /* @__PURE__ */ u(
      or,
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
Qe.displayName = Je.displayName;
const ir = ({ value: e, max: r = 100, label: t, color: n }, a) => {
  const o = n || pt(0), l = e / r * 100;
  return /* @__PURE__ */ C("div", { className: "flex items-center space-x-2", "aria-live": "polite", children: [
    /* @__PURE__ */ u("div", { className: "flex-grow", children: /* @__PURE__ */ u(
      Qe,
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
}, lr = ft(ir), On = A(
  {
    name: "AreaChart",
    type: "info"
  },
  vt
), Tn = A(
  {
    name: "BarChart",
    type: "info"
  },
  gt
), Pn = A(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  mt
), Sn = A(
  {
    name: "LineChart",
    type: "info"
  },
  yt
), En = A(
  {
    name: "PieChart",
    type: "info"
  },
  ht
), Nn = A(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  bt
), An = A(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  lr
), sr = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, ur = Q(function({ widgets: r, children: t }, n) {
  const a = de(null);
  Gt(n, () => a.current);
  const o = Jt.toArray(r).filter((l) => !!l).map((l, s) => /* @__PURE__ */ u("div", { className: "h-full @5xl:h-auto [&>div]:h-full", children: l }, s));
  return /* @__PURE__ */ u(He, { layout: "home", children: /* @__PURE__ */ C("div", { ref: a, className: "@container", children: [
    /* @__PURE__ */ C("div", { className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden", children: [
      /* @__PURE__ */ u(wt, { columns: sr, showArrows: !1, children: o }),
      /* @__PURE__ */ u("main", { children: t })
    ] }),
    /* @__PURE__ */ C("div", { className: "hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid", children: [
      /* @__PURE__ */ u("div", { className: "col-span-3 flex flex-row gap-5 *:flex-1", children: o.slice(0, 3) }),
      /* @__PURE__ */ u("main", { className: "col-span-2", children: t }),
      /* @__PURE__ */ u("div", { className: "flex flex-1 flex-col gap-5", children: o.slice(3) })
    ] })
  ] }) });
}), cr = Q(
  function({ children: r, sideContent: t, mainColumnPosition: n = "left" }, a) {
    return /* @__PURE__ */ u("div", { ref: a, className: "h-full overflow-auto", children: /* @__PURE__ */ C(
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
), xe = ({ children: e }) => /* @__PURE__ */ u("aside", { className: "py-5 pl-2 pr-4 sm:basis-1/4 sm:pb-6", children: e }), dr = xt({
  base: "relative flex min-h-full w-full flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), Ze = Xt.forwardRef(({ children: e, variant: r, className: t, ...n }, a) => /* @__PURE__ */ u(He, { layout: "standard", children: /* @__PURE__ */ u(
  "section",
  {
    ref: a,
    className: k("relative flex-1 overflow-auto", t),
    ...n,
    children: /* @__PURE__ */ u("div", { className: k(dr({ variant: r })), children: e })
  }
) }));
Ze.displayName = "StandardLayout";
const jn = A(
  {
    name: "StandardLayout",
    type: "layout"
  },
  Ze
), Mn = A(
  {
    name: "TwoColumnLayout",
    type: "layout"
  },
  cr
), Ln = A(
  {
    name: "HomeLayout",
    type: "layout"
  },
  ur
), fr = ({ benefits: e }) => /* @__PURE__ */ u("div", { className: "flex flex-col gap-2", children: e.map((r, t) => /* @__PURE__ */ u(pr, { text: r }, t)) }), pr = ({ text: e }) => /* @__PURE__ */ C("div", { className: "flex flex-row items-start gap-2", children: [
  /* @__PURE__ */ u(Ct, { icon: Ot, size: "md", className: "text-f1-icon-positive" }),
  /* @__PURE__ */ u("span", { children: e })
] }), _e = Q(
  ({
    title: e,
    image: r,
    benefits: t,
    actions: n,
    withShadow: a = !0,
    module: o,
    moduleName: l,
    tag: s
  }, i) => /* @__PURE__ */ C(
    "div",
    {
      ref: i,
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
        /* @__PURE__ */ C("div", { className: "flex flex-col justify-center gap-8 px-8 py-5", children: [
          /* @__PURE__ */ C("div", { className: "flex flex-col gap-5", children: [
            /* @__PURE__ */ C("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ C("div", { className: "flex flex-row items-center gap-2", children: [
                o && /* @__PURE__ */ u(We, { module: o }),
                l && /* @__PURE__ */ u("p", { className: "text-base font-medium text-f1-foreground", children: l })
              ] }),
              s && /* @__PURE__ */ u("div", { className: "flex justify-start", children: /* @__PURE__ */ u(Dt, { icon: s.icon, text: s.label }) }),
              /* @__PURE__ */ u("h2", { className: "font-bold text-xl text-f1-foreground", children: e })
            ] }),
            /* @__PURE__ */ u(fr, { benefits: t })
          ] }),
          n && /* @__PURE__ */ u("div", { className: "flex gap-3", children: n })
        ] })
      ]
    }
  )
);
_e.displayName = "ProductBlankslate";
function vr({
  isOpen: e,
  onClose: r,
  title: t,
  children: n,
  module: a,
  portalContainer: o
}) {
  const [l, s] = M(e);
  return z(() => {
    s(e);
  }, [e]), /* @__PURE__ */ u(Tt, { open: l, onOpenChange: (d) => {
    s(d), d || r();
  }, modal: !0, children: /* @__PURE__ */ C(
    Pt,
    {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: o,
      children: [
        /* @__PURE__ */ C("div", { className: "flex flex-row items-center justify-between px-4 py-4", children: [
          /* @__PURE__ */ C(St, { className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground", children: [
            a && /* @__PURE__ */ u(We, { module: a, size: "lg" }),
            t
          ] }),
          /* @__PURE__ */ u(
            Et,
            {
              variant: "outline",
              icon: Ke,
              onClick: r,
              label: "Close modal",
              hideLabel: !0
            }
          )
        ] }),
        /* @__PURE__ */ C(Nt, { className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col", children: [
          n,
          /* @__PURE__ */ u(
            At,
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
function In({
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
  modalModule: O,
  secondaryAction: c,
  portalContainer: v,
  tag: m
}) {
  const [h, P] = M(e), [b, x] = M(null), [w, y] = M(!1), g = async () => {
    if (f != null && f.onClick) {
      y(!0);
      try {
        await f.onClick(), P(!1), x("success");
      } catch {
        x("error");
      } finally {
        y(!1);
      }
    }
  }, S = () => {
    P(!1), r == null || r();
  }, T = w;
  return /* @__PURE__ */ C(ue, { children: [
    /* @__PURE__ */ u(
      vr,
      {
        isOpen: h,
        onClose: S,
        title: p,
        module: O,
        portalContainer: v,
        children: /* @__PURE__ */ u("div", { className: "pb-4 pl-4", children: /* @__PURE__ */ u(
          _e,
          {
            title: t,
            image: n,
            benefits: a,
            withShadow: !1,
            tag: m,
            actions: /* @__PURE__ */ C("div", { className: "flex gap-3", children: [
              f && /* @__PURE__ */ u(
                $,
                {
                  variant: f.variant,
                  label: T ? s.label : f.label,
                  icon: f.icon || void 0,
                  onClick: g,
                  loading: f.loading,
                  size: f.size
                }
              ),
              c && /* @__PURE__ */ u(
                $,
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
    b && /* @__PURE__ */ u(
      qe,
      {
        open: !0,
        onClose: () => {
          S(), x(null);
        },
        success: b === "success",
        errorMessage: o,
        successMessage: l,
        nextSteps: i,
        closeLabel: d,
        portalContainer: v
      }
    )
  ] });
}
function gr({
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
  const O = e == null ? void 0 : e.includes(".mp4");
  return /* @__PURE__ */ u(ue, { children: d ? null : /* @__PURE__ */ C(jt, { style: { width: o }, className: "relative bg-f1-background p-1", children: [
    /* @__PURE__ */ C(Mt, { children: [
      a && /* @__PURE__ */ u("div", { className: "absolute right-2 top-2 z-10", children: /* @__PURE__ */ u(
        $,
        {
          variant: "ghost",
          icon: Ke,
          size: "sm",
          hideLabel: !0,
          onClick: p,
          label: "Close"
        }
      ) }),
      /* @__PURE__ */ C("div", { children: [
        /* @__PURE__ */ u("div", { children: e && (O ? /* @__PURE__ */ u(
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
        /* @__PURE__ */ C("div", { className: "flex flex-col gap-[2px] p-3", children: [
          /* @__PURE__ */ u(he, { className: "text-lg font-medium", children: r }),
          /* @__PURE__ */ u(he, { className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary", children: t })
        ] })
      ] })
    ] }),
    s && /* @__PURE__ */ u(Lt, { className: "p-3", children: s.map(
      (c) => c.type === "upsell" ? /* @__PURE__ */ u(
        Ue,
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
        $,
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
const mr = Q(
  function({ primaryAction: r, secondaryAction: t, ...n }, a) {
    const o = (i) => i.variant === "promote" ? /* @__PURE__ */ u(
      Ue,
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
      $,
      {
        onClick: i.onClick,
        label: i.label,
        variant: i.variant || "default",
        size: "md",
        icon: i.icon
      }
    ), l = (r == null ? void 0 : r.variant) !== "promote" ? r : void 0, s = (t == null ? void 0 : t.variant) !== "promote" ? t : void 0;
    return /* @__PURE__ */ C(
      It,
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
mr.displayName = "UpsellingBanner";
function Fn({
  isOpen: e,
  setIsOpen: r,
  label: t,
  variant: n = "promote",
  size: a = "md",
  showIcon: o = !0,
  side: l = "right",
  align: s = "center",
  icon: i = Rt,
  mediaUrl: d,
  title: f,
  description: p,
  width: O = "300px",
  trackVisibility: c,
  actions: v,
  onClick: m,
  hideLabel: h = !1
}) {
  const [P, b] = M(!1), [x, w] = M(null), [y, g] = M(null), S = (D) => {
    r(D), m && m();
  }, T = async (D) => {
    if (D.type === "upsell") {
      g(D);
      try {
        await D.onClick(), D.showConfirmation && (b(!0), w("success"));
      } catch {
        b(!0), w("error");
      }
    }
  }, E = () => {
    w(null), b(!1), g(null), r(!1);
  }, N = e && !P, j = v == null ? void 0 : v.map((D) => D.type === "upsell" ? {
    ...D,
    onClick: () => T(D)
  } : D);
  return /* @__PURE__ */ C(ue, { children: [
    /* @__PURE__ */ C(Ft, { open: N, onOpenChange: S, children: [
      /* @__PURE__ */ u(kt, { asChild: !0, children: /* @__PURE__ */ u(
        $,
        {
          variant: n,
          label: t,
          size: a,
          icon: o ? i : void 0,
          onClick: () => r(e),
          hideLabel: h
        }
      ) }),
      /* @__PURE__ */ u(
        $t,
        {
          side: l,
          align: s,
          className: "w-fit border-none bg-transparent p-2 shadow-none",
          children: /* @__PURE__ */ u(
            gr,
            {
              mediaUrl: d,
              title: f,
              description: p,
              onClose: () => r(!1),
              dismissible: !1,
              width: O,
              trackVisibility: c,
              actions: j,
              showConfirmation: !1
            }
          )
        }
      )
    ] }),
    (y == null ? void 0 : y.type) === "upsell" && y.showConfirmation && x && /* @__PURE__ */ u(
      qe,
      {
        open: !0,
        onClose: E,
        success: x === "success",
        errorMessage: y.errorMessage,
        successMessage: y.successMessage,
        nextSteps: y.nextSteps,
        closeLabel: y.closeLabel,
        portalContainer: null
      }
    )
  ] });
}
function U(e) {
  "@babel/helpers - typeof";
  return U = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, U(e);
}
function yr(e, r) {
  if (U(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(e, r);
    if (U(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
function hr(e) {
  var r = yr(e, "string");
  return U(r) == "symbol" ? r : r + "";
}
function X(e, r, t) {
  return (r = hr(r)) in e ? Object.defineProperty(e, r, {
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
var br = {
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
}, wr = Symbol("closestEdge");
function xr(e, r) {
  var t, n, a = r.element, o = r.input, l = r.allowedEdges, s = {
    x: o.clientX,
    y: o.clientY
  }, i = a.getBoundingClientRect(), d = l.map(function(p) {
    return {
      edge: p,
      value: br[p](i, s)
    };
  }), f = (t = (n = d.sort(function(p, O) {
    return p.value - O.value;
  })[0]) === null || n === void 0 ? void 0 : n.edge) !== null && t !== void 0 ? t : null;
  return Ce(Ce({}, e), {}, X({}, wr, f));
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
function Dr(e) {
  if (Array.isArray(e)) return e;
}
function Cr(e, r) {
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
function et(e, r) {
  if (e) {
    if (typeof e == "string") return oe(e, r);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? oe(e, r) : void 0;
  }
}
function Or() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function tt(e, r) {
  return Dr(e) || Cr(e, r) || et(e, r) || Or();
}
var ee = {}, K = {}, Oe;
function rt() {
  if (Oe) return K;
  Oe = 1, Object.defineProperty(K, "__esModule", { value: !0 }), K.bind = void 0;
  function e(r, t) {
    var n = t.type, a = t.listener, o = t.options;
    return r.addEventListener(n, a, o), function() {
      r.removeEventListener(n, a, o);
    };
  }
  return K.bind = e, K;
}
var F = {}, Te;
function Tr() {
  if (Te) return F;
  Te = 1;
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
  var r = /* @__PURE__ */ rt();
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
var Pe;
function Pr() {
  return Pe || (Pe = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.bindAll = e.bind = void 0;
    var r = /* @__PURE__ */ rt();
    Object.defineProperty(e, "bind", { enumerable: !0, get: function() {
      return r.bind;
    } });
    var t = /* @__PURE__ */ Tr();
    Object.defineProperty(e, "bindAll", { enumerable: !0, get: function() {
      return t.bindAll;
    } });
  }(ee)), ee;
}
var B = /* @__PURE__ */ Pr(), nt = "data-pdnd-honey-pot";
function at(e) {
  return e instanceof Element && e.hasAttribute(nt);
}
function ot(e) {
  var r = document.elementsFromPoint(e.x, e.y), t = tt(r, 2), n = t[0], a = t[1];
  return n ? at(n) ? a ?? null : n : null;
}
var Sr = 2147483647;
function Se(e, r) {
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
    r % 2 ? Se(Object(t), !0).forEach(function(n) {
      X(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Se(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
var V = 2, Ne = V / 2;
function Er(e) {
  return {
    x: Math.floor(e.x),
    y: Math.floor(e.y)
  };
}
function Nr(e) {
  return {
    x: e.x - Ne,
    y: e.y - Ne
  };
}
function Ar(e) {
  return {
    x: Math.max(e.x, 0),
    y: Math.max(e.y, 0)
  };
}
function jr(e) {
  return {
    x: Math.min(e.x, window.innerWidth - V),
    y: Math.min(e.y, window.innerHeight - V)
  };
}
function Ae(e) {
  var r = e.client, t = jr(Ar(Nr(Er(r))));
  return DOMRect.fromRect({
    x: t.x,
    y: t.y,
    width: V,
    height: V
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
function Mr(e) {
  var r = e.client, t = e.clientRect;
  return (
    // is within horizontal bounds
    r.x >= t.x && r.x <= t.x + t.width && // is within vertical bounds
    r.y >= t.y && r.y <= t.y + t.height
  );
}
function Lr(e) {
  var r = e.initial, t = document.createElement("div");
  t.setAttribute(nt, "true");
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
    zIndex: Sr
  })), document.body.appendChild(t);
  var a = B.bind(window, {
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
    if (a(), Mr({
      client: s,
      clientRect: n
    })) {
      t.remove();
      return;
    }
    function i() {
      d(), t.remove();
    }
    var d = B.bindAll(window, [
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
function Ir() {
  var e = null;
  function r() {
    return e = null, B.bind(window, {
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
        n = Lr({
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
function Fr(e) {
  if (Array.isArray(e)) return oe(e);
}
function kr(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Rr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function it(e) {
  return Fr(e) || kr(e) || et(e) || Rr();
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
var $r = H(function() {
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
  B.bindAll(
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
function Hr(e) {
  return "nodeName" in e;
}
function Wr(e) {
  return Hr(e) && e.ownerDocument !== document;
}
function Kr(e) {
  var r = e.dragLeave, t = r.type, n = r.relatedTarget;
  return t !== "dragleave" ? !1 : ve() ? Br({
    dragLeave: r
  }) : n == null ? !0 : $r() ? Wr(n) : n instanceof HTMLIFrameElement;
}
function qr(e) {
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
function q(e) {
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
function Vr(e) {
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
function lt() {
  return !le.isActive;
}
function Yr(e) {
  return e.dataTransfer ? e.dataTransfer.setDragImage.bind(e.dataTransfer) : null;
}
function zr(e) {
  var r = e.current, t = e.next;
  if (r.length !== t.length)
    return !0;
  for (var n = 0; n < r.length; n++)
    if (r[n].element !== t[n].element)
      return !0;
  return !1;
}
function Xr(e) {
  var r = e.event, t = e.dragType, n = e.getDropTargetsOver, a = e.dispatchEvent;
  if (!lt())
    return;
  var o = Gr({
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
  var s = Vr({
    source: t.payload,
    dispatchEvent: a,
    initial: o
  });
  function i(c) {
    var v = zr({
      current: l.current.dropTargets,
      next: c.dropTargets
    });
    l.current = c, v && s.dragUpdate({
      current: l.current
    });
  }
  function d(c) {
    var v = q(c), m = at(c.target) ? ot({
      x: v.clientX,
      y: v.clientY
    }) : c.target, h = n({
      target: m,
      input: v,
      source: t.payload,
      current: l.current.dropTargets
    });
    h.length && (c.preventDefault(), re({
      event: c,
      current: h
    })), i({
      dropTargets: h,
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
    le.isActive = !1, O();
  }
  var O = B.bindAll(
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
        Kr({
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
          input: q(v)
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
          input: q(v)
        }, f();
      }
    }].concat(it(qr({
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
function Gr(e) {
  var r = e.event, t = e.dragType, n = e.getDropTargetsOver, a = q(r);
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
  canStart: lt,
  start: Xr
}, se = /* @__PURE__ */ new Map();
function Jr(e) {
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
function Qr(e) {
  var r = Jr(e);
  return function() {
    r.usageCount--, !(r.usageCount > 0) && (r.unmount(), se.delete(e.typeKey));
  };
}
function st(e, r) {
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
    if (Array.isArray(e) || (t = Zr(e)) || r) {
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
function Zr(e, r) {
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
function _r(e) {
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
    var m = Z(st(c.element, {
      attribute: a,
      value: "true"
    }), l(c));
    return H(m);
  }
  function i(c) {
    var v, m, h, P, b = c.source, x = c.target, w = c.input, y = c.result, g = y === void 0 ? [] : y;
    if (x == null)
      return g;
    if (!(x instanceof Element))
      return x instanceof Node ? i({
        source: b,
        target: x.parentElement,
        input: w,
        result: g
      }) : g;
    var S = x.closest(o);
    if (S == null)
      return g;
    var T = n.get(S);
    if (T == null)
      return g;
    var E = {
      input: w,
      source: b,
      element: T.element
    };
    if (T.canDrop && !T.canDrop(E))
      return i({
        source: b,
        target: T.element.parentElement,
        input: w,
        result: g
      });
    var N = (v = (m = T.getData) === null || m === void 0 ? void 0 : m.call(T, E)) !== null && v !== void 0 ? v : {}, j = (h = (P = T.getDropEffect) === null || P === void 0 ? void 0 : P.call(T, E)) !== null && h !== void 0 ? h : t, D = {
      data: N,
      element: T.element,
      dropEffect: j,
      // we are collecting _actual_ drop targets, so these are
      // being applied _not_ due to stickiness
      isActiveDueToStickiness: !1
    };
    return i({
      source: b,
      target: T.element.parentElement,
      input: w,
      // Using bubble ordering. Same ordering as `event.getPath()`
      result: [].concat(it(g), [D])
    });
  }
  function d(c) {
    var v = c.eventName, m = c.payload, h = ne(m.location.current.dropTargets), P;
    try {
      for (h.s(); !(P = h.n()).done; ) {
        var b, x = P.value, w = n.get(x.element), y = I(I({}, m), {}, {
          self: x
        });
        w == null || (b = w[v]) === null || b === void 0 || b.call(
          w,
          // I cannot seem to get the types right here.
          // TS doesn't seem to like that one event can need `nativeSetDragImage`
          // @ts-expect-error
          y
        );
      }
    } catch (g) {
      h.e(g);
    } finally {
      h.f();
    }
  }
  var f = {
    onGenerateDragPreview: d,
    onDrag: d,
    onDragStart: d,
    onDrop: d,
    onDropTargetChange: function(v) {
      var m = v.payload, h = new Set(m.location.current.dropTargets.map(function(W) {
        return W.element;
      })), P = /* @__PURE__ */ new Set(), b = ne(m.location.previous.dropTargets), x;
      try {
        for (b.s(); !(x = b.n()).done; ) {
          var w, y = x.value;
          P.add(y.element);
          var g = n.get(y.element), S = h.has(y.element), T = I(I({}, m), {}, {
            self: y
          });
          if (g == null || (w = g.onDropTargetChange) === null || w === void 0 || w.call(g, T), !S) {
            var E;
            g == null || (E = g.onDragLeave) === null || E === void 0 || E.call(g, T);
          }
        }
      } catch (W) {
        b.e(W);
      } finally {
        b.f();
      }
      var N = ne(m.location.current.dropTargets), j;
      try {
        for (N.s(); !(j = N.n()).done; ) {
          var D, R, _ = j.value;
          if (!P.has(_.element)) {
            var ye = I(I({}, m), {}, {
              self: _
            }), L = n.get(_.element);
            L == null || (D = L.onDropTargetChange) === null || D === void 0 || D.call(L, ye), L == null || (R = L.onDragEnter) === null || R === void 0 || R.call(L, ye);
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
  function O(c) {
    var v = c.source, m = c.target, h = c.input, P = c.current, b = i({
      source: v,
      target: m,
      input: h
    });
    if (b.length >= P.length)
      return b;
    for (var x = ae(P), w = ae(b), y = [], g = 0; g < x.length; g++) {
      var S, T = x[g], E = w[g];
      if (E != null) {
        y.push(E);
        continue;
      }
      var N = y[g - 1], j = x[g - 1];
      if ((N == null ? void 0 : N.element) !== (j == null ? void 0 : j.element))
        break;
      var D = n.get(T.element);
      if (!D)
        break;
      var R = {
        input: h,
        source: v,
        element: D.element
      };
      if (D.canDrop && !D.canDrop(R) || !((S = D.getIsSticky) !== null && S !== void 0 && S.call(D, R)))
        break;
      y.push(I(I({}, T), {}, {
        // making it clear to consumers this drop target is active due to stickiness
        isActiveDueToStickiness: !0
      }));
    }
    return ae(y);
  }
  return {
    dropTargetForConsumers: s,
    getIsOver: O,
    dispatchEvent: p
  };
}
function en(e, r) {
  var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!t) {
    if (Array.isArray(e) || (t = tn(e)) || r) {
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
function tn(e, r) {
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
function rn(e) {
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
function nn() {
  var e = /* @__PURE__ */ new Set(), r = null;
  function t(o) {
    r && (!o.canMonitor || o.canMonitor(r.canMonitorArgs)) && r.active.add(o);
  }
  function n(o) {
    var l = rn({}, o);
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
      var i = en(e), d;
      try {
        for (i.s(); !(d = i.n()).done; ) {
          var f = d.value;
          t(f);
        }
      } catch (h) {
        i.e(h);
      } finally {
        i.f();
      }
    }
    if (r) {
      for (var p = Array.from(r.active), O = 0, c = p; O < c.length; O++) {
        var v = c[O];
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
function an(e) {
  var r = e.typeKey, t = e.mount, n = e.dispatchEventToSource, a = e.onPostDispatch, o = e.defaultDropEffect, l = nn(), s = _r({
    typeKey: r,
    defaultDropEffect: o
  });
  function i(p) {
    n == null || n(p), s.dispatchEvent(p), l.dispatchEvent(p), a == null || a(p);
  }
  function d(p) {
    var O = p.event, c = p.dragType;
    Me.start({
      event: O,
      dragType: c,
      getDropTargetsOver: s.getIsOver,
      dispatchEvent: i
    });
  }
  function f() {
    function p() {
      var O = {
        canStart: Me.canStart,
        start: d
      };
      return t(O);
    }
    return Qr({
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
var on = H(function() {
  return navigator.userAgent.toLocaleLowerCase().includes("android");
}), ln = "pdnd:android-fallback", Re = "text/plain", sn = "text/uri-list", un = "application/vnd.pdnd", Y = /* @__PURE__ */ new WeakMap();
function cn(e) {
  return Y.set(e.element, e), function() {
    Y.delete(e.element);
  };
}
var $e = Ir(), ge = an({
  typeKey: "element",
  defaultDropEffect: "move",
  mount: function(r) {
    return Z($e.bindEvents(), B.bind(document, {
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
          var p = Y.get(f);
          if (!p)
            return null;
          var O = q(n), c = {
            element: p.element,
            dragHandle: (a = p.dragHandle) !== null && a !== void 0 ? a : null,
            input: O
          };
          if (p.canDrag && !p.canDrag(c))
            return n.preventDefault(), null;
          if (p.dragHandle) {
            var v = ot({
              x: O.clientX,
              y: O.clientY
            });
            if (!p.dragHandle.contains(v))
              return n.preventDefault(), null;
          }
          var m = (o = (l = p.getInitialDataForExternal) === null || l === void 0 ? void 0 : l.call(p, c)) !== null && o !== void 0 ? o : null;
          if (m)
            for (var h = 0, P = Object.entries(m); h < P.length; h++) {
              var b = tt(P[h], 2), x = b[0], w = b[1];
              n.dataTransfer.setData(x, w ?? "");
            }
          on() && !n.dataTransfer.types.includes(Re) && !n.dataTransfer.types.includes(sn) && n.dataTransfer.setData(Re, ln), n.dataTransfer.setData(un, "");
          var y = {
            element: p.element,
            dragHandle: (s = p.dragHandle) !== null && s !== void 0 ? s : null,
            data: (i = (d = p.getInitialData) === null || d === void 0 ? void 0 : d.call(p, c)) !== null && i !== void 0 ? i : {}
          }, g = {
            type: "element",
            payload: y,
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
    (t = Y.get(o.source.element)) === null || t === void 0 || (n = t[a]) === null || n === void 0 || n.call(
      t,
      // I cannot seem to get the types right here.
      // TS doesn't seem to like that one event can need `nativeSetDragImage`
      // @ts-expect-error
      o
    );
  },
  onPostDispatch: $e.getOnPostDispatch()
}), dn = ge.dropTarget, fn = ge.monitor;
function pn(e) {
  if (process.env.NODE_ENV !== "production" && e.dragHandle && !e.element.contains(e.dragHandle) && console.warn("Drag handle element must be contained in draggable element", {
    element: e.element,
    dragHandle: e.dragHandle
  }), process.env.NODE_ENV !== "production") {
    var r = Y.get(e.element);
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
    cn(e),
    st(e.element, {
      attribute: "draggable",
      value: "true"
    })
  );
  return H(t);
}
function kn(e) {
  const r = /* @__PURE__ */ new Set();
  return Z(
    fn({
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
      } : pn({
        element: t,
        getInitialData: () => ({ ...n, instanceId: e }),
        dragHandle: o ?? void 0
      });
    },
    registerDroppable(t, { id: n }) {
      return dn({
        element: t,
        getData: ({ input: a, element: o }) => xr(
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
const ut = Ve(null);
function me() {
  return Zt(ut);
}
function Rn({
  driver: e,
  children: r
}) {
  const t = de(e), n = Qt(
    () => ({ driver: t.current }),
    []
  );
  return /* @__PURE__ */ u(ut.Provider, { value: n, children: r });
}
function $n(e) {
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
function Hn(e) {
  const r = me();
  z(
    () => r ? r.driver.subscribe(e) : void 0,
    [r, e]
  );
}
const vn = Ve(
  null
), gn = ({ children: e, fullScreen: r = !0 }) => {
  const t = de(null), [n, a] = M(t.current);
  return zt(() => {
    a(t.current);
  }, []), /* @__PURE__ */ u(vn.Provider, { value: { element: n }, children: /* @__PURE__ */ u(
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
}, mn = ({
  children: e
}) => /* @__PURE__ */ u(Yt, { reducedMotion: "user", children: e }), Wn = ({
  children: e,
  layout: r,
  link: t,
  privacyModeInitiallyEnabled: n,
  image: a,
  i18n: o,
  l10n: l,
  isDev: s = !1,
  showExperimentalWarnings: i = !1
}) => /* @__PURE__ */ u(mn, { children: /* @__PURE__ */ u(
  Bt,
  {
    isDev: s,
    showExperimentalWarnings: i,
    children: /* @__PURE__ */ u(Ht, { ...l, children: /* @__PURE__ */ u(Wt, { ...o, children: /* @__PURE__ */ u(Kt, { ...t, children: /* @__PURE__ */ u(gn, { ...r, children: /* @__PURE__ */ u(qt, { children: /* @__PURE__ */ u(
      Ut,
      {
        initiallyEnabled: n,
        children: /* @__PURE__ */ u(Vt, { ...a, children: e })
      }
    ) }) }) }) }) })
  }
) });
export {
  On as AreaChart,
  Un as Await,
  Tn as BarChart,
  $ as Button,
  Pn as CategoryBarChart,
  Vn as CopyButton,
  Rn as DndProvider,
  Yn as EmojiImage,
  zn as F0Avatar,
  Xn as F0AvatarAlert,
  Gn as F0AvatarCompany,
  Jn as F0AvatarDate,
  Qn as F0AvatarEmoji,
  Zn as F0AvatarFile,
  _n as F0AvatarIcon,
  ea as F0AvatarList,
  We as F0AvatarModule,
  ta as F0AvatarPerson,
  ra as F0AvatarTeam,
  na as F0Card,
  aa as F0Checkbox,
  Ct as F0Icon,
  oa as F0TagAlert,
  ia as F0TagBalance,
  la as F0TagCompany,
  sa as F0TagDot,
  ua as F0TagList,
  ca as F0TagPerson,
  Dt as F0TagRaw,
  da as F0TagStatus,
  fa as F0TagTeam,
  Wn as FactorialOneProvider,
  Ln as HomeLayout,
  Sn as LineChart,
  xn as Link,
  pa as OneFilterPicker,
  En as PieChart,
  Ut as PrivacyModeProvider,
  _e as ProductBlankslate,
  va as ProductCard,
  In as ProductModal,
  gr as ProductWidget,
  An as ProgressBarChart,
  jn as StandardLayout,
  ga as TagCounter,
  Mn as TwoColumnLayout,
  qe as UpsellRequestResponseDialog,
  mr as UpsellingBanner,
  Ue as UpsellingButton,
  Fn as UpsellingPopover,
  Nn as VerticalBarChart,
  Dn as avatarVariants,
  ma as buildTranslations,
  kn as createAtlaskitDriver,
  wn as defaultTranslations,
  ya as experimental,
  ha as getEmojiLabel,
  ba as modules,
  wa as tagDotColors,
  Hn as useDndEvents,
  $n as useDraggable,
  Bn as useDroppableList,
  xa as useEmojiConfetti,
  Da as usePrivacyMode,
  Ca as useReducedMotion,
  Oa as useXRay
};
