import React from 'react';
import Skill from './components/Skill';

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutMe: {
        firstName: 'Martin',
        lastName: 'Saprykin',
        email: 'sapr_dp83@student.itstep.org',
        town: 'Zagreb',
        logo: '/images/Doge.jpg',
        age: 17, 
        skills: [
          { name: 'HTML', progress: 80, logo: '/images/Html.png' },
          { name: 'CSS', progress: 70, logo: '/images/css.png' },
          { name: 'JavaScript', progress: 90, logo: '/images/Js.png' },
          { name: 'Vue.js', progress: 65, logo: '/images/Vue.png' }, 
          { name: 'C#', progress: 95, logo: '/images/csharp.png' }, 
        ]
      },
      initialData: {
        firstName: 'Martin',
        lastName: 'Saprykin',
        email: 'sapr_dp83@student.itstep.org',
        town: 'Zagreb',
        logo: '/images/Doge.jpg',
        age: 17, 
        skills: [
          { name: 'HTML', progress: 80, logo: '/images/Html.png' },
          { name: 'CSS', progress: 70, logo: '/images/css.png' },
          { name: 'JavaScript', progress: 90, logo: '/images/Js.png' },
          { name: 'Vue.js', progress: 65, logo: '/images/Vue.png' }, 
          { name: 'C#', progress: 95, logo: '/images/csharp.png' }, 
        ]
      },
      searchText: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      aboutMe: {
        ...this.state.aboutMe,
        [event.target.name]: event.target.value
      }
    });
  }

  resetData = () => {
    this.setState({
      aboutMe: this.state.initialData
    });
  }

  render() {
    const filteredSkills = this.state.aboutMe.skills.filter(skill =>
      skill.name.toLowerCase().includes(this.state.searchText.toLowerCase())
    );

    return (
      <div>
        <h1 className="text-2xl font-bold">About Me</h1>
        <img src={this.state.aboutMe.logo} alt="Your Image" className="w-30 h-24 mb-3" />

        <h2 className="text-xl font-bold">Personal Information</h2>
        <div className="mb-3">
          <label className="font-bold">First Name:</label>
          <input type="text" name="firstName" className='ml-2'  value={this.state.aboutMe.firstName} onChange={this.handleChange} />
        </div>
        <div className="mb-3">
          <label className="font-bold">Last Name:</label>
          <input type="text" name="lastName" className='ml-2'  value={this.state.aboutMe.lastName} onChange={this.handleChange} />
        </div>
        <div className="mb-3">
          <label className="font-bold">Age:</label>
          <input type="text" name="age" className='ml-2'  value={this.state.aboutMe.age} onChange={this.handleChange} />
        </div>
        <div className="mb-3">
          <label className="font-bold">Email:</label>
          <input type="text" name="email" className='ml-2'   value={this.state.aboutMe.email} onChange={this.handleChange} />
        </div>
        <div className="mb-3">
          <label className="font-bold">Town:</label>
          <input type="text" name="town" className='ml-2'  value={this.state.aboutMe.town} onChange={this.handleChange} />
        </div>


        <h2 className="text-xl font-bold">Skills</h2>
        <input
          value={this.state.searchText}
        />
         <ul className="list-group">
        {filteredSkills.map(skill => (
          <Skill key={skill.name} skill={skill} />
        ))}
      </ul>   
     <button onClick={this.resetData} className='btn btn-warning mt-3'>Reset</button>
      </div>
    );
  }
}

export default AboutMe;