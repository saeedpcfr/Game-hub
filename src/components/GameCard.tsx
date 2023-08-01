import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react"
import { props } from "../Interfaces/Reuseable"
import Platformicons from "./platformicons"
import Cricticscore from "./Cricticscore"
import getCroppedImageurl from "../Services/imageurl"

const GameCard=({game}:props)=> {

  return (
    <Card >
        <Image src={getCroppedImageurl( game.background_image)}/>
       <CardBody>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
        <HStack justifyContent='space-between'>
        <Platformicons platforms={game.parent_platforms.map(p=>p.platform)}/>
        <Cricticscore score={game.metacritic}/>

        </HStack>
       
       </CardBody>
    </Card>
  )

}

export default GameCard