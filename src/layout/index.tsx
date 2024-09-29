import { HStack, Stack } from '@chakra-ui/react'
import Sidebar from './sidebar'
import Header from './header'
import Main from './main'

const Layout = () => {
  return (
    <HStack height="100vh" gap={0}>
      <Sidebar />
      <Stack flex={1} gap={0} h="100%" justifyContent={'flex-start'}>
        <Header />
        <Main />
      </Stack>
    </HStack>
  )
}
export default Layout
