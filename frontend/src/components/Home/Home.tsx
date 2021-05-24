import { Box, Flex, Image, Text, SimpleGrid, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { primaryButtonStyleProps } from "../../utils";

function Home() {
  return (
    <>
      <SimpleGrid columns={[1, 2, 2]} gap={4}>
        <Flex
          direction={"column"}
          textAlign={"center"}
          justify={"center"}
          pt={[6, 0]}
          ml={{ md: 8 }}
          fontSize={"x-large"}
        >
          <Text>Do you know what healthy diet is?</Text>
          <Text>Test your knowledge by taking one of the quizzes below</Text>
          <Link to="/quizzes">
            <Button {...primaryButtonStyleProps} maxW={"min"} mt={3}>
              Trending Quizzes
            </Button>
          </Link>
        </Flex>
        <Box>
          <Image
            src="https://cdn-apabk.nitrocdn.com/QQUvjmPGpOGmpUxCkqAsSnVUjfEULAuk/assets/static/optimized/rev-9b34b5b/wp-content/uploads/2020/09/Food-Trivia-e1609813180214.jpg"
            alt="hero"
            height={{ base: "auto", md: "60vh" }}
            width="100%"
          />
        </Box>
      </SimpleGrid>
    </>
  );
}

export default Home;
