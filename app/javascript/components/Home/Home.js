import React, { Component } from 'react';


class Home extends React.Component {
   render() { 
      return (
      <div>
         <h1> {process.env.HOME_LINK}</h1>
      </div>);
   }
}
 
export default Home;
