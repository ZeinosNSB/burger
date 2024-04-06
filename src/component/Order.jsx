import {Component} from 'react';
import {Button, Table} from "react-bootstrap";
import {connect} from "react-redux";
import changeBreadMidAction from "../redux/action/BurgerAction.js";

class Order extends Component {
    renderBurger = () => {
        let {menu,burger} = this.props;
        return Object.keys(menu).map((item,index) => {
            return (
                <tr key={index}>
                    <td>{item}</td>
                    <td>
                        <Button variant="success" className="mx-2" onClick={() => {this.props.changeBreadMid(item,true)}}>+</Button>
                        <span>{burger[item]}</span>
                        <Button variant="danger" className="mx-2" onClick={() => {this.props.changeBreadMid(item,false)}}>-</Button>
                    </td>
                    <td>{menu[item]}</td>
                    <td>{(menu[item] * burger[item]).toLocaleString()}</td>
                </tr>
            )
        })
    }
    render() {
        return (
            <div>
                <Table striped>
                    <thead>
                    <tr>
                        <th>Thức ăn</th>
                        <th></th>
                        <th>Đơn giá</th>
                        <th>Thành tiền</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderBurger()}
                    </tbody>
                    <tfoot>
                    <tr>
                        <td colSpan="2"></td>
                        <td>Tổng cộng</td>
                        <td>{this.props.total}</td>
                    </tr>
                    </tfoot>
                </Table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        menu: state.burgerReducer.menu,
        burger: state.burgerReducer.burger,
        total: state.burgerReducer.total,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeBreadMid: (name,change) => {
            dispatch(changeBreadMidAction(name,change))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Order);