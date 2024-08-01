# Class Names
A basic compiler for CSS classes 

## Installation
```bash
npm i @figliolia/classnames
# or
yarn add @figliolia/classnames
```

### Basic Usage
```typescript
import { classnames } from "@figliolia/classnames";

const classes = classnames("ui-component", { active: true, hidden: false, focused: false });
// "ui-component active focused"
```

### Usage With React
```tsx
import { useClassNames } from "@figliolia/classnames";

export const UIComponent = (props: { 
  active: boolean, 
  hidden: boolean,
  focused: boolean, 
}) => {
  // only recomputes on prop-changes
  const classNames = useClassNames("ui-component", props);
  return (
    <div className={classNames}>
      {/* Other Markup */}
    </div>
  );
}
```