import React from 'react';
import ModalWrapper from './ModalWrapper';

const logIn = props => {
  const logIn = provider => {
    // props.hideModal();
    props.logIn(provider);
  };

  return (
    <ModalWrapper
      {...props}
      title="Sign in"
      width={400}
      showOk={false}
    >
      <p>Choose your login</p>
      <button onClick={() => logIn('facebook')}>Facebook</button>
      <button onClick={() => logIn('google')}>Google</button>
      {/* email/password logIn button/form */}
    {/* email/password SignUp button/form */}
    </ModalWrapper>
  );
};

export default Modal;



{/* <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> */}