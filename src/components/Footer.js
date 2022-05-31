import { makeStyles } from '@mui/styles';

const usStyles = makeStyles(theme => ({


}));

export default function Footer() {
    const classes = useStyles();

    return (
        <div style={{
            background: "black",
            color: "white",
            height: "200px",
            paddingTop: "10px",
            paddingBottom: "20px",
            textAlign: "center"
        }}>
            ShoreCustomCornhole@gmail.com 

        </div>
    )

}