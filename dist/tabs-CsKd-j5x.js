import { jsx as n, jsxs as m } from "react/jsx-runtime";
import { cva as c } from "class-variance-authority";
import * as i from "react";
import { forwardRef as l, createContext as b, useContext as p } from "react";
import * as d from "@radix-ui/react-avatar";
import * as o from "@radix-ui/react-tabs";
import { clsx as v } from "clsx";
import { twMerge as w } from "tailwind-merge";
const h = c("inline-block", {
  variants: {
    size: {
      xl: "h-12 w-12",
      lg: "h-8 w-8",
      md: "h-5 w-5",
      sm: "h-3 w-3"
    }
  },
  defaultVariants: {
    size: "xl"
  }
}), L = l(
  ({ size: t, icon: e }, r) => e ? /* @__PURE__ */ n(e, { ref: r, className: h({ size: t }) }) : null
);
function a(...t) {
  return w(v(t));
}
const f = b(void 0), $ = ({ children: t, ...e }) => /* @__PURE__ */ n(f.Provider, { value: e, children: t }), y = () => ({
  ...p(f)
}), N = l((t, e) => {
  const { src: r } = y();
  if (!r) return /* @__PURE__ */ n("img", { ref: e, ...t });
  const s = r(t);
  return /* @__PURE__ */ n("img", { ref: e, ...t, ...s });
}), R = c("relative flex shrink-0 overflow-hidden", {
  variants: {
    size: {
      xsmall: "h-6 w-6 rounded-xl text-sm",
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
}), u = i.forwardRef(({ size: t, className: e, ...r }, s) => /* @__PURE__ */ n(
  d.Root,
  {
    ref: s,
    className: a(R({ size: t, className: e })),
    ...r
  }
));
u.displayName = d.Root.displayName;
const g = i.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ n(
  d.Image,
  {
    ref: r,
    className: a("aspect-square h-full w-full", t),
    ...e,
    asChild: !0,
    children: /* @__PURE__ */ n(N, {})
  }
));
g.displayName = d.Image.displayName;
const x = i.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ n(
  d.Fallback,
  {
    ref: r,
    className: a(
      "flex h-full w-full items-center justify-center rounded-xl bg-warning-foreground text-background",
      t
    ),
    ...e
  }
));
x.displayName = d.Fallback.displayName;
const k = l(
  ({ src: t, alt: e, size: r }, s) => /* @__PURE__ */ m(u, { size: r, ref: s, children: [
    /* @__PURE__ */ n(g, { src: t, alt: e }),
    /* @__PURE__ */ n(x, { children: e })
  ] })
), C = c(
  "inline-flex items-center rounded-full border border-solid px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-secondary-intermediate bg-transparent text-secondary-foreground",
        neutral: "border-transparent bg-secondary text-secondary-foreground",
        destructive: "border-transparent bg-destructive text-destructive-foreground",
        positive: "border-transparent bg-positive text-positive-foreground",
        warning: "border-transparent bg-warning text-warning-foreground",
        info: "border-transparent bg-info text-info-foreground",
        name: "border-secondary-intermediate bg-page-background text-sm font-medium text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function I({ className: t, variant: e, ...r }) {
  return /* @__PURE__ */ n("div", { className: a(C({ variant: e }), t), ...r });
}
const q = l(
  ({ text: t, avatar: e, variant: r = "name" }) => {
    const s = (e == null ? void 0 : e.src) || (e == null ? void 0 : e.alt);
    return /* @__PURE__ */ m(
      I,
      {
        variant: r,
        className: a(s ? "pl-[0.15rem] pr-2" : "px-2"),
        children: [
          s && /* @__PURE__ */ n("span", { className: "mr-1", children: /* @__PURE__ */ n(
            k,
            {
              alt: e.alt || t[0],
              src: e.src,
              size: "xsmall"
            }
          ) }),
          t
        ]
      }
    );
  }
), M = o.Root, T = i.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ n(
  o.List,
  {
    ref: r,
    className: a(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      t
    ),
    ...e
  }
));
T.displayName = o.List.displayName;
const A = i.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ n(
  o.Trigger,
  {
    ref: r,
    className: a(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      t
    ),
    ...e
  }
));
A.displayName = o.Trigger.displayName;
const V = i.forwardRef(({ className: t, ...e }, r) => /* @__PURE__ */ n(
  o.Content,
  {
    ref: r,
    className: a(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      t
    ),
    ...e
  }
));
V.displayName = o.Content.displayName;
export {
  k as A,
  q as B,
  L as I,
  M as T,
  $ as a,
  V as b,
  a as c,
  T as d,
  A as e
};
