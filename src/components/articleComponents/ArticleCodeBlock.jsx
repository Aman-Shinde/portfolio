import { Box } from "@mui/material";

function ArticleCodeBlock({ code }) {
    return (
        <Box
            sx={{
                backgroundColor: '#f5f5f5',
                overflow: "auto",
                padding: { lg: '8px 16px', md: "8px 12px", sm: "4px 8px", xs: "4px 8px" },
                marginTop: '48px'
            }}
        >
            <pre className="source-code-pro-regular font-size-md" style={{ margin: 0 }}>
                {code}
            </pre>

        </Box>
    )
}

export default ArticleCodeBlock
