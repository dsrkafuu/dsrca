# Button

## Default

```jsx
import { Button } from '@dsrca/react';

function App() {
  return <Button>Button</Button>;
}

export default App;
```

## Primary

```jsx
import { Button } from '@dsrca/react';

function App() {
  return <Button type='primary'>Button</Button>;
}

export default App;
```

## IconOnly

```jsx
import { Button } from '@dsrca/react';
import { FaCompactDisc } from 'react-icons/fa';

function App() {
  return <Button type='primary' icon={<FaCompactDisc />} />;
}

export default App;
```

## IconText

```jsx
import { Button } from '@dsrca/react';
import { FaCompactDisc } from 'react-icons/fa';

function App() {
  return (
    <Button type='primary' icon={<FaCompactDisc />}>
      Button
    </Button>
  );
}

export default App;
```
