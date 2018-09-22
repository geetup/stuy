import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { SearchBar} from 'antd-mobile';
import { Grid } from 'antd-mobile';
import './../asset/css/home.css';

export default class Home extends Component {
    constructor (props){
        super(props);
        this.state={
            data:[
                {
                    icon:require('./../asset/img/img1.png'),
                    text:"美食"
                },
                {
                    icon:require('./../asset/img/img2.png'),
                    text:"电影"
                },
                {
                    icon:require('./../asset/img/img3.png'),
                    text:"酒店"
                },
                {
                    icon:require('./../asset/img/img4.png'),
                    text:"娱乐"
                },
                {
                    icon:require('./../asset/img/img5.png'),
                    text:"外卖"
                },
                {
                    icon:require('./../asset/img/img6.png'),
                    text:"ktv"
                },
                {
                    icon:require('./../asset/img/img7.png'),
                    text:"周边游"
                },
                {
                    icon:require('./../asset/img/img8.png'),
                    text:"丽人"
                },
                {
                    icon:require('./../asset/img/img9.png'),
                    text:"小吃"
                },
                {
                    icon:require('./../asset/img/img10.png'),
                    text:"机票"
                },
                {
                    icon:require('./../asset/img/img1.png'),
                    text:"美食"
                },
                {
                    icon:require('./../asset/img/img2.png'),
                    text:"电影"
                },
                {
                    icon:require('./../asset/img/img3.png'),
                    text:"美食"
                },
                {
                    icon:require('./../asset/img/img4.png'),
                    text:"电影"
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                    leftContent="哈尔滨"
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                    > <SearchBar placeholder="输入搜索内容" maxLength={8} />
                </NavBar>
                {/* columnNum表示5列 data传入的菜单数据 */}
                <Grid data={this.state.data} columnNum={5} hasLine={false} isCarousel="true" />
                <dt className="like">猜你喜欢</dt>
            </div>
        )
    }
}