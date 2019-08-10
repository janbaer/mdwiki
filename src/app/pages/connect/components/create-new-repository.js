import { h, Fragment } from 'preact';
import { useState, useEffect } from 'preact/hooks';

import './create-new-repository.less';

const CreateNewRepository = ({ onCreateClick, onValidateRepositoryName }) => {
  const [repositoryName, setRepositoryName] = useState('');
  const [isValidRepositoryName, setIsValidRepositoryName] = useState(false);

  useEffect(async() => {
    const isValid = onValidateRepositoryName(repositoryName);
    setIsValidRepositoryName(isValid);
  }, [repositoryName]);

  return (
    <Fragment>
      <h3>Or create a new repository</h3>

      <form onSubmit={e => e.preventDefault()}>
        <div class="CreateNewRepository-container">
          <input
            class="input"
            type="text"
            value={repositoryName}
            onChange={e => setRepositoryName(e.target.value)}
          />
          {repositoryName && !isValidRepositoryName &&
            <div class="CreateNewRepository-errorMessage">There's an existing repository with the same name. Please choose another name</div>
          }
        </div>
        <button
          class="button button-primary"
          onClick={() => onCreateClick(repositoryName)}
          disabled={!isValidRepositoryName}
        >
          Create
        </button>
      </form>
    </Fragment>
  );
};

export default CreateNewRepository;
