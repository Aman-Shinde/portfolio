import { Box } from "@mui/material";

function SinglePage() {
    const containerWrapperStyle = {
        position: "relative",
        padding: { lg: "48px", md: "32px", sm: "16px", xs: "16px" },
        margin: { lg: "50px 20px", md: "50px 20px", sm: "30px 30px", xs: "30px 30px" },
        height: { lg: "calc(100vh - 100px)", md: "calc(100vh - 100px)", sm: "auto", xs: "auto" },
        maxWidth: "100%"
    };

    const containerStyle = {
        overflowY: "scroll",
        width: {lg: "680px", md: "540px", sm: "100%", xs: "100%"},
        margin: {lg: "0px auto", md: "0px auto", sm: "0px", xs: "0px"},
        height: "100%"
    };

    return (
        <Box sx={containerWrapperStyle}>
            
            <Box sx={containerStyle}>

                <Box>

                    <Box sx={{textAlign: "center", marginBottom: "12px"}}>

                    <p className="lato-black font-size-xl"> Title of the article or blog in short </p>

                    <p className="lato-regular font-size-md"> Lorem ipsum dolor sit amet consectetur adipisicing elit. At, distinctio eos? Explicabo facilis ipsam quisquam reprehenderit qui neque quaerat sed. </p>
                    
                    </Box>

                    <Box sx={{textAlign: "center"}}>

                        <p className="lato-italic font-size-md"> By Aman Shinde </p>

                        <p className="lato-thin font-size-sm"> 12th July 2024 </p>

                    </Box>

                    <Box sx={{marginTop: "48px"}}>

                    <p className="lato-bold font-size-lg"> Lorem ipsum dolor sit amet. </p>

                    <p className="lato-regular font-size-md"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iusto voluptate eveniet voluptates, voluptatum nesciunt illum voluptatibus. Cupiditate, tempora sunt placeat soluta ipsum quibusdam, quod consequatur voluptatibus fuga voluptatem qui, ex inventore iusto architecto est at error dignissimos unde temporibus quidem? Dolor earum neque animi reprehenderit temporibus incidunt at? Id obcaecati incidunt et cum odit officiis, quam quo non laborum suscipit dignissimos, dolorem facere aliquid provident at debitis accusamus esse quidem nobis consequuntur! Architecto repellendus at eum quis explicabo, cupiditate facilis, dignissimos quaerat veniam tenetur, quae itaque quos et perspiciatis? Ipsum architecto nihil possimus at ipsam accusamus voluptatem velit mollitia, tempora asperiores laborum similique consequuntur magni sit molestias non consectetur voluptate tempore iusto. Architecto, iure. Eum, sapiente, ipsam facilis voluptatum maxime provident ipsum animi incidunt inventore error distinctio atque earum delectus natus? Molestias error tempore quis perferendis aliquid libero eius qui ratione saepe incidunt tempora, quibusdam commodi nihil, laborum ab. Illo nemo iste blanditiis iure necessitatibus a quibusdam impedit asperiores? Architecto vel voluptatem aperiam non tempora nulla, porro provident optio qui excepturi accusantium ipsa, pariatur facere numquam omnis dolores ut. Maxime molestiae deleniti ad iure fuga iusto quae, sit eaque voluptas inventore. Rem sed, officiis beatae omnis veniam eaque temporibus. </p>

                    </Box>

                </Box>

            </Box>

        </Box>
    )
}

export default SinglePage
