import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 8,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    fontFamily: 'Arial',
    margin:10
  },
  image: {
    marginLeft: '15px',
  },
}));