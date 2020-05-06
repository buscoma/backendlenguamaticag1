const TitleH1 = {
    /* MOBILE */
    fontSize: '2.5rem',
    padding: '1rem',
    color:'white',
    textShadow: '4px 4px 4px black',
    /* TABLET */
    '@media (min-width: 768px)': {
        fontSize: '6rem',
        padding:'2rem'
    },
}

const ButtomDefualt = {
    /* MOBILE */
    fontSize: '1.5rem',
    padding: '1rem',
    fontWeight:'bold',
     /* TABLET */
    '@media (min-width: 768px)': {
        fontSize: '2rem',
        padding:'2rem'
    },
}

const ContainerCenter = {
     /* MOBILE */
    alignSelf: "strech",
    justifyContent: 'center',
    padding: '2rem',
    backgroundColor: 'rgba(0, 0, 0, .1)',
    display:'flex',
    flexDirection:'column',
     /* TABLET */
    '@media (min-width: 768px)': {
        fontSize: '2rem',
        padding:'2rem',
        
    },
    '@media (min-width: 1000px)': {
        fontSize: '6rem',
        padding:'2rem',
        alignSelf: "Center",
        textAlign:'center',
        display:'init'
    },

    
}

export {
    TitleH1,
    ButtomDefualt,
    ContainerCenter
}