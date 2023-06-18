
import { styled } from "@mui/material";

const Logo=styled('img')({
    width:'100px',
    padding:'5px'
})


const Header=()=>{

    const logo = 'https://miro.medium.com/max/802/1*dLWPk_rziSpWhPx1UWONbQ@2x.png';

    return(
        <>
        <Logo src={logo} alt="logo" />
        </>
    )
}

export default Header;