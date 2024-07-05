import { Card, CardContent, Button, Box } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function ArticleLinks({links}) {

    const cardStyle = {
        display: 'flex',
        alignItems: 'center',
        borderRadius: "0",
        boxShadow: "none",
        marginBottom: { lg: "0px", md: "0px", sm: "12px", xs: "8px" }
    };

    const contentStyle = {
        flex: 1,
        padding: { lg: "8px", md: "8px", sm: "4px", xs: "4px" },
    };

    const titleStyle = {
        className: "noticia-text-regular font-size-md font-size-md-res",
    };

    const buttonContainerStyle = {
        display: 'flex',
        alignItems: 'center',
    };

    const buttonStyle = {
        color: "white",
        border: "1px solid black",
        borderRadius: "0",
        textTransform: "capitalize",
        backgroundColor: "black",
        padding: { lg: "5px 15px", md: "5px 15px", sm: "4px 8px", xs: "4px 8px" },
        '&:hover': {
            backgroundColor: 'white',
            color: 'black',
            borderColor: 'black',
        },
    };

    const iconStyle = {
        fontSize: "10px !important",
    };

    return (
        <>
        {
            links.map((itemLink,index) => (
                <Card key={index} sx={cardStyle}>
                <CardContent sx={contentStyle}>
                    <p {...titleStyle}>
                        {itemLink.title}
                    </p>
                </CardContent>
                <Box sx={buttonContainerStyle}>
                    <Button
                        variant="outlined"
                        className="font-size-sm font-size-sm-res lato-regular"
                        href={itemLink.link}
                        target="_blank"
                        sx={buttonStyle}
                        endIcon={<OpenInNewIcon sx={iconStyle} />}
                    >
                        Learn More
                    </Button>
                </Box>
            </Card>
            ))
        }
        </>
    )
}

export default ArticleLinks
