import React from 'react';
import { Route, Switch } from 'react-router';
import Dashboard from '../dashboard';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from './../pages/Home';
import Courses from './../dashboard/pages/Courses';
import Profile from './../dashboard/pages/Profile';
import CreateCourse from '../dashboard/pages/CreateCourse';
import Categories from './../dashboard/pages/Categories';
import CreateCategory from './../dashboard/pages/CreateCategory';
import AllCourses from '../dashboard/pages/AllCourses';
import Users from '../dashboard/pages/Users';
import Verification from '../components/verification/Verification';
import ActivationEmail from './../components/activation/ActivationEmail';
import ForgotPassword from './../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import NotFound from './../components/not_found/NotFound';
import Course from './../pages/Courses';
import Detail from './../pages/Detail';
import View from './../pages/View';
import Cat from './../pages/Category';
import InstructorOnBoard from './../pages/InstructorOnBoard';
import MyCourses from '../dashboard/pages/MyCourses';
import InstructorProfiles from './../pages/InstructorProfiles';
import AdminView from './../dashboard/components/AdminView';
import Community from './../pages/Community';
import UserProfiles from '../pages/UserProfiles';
import Instructors from './../dashboard/pages/Instructors';
import OnBoard from './../pages/OnBoard';
import Roadmap from './../pages/Roadmap';
import RoadDetails from './../pages/RoadDetails';
import Contact from './../pages/Contact';

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/login' exact component={Login} />
      <Route path='/register' exact component={Register} />
      <Route path='/forgot_password' exact component={ForgotPassword} />
      <Route path='/user/reset/:token' exact component={ResetPassword} />
      <Route path='/verification' exact component={Verification} />
      <Route path='/courses' exact component={Course} />
      <Route path='/courses/:id' exact component={Course} />
      <Route path='/courses/details/:id' exact component={Detail} />
      <Route path='/courses/view/:id' exact component={View} />
      <Route path='/category/courses/:id' exact component={Cat} />
      <Route path='/instructor/onboard' exact component={InstructorOnBoard} />
      <Route path='/instructor/success_board' exact component={OnBoard} />
      <Route path='/social/community' exact component={Community} />
      <Route path='/roadmap' exact component={Roadmap} />
      <Route path='/contact_us' exact component={Contact} />
      <Route path='/roadmap_details/:id' exact component={RoadDetails} />
      <Route
        path='/courses/instructor/:id'
        exact
        component={InstructorProfiles}
      />
      <Route path='/user/social/profile/:id' exact component={UserProfiles} />
      <Route
        path='/user/activate/:activation_token'
        exact
        component={ActivationEmail}
      />

      {/* THE DASHBOARD SECTON */}
      <Route path='/dashboards' exact component={Dashboard} />
      <Route path='/dashboard/my_learning' exact component={Courses} />
      <Route path='/dashboard/all_courses' exact component={AllCourses} />
      <Route path='/dashboard/profile' exact component={Profile} />
      <Route path='/dashboard/users' exact component={Users} />
      <Route path='/dashboard/instructors' exact component={Instructors} />
      <Route path='/dashboard/create_courses' exact component={CreateCourse} />
      <Route path='/edit_course/:id' exact component={CreateCourse} />
      <Route path='/dashboard/categories' exact component={Categories} />
      <Route path='/dashboard/my_courses' exact component={MyCourses} />

      <Route
        path='/dashboard/create_category'
        exact
        component={CreateCategory}
      />

      {/* THE ADMIN SECTION */}
      <Route
        path='/dashboard/admin/view_profile/:id'
        exact
        component={AdminView}
      />
      <Route exact component={NotFound} />
    </Switch>
  );
};

export default Routes;
