import React, {Component} from 'react';

class Modal extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    }
  }

  showModal = (event) => {
    this.setState({
      show: true
    })
  }

  closeModal = (event) => {
    this.setState({
      show: false
    })
  }

  render() {

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 200,
      overflowY: 'auto',
      margin: '50px auto',
      padding: 10
    };

    const pointerCursor = {
      cursor: 'pointer'
    }

    return (
      <div>
        <div onClick={e => this.showModal()} style={pointerCursor}>
          {this.props.children}
        </div>

        {/*toggle ternary for the modal*/}
        {!this.state.show ?
          null
          :
          <div style={backdropStyle}>
            <div style={modalStyle}>

              <div onClick={e => this.closeModal()} style={pointerCursor}>
                X Close
              </div>

              <h2>Zero To Mastery</h2>

              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nobis deserunt corrupti, ut fugit magni qui quasi nisi amet
                repellendus non fuga omnis a sed impedit explicabo accusantium
                nihil doloremque consequuntur.
              </div>

            </div>
          </div>
        }
      </div>
    )
  }
}

export default Modal;
