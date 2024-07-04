import React from 'react';
import { Card, CardContent, Button, Box } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const cardStyle = {
  display: 'flex',
  alignItems: 'center',
  borderRadius: "0",
  boxShadow: "none",
  marginBottom: {lg: "0px", md: "0px", sm: "12px", xs: "8px"}
};

const contentStyle = {
  flex: 1,
  padding: { lg: "16px", md: "16px", sm: "8px", xs: "8px" },
};

const dateContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  mb: 1,
};

const dateIconStyle = {
  mr: 1,
  fontSize: { lg: "16px", md: "16px", sm: "8px", xs: "8px" },
};

const titleStyle = {
  className: "lato-regular font-size-md font-size-md-res",
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

const BlogCard = ({ date, title, link }) => {
  return (
    <Card sx={cardStyle}>
      <CardContent sx={contentStyle}>
        <Box sx={dateContainerStyle}>
          <CalendarTodayIcon sx={dateIconStyle} />
          <p {...titleStyle} className="lato-light font-size-sm font-size-sm-res">
            {date}
          </p>
        </Box>
        <p {...titleStyle}>
          {title}
        </p>
      </CardContent>
      <Box sx={buttonContainerStyle}>
        <Button 
          variant="outlined" 
          className="font-size-sm font-size-sm-res lato-regular"
          href={link} 
          target="_blank"
          sx={buttonStyle}
          endIcon={<OpenInNewIcon sx={iconStyle} />}
        >
          Learn More
        </Button>
      </Box>
    </Card>
  );
};

export default BlogCard;