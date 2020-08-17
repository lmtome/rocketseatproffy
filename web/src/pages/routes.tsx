import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import TeacherList from '../pages/TeacherList';
import TeacherForm from '../pages/TeacherForm';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact Component={ Landing } />
            <Route path="/study" Component={ TeacherList } />
            <Route path="/give-classes" Component={ TeacherForm } />
        </BrowserRouter>
    );
}

export default Routes;
