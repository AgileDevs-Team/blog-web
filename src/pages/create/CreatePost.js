import React, { Component } from 'react';
import NavBar from '../../components/navbar/Navbar';

class CreatePost extends Component {
    
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <NavBar title="Create Post" />
                
                <div className="node-master">
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Title</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Content</label>
                            <textarea type="text" class="form-control text-area" id="exampleInputPassword1"/>
                        </div>

                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        );
    }

}

export default CreatePost;