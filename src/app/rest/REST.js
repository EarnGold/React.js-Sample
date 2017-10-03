import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'material-ui';
import { CircularProgress } from 'material-ui/Progress';

import Navigation from '~/shared/Navigation';

import * as actions from './actions';
import { Add, Search, Edit, Delete } from './containers';

const REST = ({ rest, actions }) => {
  const { dataset, deleteData, editData, loading } = rest;

  return (
    <div className="container">
      <Navigation />

      <Search />
      <Add />

      <ul>
        {
          dataset.map(({ _id, text }, index) => (
            <li key={_id}>
              ({ index + 1 }) { text } { ' ' }
              <Button
                color="accent"
                onClick={() =>
                  actions.setData({
                    deleteData: { ...deleteData, _id, dialog: true }
                  })
                }
              >
                Delete
              </Button>
              <Button
                color="primary"
                onClick={() =>
                  actions.setData({
                    editData: { ...editData, _id, text, dialog: true }
                  })
                }
              >
                Edit
              </Button>
            </li>
          ))
        }
      </ul>

      <div className="progress" style={{ display: loading ? '' : 'none' }}>
        <CircularProgress />
      </div>

      <aside>
        <Delete />
        <Edit />
      </aside>

      <style jsx>{`
        .container {
          padding: 1rem;
        }

        .table {
          max-width: 30rem;
          margin: .5rem 0;
        }

        .progress {
          position: absolute;
          position: fixed;
          top: 0;
          left: 0;
          background: rgba(225, 225, 255, .7);
          height: 100vh;
          width: 100vw;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1111;
        }
      `}</style>
    </div>
  );
};

export default connect(
  ({ rest }) => ({ rest }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(REST);
