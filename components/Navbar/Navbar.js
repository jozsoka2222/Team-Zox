import Link from 'next/link'
import { Button, Flex, Heading, useColorMode, useColorModeValue,Switch , IconButton, Divider } from '@chakra-ui/react'
import {useState} from 'react'
import {HamburgerIcon, CloseIcon , MoonIcon, SunIcon} from '@chakra-ui/icons'
export default function Navbar() {
    const {colorMode,toggleColorMode} = useColorMode()
    const fromBackground = useColorModeValue("gray.100", "gray.700")
    const isDark = colorMode ==='dark'
    const [display, changeDisplay] = useState('none')
    return (
        <Flex
            height="3.5rem" background={fromBackground} p={3.5}
        >
            <Flex 
            pos="fixed"
            top="0,5rem"
            left="1rem"
            align="center"
            m={1}
            >
                <Heading size='md'>Team ZOX</Heading>
            </Flex>
            <Flex
                pos="fixed"
                top="0rem"
                left="10rem"
                align="center"
            >
                <Flex
                display={['none' , 'none' , 'flex' , 'flex']}>
                    <Link href="/" passHref>
                        <Button 
                            as="a"
                            variant="ghost"
                            arial-label="Home"
                            my={2}
                            w="100%"
                        >
                            Home
                        </Button>
                    </Link>
                    <Link href="/forum" passHref>
                        <Button 
                            as="a"
                            variant="ghost"
                            arial-label="Home"
                            my={2}
                            w="100%"
                            onClick={() => changeDisplay('none')}
                        >
                            Forum
                        </Button>
                    </Link>
                </Flex>
            </Flex>
            <Flex pos="fixed"
                top="0rem"
                right="1rem"
                align="center" >
                <Flex
                display={['none' , 'none' , 'flex' , 'flex']}
                >
                    <Link href="/auth/login" passHref>
                        <Button 
                            as="a"
                            variant="ghost"
                            arial-label="Home"
                            my={2}
                            w="100%"
                        >
                            Login
                        </Button>
                    </Link>
                    <Link href="/auth/sign-up" passHref>
                        <Button 
                            as="a"
                            variant="ghost"
                            arial-label="Home"
                            my={2}
                            w="100%"
                        >
                            Sign Up
                        </Button>
                    </Link>
                </Flex>
                <IconButton
                aria-label='Open Menu'
                size="md"
                m={2}
                icon={<HamburgerIcon/>}
                display={['flex' , 'flex' , 'none' , 'none']}
                onClick={() => changeDisplay('flex')}
                />

                <Switch
                m={2}
                color="green"
                isChecked={isDark}
                icon={isDark ? <SunIcon/> : <MoonIcon/>}
                onChange={toggleColorMode}/> 
            </Flex>
            <Flex
                width="100vw"
                bgColor={fromBackground}
                zIndex={20}
                h="100vh"
                pos="fixed"
                top="0"
                left="0"
                overflowY="auto"
                flexDir='column'
                display={display}
            >
                <Flex justify="flex-end">
                    <IconButton
                        mt={2}
                        mr={2}
                        aria-label="Close Menu"
                        size="lg"
                        icon={
                            <CloseIcon />
                        }
                        onClick={() => changeDisplay('none')}
                        />
                </Flex>
                <Flex
                    flexDir='column'
                    align="center"
                >
                    <Link href="/" passHref>
                        <Button 
                            as="a"
                            variant="ghost"
                            arial-label="Home"
                            my={5}
                            w="100%"
                            onClick={() => changeDisplay('none')}
                        >
                            Home
                        </Button>
                    </Link>
                    <Link href="/forum" passHref>
                        <Button 
                            as="a"
                            variant="ghost"
                            arial-label="Home"
                            my={5}
                            w="100%"
                            onClick={() => changeDisplay('none')}
                        >
                            Forum
                        </Button>
                    </Link>
                    <Divider />
                    <Link href="/auth/login" passHref>
                        <Button 
                            as="a"
                            variant="ghost"
                            arial-label="Home"
                            my={5}
                            w="100%"
                            onClick={() => changeDisplay('none')}
                        >
                            Login
                        </Button>
                    </Link>
                    <Divider />
                    <Link href="/auth/sign-up" passHref>
                        <Button 
                            as="a"
                            variant="ghost"
                            arial-label="Home"
                            my={5}
                            w="100%"
                            onClick={() => changeDisplay('none')}
                        >
                            Sign Up
                        </Button>
                    </Link>
                </Flex>
            </Flex>
        </Flex>
    )
}