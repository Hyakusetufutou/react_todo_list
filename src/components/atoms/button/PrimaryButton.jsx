import { memo } from "react";
import { Button } from "@chakra-ui/react";

export const PrimaryButton = memo((props) => {
    const { children, onClick } = props;
    return (
        <Button colorScheme="blue" onClick={onClick}>{children}</Button>
    );
});