const React = require('react');

class Popular extends React.Component {
  render() {
    const languages = ['All', 'Ruby', 'Java', 'CSS', 'Python'];

    return (
      <ul>
        {languages.map((language) => {
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
