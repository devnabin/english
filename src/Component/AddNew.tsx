import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function AddNew() {
    const [opened, { open, close }] = useDisclosure(false);
  
    return (
        <>
            <Modal
                opened={opened}
                onClose={close}
                title="test"
              
            >
                {/* Modal content */}
            </Modal>

            {/* <Button onClick={open}>Open modal</Button> */}
            <Button
                onClick={open}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                </svg>
            </Button>
        </>


    )
}
export default AddNew
