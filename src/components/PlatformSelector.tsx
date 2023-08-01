import { Button, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react"
import {BsChevronDown} from 'react-icons/bs'
import {usePlatforms} from "../Hooks/usePlatforms"
import { selectedPlatform } from "../Interfaces/Reuseable";
const PlatformSelector = ({onSelectPlatform,selectedPlatform}:selectedPlatform) => {
    const {data, error}=usePlatforms();
    if(error)
    {
        return null;
    }
  return (
    <>
    
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
            {selectedPlatform?.name || 'Platforms'}
           
        </MenuButton>
        <MenuList>
           {data.map(platform=><MenuItem onClick={()=>onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu></>
  )
}

export default PlatformSelector