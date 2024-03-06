import React, { useState } from "react";
import { Box, Heading, Input, Button, List, ListItem, ListIcon, VStack, HStack, IconButton, useToast } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const toast = useToast();

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleAddTodo = () => {
    if (inputValue.trim() === "") {
      toast({
        title: "No content",
        description: "Todo can't be empty",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <VStack p={8}>
      <Heading mb={6}>Todo App</Heading>
      <HStack>
        <Input placeholder="Add a new task..." value={inputValue} onChange={handleInputChange} />
        <IconButton icon={<FaPlus />} onClick={handleAddTodo} colorScheme="blue" aria-label="Add todo" />
      </HStack>
      <Box w="100%">
        <List spacing={3}>
          {todos.map((todo, index) => (
            <ListItem key={index} d="flex" justifyContent="space-between" alignItems="center">
              <Box>{todo}</Box>
              <IconButton icon={<FaTrash />} onClick={() => handleDeleteTodo(index)} colorScheme="red" aria-label="Delete todo" />
            </ListItem>
          ))}
        </List>
      </Box>
    </VStack>
  );
};

export default Index;
