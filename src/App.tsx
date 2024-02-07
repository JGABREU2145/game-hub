import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Grid
      templateAreas={{
        base: `'nav' 'main'`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GameGrid />
        </GridItem>
        <GridItem area="main">Main</GridItem>
      </Show>
    </Grid>
  );
}

export default App;
