import React from "react";
import ProdAdd from "./PaC";
import s from "./style.module.css";
import { connect } from "react-redux";
import { switchAC } from "../../redux/FormReducer";
import { deleteIdAC,initAC } from "./../../redux/FormReducer";


class PaContainer extends React.Component {
  render() {
    return (
      <div className={s.Pacontainer}>
        <ProdAdd
          option={this.props.option}
          switchAC={this.props.switchAC}
          deleteIdAC={this.props.deleteIdAC}
          initAC={this.props.initAC}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { option: state.Data.switchOption };
};

export default connect(mapStateToProps, { switchAC, deleteIdAC,initAC })(PaContainer);
