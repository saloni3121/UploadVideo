import React from 'react'
import {Grid} from '@material-ui/core'
import Container from '../components/Container'
import {makeStyles, withStyles} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import Button from '../components/Button';
import IconButton from '@material-ui/core/IconButton';

function generate(element) {
    return [0, 1, 2, 3, 4, 5, 6, 7].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }


const useStyles = makeStyles((theme) => ({
    root:{
        fontFamily:'Poppins',
        "&$checked": {
            color: "#1976D2",
            fontFamily:'Poppins',
        },
        maxHeight: '50px',
    },
    checked: {  
        fontSize:'1.1rem',
        fontFamily:'Poppins',
    },
    card:{
        boxShadow:'5px 5px 18px rgb(197, 197, 197)',
        borderRadius:'10px',
        padding: '25px 15px 8px 15px',
        textAlign:'center'
    },
    bold:{
        fontWeight: '600',
        fontFamily: 'Poppins',
        textAlign: 'center',
        fontSize:'1.3rem'
    },
    outputLabel:{
        textAlign:'center',
        fontStyle:'normal',
        fontWeight:'400',
        fontSize:'1.1rem',
        fontFamily: "Poppins",
        paddingTop:'15px'
    },
   
  
}))
function UploadVideo() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    
    return (
        <React.Fragment>
            <Container spacing={'90%'} className={classes.root}>
            <div style={{ fontSize: "30px", fontWeight: "bold", textAlign: 'center', marginTop: '-60px', marginBottom: '35px'}}> TG App </div>
                <Grid container spacing={4}>
                    <Grid item md={4}>
                    <div className={classes.card}>
                        <h5 className={classes.bold}>Upload Video</h5>
                        <hr/>
                      <Button style={{backgroundColor:'#1976D2',color:"white",width: '130px',marginTop:'30px', marginBottom:'20px'}} text="Upload"/>
                    </div>
                    </Grid>
                    <Grid item md={4}>
                    <div className={classes.card}>
                    <h5 className={classes.bold}> Select Music</h5>
                    <hr/>
                    <Grid item xs={12} md={12} style={{textAlign: 'center'}}>
                        <div className={classes.demo}>
                            <List >
                            {generate(
                                <ListItem>
                                <ListItemIcon>
                                <Checkbox 
                                    inputProps={{ 'aria-label': 'secondary uncontrolled-checkbox' }}
                                    classes={{
                                        root: classes.root,
                                        checked: classes.checked
                                    }}
                                />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Lorem ipsum dolor sit amet"
                                    classes={{primary:classes.checked}}
                                />
                                </ListItem>
                            )}
                            </List>
                        </div>
                        {/* </Grid> */}
                    </Grid>
                    </div>
                    </Grid>
                    <Grid item md={4}>
                    <div className={classes.card} style={{textAlign:'left'}}>
                    <h5 className={classes.bold} > Output Video </h5>
                    <hr style={{marginBottom:"30px"}}/>
              
                    <div className='row' style={{marginBottom:'25px'}}>
                        <div className='col-lg-6'>
                            <h6 className={classes.outputLabel}>Output 1 </h6>
                        </div>
                        
                        <div className='col-lg-3' style={{textAlign:'center'}}>
                        <IconButton>
                            <i className="fas fa-share-alt" style={{fontSize:'22px',color:'#2074d4'}} ></i>
                        </IconButton>
                        </div>
                        <div className='col-lg-3' style={{textAlign:'center'}}>
                            <IconButton>
                                <i className="fas fa-download" style={{fontSize:'22px',color:'rgb(48, 48, 48)'}} ></i>
                            </IconButton>
                        </div>  
                    </div>
              
                    <div className='row' style={{marginBottom:'25px'}}>
                        <div className='col-lg-6'>
                            <h6 className={classes.outputLabel}>Output 2 </h6>
                        </div>
                        <div className='col-lg-3' style={{textAlign:'center'}}>
                        <IconButton>
                            <i className="fas fa-share-alt" style={{fontSize:'22px',color:'#2074d4'}} ></i>
                        </IconButton>
                        </div>
                        <div className='col-lg-3' style={{textAlign:'center'}}>
                            <IconButton>
                                <i className="fas fa-download" style={{fontSize:'22px',color:'rgb(48, 48, 48)'}} ></i>
                            </IconButton>
                        </div>  
                    </div>
           
                    <div className='row ' style={{marginBottom:'25px'}}>
                        <div className='col-lg-6'>
                            <h6 className={classes.outputLabel}>Output 3 </h6>
                        </div>
                        <div className='col-lg-3' style={{textAlign:'center'}}>
                        <IconButton>
                            <i className="fas fa-share-alt" style={{fontSize:'22px',color:'#2074d4'}} ></i>
                        </IconButton>
                        </div>
                        <div className='col-lg-3' style={{textAlign:'center'}}>
                            <IconButton>
                                <i className="fas fa-download" style={{fontSize:'22px',color:'rgb(48, 48, 48)'}} ></i>
                            </IconButton>
                        </div>  
                    </div>
                    </div>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}

export default UploadVideo
