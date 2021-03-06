import React, { Component } from 'react';
import{ Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import{ CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems ,deleteItem } from '../actions/itemActions';
import propTypes from 'prop-types';

class AdList extends Component{
    componentDidMount(){
        this.props.getItems();
    }

    onDeleteClick = id =>{
        this.props.deleteItem(id);
    };
    render(){
        
        const {items} = this.props.item;
        return(
            <Container>
                {/* <Button
                color= "dark"
                style={{marginBottom:'2rem'}}
                onClick={()=>{
                    const name= prompt('Enter Item');
                    if(name){
                        this.setState(state => ({
                            items: [...state.items, {id:uuid(), name}]
                        }));
                    }
                }}
                >Add Items
               </Button> */}
               <ListGroup>
                   <TransitionGroup className="ad-list">
                   {items.map(({ _id,name}) =>(
                       <CSSTransition key={_id} timeout={500} classNames="fade">
                       <ListGroupItem>
                       <Button 
                       className="remove-btn"
                       color="danger"
                       size="sm"
                    //    onClick={()=>{
                    //        this.setState(state=>({
                    //         items:state.items.filter(item => item.id !==id)
                    //        }));
                        onClick={
                        this.onDeleteClick.bind(this, _id)
                        }
                       
                       >
                        &times; </Button>
                       {name}</ListGroupItem>
                       </CSSTransition>
                   ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

AdList.propTypes ={
    getItems:propTypes.func.isRequired,
    item: propTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
});
export default connect(mapStateToProps, {getItems , deleteItem}) (AdList);