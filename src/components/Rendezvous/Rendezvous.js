import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Rendezvous.css';
import { LoadJS } from './../init';
import ViewAppointment from './../ViewAppointment/ViewAppointment';
import AddAppointment from '../AddAppointment/AddAppointment';
import EdiTAppointement from './../EditAppointment/EditAppointment'

const deleteTask = () => {
  return window.confirm("Êtes-vous sûr de vouloir supprimer cette tache ?")
}

const Rendezvous = () => {
  useEffect(() => {
    // Runs ONCE after initial rendering
    LoadJS()
  }, []);


  return (
    <div className="card">
      <div className="card-header">
        <strong className="card-title">Rendez vous</strong>
      </div>
      <div className="card-body">

        <table id="example1" className="table table-striped table-bordered">
          <thead class=" text-primary">
            <tr>
              <th>Nom </th>
              <th> Téléphone</th>
              <th> Date</th>
              <th>Heure </th>
              <th>SMS </th>
              <th>Statut </th>
              <th>Actions</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Benoît Grandbois
                          </td>
              <td>
                03.39.93.54.49
                          </td>
              <td>
                12/11/2020
                          </td>
              <td>
                12h00
                          </td>
              <td>
                <button class="btn btn-primary">Envoyer un SMS</button>
              </td>
              <td><span class="badge badge-danger">impayé</span>

              </td>
              <td><button type="button" data-toggle="modal" data-target="#viewRendezvous" class="btn btn-primary btn-sm"><i class="fas fa-address-book"></i></button>

                <button type="button" class="btn btn-danger btn-sm" onClick={deleteTask}><i class="fas fa-trash-alt"></i></button></td>
            </tr>

          </tbody>
        </table>
        <button data-toggle="modal" data-target="#addRendezvous" type="button" className="btn btn-success btn-sm">Ajouter</button>

        <div class="modal fade" id="addRendezvous" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Nouveau</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <AddAppointment />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>

              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="editRendezvous" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Edit</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <EdiTAppointement />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>

              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="viewRendezvous" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Voir</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <ViewAppointment />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
};

Rendezvous.propTypes = {};

Rendezvous.defaultProps = {};

export default Rendezvous;
