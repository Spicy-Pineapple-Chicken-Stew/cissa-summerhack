import * as React from 'react';
import { Switch } from '@mui/material';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import { useFormControl } from '@mui/material/FormControl';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import OutlinedInput from '@mui/material/OutlinedInput';
import {CustomTextField} from '../Components/CustomTextField';
import { styled } from '@mui/material/styles';
import {FlashcardComponent} from 'react-flashcard';
import {CurrentPageContext} from "../Contexts/CurrentPageContext";
import {useContext} from "react";

export default function MycontentsQuickViewMobile(){
    let [currentPage, setCurrentPage] = useContext(CurrentPageContext);

    const cardData = [
        {
            front: {
                text: "Sample question",
            },
            back: {
                text: "Sample solution",
            }
        }
    ]

    return (
        <div>
            <div>      
                <Box sx =
                {{flexWrap: 'wrap', 
                display:'flex', 
                flexDirection:'column', 
                alignContent: 'flex-start',
                marginLeft: '3%',
                marginTop: '5%'}}>
                    <Typography 
                    sx = {{
                    fontSize:'300%',
                    fontFamily: 'Oxygen',
                    color: 'rgba(22, 105, 122, 1)'
                }} >
                    <Box 
                    sx ={{flexWrap: 'wrap', 
                        display:'flex', 
                        flexDirection:'row'}}>
                    
                    Title</Box>

                </Typography>
                
                <Typography variant='subtitle1'>
                    <Box>
                        Change view: Default
                        <Switch />
                        Detailed
                    </Box>
                </Typography>
                </Box>
            </div>
            <div style ={{margin:'3%', marginTop: '3%'}}>
            
           <Box sx ={{
               position: 'relative',
               flexWrap: 'wrap', 
               display:'flex', 
               flexDirection:'column', 
               alignContent: 'flex-start',
               justifyContent: 'flex-start',
            }}>
            
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    justifyContent: "flex-start",
                    marginLeft: '1%'
                }}>
                <Typography variant='h5' align= "left">Summary</Typography>
            </Box>

            <Box
                sx={{
                    width: '100%',
                    height: 150,
                    marginBottom: '3%',
                    border: '1px solid #489FB5',
                    borderRadius: '4px',
                    flexShrink: 1,
                    '&:hover': {
                        border: '1px solid #16697A',
                        opacity: 0.9,
                    },
                    
                }}>
                <Typography variant='subtitle1'>Text here</Typography>
            </Box>
            
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    justifyContent: "flex-start",
                    marginLeft: '1%'
                }}>
                <Typography variant='h5' align= "left">Flashcards</Typography>
            </Box>

            <Box
                sx={{
                    width: '100%',
                    height: 250,
                    marginBottom: '3%',
                    border: '1px solid #489FB5',
                    borderRadius: '4px',
                    flexShrink: 1,
                    '&:hover': {
                        border: '1px solid #16697A',
                        opacity: 0.9,
                    },
                    
                }}>
                <Typography variant='subtitle1'>Text here</Typography>
            </Box>
            
           

            </Box>
            </div>
        </div>
    )
}