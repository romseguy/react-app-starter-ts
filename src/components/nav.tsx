//import { signIn, signOut, useSession } from "next-auth/react";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
	Button,
	Box,
	Icon,
	Text,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	useColorMode,
	Avatar,
	HStack,
	VStack,
} from "@chakra-ui/react";

import { styled } from "@emotion/styled";

import md5 from "blueimp-md5";

import React from "react";
import { useSession } from "utils/hooks/useSession";

const MenuItems = ({ children }: any) => {
	const W = styled(Text)`
    a {
      margin-right: 12px;
    }
  `;
	return (
		<W mt={{ base: 4, md: 0 }} mr={6} display="block">
			{children}
		</W>
	);
};

const LoginButton = (props: any) => {
	return (
		<Button
			bg="transparent"
			border="1px"
			onClick={(e: any) => {
				e.preventDefault();
				//signIn();
			}}
			{...props}
		>
			Login
		</Button>
	);
};

export const Nav = (props: any) => {
	const { data: session, loading } = useSession();
	const { colorMode, toggleColorMode } = useColorMode();
	const [show, setShow] = React.useState(false);
	const handleToggle = () => setShow(!show);

	return (
		<HStack as="nav" p={10} justifyContent="space-between" {...props}>
			<HStack>
				<VStack>
					<HamburgerIcon onClick={handleToggle} />

					<Icon
						as={colorMode === "light" ? MoonIcon : SunIcon}
						onClick={toggleColorMode}
					/>
				</VStack>

				<Menu>
					<MenuButton mr={10}>
						<Avatar
							src={
								session
									? session.user.image ||
										`https://www.gravatar.com/avatar/${md5(
											session.user.email,
										)}?d=identicon`
									: undefined
							}
							size="md"
						/>
					</MenuButton>

					<MenuList border={0} p={0}>
						<MenuItem>Settings</MenuItem>
						{session && (
							<MenuItem
								onClick={() => {
									//signOut()
								}}
							>
								Logout
							</MenuItem>
						)}
					</MenuList>
				</Menu>
			</HStack>

			{/* <Box
        display={{ sm: show ? "block" : "block", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        ml={10}
      >
        {session && (
          <MenuItems>
            <Link href="/profiles">Profiles</Link>
          </MenuItems>
        )}
      </Box> */}

			{!session && (
				<Box
					display={{ sm: show ? "block" : "block", md: "block" }}
					mt={{ base: 4, md: 0 }}
				>
					<LoginButton />
				</Box>
			)}
		</HStack>
	);
};
