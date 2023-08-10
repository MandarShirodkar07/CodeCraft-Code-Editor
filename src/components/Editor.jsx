import {useState} from 'react';

import { Box , Container, styled} from '@mui/material';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

import {Controlled as ControlledEditor} from 'react-codemirror2';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import '../App.css';

const Container1 = styled(Box)`
   
    flex-Grow:1;
   flex-basics:0
   display:flex;
   flex-direction:colums;
  
`;


const Heading = styled(Box)`
    background:#1d1e22;
    display: flex;
    padding: 9px 12px;
    
`;

const Header = styled(Box)`
    display: flex;
    background: #060606;
    color: #AAAEBC;
    justify-content: space-between;
    font-weight:700;
`
   



const Editor = ({heading ,icon,color,value,onChange}) => {

    const [open,setOpen] = useState(true);

    const handleChange = (editor,data,value) => {
       onChange(value);
    }

    return(
       <Container1 style={ open ? null : {flexGrow: 0}}>
        <Header>
            <Heading>
                <Box
                    component="span"
                    style={{
                        background: color,
                        height: 20,
                        width:20,
                        display: 'flex',
                        placeContent: 'center',
                        borderRadius: 5,
                        marginRight: 5,
                        paddingBottom:2,
                        color:'#000'

                    }}
                >{icon}</Box>
                {heading}
            </Heading>
            <CloseFullscreenIcon 
                 onClick={ () => setOpen(prevState => !prevState)}
                 fontSize="small"
                 style={{alignSelf: 'center'}}
            />
        </Header>
        
        <ControlledEditor 
            className='controlled-editor'
            value={value}
            onBeforeChange={handleChange}
            options={{
                theme:'material',
                lineNumbers:true
            }}
        />
        
       </Container1>
    )
}

export default Editor;