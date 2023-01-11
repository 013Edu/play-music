import styled from "styled-components";

export const App = styled.div` 

    display: grid;
    grid-template-areas: 
    'A B'
    'A C'
    ;
    gap: 32px;
    grid-template-columns: max-content max-content;
    place-content: center;
    height: 100vh;

    #player-1{
        grid-area: A;
        padding: 50px 38px;
    }
    
    #player-1 img{
        width: 190px;
        height: 190px;
        object-fit: cover;
        margin-bottom: 10px;
    }

    #player-1.wrapper{
        width: 190px;
    }

    #player-2{
        grid-area: B;
        height: fit-content;
        .info-wrapper{
            display: flex;
            gap: 28px;
        }
    }

    #player-3{
        grid-area: C;
        height: fit-content;
        .info-wrapper{
            display: flex;
            gap: 28px;
        }
    }

    .horizontal{
        padding-inline: 58px;
    }
    
    .info{
        color: #e1e1e6;
    } 

    .info h1{
        font-size: 24px;
        margin: 0.6rem 0;
    }

    .info p{
        font-size: 19px;
        opacity: .67;
    }

 ` 

export const Player = styled.div ` 
   
   background-color: #2A2141;
   padding: 28px;
   border-radius: 10px;

   img{
        width: 80px;
        height: 80px;
        object-fit: cover;
        margin-bottom: 10px;
    }

   .controls{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;
    margin-bottom: 1rem;
   }
` 

export const Control = styled.div ` 

  margin: 0 1rem;

  .color{
    color: #fff;
  }

` 

export const TrackTime = styled.div ` 

margin-top: 28px;

  
` 