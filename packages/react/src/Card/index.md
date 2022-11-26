# Card

## Default

```jsx
/**
 * background: '#f2f2f2'
 */
import { Card } from '@dsrca/react';

function App() {
  return <Card>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card>;
}

export default App;
```

## Outline

```jsx
import { Card } from '@dsrca/react';

function App() {
  return (
    <Card mode='outline'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Card>
  );
}

export default App;
```
