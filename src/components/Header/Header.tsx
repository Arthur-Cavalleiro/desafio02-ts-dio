import { Box, Center, Text } from '@chakra-ui/react'

export const Header  = () => {
  return(
    <Box fontFamily={'Monocraft'} bgGradient='linear(to-t, #2c1f92, #601f92 )' padding={'10px 0px 10px 0px'} fontSize={'26px'} height={'15dvh'}>
      <Center>
        <Text opacity={'75%'} backgroundColor={'gray'} borderRadius={'10px'} padding={'5px 15px'}>Dio Bank</Text>
      </Center>
    </Box>
  )
}
