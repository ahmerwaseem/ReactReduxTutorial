import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class PostsIndex extends Component{
  componentDidMount(){
    this.props.fetchPosts();
   // console.log("test");
  }

  renderPosts(){
    return (
      _.map(this.props.posts, post => { 
          return ( 
             <li className="list-group-item" key={post.id}>
               {post.title}
              </li>
            );
        }
      
      )
    )
  }

  render(){
    console.log(this.props.posts);
    return ( 
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group" >
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { posts: state.posts };
}

function mapDispatchToProps(){
  
}

export default connect(mapStateToProps, { fetchPosts: fetchPosts})(PostsIndex);