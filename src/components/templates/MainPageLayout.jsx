import { Box, Text, Flex } from "@chakra-ui/react";

import { TodoList } from "../organisms/TodoList";

export const MainPageLayout = (props) => {
    const { headerTitle } = props;
    return (
        <Flex align="center" justify="center">
            <Box bg="white" border="1px" borderColor="gray.200" w="lg" maxW="lg" p={5} alignItems="center">
                <Text align="center" fontSize={35} fontWeight="bold" mb={3}>{headerTitle}</Text>
                <TodoList />
            </Box>
        </Flex>
    );
}