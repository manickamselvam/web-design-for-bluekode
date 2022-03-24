import React from 'react'
import './Price.css';
import { Alarm } from '@mui/icons-material';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const Price = () => {
    const classes = useStyles();
    return (
        <>
            <div className='button-group'>
                <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
            </div>
            <div className='cards'>
                <div className='card'>
                    <Alarm className='icon' />
                    <h3 className='card-padding'>Book now</h3>
                    <h1 className='card-padding2'>&#36; 1230/-</h1>
                    <p className='card-padding2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate a
                        pariatur ab distinctio? Quam, sint maxime. Totam veritatis ut hic cum iure quasi
                        voluptatibus provident. Repudiandae laudantium nesciunt exercitationem commodi.
                    </p>
                    <p className='button1'>Get started &rarr;</p>
                </div>

                <div className='card'>
                    <Alarm className='icon' />
                    <h3 className='card-padding'>Book now</h3>
                    <h1 className='card-padding2'>&#36; 1230/-</h1>
                    <p className='card-padding2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate a
                        pariatur ab distinctio? Quam, sint maxime. Totam veritatis ut hic cum iure quasi
                        voluptatibus provident. Repudiandae laudantium nesciunt exercitationem commodi.
                    </p>
                    <p className='button1'>Get started &rarr;</p>
                </div>

                <div className='card'>
                    <Alarm className='icon' />
                    <h3 className='card-padding'>Book now</h3>
                    <h1 className='card-padding2'>&#36; 1230/-</h1>
                    <p className='card-padding2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate a
                        pariatur ab distinctio? Quam, sint maxime. Totam veritatis ut hic cum iure quasi
                        voluptatibus provident. Repudiandae laudantium nesciunt exercitationem commodi.
                    </p>
                    <p className='button1'>Get started &rarr;</p>
                </div>
            </div>
            <div className='road-map'>
                <div className='road-map-item'>
                    <div> <Alarm className='icon2' /></div>
                    <h3>Cost Efficient</h3>
                    <p>Registration process</p>
                </div>
                <div className='road-map-item'>
                    <div> <Alarm className='icon2' /></div>
                    <h3>Cost Efficient</h3>
                    <p>Registration process</p>
                </div>
                <div className='road-map-item'>
                    <div> <Alarm className='icon2' /></div>
                    <h3>Cost Efficient</h3>
                    <p>Registration process</p>
                </div>
                <div className='road-map-item'>
                    <div> <Alarm className='icon2' /></div>
                    <h3>Cost Efficient</h3>
                    <p>Registration process</p>
                </div>
            </div>
        </>
    )
}

export default Price

