import { useState } from 'react'
import { Grid, GridItem, HStack, Show} from '@chakra-ui/react'

import './App.css'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GnereLits from './components/GnereLits'
import { Gamequery, Genre, Platform } from './Interfaces/Reuseable'
import PlatformSelector from './components/PlatformSelector'
import SortSelector from './components/SortSelector'

function App() {

  const [gameQuery,setGameQuery]=useState<Gamequery>({} as Gamequery)
  return (
    <>
     <Grid templateAreas={{
      base:`"nav" "main"`,
      lg:`"nav nav" "aside main"`
     }}
     templateColumns={{
      base:'1fr',
      lg:'200px 1fr'
     }}>
      <GridItem area='nav' ><Navbar/></GridItem>
      <Show above="lg">
      <GridItem paddingX={5} area='aside'><GnereLits selectedGenre={gameQuery.genre} onSelectgenre={(genre)=>setGameQuery({...gameQuery,genre})}></GnereLits></GridItem>
      </Show>
      <GridItem area='main' >
        <HStack spacing={5} padding={2} marginBottom={2}>
        <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform)=>setGameQuery({...gameQuery,platform})}/>
        <SortSelector sortOrder={gameQuery.sortOrder} onSelectedSortOrder={(sortOrder)=>setGameQuery({...gameQuery,sortOrder})}/>
        </HStack>
        <GameGrid gameQuery={gameQuery}/></GridItem>
     </Grid>
    </>
  )
}

export default App
