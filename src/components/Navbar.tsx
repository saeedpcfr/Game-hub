import { HStack, Image, Text } from '@chakra-ui/react'

import logo from '../assets/pnghut_chess-rook-download-tree.png'
import ColorModeSwitch from './ColorModeSwitch'
import SearchBox from './SearchBox'

 const Navbar=()=>  {
 
    return (
      <>
      <HStack padding={'10px'} >
        <Image src={logo} boxSize='55px'></Image>
        <SearchBox/>
        <ColorModeSwitch/>
      </HStack>
      </>
    )
  
}

export default Navbar
