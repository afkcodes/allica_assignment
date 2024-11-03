import { Button } from './components/Button/Button';
import { Modal } from './components/Modal';

function App() {
  return (
    <div className='flex flex-col min-h-screen gap-4'>
      <div className='flex flex-col items-center gap-4'>
        <h2 className='text-lg font-semibold'>Button Variants</h2>
        <Button variant='primary'>Primary Button</Button>
        <Button variant='secondary'>Secondary Button</Button>
        <Button variant='ghost'>Ghost Button</Button>
        <Button variant='primary' fullWidth>
          Full Width Button
        </Button>
      </div>

      <div className='flex flex-col items-center gap-4'>
        <h2 className='text-lg font-semibold'>Modal Example</h2>
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
                <div className='space-y-6 bg-gray-200'>
                  <p className='text-xl font-medium'>This is Modal Body</p>
                  <p className='font-medium'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
                    exercitationem inventore minus impedit natus tenetur nemo error?
                    Corporis saepe incidunt harum, dolore dicta ab neque mollitia omnis
                    quasi ratione impedit.
                  </p>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Modal.Cancel>Cancel</Modal.Cancel>
                <Modal.Confirm>Save Changes</Modal.Confirm>
              </Modal.Footer>
            </Modal.Content>
          </Modal.Portal>
        </Modal.Root>
      </div>
    </div>
  );
}

export default App;
