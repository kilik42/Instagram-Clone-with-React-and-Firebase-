import { Box, Container, Flex, Image, VStack } from '@chakra-ui/react'
import React from 'react'
import AuthForm from '../../components/AuthForm/AuthForm'

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"} padding={0}>
        {/* left comments */}

         <Box display={{
          basee: "none", md: "block"
         }}>

          <Image src="/auth.png" 
          alt="phone img"
          h={650}
          />

         </Box>


         {/* right hand side */}
          <VStack spacing={4} alignItems={"stretch"}> 
            <AuthForm >
              <Box>
                Get the app...
              </Box>
              <Flex> 
                <Box> 
                  <Image src="/google.png" alt="google img" />
                </Box>
                <Box> 
                  <Image src="/apple.png" alt="apple img" />
                </Box>

              </Flex>
            </AuthForm>
          </VStack>

      </Container>
    </Flex>
  )
}

export default AuthPage