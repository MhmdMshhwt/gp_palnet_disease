import { Box } from "@mui/material";
import { useTheme } from "../../context/theme-context";
import styles from './style.module.css';
import ImageUpload from "./components/image-upload";
import { useState } from "react";
import ImageModal from "./components/image-upload/modal";

function Home() {
    const { theme } = useTheme();
    const { isModalOpen, setIsModalOpen } = useState(false);

    return (
        <Box
            className = {styles.home}    
            sx={{
                bgcolor: theme.palette.lightgrey.lightgrey400
            }}
        >
            <ImageUpload />
            
        </Box>
    )
};

export default Home;