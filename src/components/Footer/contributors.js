import React from 'react';
import './contributors.css';

const Contrib = ({ contributors }) => {
  return (
    <div>
    <div className="cFooterlink" data-toggle="modal" data-target="#contribModal">
      <li>& {contributors.length} Contributors</li>
    </div>
    
    <div
      className="modal fade"
      id="contribModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="contribModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header text-center">
            <h5 className="modal-title" id="exampleModalLabel">
              Project Contributors
            </h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body row">
            {contributors.map((user,index) => {
              const prevContributions = {
                MattCSmith: 74,
                aneagoie: 30,
                Dhaval1403: 19,
                anantankur: 11,
              };

              if (prevContributions[user.login])
                user.contributions += prevContributions[user.login];
              return (
                <a key ={index}
                  className="col-xs-12 col-sm-6 col-md-6 col-lg-4 text-center"
                  href={user.html_url}
                >
                  <div className="contribCard">
                    <img
                      className="d-none d-sm-block"
                      src={user.avatar_url}
                      alt={`${user.login}'s Avatar`}
                    />
                    <h5>{user.login}</h5>
                    <p>{user.contributions} Contributions</p>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="modal-footer">
            <button type="button" className="button-primary" data-dismiss="modal">
              Close
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
     
export default Contrib;
