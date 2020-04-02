import React, { Component } from 'react';
import './App.css';

import apiConfig from './services/api-config';
import NavBar from './components/navbar/Navbar'

class App extends Component {

  constructor(props) {
    super(props)

    this.state =  {
      posts: [],
      filters: [],
      visibleFilters: []
    }

    this.buscaInput = this.buscaInput.bind(this);
    this.removeFilter = this.removeFilter.bind(this);

  }

  componentDidMount() {
    apiConfig.get(`/posts`).then(res => {
        this.setState({
          posts: res.data.posts,
          filters: res.data.filters
        })
    })
  }

  buscaInput = (e) => {
    console.log(e);

    if(e.keyCode == 13){
      console.log("opa")
      const query = e.target.value;

      let list = this.state.visibleFilters;
      
      if (query === "") {
        list = []
      } else {
        list.push(query);
      }

      this.setState({
        visibleFilters: list
      })
      apiConfig.get(`/posts?q=${query}`).then(res => {
        this.setState({
          posts: res.data.posts
        })
      })
   }
  }

  removeFilter(item) {
      let list = this.state.visibleFilters.filter(i => i !== item);
      this.setState({
        visibleFilters: list
      })

      apiConfig.get(`/posts?f=${list}`).then(res => {
        this.setState({
          posts: res.data.posts
        })
      })
  }

  clickFilter(item) {
      let list = this.state.visibleFilters;
      list.push(item);

      this.setState({
        visibleFilters: list
      })

      apiConfig.get(`/posts?f=${list}`).then(res => {
        this.setState({
          posts: res.data.posts
        })
      })
  }

  readPost = (id) => {
    this.props.history.push(`/read/${id}`)
  }

  render() {
    return (
      <div className="App">

        <NavBar title="NetoDevel" onKeySearch={this.buscaInput} withSearch="true" />

        <header className="App-header">
          <div className="container">

            <div className="row">
                <div className="container col-md-8">

                  <div className="row">
                    <div className="col-md-8 my-header">
                      <p>Artigos</p>
                    </div>
                  </div>

                  {this.state.visibleFilters.map(f => (
                    <span key={f} className="badge badge-secondary my-badge"> {f}
                      <svg onClick={() => this.removeFilter(f)} className="bi bi-x-circle delete-filter" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clipRule="evenodd"/>
                        <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z" clipRule="evenodd"/>
                        <path fillRule="venodd" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z" clipRule="evenodd"/>
                      </svg>
                    </span>
                  ))}

                  <hr/>
  
                  {this.state.posts.map(post => (
                    <div className="row" key={post.title}>
                      <div className="card col-md-10 card-right" onClick={()=> {this.readPost(post.id)} }>
                         <div className="card-body">
                         <h5 className="card-title" >{post.title}</h5>
                          <p className="card-text">{post.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
  
                <div className="container col-md-4">
                  
                  <div className="row">
                      <div className="col-md-8 my-header">
                        <p>Tags</p>
                      </div>
                  </div>
  
                  <ul className="list-group tags">
                    {this.state.filters.map(filter => (
                      <li onClick={() => this.clickFilter(filter.tag)} className="list-group-item" key={filter.tag}>{filter.tag} <span className="badge badge-secondary">{filter.count}</span></li>
                    ))}
                  </ul>
                </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
