import {Flex, Heading, Input, Button, useColorModeValue} from '@chakra-ui/react'

function Login() {
    const fromBackground = useColorModeValue("gray.100", "gray.700")
    const fieldBackground = useColorModeValue("gray.300", "gray.800")
    return (
        <Flex height="94vh" alignItems="center" justifyContent="center">
            <Flex direction="column" background={fromBackground} p={12} rounded={6}>
                <Heading mb={6}>Log In</Heading>
                <Input boxShadow='2xl' placeholder="asd@asd.com" variant="filled" mb={3} type="email" background={fieldBackground}/>
                <Input boxShadow='2xl' placeholder="********" variant="filled" mb={6} type="password" background={fieldBackground}/>
                <Button boxShadow='2xl' colorScheme="teal">Log in</Button>
            </Flex>
        </Flex>
    )
}

export default Login