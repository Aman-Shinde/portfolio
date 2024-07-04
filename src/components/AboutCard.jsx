import { Box, Stack } from '@mui/material';

const containerStyle = {
  border: '1px solid black',
  width: '40%',
  margin: '20px auto',
};

const contentStyle = {
  margin: '12px auto',
  width: '90%',
  padding: '4px',
};

const stackContainerStyle = {
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
};

function AboutCard({ item }) {
  return (
    <Box sx={containerStyle}>
      <Box sx={contentStyle}>
        <Stack sx={stackContainerStyle}>
          <p className="lato-bold font-size-xl">{item.title}</p>
          <p className="lato-regular font-size-md font-size-md-res">{item.description}</p>
        </Stack>
      </Box>
    </Box>
  );
}

export default AboutCard;
