import {Component} from 'react';
import './burger.css';
import {connect} from "react-redux";

class Burger extends Component {
    renderBurger = () => {
        let {burger} = this.props;
        return Object.keys(burger).map((item) => {
            let breadMid = [];
            for (let i = 0; i < burger[item]; i++) {
                breadMid.push(<div key={i} className={item}></div>);
            }
            return breadMid;
        })
    }
    render() {
        return (
            <>
                <div className="breadTop"></div>
                {this.renderBurger()}
                <div className="breadBottom"></div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        burger: state.burgerReducer.burger,
    }
}
export default connect(mapStateToProps)(Burger);