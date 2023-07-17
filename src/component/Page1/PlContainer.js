import  React  from 'react';
import ProdList from './Pl';
import s from './style.module.css'
import axios from 'axios';
import { formAC } from '../../redux/FormReducer';
import { connect } from 'react-redux';
import { deleteIdAC } from './../../redux/FormReducer';

class PlContainer extends React.Component{
  componentDidMount() {
        const url="http://localhost/my-app/src/server/data.php";
        debugger;
        axios
            .get(url).then(response=>response.data)
            .then((data)=>{this.props.formAC({data})});
            debugger;
        }
    
            componentDidUpdate(prevProps,prevState){
                debugger;
        if(prevProps.Data!==this.props.Data){this.setState(this.props.Data)}}
    
        render(){return (<div className={s.PLcontainer}><ProdList deleteIdAC={this.props.deleteIdAC} ReqData={this.props} option={this.props.option}/></div>)}}

const mapStateToProps=(state)=>{return{Data:state.Data,option:state.Data.switchOption,}}
export default connect(mapStateToProps,{formAC,deleteIdAC})(PlContainer);
