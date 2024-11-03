# Modal

The Modal overlays the content of our website and presents the user with some information and a choice.

## Structure

```tsx
 <Modal.Root>
    <Modal.Trigger>Settings</Modal.Trigger>
    <Modal.Portal>
      <Modal.Backdrop />
      <Modal.Content>
        <Modal.Header>
          <Modal.Eyebrow>Modal Eyebrow</Modal.Eyebrow>
          <Modal.Title>Modal Title</Modal.Title>
          <Modal.Close />
        </Modal.Header>
        <Modal.Body>
          <p className='text-xl font-medium'>This is Modal Body</p>
        </Modal.Body>
        <Modal.Footer>
          <Modal.Cancel>Cancel</Modal.Cancel>
          <Modal.Confirm>Save Changes</Modal.Confirm>
        </Modal.Footer>
      </Modal.Content>
    </Modal.Portal>
  </Modal.Root>
```

| Component    |Description |
| ------------ | ------------ |
| `<Modal.Root>` |  Creates Context for the Modal and Enacpsulates all the modal Component |
| `<Modal.Trigger>` | Displays a Trigger Button for Modal to Open |
| `<Modal.Portal>` | Creates a React Portal inside which the Modal Content is getting rendered |
| `<Modal.Backdrop>` | Adds a semi opaque backdrop to the modal |
| `<Modal.Content>` | Container for the Modal Content, like Header, Footer, Body |
| `<Modal.Header>` | Displays Header content, Eyebrow text, Title text, Close button |
| `<Modal.Eyebrow>` | Displays Eyebrow text for the modal |
| `<Modal.Title>` | Displays Title text for the modal |
| `<Modal.Close>` | Shows a close button that dismisses the modal onclick |
| `<Modal.Body>` | For displaying the main modal content |
| `<Modal.Footer>` | Displays Footer content, Action Buttons- Confirm and Cancel |
| `<Modal.Cancel>` | Displays Cancel Button, on click cancels or dismisses the modal |
| `<Modal.Confirm>` | Action Button for confirming and action |

## Usage

> ### Basic Modal

```tsx
 <Modal.Root>
    <Modal.Trigger>Settings</Modal.Trigger>
    <Modal.Portal>
      <Modal.Backdrop />
      <Modal.Content>
        <Modal.Header>
          <Modal.Eyebrow>Modal Eyebrow</Modal.Eyebrow>
          <Modal.Title>Modal Title</Modal.Title>
          <Modal.Close />
        </Modal.Header>
        <Modal.Body>
          <p className='text-xl font-medium'>This is Modal Body</p>
        </Modal.Body>
        <Modal.Footer>
          <Modal.Cancel>Cancel</Modal.Cancel>
          <Modal.Confirm>Save Changes</Modal.Confirm>
        </Modal.Footer>
      </Modal.Content>
    </Modal.Portal>
  </Modal.Root>
```

> ### Opened by default

```tsx
 <Modal.Root defaultOpen={true}>
    <Modal.Trigger>Settings</Modal.Trigger>
    <Modal.Portal>
      <Modal.Backdrop />
      <Modal.Content>
        <Modal.Header>
          <Modal.Eyebrow>Modal Eyebrow</Modal.Eyebrow>
          <Modal.Title>Modal Title</Modal.Title>
          <Modal.Close />
        </Modal.Header>
        <Modal.Body>
          <p className='text-xl font-medium'>This is Modal Body</p>
        </Modal.Body>
        <Modal.Footer>
          <Modal.Cancel>Cancel</Modal.Cancel>
          <Modal.Confirm>Save Changes</Modal.Confirm>
        </Modal.Footer>
      </Modal.Content>
    </Modal.Portal>
  </Modal.Root>
```

> ### Controlled

```tsx
const [isOpen, setIsOpen] = useState(false)

  <div className='flex items-center justify-center p-4 position-static'>
      <div>
        <button
          className='px-3 py-2 text-white bg-teal-600 rounded-sm'
          onClick={() => {
            setOpen(!open);
          }}>
          Open Modal through state
        </button>
      </div>
      <Modal.Root open={open} onOpenChange={setOpen}>
        <Modal.Portal>
          <Modal.Backdrop />
          <Modal.Content>
            <Modal.Header>
              <Modal.Eyebrow>Basic Modal Eyebrow text</Modal.Eyebrow>
              <Modal.Title>Title goes here</Modal.Title>
              <Modal.Close />
            </Modal.Header>
            <div className='h-20 bg-slate-100'>
              <p>This is a modal content. Opens using external state</p>
            </div>
            <Modal.Footer>
              <Modal.Cancel>Cancel</Modal.Cancel>
              <Modal.Confirm>Confirm</Modal.Confirm>
            </Modal.Footer>
          </Modal.Content>
        </Modal.Portal>
      </Modal.Root>
    </div>
```

> ### Custom Trigger

```tsx
<Modal.Trigger asChild>
  <button className='flex items-center justify-center h-12 p-4 text-white bg-teal-800 rounded-full'>
    Custom Trigger 🔥
  </button>
</Modal.Trigger>
```
