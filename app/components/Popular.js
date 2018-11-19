const React = require('react');

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All'
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lang) {
    this.setState(function() {
      return {
        selectedLanguage: lang
      }
    });
  }

  render() {
    const languages = ['All', 'Ruby', 'Java', 'CSS', 'Python'];

    return (
      <ul className='languages'>
        {languages.map(function(language) {
          return (
            <li
              style={language === this.state.selectedLanguage ? {color: '#d0021b'} : null}
              key={language}
              onClick={this.updateLanguage.bind(null, language)}>
              {language}
            </li>
          )
        }, this)}
      </ul>
    )
  }
}

module.exports = Popular;
