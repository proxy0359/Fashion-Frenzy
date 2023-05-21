import React from 'react';
import Backdrop from '../Backdrop';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import Star from './Star';

const ShowRatingModal = ({ onClick, title }) => {
  return (
    <>
      <Backdrop onClick={onClick} />

      {ReactDOM.createPortal(
        <div className="fixed w-[80%] h-[70%]  bg-slate-100  z-[500]   modal-center overflow-y-scroll pt-20 px-14">
          {/* CLOSE BUTTON */}
          <button className="button bg-[#f6f6f6] absolute top-0 right-0">
            <FontAwesomeIcon icon={faXmark} size="2x" />
          </button>
          <div className=" h-max relative">
            {/* TITLE */}

            <div className="h1">
              <h2>{title}</h2>

              {/* STARS */}
              <div className="h-auto w-fit flex mt-4">
                {[1, 2, 3, 4, 5].map(() => {
                  return <Star yellow={true} className={'h-5'} />;
                })}
                <p className="text-base ml-2  ">23 Reviews</p>
              </div>
            </div>
          </div>
          {/* COMMENT FILTER */}
          <div className="w-full py-4 flex justify-end"> Undesigned Filter</div>
          {/* REVIEW COMMENT CARD */}
        </div>,
        document.getElementById('overlays')
      )}
    </>
  );
};

export default ShowRatingModal;
