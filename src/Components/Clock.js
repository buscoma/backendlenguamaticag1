import React,{useState,useEffect}  from "react";
import {TitleH2,TextWhiteShadow} from '../css/BaseStyle'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({TitleH2,TextWhiteShadow});

export default function Clock(props) {
  const classes = useStyles(props);
  const [counter, setCounter] = useState(props.time);
  const [stopTimer, setStopTimer] = useState(props.stopTimer);

  const endTime = () => {
    props.endLevel(false);
  }

  useEffect(() => {counter > 0 ? setTimeout(() => setCounter(counter - 1), 1000):endTime()},[counter]);

  return (
    <div style={{fontSize:'3rem', textAlign:'center'}} >
      <div  className={classes.TitleH2 + ' ' + classes.TextWhiteShadow }  > TIEMPO: {counter}</div>
    </div>
  );
}