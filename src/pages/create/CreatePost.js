import React, { Component } from 'react';

class CreatePost extends Component {
    
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>Create Post</h1>
                <hr />
                
                <div className="container">
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