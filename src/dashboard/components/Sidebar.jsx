import { useContext } from 'react';
import '../styles/sidebar.css';
import {
  Dashboard,
  Computer,
  PersonOutline,
  PowerSettingsNew,
  CreateNewFolder,
  Category,
  AddToQueue,
  PeopleOutline,
  // Redeem,
  // VideoCallRounded,
  GroupAdd,
} from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import { GlobalState } from './../../GlobalState';
import Loading from './../../components/common/Loading';

//

const Sidebar = () => {
  const state = useContext(GlobalState);
  const user = state.userApi.user[0];
  const [loading] = state.userApi.loading;
  const [isOpen] = state.isOpen;
  const { openSidebar } = state;

  // THE SECTION OF THE LOGOUT FUNCTION
  const logoutUser = async () => {
    localStorage.clear();
    window.location.href = '/';
  };

  // THE SECTION OF THE ADMIN ROUTER
  const AdminRouter = () => {
    return (
      <>
        <li>
          <NavLink
            onClick={openSidebar}
            to='/dashboards'
            className='sidebarListItem'
            activeClassName='active'
          >
            <Dashboard className='sidebarIcon' />
            Admin Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink
            onClick={openSidebar}
            to='/dashboard/create_courses'
            className='sidebarListItem'
            activeClassName='active'
          >
            <CreateNewFolder className='sidebarIcon' />
            Create New Course
          </NavLink>
        </li>

        <li>
          <NavLink
            onClick={openSidebar}
            to='/dashboard/categories'
            className='sidebarListItem'
            activeClassName='active'
          >
            <Category className='sidebarIcon' />
            Categories
          </NavLink>
        </li>

        <li>
          <NavLink
            onClick={openSidebar}
            to='/dashboard/all_courses'
            className='sidebarListItem'
            activeClassName='active'
          >
            <AddToQueue className='sidebarIcon' />
            All Courses
          </NavLink>
        </li>

        <li>
          <NavLink
            onClick={openSidebar}
            to='/dashboard/my_courses'
            className='sidebarListItem'
            activeClassName='active'
          >
            <Computer className='sidebarIcon' />
            My Courses
          </NavLink>
        </li>

        <li>
          <NavLink
            onClick={openSidebar}
            to='/social/community'
            className='sidebarListItem'
            activeClassName='active'
          >
            <GroupAdd className='sidebarIcon' />
            Community
          </NavLink>
        </li>

        <li>
          <NavLink
            onClick={openSidebar}
            to='/dashboard/users'
            className='sidebarListItem'
            activeClassName='active'
          >
            <PeopleOutline className='sidebarIcon' />
            Users
          </NavLink>
        </li>

        <li>
          <NavLink
            onClick={openSidebar}
            to='/dashboard/instructors'
            className='sidebarListItem'
            activeClassName='active'
          >
            <PeopleOutline className='sidebarIcon' />
            Instructors
          </NavLink>
        </li>

        <li>
          <NavLink
            onClick={openSidebar}
            to='/dashboard/my_learning'
            className='sidebarListItem'
            activeClassName='active'
          >
            <Computer className='sidebarIcon' />
            My Learnings
          </NavLink>
        </li>

        <li>
          <NavLink
            onClick={openSidebar}
            to='/dashboard/profile'
            className='sidebarListItem'
            activeClassName='active'
          >
            <PersonOutline className='sidebarIcon' />
            Profile
          </NavLink>
        </li>

        <li onClick={logoutUser} className='sidebarListItem'>
          <PowerSettingsNew className='sidebarIcon' />
          Logout
        </li>
      </>
    );
  };

  // THE SECTION OF THE INSTRUCTOR ROUTER
  const InstructorRouter = () => {
    return (
      <>
        {user.authorize === true ? (
          <li>
            <NavLink
              onClick={openSidebar}
              to='/dashboard/create_courses'
              className='sidebarListItem'
              activeClassName='active'
            >
              <CreateNewFolder className='sidebarIcon' />
              Create New Course
            </NavLink>
          </li>
        ) : (
          <li>
            <NavLink
              onClick={openSidebar}
              to='/instructor/onboard'
              className='sidebarListItem'
              activeClassName='active'
            >
              <CreateNewFolder className='sidebarIcon' />
              Start Creating
            </NavLink>
          </li>
        )}

        <li>
          <NavLink
            onClick={openSidebar}
            to='/dashboard/my_learning'
            className='sidebarListItem'
            activeClassName='active'
          >
            <Computer className='sidebarIcon' />
            My Learnings
          </NavLink>
        </li>

        <li>
          <NavLink
            onClick={openSidebar}
            to='/dashboard/my_courses'
            className='sidebarListItem'
            activeClassName='active'
          >
            <Computer className='sidebarIcon' />
            My Courses
          </NavLink>
        </li>

        <li>
          <NavLink
            onClick={openSidebar}
            to='/social/community'
            className='sidebarListItem'
            activeClassName='active'
          >
            <GroupAdd className='sidebarIcon' />
            Community
          </NavLink>
        </li>

        {/* <li>
          <NavLink
            onClick={openSidebar}
            to='/dashboard/certificate'
            className='sidebarListItem'
            activeClassName='active'
          >
            <Redeem className='sidebarIcon' />
            Certificate Earned
          </NavLink>
        </li>

        <li>
          <NavLink
            onClick={openSidebar}
            to='/dashboard/video_chat'
            className='sidebarListItem'
            activeClassName='active'
          >
            <VideoCallRounded className='sidebarIcon' />
            Video Chat
          </NavLink>
        </li> */}

        <li>
          <NavLink
            onClick={openSidebar}
            to='/dashboard/profile'
            className='sidebarListItem'
            activeClassName='active'
          >
            <PersonOutline className='sidebarIcon' />
            Profile
          </NavLink>
        </li>

        <li onClick={logoutUser} className='sidebarListItem'>
          <PowerSettingsNew className='sidebarIcon' />
          Logout
        </li>
      </>
    );
  };

  // THE SECTION OF THE STUDENT ROUTER
  const StudentRouter = () => {
    return (
      <>
        {user.authorize && (
          <>
            <li>
              <NavLink
                onClick={openSidebar}
                to='/dashboard/create_courses'
                className='sidebarListItem'
                activeClassName='active'
              >
                <CreateNewFolder className='sidebarIcon' />
                Create New Course
              </NavLink>
            </li>

            <li>
              <NavLink
                onClick={openSidebar}
                to='/dashboard/my_courses'
                className='sidebarListItem'
                activeClassName='active'
              >
                <Computer className='sidebarIcon' />
                My Courses
              </NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink
            onClick={openSidebar}
            to='/dashboard/my_learning'
            className='sidebarListItem'
            activeClassName='active'
          >
            <Computer className='sidebarIcon' />
            My Learnings
          </NavLink>
        </li>

        <li>
          <NavLink
            onClick={openSidebar}
            to='/social/community'
            className='sidebarListItem'
            activeClassName='active'
          >
            <GroupAdd className='sidebarIcon' />
            Community
          </NavLink>
        </li>

        <li>
          <NavLink
            onClick={openSidebar}
            to='/dashboard/profile'
            className='sidebarListItem'
            activeClassName='active'
          >
            <PersonOutline className='sidebarIcon' />
            Profile
          </NavLink>
        </li>

        <li onClick={logoutUser} className='sidebarListItem'>
          <PowerSettingsNew className='sidebarIcon' />
          Logout
        </li>
      </>
    );
  };

  console.log(user.role);

  return (
    <div
      onClick={openSidebar}
      className={`${isOpen ? 'sidebar hide-sidebar' : 'sidebar'}`}
      // className="sidebar"
    >
      <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
          {loading && (
            <div className='load'>
              <Loading />
            </div>
          )}
          <ul className='sidebarList'>
            {user.role === 'instructor' && InstructorRouter()}
            {user.role === 'admin' && AdminRouter()}
            {user.role === 'student' && StudentRouter()}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
