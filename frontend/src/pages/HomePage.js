import React, { useEffect } from 'react';
import { Box, Container, Text, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Login from '../components/Authentication/Login';
import Signup from '../components/Authentication/Signup';
import { useHistory } from 'react-router-dom';

const HomePage = () => {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxWidth='xl' centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={3}
        bg="#36393f"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="base"
      >
        <Text fontSize='4xl' fontFamily='Lato' fontWeight='extrabold' color='white'>ATXCORD</Text>
      </Box>
      <Box bg="#36393f" w="100%" borderRadius="base" p={4} >
        <Tabs variant='soft-rounded' colorScheme='blue'>
          <TabList mb='1em'>
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Register</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  )
}

export default HomePage