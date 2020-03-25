import React, { Component } from 'react';

class Admin extends Component {

    constructor(props) {
        super(props)
        this.createHandler.bind(this);
    }


    createHandler = (e) => {
        e.preventDefault();
        this.props.history.push('/post');
    }


    render() {
        return (
            <div>
                <h1>Admin</h1>
                <hr/>
                
                <div className="container">
                    <div className="row">
                        <button type="button" className="btn btn-info" onClick={this.createHandler}>Create</button>
                    </div>
                </div>

            </div>
        );
    }

}

export default Admin;

