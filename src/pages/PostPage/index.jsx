import React, { Component } from 'react';

import Post from 'pages/PostPage/components/Post';
import Preloader from 'components/Preloader';
import { Header } from 'components/Header';
import { setPosts } from 'redux/actions/posts';
import { connect } from 'react-redux';

class PostsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
    };
  }

  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
      .then((response) => response.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
          });
          this.props.setPosts(result);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  }

  render() {
    const { error, isLoaded } = this.state;
    if (error) {
      return <p>Ошибка {error.message}</p>;
    }
    if (!isLoaded) {
      return <Preloader />;
    }
    return (
      <div className='content'>
        <Header />
        <div className='posts__list'>
          {this.props.items.map((post) => (
            <Post key={post.id} title={post.title} body={post.body} id={post.id} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.posts.posts,
});

const mapDispatchToProps = {
  setPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);
