export function Button({ children, onclick }) {
  return <button onClick={onclick}>{children}</button>;
}
