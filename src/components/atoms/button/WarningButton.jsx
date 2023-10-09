import { memo } from "react";
import { Button } from "@chakra-ui/react";

export const WarningButton = memo((props) => {
    const { children, onClick } = props;
    return (
        <Button colorScheme="red" onClick={onClick} >{children}</Button>
    );
});