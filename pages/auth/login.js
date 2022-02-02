import {Flex, Heading, Input, Button, useColorModeValue} from '@chakra-ui/react'
import Link from 'next/link' 
import Navbar from '../../components/Navbar/Navbar'

export default function Login() {
    const fromBackground = useColorModeValue("gray.100", "gray.700")
    const fieldBackground = useColorModeValue("gray.300", "gray.800")
    return (
        <div>
            <Navbar/>
            <Flex height="94vh" alignItems="center" justifyContent="center">
                <Flex direction="column" background={fromBackground} p={12} rounded={6} alignItems="center" justifyContent="center">
                    <Heading mb={6}>Log In</Heading>
                    <Input boxShadow='2xl' placeholder="asd@asd.com" variant="filled" mb={3} type="email" background={fieldBackground}/>
                    <Input boxShadow='2xl' placeholder="********" variant="filled" mb={6} type="password" background={fieldBackground}/>
                    <Button boxShadow='2xl' colorScheme="teal">Log in</Button>
                    <Link href="/auth/sign-up"><Button boxShadow='outlined' colorScheme="linkedin" mt={2}>Sign Up</Button></Link>
                    
                </Flex>
            </Flex>
        </div>
        
    )
}