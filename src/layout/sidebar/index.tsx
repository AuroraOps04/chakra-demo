import { routes } from '@/route'
import { sidebarWidth } from '@/store/features/app/appSlice'
import { Box } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import MenuItem from './MenuItem'

const Sidebar = () => {
  const width = useSelector(sidebarWidth)
  return (
    <Box bg="slate.600" h="100%" color="whiteAlpha.800" w={width}>
      {routes.map(route => {
        return <MenuItem level={1} key="route.name" text={route.name} />
      })}
    </Box>
  )
}

export default Sidebar
