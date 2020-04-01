import React, { Component } from 'react';
import NavBar from '../../components/navbar/Navbar';
import apiConfig from '../../services/api-config';
import './EditPost.css';

class EditPost extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            post : {
                title: "",
                content: ""
            },
            tags: []
        }

        this.handlerValues.bind(this)
    }

    addTag = (e) => {
        if(e.keyCode == 13){
            console.log(e.target.value)

            const query = e.target.value;
            let list = this.state.tags;

            let item = { name: query }
            
            if (query === "") {
                list = []
            } else {
                list.push(item);
            }

            this.setState({
                tags: list
            })
        }
    }

    removeFilter(item) {
        let list = this.state.tags.filter(i => i.name !== item.name);
        this.setState({
          tags: list
        })
    }

    handlerValues = (e) => {
        e.preventDefault();

        let title = this.refs.title.value
        let content = this.refs.content.value

        const post = {
            title: title,
            content: content
        }

        this.setState({
            post: post
        })
    }
   
    addPost = (e) => {
        e.preventDefault();
        
        const post = this.state.post;
        post.tags = this.state.tags;
        this.setState({
            post: post
        })

        apiConfig.post("/posts", this.state.post)
            .then((response)=> {
                this.props.history.push('/admin');
                console.log(response)
            }).catch((err)=>{
                console.log(err);
            })
    }

    backButton = (e) => {
        this.props.history.push('/admin');
    }

    render() {
        return (
            <div>
                <NavBar title="Edit Post" />
                
                <div className="node-master">
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Title</label>
                            <input type="text" ref="title" onChange={(e) => this.handlerValues(e)} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Content</label>
                            <textarea type="text" ref="content" onChange={(e) => this.handlerValues(e)} className="form-control text-area" />
                        </div>
                       
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Tags</label>
                            <input type="text" onKeyDown={e => this.addTag(e)} className="form-control" />
                        </div>

                        <div className="form-group">
                            {this.state.tags.map(f => (
                                <span key={f.name} className="badge badge-secondary my-badge"> {f.name}
                                <svg onClick={() => this.removeFilter(f)} className="bi bi-x-circle delete-filter" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clipRule="evenodd"/>
                                    <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z" clipRule="evenodd"/>
                                    <path fillRule="venodd" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z" clipRule="evenodd"/>
                                </svg>
                                </span>
                            ))}
                        </div>

                        <button type="button" onClick={(e) => this.addPost(e)} className="btn btn-primary">Edit</button>
                        <button type="button" onClick={(e) => this.backButton(e)} className="btn btn-secondary back-button">Back</button>
                                
                    </form>
                </div>
            </div>
        );
    }

}

export default EditPost;