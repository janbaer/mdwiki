import { h } from 'preact';

const RepositoriesSelection = ({ repositories, selectedRepository, onSelectedRepositoryChanged, onConnectClick }) => {
  return (
    <div>
      <h3>Select an existing repository where the data should be saved</h3>
      <form onSubmit={e => e.preventDefault()}>
        <select
          class="uk-select"
          onChange={e => onSelectedRepositoryChanged(e.target.value)}
        >
          <option disabled selected value> -- select a repository -- </option>
          { repositories.map(r => <option value={r.name}>{r.name}</option>) }
        </select>
        <br /><br />
        <button
          class="uk-button uk-button-primary"
          onClick={() => onConnectClick()}
          disabled={!selectedRepository}
        >
          Connect
        </button>
      </form>
    </div>
  );
};

export default RepositoriesSelection;