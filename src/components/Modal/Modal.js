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
      maxWidth: 740,
      minHeight: 200,
      maxHeight: 600,
      overflowY: 'auto',
      margin: '50px auto',
      padding: 10
    };

    const coursesStyle = {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: 10,
    }

    const courseStyle = {
      maxWidth: 205,
      textDecoration: 'none',
      padding: 2,
      margin: 10,
      color: 'black',
      border: '1px solid rgba(0,0,0,.125)',
      borderRadius: '0.25rem'
    }

    const courseImageStyle = {
      display: 'flex',
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: 200,
      maxHeight: 'auto',
    }

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

              <div className="content">
                <em>"The Complete Web Developer in 2019: Zero to Mastery"</em> is a complete full-stack web development course,
                with the latest and most in-demand technologies, for anyone trying to learn web development in 2019.
                <br/><br/>
                Learn to code with us, join the community and practice the skills you gained from the course,
                build up your portfolio by contributing to projects, and become a job ready web developer this year.
                <br/><br/>
                Click any course to get started!
                <br/><br/>

                <div className="courses" style={coursesStyle}>
                  <a href="https://www.udemy.com/the-complete-web-developer-zero-to-mastery/" style={courseStyle}>
                    <div className="zeroToMastery">
                      <img src={require("../../images/courses/zerotomastery.jpg")} alt="zerotomastery" style={courseImageStyle}/>
                      <h5>The Complete Web Developer in 2019: Zero to Mastery</h5>
                      <p>Learn to code and become a web developer in 2018 with HTML5, CSS, Javascript, React, Node.js, Machine Learning & more!</p>
                    </div>
                  </a>

                  <a href="https://www.udemy.com/the-complete-web-developer-zero-to-mastery/" style={courseStyle}>
                    <div className="juniorToSenior">
                      <img src={require("../../images/courses/j2s.jpg")} alt="juniortosenior" style={courseImageStyle}/>
                      <h5>The Complete Junior to Senior Web Developer Roadmap (2019)</h5>
                      <p>
                        This is the tutorial you've been looking for to no longer be a junior developer,
                        level up your skills, and earn a higher salary. This extensive course doesn’t just
                        cover a small portion of the industry.
                      </p>
                    </div>
                  </a>

                  <a href="https://www.udemy.com/the-complete-web-developer-zero-to-mastery/" style={courseStyle}>
                    <div className="codingInterview">
                      <img src={require("../../images/courses/mastering-interviews.jpg")} alt="masteringinterviews" style={courseImageStyle}/>
                      <h5>Master the Coding Interview: Data Structures + Algorithms</h5>
                      <p>
                        Using the strategies, lessons, and exercises in this course, you will learn how to land offers
                        from great tech companies like Google, Microsoft, Facebook, Netflix, Amazon and more!
                      </p>
                    </div>
                  </a>

                </div>
              </div>

            </div>
          </div>
        }
      </div>
    )
  }
}

export default Modal;
