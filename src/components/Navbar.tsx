import { HStack, Image, Text } from '@chakra-ui/react'

import logo from '../assets/pnghut_chess-rook-download-tree.png'
import ColorModeSwitch from './ColorModeSwitch'

 const Navbar=()=>  {
 
    return (
      <>
      <HStack padding={'10px'} justifyContent={'space-between'}>
        <Image src={logo} boxSize='55px'></Image>
        <ColorModeSwitch/>
      </HStack>
      </>
    )
  
}

export default Navbar
