import React from "react";
import ReactDOM from "react-dom";
import Product from "./Product";
import seed from "./seed";

class ProductList extends React.Component {

  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     products: [],
  //   };
  //
  //   //this.handleProductUpVote = this.handleProductUpVote.bind(this);
  // }

  state = {
    products: [],
  }

  componentDidMount() {
    this.setState({products: seed});
  }

  render () {
    const products = this.state.products.sort((a, b) => (
      b.votes - a.votes
    ));
    const productComponents = products.map((product) => (
      <Product
        id={product.id}
        title={product.title}
        description={product.description}
        url={product.url}
        votes={product.votes}
        submitterAvatarUrl={product.submitterAvatarUrl}
        productImageUrl={product.productImageUrl}
        onVote={this.handleProductUpVote}
      />
    ));

    return (
      <div>
        {productComponents}
      </div>
    );
  }

  handleProductUpVote = (productId) => {
    console.log(`${productId} was upvoted.`);

    const nextProducts = this.state.products.map((product) => {
      if (product.id === productId) {
        return Object.assign({}, product, {
          votes: product.votes + 1,
        });
      } else {
        return product;
      }
    });
    this.setState({
      products: nextProducts,
    });
  }
}

export default ProductList;

ReactDOM.render(<ProductList/>, document.getElementById("content"));
