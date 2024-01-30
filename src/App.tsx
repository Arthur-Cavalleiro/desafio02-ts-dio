import {
  ChakraProvider,
  Box,
} from '@chakra-ui/react'
import { Card } from './components/Card';
import { Header } from './components/Header/Header';

function App() {
  return (
    <ChakraProvider>
      <Header/>
      <Box fontFamily={'Monocraft'} display={'flex'} justifyContent={'center'} alignItems={'center'} minHeight='85dvh' bgGradient='linear(to-t, #601f92, #2c1f92 )'>
        <Card/>
      </Box>
    </ChakraProvider>
  );
}

export default App;
