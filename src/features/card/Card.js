import React, { useEffect } from "react";
import { Box, Button, Card, CardContent, IconButton, Link, Typography } from "@mui/material";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useSelector, useDispatch } from "react-redux";
import { EstablerNumeroAleatorio, selectAuthor, selectCarga, selectColor, selectMensaje } from "./CardSlice";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import './Card.css';
import { fetchData } from "./CardActions";

 


function Tarjeta() {

  const dispatch = useDispatch();
  const mensajeM = useSelector(selectMensaje);
  const author = useSelector(selectAuthor);
  const colorAlt = useSelector(selectColor);
  const carguita = useSelector(selectCarga);

  const newMensaje = () => {
    dispatch(EstablerNumeroAleatorio());
  } 

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  

  const handleFetchData = () => {
  
    dispatch(fetchData());
    
  };

  const colorpru = 'white';

  return (
    <Box height='100vh' display='flex'  
    sx={{background: colorAlt, transitionTimingFunction: 'linear', 
        transitionDuration: '500ms'}}>
      <Box margin='auto' padding={1} display='flex' flexDirection='column' alignItems='center'>
        <Card boxShadow={"5px 5px 10px #ccc"}
          sx={{
            padding: '3px 3px 0px 3px', maxWidth: 555, ":hover": {
              boxShadow: '10px 10px 20px #ccc'
            }
          }}>
          <CardContent>
            
              <Typography  sx={{color: colorAlt, transitionTimingFunction: 'step-end',
                transitionDuration: '4000ms'}} variant="h4" component="div" textAlign='center'>
                
                <FormatQuoteIcon sx={{transform: 'scale(2.5) rotate(180deg)', marginRight: 1.5}} />
              
                {mensajeM}
              </Typography>
            
            <Box display='flex' alignItems='center' justifyContent='center' marginTop={2}>
              <Box paddingTop={0.5} marginLeft='auto' sx={{color: colorAlt, transitionTimingFunction: 'step-end', 
              transitionDuration: '3000ms'}}>{author && <ArrowRightIcon />}</Box>
              
              <Typography sx={{color: colorAlt, transitionTimingFunction: 'step-end', 
              transitionDuration: '3500ms'}} 
                marginLeft={0} >
                
                {author}
              </Typography>
            </Box>
            <Box gap={2} display='flex' alignItems='center' justifyContent='space-between' marginTop={2}>
              <Box display='flex' gap={1}>
                <Link href="https://github.com/">
                  <IconButton sx={{ backgroundColor: colorAlt, transitionTimingFunction: 'step-end',
                    transitionDuration: '1500ms', color:'white' , ":hover": {
                    color: colorAlt, transitionDuration: '0ms'
                    }}}>
                    <GitHubIcon />
                    </IconButton>
                </Link>
                <Link href="https://twitter.com/">
                  <IconButton sx={{ backgroundColor: colorAlt, transitionTimingFunction: 'step-end', 
                                transitionDuration: '2000ms', color:'white' , ":hover": {
                    color: colorAlt, transitionDuration: '0ms'
                    }}}>
                    <TwitterIcon  />
                  </IconButton>
                </Link>
              </Box>
              <Box>
                <Button style={{background: colorAlt, transitionTimingFunction: 'step-end', 
              transitionDuration: '2500ms'}} color='secondary' 
              onClick={carguita ? newMensaje : handleFetchData}
               variant="contained">
                  <Typography>New Mensaje</Typography>
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
        <Link sx={{textDecorationLine: 'none'}} variant="h1" marginTop={2} href="https://github.com/samuelpklm">
          <Typography variant="h6" sx={{color: 'white'}}>
            By Samuel!!!
          </Typography>
        </Link>
      </Box>
      
    </Box>);
}

export default Tarjeta;