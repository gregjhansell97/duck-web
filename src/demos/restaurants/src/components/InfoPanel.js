import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

//local
import Title from './Title.js';
import '../css/index.css';

const styles = {
    //   title: {
    //     fontSize: 20,
    //     fontWeight: 500
    //   }
}


class InfoPanel extends React.Component {
    render() {
        const { classes, name } = this.props;
        return (

            // <Title name={name}>
            // </Title>
            <div className={classes.root}>
                <List>
                    <ListItem>
                        256 Main St, CVille VA, 20154
                    </ListItem>
                    <ListItem>
                        302-516-5615
                    </ListItem>
                    <ListItem>
                        2.5 Miles Away
                    </ListItem>
                </List>
            </div>
        );
    }
}

InfoPanel.propTypes = {
    /**
     * styling information for the class
     */
    classes: PropTypes.object.isRequired,

    /**
     * name of the restaurant
     */
    name: PropTypes.string.isRequired,

}

export default withStyles(styles)(InfoPanel);
