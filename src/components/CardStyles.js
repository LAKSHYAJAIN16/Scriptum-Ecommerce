import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 300,
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    height : "20%"
  },
  cartItem: {
    display : "flex",
    alignItems : "center",
    justifyItems : "center",
    alignContent : "center",
    alignSelf : "center"
  },
  flex:{
    display : "flex",
    flex : 0.5
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));