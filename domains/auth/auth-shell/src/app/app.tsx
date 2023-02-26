import NxWelcome from './nx-welcome';
import { SignInSide as Login } from './login/SignInSide';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export function App() {
  return (
    <div>
      asd
      <Login>
        <Button
        // component={Link}
        // to="/grid"
        // type="submit"
        // fullWidth
        // variant="contained"
        // sx={{ mt: 3, mb: 2 }}
        >
          Grid d
        </Button>
      </Login>
    </div>
  );
}

export default App;
