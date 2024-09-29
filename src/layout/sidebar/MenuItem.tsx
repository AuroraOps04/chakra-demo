import { Box, Center, useToken } from '@chakra-ui/react'
import { FC } from 'react'
import { Icon } from '@iconify-icon/react'

type Props = {
  level: number
  icon?: string
  text: string
}
const MenuItem: FC<Props> = ({ text, level, icon }) => {
  const indent = level * 20 + 'px'
  const [slate500] = useToken('colors', ['slate.500'])
  return (
    <Box
      _hover={{
        bg: 'slate.700',
      }}
      display={'flex'}
      alignItems="center"
      justifyContent={'space-between'}
      cursor="pointer"
      h="60px"
      pl={indent}
      pr="20px"
    >
      <Center>
        {icon && (
          <Icon
            style={{ fontSize: '24px', marginRight: '20px' }}
            icon="mdi:home"
          />
        )}
        <p>{text}</p>
      </Center>
      <Icon
        style={{ fontSize: '18px', color: slate500 }}
        icon="mdi:chevron-down"
      />
    </Box>
  )
}

export default MenuItem
