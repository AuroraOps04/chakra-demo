import { toggleCollapsed } from '@/store/features/app/appSlice'
import { Box, Button, HStack, Stack } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'

const Header = () => {
  const dispath = useDispatch()
  return (
    <Stack bg="whiteAlpha.400">
      <HStack h="60px">
        <Box>
          <Button onClick={() => dispath(toggleCollapsed())}>
            toggle sidebar
          </Button>
          this is header
        </Box>
      </HStack>
      {/* tag-view */}
    </Stack>
  )
}

export default Header
