import { Button, ChakraProvider, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'

export default function CustomModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <ChakraProvider>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Example Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit qui dolore cumque tenetur. Dolorum enim explicabo deserunt quasi natus vel reprehenderit nobis ullam esse nam magni architecto, ea voluptas exercitationem.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt laboriosam, quisquam voluptatibus ex placeat voluptatem eveniet ut magni numquam commodi vitae saepe minima illum enim cum libero error odit possimus!
            {/* <Lorem count={2} /> */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  )
}