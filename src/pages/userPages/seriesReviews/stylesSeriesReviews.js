import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    table: {
        color: '#406170!important',
        backgroundColor: 'rgba(235, 242, 245, 0.3)'
    },
    edit: {
        border: 'none',
        borderRadius: '10px',
        padding: '5px 10px',
        backgroundColor: 'rgba(144, 156, 209)',
        color: 'white',
        cursor: 'pointer',
        marginRight: '20px'
    },

    delete: {
        color: 'black',
        cursor: 'pointer'
    }

});

export default useStyles;