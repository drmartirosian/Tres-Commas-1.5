import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class EditProductPage extends Component {
  state = {
    invalidForm: false,
    formData: this.props.location.state.product
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdateProduct(this.state.formData);
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
      <>
        <h1>Edit</h1>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Product's Name (required)</label>
            <input
              className="form-control"
              name="name"
              value={this.state.formData.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Product's Description (required)</label>
            <input
              className="form-control"
              name="description"
              value={this.state.formData.description}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Product's Price</label>
            <input
              className="form-control"
              name="price"
              value={this.state.formData.price}
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-success "
            disabled={this.state.invalidForm}
          >
            SAVE
          </button>&nbsp;&nbsp;
          <Link to='/market'>CANCEL</Link>
        </form>
      </>
    );
  }
}

export default EditProductPage;