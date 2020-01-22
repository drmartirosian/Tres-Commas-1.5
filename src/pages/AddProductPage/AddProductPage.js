import React, {Component} from 'react';

class AddProductPage extends Component {
  state = {
    invalidForm: true,
    formData: {
      name: '',
      description: 'TBD...',
      price: '0',
    }
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddProduct(this.state.formData);
  };

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render() {
    return (
      <div className="page">
        <h4>Add Product</h4>
        <form style={{ width: '60%' }} ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit} >
          <div className="form-group">
            <label>Product's Name:</label>
            <input
              className="form-control"
              name="name"
              value={this.state.formData.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Product's Description:</label>
            <input
              className="form-control"
              name="description"
              value={this.state.formData.description}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Product's Price:</label>
            <input
              className="form-control"
              name="price"
              value={this.state.formData.price}
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-success"
            disabled={this.state.invalidForm}
          >
            ADD
          </button>
        </form>
      </div>
    );
  }
}

export default AddProductPage;