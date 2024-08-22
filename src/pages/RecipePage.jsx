import React from "react";
import { Box, Image, Text, Button, Flex } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";

const RecipePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { recipe } = location.state;

  return (
    <Box
      p="6"
      backgroundColor="lightblue"
      color="black"
      maxWidth="1200px"
      mx="auto"
    >
      <Button onClick={() => navigate(-1)} mb={4} colorScheme="teal">
        Back
      </Button>
      <Text fontSize="2xl" fontWeight="bold" mb={4} textAlign="center">
        {recipe.label}
      </Text>
      <Image
        src={recipe.image}
        alt={recipe.label}
        width="100%"
        height="200px"
        objectFit="cover"
        mb={4}
      />
      <Box mb={4}>
        <Text fontSize="lg" fontWeight="bold">
          Category: {recipe.mealType.join(", ")}
        </Text>
      </Box>
      <Box mb={4}>
        <Text fontSize="lg" fontWeight="bold">
          Total cooking time: {recipe.totalTime} Minutes
        </Text>
      </Box>
      <Box mb={4}>
        <Text fontSize="lg" fontWeight="bold">
          Servings: {recipe.yield}
        </Text>
      </Box>
      <Flex mb={4} direction={{ base: "column", md: "row" }}>
        <Box flex="1" mb={{ base: 4, md: 0 }}>
          <Text fontSize="lg" fontWeight="bold">
            Ingredients:
          </Text>
          <ul>
            {recipe.ingredientLines.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </Box>
        <Box flex="1" ml={{ base: 0, md: 4 }}>
          <Text fontSize="lg" fontWeight="bold">
            Health labels:
          </Text>
          <Box>
            {recipe.healthLabels.map((label, index) => (
              <Text
                key={index}
                display="inline-block"
                backgroundColor="yellow.200"
                p={1}
                m={1}
                borderRadius="md"
              >
                {label}
              </Text>
            ))}
          </Box>
        </Box>
        <Box flex="1" ml={{ base: 0, md: 4 }}>
          <Text fontSize="lg" fontWeight="bold">
            Cautions:
          </Text>
          <Box>
            {recipe.cautions.map((caution, index) => (
              <Text
                key={index}
                display="inline-block"
                backgroundColor="red.200"
                p={1}
                m={1}
                borderRadius="md"
              >
                {caution}
              </Text>
            ))}
          </Box>
        </Box>
      </Flex>
      <Box mb={4}>
        <Text fontSize="lg" fontWeight="bold">
          Total nutritional values:
        </Text>
        <Box>
          <Text>
            Calories: {recipe.totalNutrients.ENERC_KCAL.quantity}{" "}
            {recipe.totalNutrients.ENERC_KCAL.unit}
          </Text>
          <Text>
            Carbohydrates: {recipe.totalNutrients.CHOCDF.quantity}{" "}
            {recipe.totalNutrients.CHOCDF.unit}
          </Text>
          <Text>
            Proteins: {recipe.totalNutrients.PROCNT.quantity}{" "}
            {recipe.totalNutrients.PROCNT.unit}
          </Text>
          <Text>
            Fats: {recipe.totalNutrients.FAT.quantity}{" "}
            {recipe.totalNutrients.FAT.unit}
          </Text>
          <Text>
            Cholesterol: {recipe.totalNutrients.CHOLE.quantity}{" "}
            {recipe.totalNutrients.CHOLE.unit}
          </Text>
          <Text>
            Sodium: {recipe.totalNutrients.NA.quantity}{" "}
            {recipe.totalNutrients.NA.unit}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default RecipePage;
