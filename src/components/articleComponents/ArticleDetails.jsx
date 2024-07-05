import { Box } from "@mui/material"

function ArticleDetails({ title, subtitle, byline, publishedDate }) {
    return (
        <>
            <Box sx={{ textAlign: "center", marginBottom: "12px" }}>

                <p className="noticia-text-bold font-size-xl"> {title} </p>

                <p className="noticia-text-regular font-size-md"> {subtitle} </p>

            </Box>

            <Box sx={{ textAlign: "center" }}>

                <p className="lato-regular font-size-md"> By {byline} </p>

                <p className="lato-regular font-size-sm"> {publishedDate} </p>

            </Box>
        </>
    )
}

export default ArticleDetails
