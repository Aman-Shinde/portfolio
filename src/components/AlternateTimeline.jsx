import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const Timeline = styled(Box)(({ theme }) => ({
    position: 'relative',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '24px 0',
    '&::before': {
        content: '""',
        position: 'absolute',
        width: '2px',
        backgroundColor: 'black',
        top: 0,
        bottom: 0,
        left: '50%',
        marginLeft: '-3px',
        [theme.breakpoints.down('sm')]: {
            left: '30px',
        },
    },
}));

const TimelineItem = styled(Box)(({ theme }) => ({
    padding: '10px 24px',
    position: 'relative',
    backgroundColor: 'inherit',
    width: '50%',
    '&.left': {
        left: 0,
    },
    '&.right': {
        left: '50%',
    },
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        paddingLeft: '48px',
        paddingRight: '0px',
        '&.right': {
            left: 0,
        },
    },
}));

const TimelineSeparator = styled(Box)(({ theme }) => ({
    position: 'absolute',
    width: '100%',
    left: '50%',
    textAlign: 'center',
    transform: 'translateX(-50%)',
    [theme.breakpoints.down('sm')]: {
        left: '30px',
        transform: 'none',
        textAlign: 'left',
    },
}));

const TimelineContent = styled(Box)(({ theme }) => ({
    padding: '12px 16px',
    backgroundColor: 'white',
    position: 'relative',
    border: '1px solid black',
}));

export default function AlternateTimeline() {
    return (
        <Timeline>
            <TimelineItem className="left">
                <TimelineSeparator />
                <TimelineContent>
                    <p className="lato-light font-size-md" style={{ marginBottom: "12px" }}><b> 2023 </b></p>
                    <p className="lato-light font-size-md" style={{ marginBottom: "4px" }}> System Engineer </p>
                    <p className="lato-light font-size-md"> Tata Consultancy Services, Pune </p>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem className="right">
                <TimelineSeparator />
                <TimelineContent>
                    <p className="lato-light font-size-md" style={{ marginBottom: "12px" }}><b> 2022 </b></p>
                    <p className="lato-light font-size-md" style={{ marginBottom: "4px" }}> Assistant System Engineer </p>
                    <p className="lato-light font-size-md"> Tata Consultancy Services, Pune </p>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem className="left">
                <TimelineSeparator />
                <TimelineContent>
                    <p className="lato-light font-size-md" style={{ marginBottom: "12px" }}><b> 2021 </b></p>
                    <p className="lato-light font-size-md" style={{ marginBottom: "4px" }}> Assistant System Engineer Trainee </p>
                    <p className="lato-light font-size-md"> Tata Consultancy Services, Pune </p>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem className="right">
                <TimelineSeparator />
                <TimelineContent>
                    <p className="lato-light font-size-md" style={{ marginBottom: "12px" }}><b> 2021 </b></p>
                    <p className="lato-light font-size-md" style={{ marginBottom: "4px" }}> Graduation Completed </p>
                    <p className="lato-light font-size-md"> International Institute Of Information Technology, Pune </p>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem className="left">
                <TimelineSeparator />
                <TimelineContent>
                    <p className="lato-light font-size-md" style={{ marginBottom: "12px" }}><b> 2017 </b></p>
                    <p className="lato-light font-size-md" style={{ marginBottom: "4px" }}> Completed Class XII </p>
                    <p className="lato-light font-size-md"> Aabasaheb Garware College, Pune </p>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem className="right">
                <TimelineSeparator />
                <TimelineContent>
                    <p className="lato-light font-size-md" style={{ marginBottom: "12px" }}><b> 2014 </b></p>
                    <p className="lato-light font-size-md" style={{ marginBottom: "4px" }}> Completed Class X </p>
                    <p className="lato-light font-size-md"> S. N. R. Highschool, Indapur, Pune </p>
                </TimelineContent>
            </TimelineItem>

        </Timeline>
    );
}
