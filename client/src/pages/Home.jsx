import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import PopularCards from '../components/PopularCards'
import AffordableCard from '../components/AffordableCard'
import CardPoster from '../components/CardPoster'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import PopularCards2 from '../components/PopularCards2'
import AffordableCard2 from '../components/AffordableCard2'
import AffordableCard3 from '../components/AffordableCard3'

const Home = () => {
  return (
    <Box bgColor={"#e9d01d"}>
      <Navbar></Navbar>
      {/* <Carausel></Carausel> */}
      <PopularCards></PopularCards>
      <PopularCards2></PopularCards2>

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