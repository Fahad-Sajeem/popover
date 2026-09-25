# react-smart-popover

A lightweight React popover that anchors to a trigger element and repositions itself to stay inside the viewport. Renders via a portal into `document.body`, so it's never clipped by a parent's `overflow: hidden`.

## Install

```bash
npm install react-smart-popover
```

`react` and `react-dom` are peer dependencies (`>=16.8.0`) — not bundled, so you don't end up with two copies of React.

## Usage

```tsx
import { useState } from "react";
import { Popover } from "react-smart-popover";
import "react-smart-popover/style.css";

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <Popover
      open={open}
      placement="bottom"
      content={<div>Hello from the popover</div>}
    >
      <button onClick={() => setOpen(!open)}>Toggle</button>
    </Popover>
  );
}
```

The child you pass to `Popover` (`<button>` above) is the trigger/anchor element — the popover positions itself relative to it. `Popover` clones that child to attach a ref, so it must be a single element that accepts a `ref` (a DOM element or a component using `React.forwardRef`), not a fragment or plain string.

Importing `react-smart-popover/style.css` gives you sensible default styling (white background, border, shadow). Skip the import and target `.smart-popover-inner` / `.smart-popover-inner-content` yourself if you want full control over appearance.

## API

### `<Popover />` props

| Prop | Type | Required | Description |
|---|---|---|---|
| `open` | `boolean` | Yes | Whether the popover content is shown. |
| `children` | `React.ReactNode` | Yes | The single trigger element the popover anchors to. |
| `content` | `React.ReactNode` | Yes | What renders inside the popover. |
| `placement` | `PopoverPlacement \| null` | No | Where the popover appears relative to the trigger. Defaults to positioning at `(0, 0)` if omitted. |
| `popoverPadding` | `PopoverPadding` | No | Extra offset (`{ top, right, bottom, left }`, in px) applied to the computed position. Defaults to all zeros. |

### `PopoverPlacement`

```ts
type PopoverPlacement =
  | "top" | "bottom" | "left" | "right"
  | "rightBottomCorner" | "leftBottomCorner"
  | "rightTopCorner" | "leftTopCorner";
```

- `top` / `bottom` / `left` / `right` — centered against the corresponding edge of the trigger, and flips to the opposite side if it would overflow the viewport.
- The four `*Corner` placements anchor to a corner of the trigger and similarly flip when they'd overflow.

### `PopoverPadding`

```ts
type PopoverPadding = { top: number; right: number; bottom: number; left: number };
```

## Behavior notes

- Position is recalculated on window `resize` and on `scroll` (capture phase, so scrolling inside any ancestor container triggers a reposition too).
- The popover is rendered into `document.body` via a portal, so parent `overflow`/`z-index`/`transform` stacking contexts don't clip or reposition it.
- There's no built-in click-outside-to-close or Escape-to-close behavior — `open` is fully controlled by you, so wire that up however fits your app (e.g. a click listener on `document` that sets `open` to `false`).

## Development

This repo also contains a demo app (Create React App) used to develop and visually test the component locally. It isn't part of the published package — only `dist/` ships to npm.

```bash
npm install
npm start          # run the demo app at http://localhost:3000
npm run build      # build the library (dist/) — this is what gets published
```

## License

MIT © Fahad Sajeem
