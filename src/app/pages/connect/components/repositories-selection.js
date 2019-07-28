import { h, Fragment } from 'preact';

const RepositoriesSelection = ({ repositories, selectedRepository, onSelectedRepositoryChanged, onConnectClick }) => {
  return (
    <Fragment>
      <h3>Select an existing repository where the data should be saved</h3>
      <form onSubmit={e => e.preventDefault()}>
        <select
          class="select"
          onChange={e => onSelectedRepositoryChanged(e.target.value)}
        >
          <option disabled selected value> -- select a repository -- </option>
          { repositories.map(r => <option value={r.name}>{r.name}</option>) }
        </select>
        <br /><br />
        <button
          class="button button-primary"
          onClick={() => onConnectClick()}
          disabled={!selectedRepository}
        >
          Connect
        </button>
      </form>
    </Fragment>
  );
};

export default RepositoriesSelection;
