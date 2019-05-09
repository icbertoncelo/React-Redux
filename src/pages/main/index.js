import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as FavoriteActions } from '../../store/ducks/favorites';

class Main extends Component {
  static propTypes = {
    addFavoriteRequest: PropTypes.func.isRequired,
    favorites: PropTypes.shape({
      loading: PropTypes.bool,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          description: PropTypes.string,
          url: PropTypes.string,
        }),
      ),
      error: PropTypes.string,
    }).isRequired,
  };

  state = {
    repositoryInput: '',
  };

  handleAddRepository = (e) => {
    const { repositoryInput } = this.state;
    const { addFavoriteRequest } = this.props;

    e.preventDefault();
    addFavoriteRequest(repositoryInput);
    this.setState({ repositoryInput: '' });
  };

  render() {
    const { repositoryInput } = this.state;
    const { favorites } = this.props;
    return (
      <>
        <form onSubmit={this.handleAddRepository}>
          <input
            placeholder="usuário/repositorio"
            value={repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Add</button>
        </form>

        {favorites.loading && <span>Loading...</span>}
        {!!favorites.error && <span style={{ color: '#f00' }}>{favorites.error}</span>}

        <ul>
          {favorites.data.map(favorite => (
            <li key={favorite.id}>
              <p>
                <strong>{favorite.name}</strong> ({favorite.description})
              </p>
              <a href={favorite.url}>Access</a>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites,
});

const mapDispatchToprops = dispatch => bindActionCreators(FavoriteActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToprops,
)(Main);
