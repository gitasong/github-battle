const React = require('react');

class Popular extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const languages = ['All', 'Ruby', 'Java', 'CSS', 'Python'];

    return (
      <ul className='languages'>
        {languages.map(function(language) {
          return (
            <li key={language}>
              {language}
            </li>
          )
        })}
      </ul>
    )
  }
}

module.exports = Popular;
