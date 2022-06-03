import React from 'react'
import TimelineTwoToneIcon from '@mui/icons-material/TimelineTwoTone';
import ArrowDropUpTwoToneIcon from '@mui/icons-material/ArrowDropUpTwoTone';
import {Paper , Box, Container} from '@mui/material'

const CardDashboard = ({content, text}) => {
  return (
    <>
        <Paper elevation={3} sx={{display:"flex",justifyContent: "center", alignItems: "center", width:"300px", height:"200px", color:"white", backgroundColor:"#2984F3", borderRadius:"25px"}}>
            <Container maxWidth="md">
                        <Box sx={{display:"flex",justifyContent: "center", alignItems: "center"}}>
                            <TimelineTwoToneIcon style={{marginRight:"10px"}}/>
                            <h1 style={{fontSize:"2.5em"}}>{content}</h1>
                        </Box>
                        <Box sx={{display:"flex",justifyContent: "center", alignItems: "center"}}>
                            <h3>{text}</h3>
                        </Box>
            </Container>         
        </Paper>
    </>
  )
}

export default CardDashboard