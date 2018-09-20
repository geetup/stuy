import React, { Component } from 'react';
class Children extends Component {
    render(match){
        return(
            <div>
                {
                    match?"Children":'asd'
                }
                Children
            </div>

        )
    }
}
export default Children