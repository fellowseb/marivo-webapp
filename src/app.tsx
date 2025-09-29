import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import ProtectedRoute from './components/protected-route';
import PageNotFound from './components/page-not-found.component';
import AuthLayout from './layouts/auth-layout';
import MainLayout from './layouts/main-layout';
import PlaysPage, {
  PlaysPageTitle,
} from './features/play-admin/plays-page.component';
import PlayPage, { PlayTitle } from './features/play-admin/play-page.component';
import PlayMenu from './features/play-admin/play-menu.component';
import ScriptTabMenu from './features/script-edition/script-tab-menu.component';
import Login from './features/login/login.component';
import Signup from './features/signup/signup.component';
import './app.css';
import MemorizeTabMenu from './features/lines-memorization/memorize-tab-menu.component';
import BlockingTabMenu from './features/blocking/blocking-tab-menu.component';

type AuthUser = {
  id: string;
  name: string;
};

function App() {
  const [user] = useState<AuthUser | null>({
    id: 'fellowseb',
    name: 'fellowseb',
  });
  return (
    <Routes>
      <Route
        element={
          <ProtectedRoute redirectPath="/login" isAllowed={!!user}>
            <MainLayout
              userNickname={user?.name ?? ''}
              title={
                <Routes>
                  <Route path="/plays" element={<PlaysPageTitle />} />
                  <Route path="/play/:id/*" element={<PlayTitle />} />
                </Routes>
              }
              Menu={
                <Routes>
                  <Route path="/play/:id/*" element={<PlayMenu />} />
                </Routes>
              }
              PageMenu={
                <Routes>
                  <Route path="/play/:id/script" element={<ScriptTabMenu />} />
                  <Route
                    path="/play/:id/blocking"
                    element={<BlockingTabMenu />}
                  />
                  <Route
                    path="/play/:id/memorize"
                    element={<MemorizeTabMenu />}
                  />
                </Routes>
              }
            />
          </ProtectedRoute>
        }
      >
        <Route path="/plays" element={<PlaysPage />} />
        <Route path="/play/:id/*" element={<PlayPage />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

      <Route path="/" element={<Navigate to="/plays" replace />}></Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
