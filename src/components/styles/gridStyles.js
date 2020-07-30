import styled from 'styled-components';

const GridStyles = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  .grid-container {
   margin: 2rem auto;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    border: 18px solid steelblue;
    border-radius: 4px;

    background-color: aliceblue;

    -webkit-box-shadow: -2px 4px 5px -4px rgba(17,28,43,1);
    -moz-box-shadow: -2px 4px 5px -4px rgba(17,28,43,1);
    box-shadow: -2px 4px 5px -4px rgba(17,28,43,1);
  }

.game-rules,
.counter-container,
.grid-header{
  width:50%;
  display:flex;
  justify-content: center;

  margin:auto;
  margin-bottom:12px;
  background-color: rgb(230,250,255, 0.90);
  border-radius:4px;
}

.game-rules{
  width: 50%;
  display:flex;
 flex-direction:column;
 align-items:flex-start;

 padding:14px;
}


  .count {
    color:darkslategray;
    font-weight: bold;
    text-align: center;

    margin: auto;  
    padding:10px;
  }

  .button-container{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    margin-left: 5%;
    margin-right: 10%;
  }

  button {
    border-radius: 5px;
    margin: 2%;
    
  }

  .footer {
    margin-top: 2rem;
  }

  .grid-cells {
    
    animation-name: example;
    animation: flash 4s ease-out infinite;

    @keyframes flash {
      from {
        background-color: red;
      }
      to {
        background-color: blue;
      }
    }
  }

  @media only screen and (max-width: 780px) {
    .button-container {
     
      flex-wrap: wrap;
    }
  }

`;

export default GridStyles;