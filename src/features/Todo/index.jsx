import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import DetailPage from './page/DetailPage';
import ListPage from './page/ListPage';
import NotFound from '../../components/NotFound';

TodoFeature.propTypes = {};

function TodoFeature(props) {
    const match = useRouteMatch();

    return (
        <div>
            todosssss
              
              <Switch>
                  <Route path={match.path} component={ListPage}  exact />
                  <Route path={`${match.path}/:todoId`} component={DetailPage} exact />
                   {/* <Route path='/todos' component={ListPage}  exact />
                  <Route path='/todos/:todoId' component={DetailPage} /> */}
                  <Route component={NotFound} />
              </Switch>

        </div>
    );
}

export default TodoFeature;