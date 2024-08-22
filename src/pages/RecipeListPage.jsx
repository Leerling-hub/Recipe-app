import React, { useState } from "react";
import { Box, Image, Text, SimpleGrid, Input } from "@chakra-ui/react";
import data from "../utils/data"; // Make sure to import your data
import { useNavigate } from "react-router-dom";

const RecipeListPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredRecipes = data.hits.filter((hit) =>
    hit.recipe.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectRecipe = (recipe) => {
    navigate(`/recipe/${recipe.label}`, { state: { recipe } });
  };

  return (
    <Box
      p="6"
      backgroundColor="lightblue"
      color="black"
      maxWidth="1200px"
      mx="auto"
    >
      <Text fontSize="2xl" fontWeight="bold" mb={4} textAlign="center">
        Mama&#39;s Recipe Check
      </Text>
      <Input
        placeholder="Search recipes"
        mb={4}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        backgroundColor="white" // Ensures the input remains readable
        color="black"
      />
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={10}>
        {filteredRecipes.map((hit) => (
          <Box
            key={hit.recipe.label}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            onClick={() => handleSelectRecipe(hit.recipe)}
            backgroundColor="white"
            color="black"
          >
            <Image
              src={hit.recipe.image}
              alt={hit.recipe.label}
              width="100%"
              height="200px"
              objectFit="cover"
            />
            <Box p="6">
              <Text fontSize="xl" fontWeight="bold" mb={2}>
                {hit.recipe.label}
              </Text>
              <Box backgroundColor="yellow.200" mb={2}>
                <Text>Diet label: {hit.recipe.dietLabels.join(", ")}</Text>
              </Box>
              <Box backgroundColor="red.200" mb={2}>
                <Text>Cautions: {hit.recipe.cautions.join(", ")}</Text>
              </Box>
              <Box backgroundColor="green.200" mb={2}>
                <Text>Meal type: {hit.recipe.mealType.join(", ")}</Text>
              </Box>
              <Box backgroundColor="purple.200" mb={2}>
                <Text>Dish type: {hit.recipe.dishType.join(", ")}</Text>
              </Box>
              {hit.recipe.healthLabels.includes("Vegetarian") && (
                <Box backgroundColor="orange.200" mb={2}>
                  <Text>Vegetarian</Text>
                </Box>
              )}
              {hit.recipe.healthLabels.includes("Vegan") && (
                <Box backgroundColor="pink.200" mb={2}>
                  <Text>Vegan</Text>
                </Box>
              )}
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default RecipeListPage;
