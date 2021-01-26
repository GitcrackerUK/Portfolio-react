import ChatButtonLarge1px from 'img/ChatButtonLarge1px.svg'
import axios from 'axios'
import WhiteMessage from './WhiteMSG'
import BlueMessage from './BlueMSG'
import Input from './Input.jsx'
import { SvgLoader } from 'react-svgmt'
import React,{useState} from "react"
import styled,{css} from 'styled-components'
const parseString = require('xml2js').parseString;

const Button = styled(SvgLoader)`
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2);
:hover{
transition:width 0.4s;
width:73px;
}
padding:0px;
margin:0px;
`
const Wrapper = styled.div`
display:flex;
@media(max-width:1000px){
display:none;
}
${p=>p.open?css`
position:absolute;
top:280px;
right:0px;
`:css`
position:absolute;
top:280px;
right:0px;`}
`

const Window = styled.div`
${p=>p.open?css`display:block;`:css`display:none;`};
width:250px;
height:400px;
background-color:white;
`
const ChatWrapper = styled.div`
overflow-y:auto;
height:242px;
width:100%;
padding-top:7px;
`
export default function Chat({...props}){
    const [open, setOpen]= useState(false)
    const [formInput, setInput] = useState('');
    const [chat, setChat] = useState([]);

    function HandleClick(){
        setOpen(p=>p=!p)
    };
    function toBottom() {
        const wrapper = document.getElementById("wrapper");
        console.log(wrapper);
        if (wrapper.scrollHeight !== null) { return wrapper.scrollTop = wrapper.scrollHeight - wrapper.clientHeight }
        else { return };
    }
    function Submit(e) {
        e.preventDefault();
        setChat(prevState => {
            return ([...prevState, {
                user: true,
                text: formInput,
            }])
        })

        axios.get(`https://www.botlibre.com/rest/api/form-chat?&application=4120366723131427615&instance=165&message=${formInput}`)
            .then((r) => {
                parseString(r.data, (err, result) => {
                    setChat(prevState => {
                        return [...prevState, {
                            user: false,
                            text: result.response.message[0],
                        }]

                    })
                });
                toBottom()
            }
            )
        document.getElementById("field").reset();
        toBottom();
    }
    function handleChange(e) {
        setInput(e.target.value)
    }


  
    return(
        <Wrapper  open={open} >
            <Button onClick={HandleClick} path={ChatButtonLarge1px}></Button>

            <Window  open={open} >
                <ChatWrapper id="wrapper">
                {
                    chat.map((p) => {
                        return p.user ? <WhiteMessage>{p.text}</WhiteMessage> : <BlueMessage>{p.text}</BlueMessage>
                    })
                }
                </ChatWrapper>
               
                <form id="field" onSubmit={(e) => { Submit(e) }} onChange={(e) => handleChange(e)}>
                    <Input label="Chat" placeholder="Input text" underText="Type in whatever you like"  ></Input>
                </form>
            </Window>
     
        </Wrapper>
    )
}