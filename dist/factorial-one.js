import { C as g, L as ne, c as ie, P as q, a as x, f as ce, b as de, A as ue, B as fe, d as he, e as me, g as pe, V as ge, h as A, i as ve, j as xe, F as H, k as be, l as ye, m as Ce, D as we, n as Ne, o as Pe, p as Le, q as U, S as Se, r as ke, s as w, U as G, t as De, u as Fe, v as j, w as Me, x as W, y as Te, z as Re, E as Be, G as Ie, H as $e, I as Oe, J as Ee, K as je, M as _e, X as ze, N as Ve, O as qe, Q as Ae, R as He } from "./hooks-BZcRT-rN.js";
import { au as ja, T as _a, aw as za, aF as Va, W as qa, Y as Aa, Z as Ha, _ as Ua, $ as Ga, a0 as Wa, a1 as Ya, a2 as Xa, a4 as Ja, a5 as Ka, a6 as Qa, a7 as Za, a9 as es, aa as as, ab as ss, ac as rs, af as ts, ag as ls, ah as os, ai as ns, ak as is, a8 as cs, aj as ds, ae as us, aC as fs, av as hs, ap as ms, aA as ps, as as gs, ao as vs, aG as xs, an as bs, am as ys, a3 as Cs, ad as ws, al as Ns, aq as Ps, ax as Ls, ay as Ss, az as ks, aH as Ds, ar as Fs, aB as Ms, aE as Ts, at as Rs, aD as Bs } from "./hooks-BZcRT-rN.js";
import { jsx as e, jsxs as d, Fragment as I } from "react/jsx-runtime";
import * as $ from "react";
import Ue, { forwardRef as T, useRef as Y, useImperativeHandle as Ge, Children as We, useState as v, useEffect as X, createContext as Ye } from "react";
const ba = {
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
      kanban: "Kanban view",
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
}, ya = g(
  {
    name: "Link",
    type: "info"
  },
  ne
), Ca = ["person", "team", "company", "file"];
var O = "Progress", E = 100, [Xe, wa] = ie(O), [Je, Ke] = Xe(O), J = $.forwardRef(
  (a, s) => {
    const {
      __scopeProgress: r,
      value: t = null,
      max: l,
      getValueLabel: u = Qe,
      ...i
    } = a;
    (l || l === 0) && !_(l) && console.error(Ze(`${l}`, "Progress"));
    const n = _(l) ? l : E;
    t !== null && !z(t, n) && console.error(ea(`${t}`, "Progress"));
    const o = z(t, n) ? t : null, h = M(o) ? u(o, n) : void 0;
    return /* @__PURE__ */ e(Je, { scope: r, value: o, max: n, children: /* @__PURE__ */ e(
      q.div,
      {
        "aria-valuemax": n,
        "aria-valuemin": 0,
        "aria-valuenow": M(o) ? o : void 0,
        "aria-valuetext": h,
        role: "progressbar",
        "data-state": Z(o, n),
        "data-value": o ?? void 0,
        "data-max": n,
        ...i,
        ref: s
      }
    ) });
  }
);
J.displayName = O;
var K = "ProgressIndicator", Q = $.forwardRef(
  (a, s) => {
    const { __scopeProgress: r, ...t } = a, l = Ke(K, r);
    return /* @__PURE__ */ e(
      q.div,
      {
        "data-state": Z(l.value, l.max),
        "data-value": l.value ?? void 0,
        "data-max": l.max,
        ...t,
        ref: s
      }
    );
  }
);
Q.displayName = K;
function Qe(a, s) {
  return `${Math.round(a / s * 100)}%`;
}
function Z(a, s) {
  return a == null ? "indeterminate" : a === s ? "complete" : "loading";
}
function M(a) {
  return typeof a == "number";
}
function _(a) {
  return M(a) && !isNaN(a) && a > 0;
}
function z(a, s) {
  return M(a) && !isNaN(a) && a <= s && a >= 0;
}
function Ze(a, s) {
  return `Invalid prop \`max\` of value \`${a}\` supplied to \`${s}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${E}\`.`;
}
function ea(a, s) {
  return `Invalid prop \`value\` of value \`${a}\` supplied to \`${s}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${E} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var ee = J, aa = Q;
const ae = $.forwardRef(({ className: a, value: s, ...r }, t) => /* @__PURE__ */ e(
  ee,
  {
    ref: t,
    className: x(
      "relative h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary",
      a
    ),
    ...r,
    children: /* @__PURE__ */ e(
      aa,
      {
        className: "h-full w-full flex-1 transition-all",
        style: {
          backgroundColor: r.color,
          transform: `translateX(-${100 - (s || 0)}%)`
        }
      }
    )
  }
));
ae.displayName = ee.displayName;
const sa = ({ value: a, max: s = 100, label: r, color: t }, l) => {
  const u = t || de(0), i = a / s * 100;
  return /* @__PURE__ */ d("div", { className: "flex items-center space-x-2", "aria-live": "polite", children: [
    /* @__PURE__ */ e("div", { className: "flex-grow", children: /* @__PURE__ */ e(
      ae,
      {
        color: u,
        value: i,
        className: "w-full",
        "aria-valuemin": 0,
        "aria-valuemax": s,
        "aria-valuenow": a,
        "aria-label": `${i.toFixed(1)}%`
      }
    ) }),
    r && /* @__PURE__ */ e("div", { className: "flex-shrink-0 text-sm font-medium", children: r })
  ] });
}, ra = ce(sa), Na = g(
  {
    name: "AreaChart",
    type: "info"
  },
  ue
), Pa = g(
  {
    name: "BarChart",
    type: "info"
  },
  fe
), La = g(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  he
), Sa = g(
  {
    name: "LineChart",
    type: "info"
  },
  me
), ka = g(
  {
    name: "PieChart",
    type: "info"
  },
  pe
), Da = g(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  ge
), Fa = g(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  ra
), ta = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, la = T(function({ widgets: s, children: r }, t) {
  const l = Y(null);
  Ge(t, () => l.current);
  const u = We.toArray(s).filter((i) => !!i).map((i, n) => /* @__PURE__ */ e("div", { className: "h-full @5xl:h-auto [&>div]:h-full", children: i }, n));
  return /* @__PURE__ */ e(A, { layout: "home", children: /* @__PURE__ */ d("div", { ref: l, className: "@container", children: [
    /* @__PURE__ */ d("div", { className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden", children: [
      /* @__PURE__ */ e(ve, { columns: ta, showArrows: !1, children: u }),
      /* @__PURE__ */ e("main", { children: r })
    ] }),
    /* @__PURE__ */ d("div", { className: "hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid", children: [
      /* @__PURE__ */ e("div", { className: "col-span-3 flex flex-row gap-5 *:flex-1", children: u.slice(0, 3) }),
      /* @__PURE__ */ e("main", { className: "col-span-2", children: r }),
      /* @__PURE__ */ e("div", { className: "flex flex-1 flex-col gap-5", children: u.slice(3) })
    ] })
  ] }) });
}), oa = T(
  function({ children: s, sideContent: r, mainColumnPosition: t = "left" }, l) {
    return /* @__PURE__ */ e("div", { ref: l, className: "h-full overflow-auto", children: /* @__PURE__ */ d(
      "div",
      {
        className: x(
          "flex h-full overflow-auto text-f1-foreground sm:flex-row",
          t === "right" ? "flex-col" : "flex-col-reverse"
        ),
        children: [
          t === "right" && /* @__PURE__ */ e(V, { children: r }),
          /* @__PURE__ */ e(
            "main",
            {
              className: x(
                "h-fit min-h-full border-0 px-6 py-5 sm:basis-3/4 sm:border-solid",
                t === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary"
              ),
              children: s
            }
          ),
          t === "left" && /* @__PURE__ */ e(V, { children: r })
        ]
      }
    ) });
  }
), V = ({ children: a }) => /* @__PURE__ */ e("aside", { className: "py-5 pl-2 pr-4 sm:basis-1/4 sm:pb-6", children: a }), na = xe({
  base: "relative flex min-h-full w-full flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), se = Ue.forwardRef(({ children: a, variant: s, className: r, ...t }, l) => /* @__PURE__ */ e(A, { layout: "standard", children: /* @__PURE__ */ e(
  "section",
  {
    ref: l,
    className: x("relative flex-1 overflow-auto", r),
    ...t,
    children: /* @__PURE__ */ e("div", { className: x(na({ variant: s })), children: a })
  }
) }));
se.displayName = "StandardLayout";
const Ma = g(
  {
    name: "StandardLayout",
    type: "layout"
  },
  se
), Ta = g(
  {
    name: "TwoColumnLayout",
    type: "layout"
  },
  oa
), Ra = g(
  {
    name: "HomeLayout",
    type: "layout"
  },
  la
), ia = ({ benefits: a }) => /* @__PURE__ */ e("div", { className: "flex flex-col gap-2", children: a.map((s, r) => /* @__PURE__ */ e(ca, { text: s }, r)) }), ca = ({ text: a }) => /* @__PURE__ */ d("div", { className: "flex flex-row items-start gap-2", children: [
  /* @__PURE__ */ e(ye, { icon: Ce, size: "md", className: "text-f1-icon-positive" }),
  /* @__PURE__ */ e("span", { children: a })
] }), re = T(
  ({
    title: a,
    image: s,
    benefits: r,
    actions: t,
    withShadow: l = !0,
    module: u,
    moduleName: i,
    tag: n
  }, o) => /* @__PURE__ */ d(
    "div",
    {
      ref: o,
      className: x(
        "bg-white flex flex-row rounded-xl border border-f1-border-secondary",
        l && "shadow-md"
      ),
      children: [
        /* @__PURE__ */ e("div", { className: "aspect-auto flex-shrink-0 overflow-hidden rounded-xl py-1 pl-1", children: /* @__PURE__ */ e(
          "img",
          {
            src: s,
            alt: "",
            className: "h-full w-full rounded-lg object-cover"
          }
        ) }),
        /* @__PURE__ */ d("div", { className: "flex flex-col justify-center gap-8 px-8 py-5", children: [
          /* @__PURE__ */ d("div", { className: "flex flex-col gap-5", children: [
            /* @__PURE__ */ d("div", { className: "flex flex-col gap-2", children: [
              /* @__PURE__ */ d("div", { className: "flex flex-row items-center gap-2", children: [
                u && /* @__PURE__ */ e(H, { module: u }),
                i && /* @__PURE__ */ e("p", { className: "text-base font-medium text-f1-foreground", children: i })
              ] }),
              n && /* @__PURE__ */ e("div", { className: "flex justify-start", children: /* @__PURE__ */ e(be, { icon: n.icon, text: n.label }) }),
              /* @__PURE__ */ e("h2", { className: "font-bold text-xl text-f1-foreground", children: a })
            ] }),
            /* @__PURE__ */ e(ia, { benefits: r })
          ] }),
          t && /* @__PURE__ */ e("div", { className: "flex gap-3", children: t })
        ] })
      ]
    }
  )
);
re.displayName = "ProductBlankslate";
function da({
  isOpen: a,
  onClose: s,
  title: r,
  children: t,
  module: l,
  portalContainer: u
}) {
  const [i, n] = v(a);
  return X(() => {
    n(a);
  }, [a]), /* @__PURE__ */ e(we, { open: i, onOpenChange: (h) => {
    n(h), h || s();
  }, modal: !0, children: /* @__PURE__ */ d(
    Ne,
    {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: u,
      children: [
        /* @__PURE__ */ d("div", { className: "flex flex-row items-center justify-between px-4 py-4", children: [
          /* @__PURE__ */ d(Pe, { className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground", children: [
            l && /* @__PURE__ */ e(H, { module: l, size: "lg" }),
            r
          ] }),
          /* @__PURE__ */ e(
            Le,
            {
              variant: "outline",
              icon: U,
              onClick: s,
              label: "Close modal",
              hideLabel: !0
            }
          )
        ] }),
        /* @__PURE__ */ d(Se, { className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col", children: [
          t,
          /* @__PURE__ */ e(
            ke,
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
function Ba({
  isOpen: a,
  onClose: s,
  title: r,
  image: t,
  benefits: l,
  errorMessage: u,
  successMessage: i,
  loadingState: n,
  nextSteps: o,
  closeLabel: h,
  primaryAction: f,
  modalTitle: N,
  modalModule: P,
  secondaryAction: c,
  portalContainer: b,
  tag: S
}) {
  const [R, k] = v(a), [y, C] = v(null), [L, m] = v(!1), D = async () => {
    if (f != null && f.onClick) {
      m(!0);
      try {
        await f.onClick(), k(!1), C("success");
      } catch {
        C("error");
      } finally {
        m(!1);
      }
    }
  }, F = () => {
    k(!1), s == null || s();
  }, B = L;
  return /* @__PURE__ */ d(I, { children: [
    /* @__PURE__ */ e(
      da,
      {
        isOpen: R,
        onClose: F,
        title: N,
        module: P,
        portalContainer: b,
        children: /* @__PURE__ */ e("div", { className: "pb-4 pl-4", children: /* @__PURE__ */ e(
          re,
          {
            title: r,
            image: t,
            benefits: l,
            withShadow: !1,
            tag: S,
            actions: /* @__PURE__ */ d("div", { className: "flex gap-3", children: [
              f && /* @__PURE__ */ e(
                w,
                {
                  variant: f.variant,
                  label: B ? n.label : f.label,
                  icon: f.icon || void 0,
                  onClick: D,
                  loading: f.loading,
                  size: f.size
                }
              ),
              c && /* @__PURE__ */ e(
                w,
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
    y && /* @__PURE__ */ e(
      G,
      {
        open: !0,
        onClose: () => {
          F(), C(null);
        },
        success: y === "success",
        errorMessage: u,
        successMessage: i,
        nextSteps: o,
        closeLabel: h,
        portalContainer: b
      }
    )
  ] });
}
function ua({
  mediaUrl: a,
  title: s,
  description: r,
  onClose: t,
  dismissible: l,
  width: u,
  trackVisibility: i,
  actions: n,
  showConfirmation: o = !0
}) {
  const [h, f] = v(!1), N = () => {
    f(!0), t && t();
  };
  X(() => {
    i && i(!h);
  }, [i, h]);
  const P = a == null ? void 0 : a.includes(".mp4");
  return /* @__PURE__ */ e(I, { children: h ? null : /* @__PURE__ */ d(De, { style: { width: u }, className: "relative bg-f1-background p-1", children: [
    /* @__PURE__ */ d(Fe, { children: [
      l && /* @__PURE__ */ e("div", { className: "absolute right-2 top-2 z-10", children: /* @__PURE__ */ e(
        w,
        {
          variant: "ghost",
          icon: U,
          size: "sm",
          hideLabel: !0,
          onClick: N,
          label: "Close"
        }
      ) }),
      /* @__PURE__ */ d("div", { children: [
        /* @__PURE__ */ e("div", { children: a && (P ? /* @__PURE__ */ e(
          "video",
          {
            src: a,
            autoPlay: !0,
            muted: !0,
            loop: !0,
            playsInline: !0,
            className: "h-full w-full rounded-md"
          }
        ) : /* @__PURE__ */ e(
          "img",
          {
            src: a,
            alt: s,
            className: "h-full w-full rounded-md"
          }
        )) }),
        /* @__PURE__ */ d("div", { className: "flex flex-col gap-[2px] p-3", children: [
          /* @__PURE__ */ e(j, { className: "text-lg font-medium", children: s }),
          /* @__PURE__ */ e(j, { className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary", children: r })
        ] })
      ] })
    ] }),
    n && /* @__PURE__ */ e(Me, { className: "p-3", children: n.map(
      (c) => c.type === "upsell" ? /* @__PURE__ */ e(
        W,
        {
          label: c.label,
          onRequest: c.onClick,
          errorMessage: c.errorMessage,
          successMessage: c.successMessage,
          loadingState: c.loadingState,
          nextSteps: c.nextSteps,
          closeLabel: c.closeLabel,
          showConfirmation: o && c.showConfirmation,
          variant: c.variant
        },
        c.label
      ) : /* @__PURE__ */ e(
        w,
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
const fa = T(
  function({ primaryAction: s, secondaryAction: r, ...t }, l) {
    const u = (o) => o.variant === "promote" ? /* @__PURE__ */ e(
      W,
      {
        label: o.label,
        onRequest: async () => {
          await o.onClick();
        },
        errorMessage: o.errorMessage,
        successMessage: o.successMessage,
        loadingState: o.loadingState,
        nextSteps: o.nextSteps,
        closeLabel: o.closeLabel,
        showIcon: o.showIcon,
        showConfirmation: o.showConfirmation,
        variant: o.variant
      }
    ) : /* @__PURE__ */ e(
      w,
      {
        onClick: o.onClick,
        label: o.label,
        variant: o.variant || "default",
        size: "md",
        icon: o.icon
      }
    ), i = (s == null ? void 0 : s.variant) !== "promote" ? s : void 0, n = (r == null ? void 0 : r.variant) !== "promote" ? r : void 0;
    return /* @__PURE__ */ d(
      Te,
      {
        ref: l,
        ...t,
        primaryAction: i,
        secondaryAction: n,
        children: [
          (s == null ? void 0 : s.variant) === "promote" && u(s),
          (r == null ? void 0 : r.variant) === "promote" && u(r)
        ]
      }
    );
  }
);
fa.displayName = "UpsellingBanner";
function Ia({
  isOpen: a,
  setIsOpen: s,
  label: r,
  variant: t = "promote",
  size: l = "md",
  showIcon: u = !0,
  side: i = "right",
  align: n = "center",
  icon: o = Ie,
  mediaUrl: h,
  title: f,
  description: N,
  width: P = "300px",
  trackVisibility: c,
  actions: b,
  onClick: S,
  hideLabel: R = !1
}) {
  const [k, y] = v(!1), [C, L] = v(null), [m, D] = v(null), F = (p) => {
    s(p), S && S();
  }, B = async (p) => {
    if (p.type === "upsell") {
      D(p);
      try {
        await p.onClick(), p.showConfirmation && (y(!0), L("success"));
      } catch {
        y(!0), L("error");
      }
    }
  }, te = () => {
    L(null), y(!1), D(null), s(!1);
  }, le = a && !k, oe = b == null ? void 0 : b.map((p) => p.type === "upsell" ? {
    ...p,
    onClick: () => B(p)
  } : p);
  return /* @__PURE__ */ d(I, { children: [
    /* @__PURE__ */ d(Re, { open: le, onOpenChange: F, children: [
      /* @__PURE__ */ e(Be, { asChild: !0, children: /* @__PURE__ */ e(
        w,
        {
          variant: t,
          label: r,
          size: l,
          icon: u ? o : void 0,
          onClick: () => s(a),
          hideLabel: R
        }
      ) }),
      /* @__PURE__ */ e(
        $e,
        {
          side: i,
          align: n,
          className: "w-fit border-none bg-transparent p-2 shadow-none",
          children: /* @__PURE__ */ e(
            ua,
            {
              mediaUrl: h,
              title: f,
              description: N,
              onClose: () => s(!1),
              dismissible: !1,
              width: P,
              trackVisibility: c,
              actions: oe,
              showConfirmation: !1
            }
          )
        }
      )
    ] }),
    (m == null ? void 0 : m.type) === "upsell" && m.showConfirmation && C && /* @__PURE__ */ e(
      G,
      {
        open: !0,
        onClose: te,
        success: C === "success",
        errorMessage: m.errorMessage,
        successMessage: m.successMessage,
        nextSteps: m.nextSteps,
        closeLabel: m.closeLabel,
        portalContainer: null
      }
    )
  ] });
}
const ha = Ye(
  null
), ma = ({ children: a, fullScreen: s = !0 }) => {
  const r = Y(null), [t, l] = v(r.current);
  return He(() => {
    l(r.current);
  }, []), /* @__PURE__ */ e(ha.Provider, { value: { element: t }, children: /* @__PURE__ */ e(
    "div",
    {
      ref: r,
      id: "factorial-one-layout",
      className: x({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": s
      }),
      children: a
    }
  ) });
}, pa = ({
  children: a
}) => /* @__PURE__ */ e(Ae, { reducedMotion: "user", children: a }), $a = ({
  children: a,
  layout: s,
  link: r,
  privacyModeInitiallyEnabled: t,
  image: l,
  i18n: u,
  l10n: i,
  isDev: n = !1,
  showExperimentalWarnings: o = !1
}) => /* @__PURE__ */ e(pa, { children: /* @__PURE__ */ e(
  Oe,
  {
    isDev: n,
    showExperimentalWarnings: o,
    children: /* @__PURE__ */ e(Ee, { ...i, children: /* @__PURE__ */ e(je, { ...u, children: /* @__PURE__ */ e(_e, { ...r, children: /* @__PURE__ */ e(ma, { ...s, children: /* @__PURE__ */ e(ze, { children: /* @__PURE__ */ e(
      Ve,
      {
        initiallyEnabled: t,
        children: /* @__PURE__ */ e(qe, { ...l, children: a })
      }
    ) }) }) }) }) })
  }
) });
export {
  Na as AreaChart,
  ja as Await,
  Pa as BarChart,
  w as Button,
  La as CategoryBarChart,
  _a as CopyButton,
  za as DndProvider,
  Va as EmojiImage,
  qa as F0Avatar,
  Aa as F0AvatarAlert,
  Ha as F0AvatarCompany,
  Ua as F0AvatarDate,
  Ga as F0AvatarEmoji,
  Wa as F0AvatarFile,
  Ya as F0AvatarIcon,
  Xa as F0AvatarList,
  H as F0AvatarModule,
  Ja as F0AvatarPerson,
  Ka as F0AvatarTeam,
  Qa as F0Card,
  Za as F0Checkbox,
  ye as F0Icon,
  es as F0TagAlert,
  as as F0TagBalance,
  ss as F0TagCompany,
  rs as F0TagDot,
  ts as F0TagList,
  ls as F0TagPerson,
  be as F0TagRaw,
  os as F0TagStatus,
  ns as F0TagTeam,
  $a as FactorialOneProvider,
  is as GROUP_ID_SYMBOL,
  Ra as HomeLayout,
  Sa as LineChart,
  ya as Link,
  cs as OneFilterPicker,
  ka as PieChart,
  Ve as PrivacyModeProvider,
  re as ProductBlankslate,
  ds as ProductCard,
  Ba as ProductModal,
  ua as ProductWidget,
  Fa as ProgressBarChart,
  Ma as StandardLayout,
  us as TagCounter,
  Ta as TwoColumnLayout,
  G as UpsellRequestResponseDialog,
  fa as UpsellingBanner,
  W as UpsellingButton,
  Ia as UpsellingPopover,
  Da as VerticalBarChart,
  Ca as avatarVariants,
  fs as buildTranslations,
  hs as createAtlaskitDriver,
  ms as createDataSourceDefinition,
  ba as defaultTranslations,
  ps as experimental,
  gs as getAnimationVariants,
  vs as getDataSourcePaginationType,
  xs as getEmojiLabel,
  bs as isInfiniteScrollPagination,
  ys as isPageBasedPagination,
  Cs as modules,
  ws as tagDotColors,
  Ns as useData,
  Ps as useDataSource,
  Ls as useDndEvents,
  Ss as useDraggable,
  ks as useDroppableList,
  Ds as useEmojiConfetti,
  Fs as useGroups,
  Ms as usePrivacyMode,
  Ts as useReducedMotion,
  Rs as useSelectable,
  Bs as useXRay
};
