import React, { Component } from 'react';
import NavBar from '../../components/navbar/Navbar';
import { findPostById } from '../../services/posts-service'
import './ReadPost.css';

class ReadPost extends Component {

    constructor(props) {
        super(props)

        this.state = {
            post: {}
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params

        findPostById(id).then(res => {
            let post = {
                title: res.data.title,
                content: res.data.content
            }
            this.setState({post: post})
        })
    }

    render() {
        return (
            <div>
                <NavBar title="NetoDevel" />
                <div className="container read-post"> 
                    <h1>{this.state.post.title}</h1>
                    <hr/>   
                    <code>{this.state.post.content}</code>
                </div>
            </div>
            
        );
    }

}

export default ReadPost;