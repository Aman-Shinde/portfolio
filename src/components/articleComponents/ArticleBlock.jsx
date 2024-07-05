import { Box } from "@mui/material"

function ArticleBlock({children}) {
    return (
        <Box sx={{ marginTop: "48px" }}>
            {children}
        </Box>
    )
}

export default ArticleBlock
