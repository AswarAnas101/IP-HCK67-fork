import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import PopularCards from '../components/PopularCards'
import AffordableCard from '../components/AffordableCard'
import CardPoster from '../components/CardPoster'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import AffordableCard2 from '../components/AffordableCard2'
import AffordableCard3 from '../components/AffordableCard3'

const Home = () => {
  return (
    <Box bgColor={"#f1df5c"}>
      <Navbar></Navbar>
      {/* <Carausel></Carausel> */}
      <PopularCards></PopularCards>

      <CardPoster></CardPoster>
      <Flex justifyContent={"center"}>
        <AffordableCard3></AffordableCard3>
        <AffordableCard2></AffordableCard2>
        <AffordableCard></AffordableCard>
      </Flex>
      <Footer></Footer>
    </Box>
  );
}

export default Home