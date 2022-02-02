import {Flex, Heading, Input, Button, useColorModeValue , Checkbox} from '@chakra-ui/react'
import Link from 'next/link' 

function Sign_Up() {
    const fromBackground = useColorModeValue("gray.100", "gray.700")
    const fieldBackground = useColorModeValue("gray.300", "gray.800")

    return (
        <Flex height="94vh" alignItems="center" justifyContent="center">
            <Flex direction="column" background={fromBackground} p={12} rounded={6} alignItems="center" justifyContent="center">
                <Heading mb={6}>Sign Up</Heading>
                <Input boxShadow='2xl' placeholder="asd123" variant="filled" mb={3} type="text" background={fieldBackground}/>
                <Input boxShadow='2xl' placeholder="asd@asd.com" variant="filled" mb={3} type="email" background={fieldBackground}/>
                <Input boxShadow='2xl' placeholder="********" variant="filled" mb={6} type="password" background={fieldBackground}/>
                <Input boxShadow='2xl' placeholder="********" variant="filled" mb={6} type="password" background={fieldBackground}/>
                <Checkbox size='md' colorScheme="facebook" mb={6} isInvalid>
                    Elfogadom a szabályzatot!
                </Checkbox>
                <Button boxShadow='2xl' colorScheme="teal">Sign-Up</Button>
                <Link href="/auth/login"><Button boxShadow='outlined' colorScheme="linkedin" mt={2}>Login</Button></Link>
                
            </Flex>
        </Flex>
    )
}

export default Sign_Up