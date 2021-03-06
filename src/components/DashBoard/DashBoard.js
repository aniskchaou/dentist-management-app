import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './DashBoard.css';
import { drawChart } from './../chart';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
const DashBoard = () => {

  useEffect(() => {
    // Runs ONCE after initial rendering
    drawChart()

  }, []);

  return (

    <div className="row">
      <div className="col-lg-3 col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="stat-widget-five">
              <div className="stat-icon dib flat-color-1">
                <i className="pe-7s-cash"></i>
              </div>
              <div className="stat-content">
                <div className="text-left dib">
                  <div className="stat-text">
                    $<span className="count">2</span>
                  </div>
                  <div className="stat-heading">Patients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="stat-widget-five">
              <div className="stat-icon dib flat-color-2">
                <i className="pe-7s-cart"></i>
              </div>
              <div className="stat-content">
                <div className="text-left dib">
                  <div className="stat-text">
                    <span className="count">12</span>
                  </div>
                  <div className="stat-heading">Préscription</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="stat-widget-five">
              <div className="stat-icon dib flat-color-3">
                <i className="pe-7s-browser"></i>
              </div>
              <div className="stat-content">
                <div className="text-left dib">
                  <div className="stat-text">
                    <span className="count">1</span>
                  </div>
                  <div className="stat-heading">Rendez-vous</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="stat-widget-five">
              <div className="stat-icon dib flat-color-4">
                <i className="pe-7s-users"></i>
              </div>
              <div className="stat-content">
                <div className="text-left dib">
                  <div className="stat-text">
                    <span className="count">2</span>
                  </div>
                  <div className="stat-heading">Médicaments</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="col-md-12">
        <div className="card">
          <div className="card-calendar">
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              weekends={false}
              events={[
                { title: 'rende-vous', date: '2021-03-19' },
                { title: 'event 2', date: '2019-04-02' }
              ]}
            />
          </div>
        </div>
      </div>





    </div>

  )
};

DashBoard.propTypes = {};

DashBoard.defaultProps = {};

export default DashBoard;
