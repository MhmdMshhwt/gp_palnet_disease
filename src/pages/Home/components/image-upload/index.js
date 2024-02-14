import { Box, Button } from "@mui/material";
import styles from "./style.module.css";
import { FileUploadOutlined } from "@mui/icons-material";
import { useTheme } from "../../../../context/theme-context";
const ImageUpload = () => {
    const { theme, darkMode } = useTheme();
      
    return (
        <Box
            className={styles.primarySkills}
            sx={{
                borderColor: theme.palette.lightgrey.lightgrey800,
                background: theme.palette.lightgrey.lightgrey00,
            }}
        >
            <Box className={styles.content}>
                <Box className={styles.uploadPhoto}>
                    <input
                    type="file"
                    accept="image/*"
                    id="imageInput"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                    />
                    <Button
                        variant="text"
                        // onClick={}
                        startIcon={<FileUploadOutlined />}
                        sx={{
                            color: darkMode
                            ? theme.palette.darkgrey.darkgrey300
                            : theme.palette.darkgrey.darkgrey400,
                            textTransform: "capitalize",
                        }}
                    >
                        Upload Plant Image
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};
export default ImageUpload;
