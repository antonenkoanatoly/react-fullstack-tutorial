import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

class Product extends React.Component {

  // constructor(props) {
  //   super(props);
  //
  //   this.handleUpVote = this.handleUpVote.bind(this);
  // }
  static propTypes = {
    submitterAvatarUrl: PropTypes.string
  }

  render() {
    return (
      <div className='item'>
        <div className='image'>
          <img src={this.props.productImageUrl} />
        </div>
        <div className='content'>
          {this.props.votes}
          <div className='description'>
            <a href={this.props.url} onClick={this.handleUpVote}>
              {this.props.title}
            </a>
            <p>{this.props.description}</p>
          </div>
          <div className='extra'>
            <span>Submitted by:</span>
            <img className='ui avatar image' src={this.props.submitterAvatarUrl} />
          </div>
        </div>
      </div>
    )
  }

  // handleUpVote() {
  //   this.props.onVote(this.props.id);
  // }
  handleUpVote = () => (
    this.props.onVote(this.props.id)
  );
}

export default Product;
