import * as AvatarPrimitive from "@radix-ui/react-avatar";
import * as React from "react";
export declare const sizes: readonly ["xsmall", "small", "medium", "large", "xlarge", "xxlarge"];
declare const Avatar: React.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarProps & React.RefAttributes<HTMLSpanElement>, "ref"> & {
    size?: "small" | "xsmall" | "medium" | "large" | "xlarge" | "xxlarge" | undefined;
} & React.RefAttributes<HTMLSpanElement>>;
declare const AvatarImage: React.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarImageProps & React.RefAttributes<HTMLImageElement>, "ref"> & React.RefAttributes<HTMLImageElement>>;
declare const AvatarFallback: React.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarFallbackProps & React.RefAttributes<HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>>;
export { Avatar, AvatarFallback, AvatarImage };
