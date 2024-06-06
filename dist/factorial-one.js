import { jsx as r, jsxs as m } from "react/jsx-runtime";
import { clsx as Z } from "clsx";
import { twMerge as ee } from "tailwind-merge";
import { cva as x } from "class-variance-authority";
import * as i from "react";
import S, { forwardRef as w, createContext as P, useContext as B, useRef as j, useState as R, useEffect as D, useCallback as $, useImperativeHandle as te } from "react";
import { createPortal as ae } from "react-dom";
import { Slot as re } from "@radix-ui/react-slot";
import { ChevronLeft as oe, ChevronRight as ne, ChevronDown as F, ChevronUp as se, Check as ie, OctagonX as de, CircleCheck as le, TriangleAlert as ce, BookOpen as ue, X as fe } from "lucide-react";
import { DayPicker as me } from "react-day-picker";
import * as l from "@radix-ui/react-select";
import * as v from "@radix-ui/react-avatar";
import * as y from "@radix-ui/react-tabs";
import * as f from "@radix-ui/react-dialog";
function o(...e) {
  return ee(Z(e));
}
const k = x(
  "inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-full border-solid text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-2 border-primary-intermediate bg-background text-primary-foreground hover:bg-primary",
        secondary: "border-2 border-secondary-intermediate bg-background text-secondary-foreground hover:bg-secondary",
        outline: "border-2 border-solid border-secondary-intermediate bg-background text-secondary-foreground hover:bg-secondary",
        destructive: "border-2 border-destructive-intermediate bg-destructive text-destructive-foreground hover:bg-destructive/70",
        positive: "border-2 border-positive-intermediate bg-positive text-positive-foreground hover:bg-positive/70",
        ghost: "border-none text-intermediate hover:bg-accent hover:text-accent-foreground"
      },
      rounded: {
        true: "aspect-square px-0"
      },
      size: {
        default: "h-10 py-2",
        sm: "h-8"
      }
    },
    compoundVariants: [
      {
        size: "default",
        rounded: !1,
        class: "px-4"
      },
      {
        size: "sm",
        rounded: !1,
        class: "px-3"
      }
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: !1
    }
  }
), L = i.forwardRef(
  ({ className: e, rounded: a, variant: t, size: n, asChild: s = !1, ...d }, g) => /* @__PURE__ */ r(
    s ? re : "button",
    {
      className: o(k({ variant: t, size: n, className: e, rounded: a })),
      ref: g,
      ...d
    }
  )
);
L.displayName = "Button";
const st = w(
  ({ label: e, hideLabel: a, icon: t, ...n }, s) => {
    const d = t;
    return /* @__PURE__ */ m(
      L,
      {
        title: a ? e : void 0,
        rounded: a,
        ref: s,
        ...n,
        children: [
          d && /* @__PURE__ */ r(d, { size: 16 }),
          !a && e
        ]
      }
    );
  }
), pe = x("", {
  variants: {
    overflow: {
      hidden: "overflow-hidden",
      auto: "overflow-auto"
    },
    paddingX: {
      none: "px-0",
      "p-2": "px-2",
      "p-4": "px-4",
      "p-8": "px-8",
      "p-12": "px-12",
      "p-16": "px-16"
    },
    maxWidth: {
      xs: "max-w-xs",
      sm: "max-w-sm",
      md: "max-w-md",
      xl: "max-w-xl",
      "screen-sm": "max-w-screen-sm",
      "screen-md": "max-w-screen-md",
      "screen-lg": "max-w-screen-lg",
      "screen-xl": "max-w-screen-xl",
      "screen-2xl": "max-w-screen-2xl"
    },
    paddingY: {
      none: "py-0",
      "p-2": "py-2",
      "p-4": "py-4",
      "p-8": "py-8",
      "p-12": "py-12",
      "p-16": "py-16"
    },
    basis: {
      0: "basis-0"
    },
    inline: {
      true: "inline-flex",
      false: "flex"
    },
    grow: {
      true: "flex-grow",
      false: "flex-grow-0"
    },
    shrink: {
      true: "flex-shrink",
      false: "flex-shrink-0"
    }
  },
  defaultVariants: {
    paddingX: "none",
    paddingY: "none",
    inline: !1
  }
}), C = w(
  ({
    className: e,
    grow: a,
    basis: t,
    shrink: n,
    paddingX: s,
    paddingY: d,
    inline: g,
    overflow: b,
    maxWidth: c,
    ...u
  }, h) => /* @__PURE__ */ r(
    "div",
    {
      className: o(
        pe({
          paddingX: s,
          basis: t,
          paddingY: d,
          grow: a,
          shrink: n,
          inline: g,
          overflow: b,
          maxWidth: c
        }),
        e
      ),
      ref: h,
      ...u
    }
  )
), T = {
  2: "gap-2",
  4: "gap-4",
  8: "gap-8"
}, ge = x("flex flex-col", {
  variants: {
    gap: {
      ...T
    }
  },
  defaultVariants: {}
}), N = w(({ className: e, gap: a, children: t, ...n }, s) => /* @__PURE__ */ r(C, { className: o(ge({ gap: a }), e), ref: s, ...n, children: t })), it = w(
  ({ className: e, children: a, ...t }, n) => /* @__PURE__ */ r(C, { className: o(e), ref: n, ...t, children: a })
), X = P(
  null
), z = () => {
  const e = B(X);
  if (!e)
    throw new Error("useLayout must be used within a LayoutProvider");
  return e;
}, xe = ({ children: e, fullScreen: a = !0 }) => {
  const t = j(null), [n, s] = R(t.current);
  return D(() => {
    s(t.current);
  }, []), /* @__PURE__ */ r(X.Provider, { value: { element: n }, children: /* @__PURE__ */ r(
    N,
    {
      ref: t,
      className: o("font-sans text-foreground", {
        "h-screen w-screen bg-page-background": a
      }),
      children: e
    }
  ) });
}, dt = ({ children: e, layout: a }) => /* @__PURE__ */ r(xe, { ...a, children: /* @__PURE__ */ r(be, { children: e }) }), I = P({ enabled: !1, enable: () => null, disable: () => null, filter: [] }), be = ({
  children: e
}) => {
  const { element: a } = z(), [t, n] = R(!1), [s, d] = R([]), g = $(
    (c) => {
      d(
        c || [...A].filter((u) => u !== "layout")
      ), n(!0);
    },
    [d, n]
  ), b = $(() => n(!1), [n]);
  return D(() => {
    window.XRay = {
      enable: g,
      disable: b
    };
  }, [g, b]), /* @__PURE__ */ m(I.Provider, { value: { enabled: t, enable: g, disable: b, filter: s }, children: [
    e,
    t && a && ae(
      /* @__PURE__ */ m(
        N,
        {
          gap: "2",
          className: "fixed right-2 top-2 z-50 rounded-sm border-solid border-gray-300 bg-white p-4 opacity-80 shadow-md",
          children: [
            /* @__PURE__ */ r("div", { className: "text-md z-50 font-bold", children: "XRay" }),
            /* @__PURE__ */ r(N, { gap: "2", children: A.map((c) => /* @__PURE__ */ m("label", { className: "block", children: [
              /* @__PURE__ */ r(
                "input",
                {
                  onChange: (u) => u.target.checked ? d([...s, c]) : d(s.filter((h) => h !== c)),
                  type: "checkbox",
                  checked: s.includes(c),
                  className: "mr-2"
                }
              ),
              c
            ] })) })
          ]
        }
      ),
      a
    )
  ] });
}, ye = x(
  "outline-opacity-50 pointer-events-none absolute z-40 outline-dashed",
  {
    variants: {
      type: {
        layout: "outline-red-500",
        info: "outline-blue-500",
        action: "outline-green-600",
        form: "outline-purple-600"
      }
    }
  }
), ve = x(
  "absolute z-40 bg-opacity-50 px-2 py-1 text-xs uppercase",
  {
    variants: {
      type: {
        layout: "bg-red-500 text-white",
        info: "bg-blue-500 text-white",
        action: "bg-green-600 text-white",
        form: "bg-purple-600 text-white"
      }
    }
  }
), he = (e, a) => {
  const { element: t } = z(), { enabled: n, filter: s } = i.useContext(I), d = j(null);
  te(a, () => d.current);
  const g = n && !e.internal;
  return D(() => {
    if (!g || !d.current || !s.includes(e.type))
      return;
    const b = d.current;
    b.dataset.componentName = e.name;
    let c = null, u = null;
    if (t) {
      const h = b.getBoundingClientRect(), { top: V, left: _, width: K, height: Q } = h;
      c = document.createElement("div"), c.className = ye({ type: e.type }), c.style.top = `${V}px`, c.style.left = `${_}px`, c.style.width = `${K}px`, c.style.height = `${Q}px`, u = document.createElement("div"), u.className = ve({ type: e.type }), u.style.top = `${V}px`, u.style.left = `${_}px`, u.innerText = e.name, t.appendChild(u), t.appendChild(c);
    }
    return () => {
      c && (t == null || t.removeChild(c)), u && (t == null || t.removeChild(u));
    };
  }, [g, e.name, e.type, s, t]), {
    ref: d,
    enabled: n
  };
}, lt = () => B(I), A = ["layout", "info", "action", "form"], p = (e, a) => {
  const t = w((n, s) => {
    const { ref: d } = he(e, s);
    return /* @__PURE__ */ r(a, { ref: d, ...n });
  });
  return t.displayName = `${e.name}`, t;
}, H = i.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ r(
  "div",
  {
    ref: t,
    className: o(
      "rounded-2xl border border-solid border-border bg-card text-card-foreground shadow-sm",
      e
    ),
    ...a
  }
));
H.displayName = "Card";
const O = i.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ r(
  "div",
  {
    ref: t,
    className: o("flex flex-col space-y-1.5 p-6 pb-0", e),
    ...a
  }
));
O.displayName = "CardHeader";
const E = i.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ r(
  "h3",
  {
    ref: t,
    className: o(
      "text-2xl font-semibold leading-none tracking-tight",
      e
    ),
    ...a
  }
));
E.displayName = "CardTitle";
const G = i.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ r(
  "p",
  {
    ref: t,
    className: o("text-sm text-muted-foreground", e),
    ...a
  }
));
G.displayName = "CardDescription";
const U = i.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ r("div", { ref: t, className: o("p-6", e), ...a }));
U.displayName = "CardContent";
const q = i.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ r(
  "div",
  {
    ref: t,
    className: o("flex items-center px-6 pb-6 pt-0", e),
    ...a
  }
));
q.displayName = "CardFooter";
const ct = p(
  {
    name: "Card",
    type: "info"
  },
  H
), ut = p(
  {
    name: "CardContent",
    type: "info",
    internal: !0
  },
  U
), ft = p(
  {
    name: "CardDescription",
    type: "info",
    internal: !0
  },
  G
), mt = p(
  {
    name: "CardFooter",
    type: "info",
    internal: !0
  },
  q
), pt = p(
  {
    name: "CardHeader",
    type: "info",
    internal: !0
  },
  O
), gt = p(
  {
    name: "CardTitle",
    type: "info",
    internal: !0
  },
  E
), Y = i.forwardRef(
  ({ className: e, type: a, ...t }, n) => /* @__PURE__ */ r(
    "input",
    {
      type: a,
      className: o(
        "flex h-10 w-full rounded-lg border-2 border-solid border-input bg-background px-3 py-2 text-sm ring-offset-background transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/60 hover:border-input-hover focus-visible:border-input-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-muted disabled:opacity-50",
        e
      ),
      ref: n,
      ...t
    }
  )
);
Y.displayName = "Input";
const we = Y;
function Ne({
  className: e,
  classNames: a,
  showOutsideDays: t = !0,
  ...n
}) {
  return /* @__PURE__ */ r(
    me,
    {
      showOutsideDays: t,
      className: o("p-3", e),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: o(
          k({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "rounded-full h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-outside)]:bg-accent focus-within:relative focus-within:z-20 [&:has([aria-selected].day-range-middle)]:rounded-none first:[&:has([aria-selected].day-range-middle)]:rounded-l-lg last:[&:has([aria-selected].day-range-middle)]:rounded-r-lg [&:has([aria-selected].day-range-start)]:rounded-r-none [&:has([aria-selected].day-range-end)]:rounded-l-none first:[&:has([aria-selected].day-range-end)]:rounded-r-[24px] first:[&:has([aria-selected].day-range-end)]:rounded-l-md last:[&:has([aria-selected].day-range-start)]:rounded-l-[24px] last:[&:has([aria-selected].day-range-start)]:rounded-r-md [&:has([aria-selected].day-range-start.day-range-end)]:rounded-full",
        day: o(
          k({ variant: "ghost" }),
          "rounded-[inherit] h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "day-range-middle",
        day_hidden: "invisible",
        ...a
      },
      components: {
        IconLeft: () => /* @__PURE__ */ r(oe, { className: "h-4 w-4" }),
        IconRight: () => /* @__PURE__ */ r(ne, { className: "h-4 w-4" })
      },
      ...n
    }
  );
}
Ne.displayName = "Calendar";
const xt = l.Root, bt = l.Group, yt = l.Value, Ce = i.forwardRef(({ className: e, children: a, ...t }, n) => /* @__PURE__ */ m(
  l.Trigger,
  {
    ref: n,
    className: o(
      "flex h-10 w-full items-center justify-between rounded-lg border-2 border-solid border-input bg-background px-3 py-2 text-sm ring-offset-background transition-colors placeholder:text-muted-foreground hover:border-input-hover focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus-visible:border-input-hover disabled:cursor-not-allowed disabled:bg-muted disabled:opacity-50 [&>span]:line-clamp-1",
      e
    ),
    ...t,
    children: [
      a,
      /* @__PURE__ */ r(l.Icon, { asChild: !0, children: /* @__PURE__ */ r(F, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
Ce.displayName = l.Trigger.displayName;
const M = i.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ r(
  l.ScrollUpButton,
  {
    ref: t,
    className: o(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...a,
    children: /* @__PURE__ */ r(se, { className: "h-4 w-4 text-secondary-foreground" })
  }
));
M.displayName = l.ScrollUpButton.displayName;
const W = i.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ r(
  l.ScrollDownButton,
  {
    ref: t,
    className: o(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...a,
    children: /* @__PURE__ */ r(F, { className: "h-4 w-4 text-secondary-foreground" })
  }
));
W.displayName = l.ScrollDownButton.displayName;
const Re = i.forwardRef(({ className: e, children: a, position: t = "popper", ...n }, s) => /* @__PURE__ */ r(l.Portal, { children: /* @__PURE__ */ m(
  l.Content,
  {
    ref: s,
    className: o(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-lg border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      t === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: t,
    ...n,
    children: [
      /* @__PURE__ */ r(M, {}),
      /* @__PURE__ */ r(
        l.Viewport,
        {
          className: o(
            "p-1",
            t === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: a
        }
      ),
      /* @__PURE__ */ r(W, {})
    ]
  }
) }));
Re.displayName = l.Content.displayName;
const ke = i.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ r(
  l.Label,
  {
    ref: t,
    className: o("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...a
  }
));
ke.displayName = l.Label.displayName;
const Se = i.forwardRef(({ className: e, children: a, ...t }, n) => /* @__PURE__ */ m(
  l.Item,
  {
    ref: n,
    className: o(
      "relative flex w-full cursor-default select-none items-center rounded-md py-2 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ r("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ r(l.ItemIndicator, { children: /* @__PURE__ */ r(ie, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ r(l.ItemText, { children: a })
    ]
  }
));
Se.displayName = l.Item.displayName;
const De = i.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ r(
  l.Separator,
  {
    ref: t,
    className: o("-mx-1 my-1 h-px bg-muted", e),
    ...a
  }
));
De.displayName = l.Separator.displayName;
const vt = p(
  {
    name: "Input",
    type: "form"
  },
  we
), Te = x(
  "relative w-full rounded-2xl bg-secondary p-6 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-6 [&>svg]:top-6 [&>svg]:text-foreground [&>svg~*]:pl-8",
  {
    variants: {
      variant: {
        destructive: "bg-destructive text-destructive-foreground dark:border-destructive-intermediate [&>svg]:text-destructive-intermediate",
        positive: "bg-positive text-positive-foreground dark:border-positive-intermediate [&>svg]:text-positive-intermediate",
        warning: "bg-warning text-warning-foreground dark:border-warning-intermediate [&>svg]:text-warning-intermediate",
        info: "bg-info text-info-foreground dark:border-info-intermediate [&>svg]:text-info-intermediate"
      }
    },
    defaultVariants: {
      variant: "info"
    }
  }
), ze = {
  destructive: de,
  positive: le,
  warning: ce,
  info: ue
}, ht = p(
  {
    name: "Alert",
    type: "info"
  },
  i.forwardRef(({ className: e, variant: a = "info", children: t, ...n }, s) => {
    const d = a ? ze[a] : null;
    return /* @__PURE__ */ r(
      "div",
      {
        ref: s,
        role: "alert",
        className: o(Te({ variant: a }), e),
        ...n,
        children: /* @__PURE__ */ m("div", { className: "flex flex-row", children: [
          d && /* @__PURE__ */ r("div", { className: "mr-2 flex h-6 items-center", children: /* @__PURE__ */ r(d, { size: 20 }) }),
          /* @__PURE__ */ r("div", { children: t })
        ] })
      }
    );
  })
), Ie = i.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ r(
  "h5",
  {
    ref: t,
    className: o("mb-1 text-base font-medium tracking-tight", e),
    ...a
  }
));
Ie.displayName = "AlertTitle";
const Ve = i.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ r(
  "div",
  {
    ref: t,
    className: o("[&_p]:leading-relaxed", e),
    ...a
  }
));
Ve.displayName = "AlertDescription";
const wt = [
  "xsmall",
  "small",
  "medium",
  "large",
  "xlarge",
  "xxlarge"
], _e = x("relative flex shrink-0 overflow-hidden", {
  variants: {
    size: {
      xsmall: "h-8 w-8 rounded-xl text-xs",
      small: "h-10 w-10 rounded-xl text-sm",
      medium: "h-12 w-12 rounded-xl",
      large: "h-16 w-16 rounded-2xl text-xl",
      xlarge: "h-20 w-20 rounded-2xl text-2xl",
      xxlarge: "h-32 w-32 rounded-3xl text-3xl"
    }
  },
  defaultVariants: {
    size: "medium"
  }
}), $e = i.forwardRef(({ size: e, className: a, ...t }, n) => /* @__PURE__ */ r(
  v.Root,
  {
    ref: n,
    className: o(_e({ size: e, className: a })),
    ...t
  }
));
$e.displayName = v.Root.displayName;
const Ae = i.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ r(
  v.Image,
  {
    ref: t,
    className: o("aspect-square h-full w-full", e),
    ...a
  }
));
Ae.displayName = v.Image.displayName;
const Pe = i.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ r(
  v.Fallback,
  {
    ref: t,
    className: o(
      "flex h-full w-full items-center justify-center rounded-xl bg-muted",
      e
    ),
    ...a
  }
));
Pe.displayName = v.Fallback.displayName;
const Be = x(
  "inline-flex items-center rounded-full border border-solid px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-secondary-intermediate bg-transparent text-secondary-foreground",
        neutral: "border-transparent bg-secondary text-secondary-foreground",
        destructive: "border-transparent bg-destructive text-destructive-foreground",
        positive: "border-transparent bg-positive text-positive-foreground",
        warning: "border-transparent bg-warning text-warning-foreground",
        info: "border-transparent bg-info text-info-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Nt({ className: e, variant: a, ...t }) {
  return /* @__PURE__ */ r("div", { className: o(Be({ variant: a }), e), ...t });
}
const Ct = y.Root, je = i.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ r(
  y.List,
  {
    ref: t,
    className: o(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      e
    ),
    ...a
  }
));
je.displayName = y.List.displayName;
const Fe = i.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ r(
  y.Trigger,
  {
    ref: t,
    className: o(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      e
    ),
    ...a
  }
));
Fe.displayName = y.Trigger.displayName;
const Le = i.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ r(
  y.Content,
  {
    ref: t,
    className: o(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      e
    ),
    ...a
  }
));
Le.displayName = y.Content.displayName;
const Rt = f.Root, kt = f.Trigger, Xe = f.Portal, St = f.Close, J = i.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ r(
  f.Overlay,
  {
    ref: t,
    className: o(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...a
  }
));
J.displayName = f.Overlay.displayName;
const He = i.forwardRef(({ className: e, children: a, ...t }, n) => {
  const { element: s } = z();
  return /* @__PURE__ */ m(Xe, { container: s, children: [
    /* @__PURE__ */ r(J, {}),
    /* @__PURE__ */ m(
      f.Content,
      {
        ref: n,
        className: o(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-8 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-2xl",
          e
        ),
        ...t,
        children: [
          a,
          /* @__PURE__ */ m(f.Close, { className: "absolute right-3 top-3 rounded-sm p-2 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
            /* @__PURE__ */ r(fe, { className: "h-4 w-4" }),
            /* @__PURE__ */ r("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
});
He.displayName = f.Content.displayName;
const Oe = ({
  className: e,
  ...a
}) => /* @__PURE__ */ r(
  "div",
  {
    className: o(
      "absolute left-8 top-0 translate-y-[-50%] rounded-2xl bg-background p-4 text-primary-foreground shadow-md",
      e
    ),
    ...a
  }
);
Oe.displayName = "DialogIcon";
const Ee = ({
  className: e,
  ...a
}) => /* @__PURE__ */ r(
  "div",
  {
    className: o("mt-6 flex flex-col space-y-1.5 text-left", e),
    ...a
  }
);
Ee.displayName = "DialogHeader";
const Ge = ({
  className: e,
  ...a
}) => /* @__PURE__ */ r(
  "div",
  {
    className: o(
      "-mx-8 -mb-8 mt-4 flex flex-col-reverse gap-1 rounded-bl-2xl rounded-br-2xl border-t bg-secondary/50 px-8 py-4 sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...a
  }
);
Ge.displayName = "DialogFooter";
const Ue = i.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ r(
  f.Title,
  {
    ref: t,
    className: o("text-xl font-medium leading-none tracking-tight", e),
    ...a
  }
));
Ue.displayName = f.Title.displayName;
const qe = i.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ r(
  f.Description,
  {
    ref: t,
    className: o("text-sm text-muted-foreground", e),
    ...a
  }
));
qe.displayName = f.Description.displayName;
const Ye = x("grid grid-cols-1", {
  variants: {
    tileSize: {
      // The amount of columns and autoflow when paginating is an issue if we
      // want to prevent orphan elments. Say, we have 10 elements, we can't just
      // render 3 rows of 3 elements and then an orphan one in the end.
      //
      // This makes sure that everything will look nice when using pages of 48
      // elements, it will always result in even rows.
      sm: "@12xl:grid-cols-16 @md:grid-cols-2 @2xl:grid-cols-3 @4xl:grid-cols-4 @8xl:grid-cols-6 @10xl:grid-cols-8 @11xl:grid-cols-12",
      md: "@lg:grid-cols-2 @4xl:grid-cols-3 @7xl:grid-cols-4 @9xl:grid-cols-6 @10xl:grid-cols-8 @12xl:grid-cols-12",
      lg: "@3xl:grid-cols-2 @7xl:grid-cols-3 @9xl:grid-cols-4 @10xl:grid-cols-6 @12xl:grid-cols-8"
    },
    gap: {
      ...T
    }
  },
  defaultVariants: {
    tileSize: "md",
    gap: "4"
  }
}), Me = S.forwardRef(({ className: e, gap: a, children: t, tileSize: n, ...s }, d) => /* @__PURE__ */ r("div", { className: o("@container", "grow"), ref: d, ...s, children: /* @__PURE__ */ r(
  "div",
  {
    className: o(Ye({ gap: a, tileSize: n }), e),
    ref: d,
    ...s,
    children: t
  }
) })), We = x("relative flex-row", {
  variants: {
    gap: {
      ...T
    },
    wrap: {
      true: "flex-wrap"
    },
    verticalAlign: {
      center: "items-center",
      stretch: "items-stretch"
    }
  },
  defaultVariants: {
    verticalAlign: "stretch",
    wrap: !0
  }
}), Je = S.forwardRef(({ className: e, gap: a, verticalAlign: t, wrap: n, ...s }, d) => /* @__PURE__ */ r(
  C,
  {
    className: o(We({ gap: a, verticalAlign: t, wrap: n }), e),
    ref: d,
    ...s
  }
)), Dt = S.forwardRef(
  ({ className: e, children: a, ...t }, n) => /* @__PURE__ */ r(C, { className: o(e), ref: n, ...t, children: a })
), Tt = p(
  {
    name: "Stack",
    type: "layout"
  },
  N
), zt = p(
  {
    name: "Split",
    type: "layout"
  },
  Je
), It = p(
  {
    name: "AutoGrid",
    type: "layout"
  },
  Me
);
export {
  ht as Alert,
  Ve as AlertDescription,
  Ie as AlertTitle,
  It as AutoGrid,
  $e as Avatar,
  Pe as AvatarFallback,
  Ae as AvatarImage,
  Nt as Badge,
  st as Button,
  Ne as Calendar,
  ct as Card,
  ut as CardContent,
  ft as CardDescription,
  mt as CardFooter,
  pt as CardHeader,
  gt as CardTitle,
  Rt as Dialog,
  St as DialogClose,
  He as DialogContent,
  qe as DialogDescription,
  Ge as DialogFooter,
  Ee as DialogHeader,
  Oe as DialogIcon,
  J as DialogOverlay,
  Xe as DialogPortal,
  Ue as DialogTitle,
  kt as DialogTrigger,
  dt as FactorialOneProvider,
  vt as Input,
  xt as Select,
  Re as SelectContent,
  bt as SelectGroup,
  Se as SelectItem,
  ke as SelectLabel,
  W as SelectScrollDownButton,
  M as SelectScrollUpButton,
  De as SelectSeparator,
  Ce as SelectTrigger,
  yt as SelectValue,
  zt as Split,
  Dt as SplitCol,
  Tt as Stack,
  it as StackRow,
  Ct as Tabs,
  Le as TabsContent,
  je as TabsList,
  Fe as TabsTrigger,
  Be as badgeVariants,
  wt as sizes,
  lt as useXRay
};
