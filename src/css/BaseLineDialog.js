
const paperScrollPaper = {
    maxHeight:'unset',
    height:'100%',
    width:'100vw',
    overflow:'hidden'
};

const paper = {
    margin:'0px',
    display:'flex',justifyContent:'center'

};

const logoClose = {
    height: '3vh',
    width: '3vw'
};

const logo = {
    height: '25vh',
    width: '25vw'
};

const input ={
    fontSize: '4rem',
}

const buttom ={
    fontSize: '1.5rem',
    padding: '1rem',
    fontWeight:'bold',
     /* TABLET */
     '@media (min-width: 1024px)': {
        fontSize: '1rem',
        padding:'1rem'
    },
}
export {
    paperScrollPaper,
    paper,
    logoClose,
    logo,
    buttom,
    input
}