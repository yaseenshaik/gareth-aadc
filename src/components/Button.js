import clsx from "clsx";

export default function Button({ className, ...props }) {
  return <button {...props} className={clsx(["border button", className])} />;
}
