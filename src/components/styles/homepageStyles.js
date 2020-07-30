import styled from "styled-components";

const HomePageStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  

  flex-direction: column;
  text-align: center;
  font-weight: bold;
  color: darkslategray;

  
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 25%;
  margin-right: 25%;
  background-color: rgb(230,250,255, 0.90);
  border-radius: 2px;

  .main {
    margin-bottom: 2rem;
  }

  h1 {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .intro {
    margin-top: 1rem;
    margin-bottom: 2rem;
    margin-left: 15%;
    margin-right: 15%;
  }

 

  a {
    color: slategray;
    text-decoration: none;
  }
  a:hover {
    color: darkblue;
  }

  
`;

export default HomePageStyle;
