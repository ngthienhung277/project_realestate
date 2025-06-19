import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer, Link as ChakraLink, HStack } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';
import NextLink from "next/link";

const Navbar = () => (
    <Flex p='2' borderBottom='1px' borderColor='gray.100'>
        <Box fontSize='3xl' color='blue.400' fontWeight='bold'>
            <Link href="/" style={{ paddingLeft: "8px" }}>
                Realtor
            </Link>
        </Box>
        <Spacer />
        <Box>
            <Menu>
                <MenuButton as={IconButton} icon={<FcMenu />} variant='outline' color='red.400' />
                <MenuList>
                    <MenuItem as="a" href="/">
                        <HStack spacing={2}>
                            <FcHome />
                            <span>Home</span>
                        </HStack>
                    </MenuItem>

                    <MenuItem as="a" href="/search">
                        <HStack spacing={2}>
                            <BsSearch />
                            <span>Search</span>
                        </HStack>
                    </MenuItem>

                    <MenuItem as="a" href="/search?purpose=for-sale">
                        <HStack spacing={2}>
                            <FcAbout />
                            <span>Buy Property</span>
                        </HStack>
                    </MenuItem>

                    <MenuItem as="a" href="/search?purpose=for-rent">
                        <HStack spacing={2}>
                            <FiKey />
                            <span>Rent Property</span>
                        </HStack>
                    </MenuItem>
                </MenuList>
            </Menu>
        </Box>
    </Flex>
);

export default Navbar;