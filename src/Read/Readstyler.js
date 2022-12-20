import styled from "styled-components";

export const PostContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: black;
`;

export const PostWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  marin: 0 auto;
`;
export const PostCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;
export const PostImage = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  transform: rotateX() rotateY();
`;
export const PostHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;
export const BookAuthor = styled.h4`font-size: 1.5rem;
margin-top: 40px
font-weight: 400px;`;

export const PostInfo = styled.div`
  border-radius: 3px;
`;
export const PostItself = styled.p`
  margin-bottom: 1rem;
  height: 200px;
`;
export const ReadButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  border-radius: 10px;
  background: #ffc1cc;
  color: black;
  transition: 0.2 ease-out;
  margin-top: 20px;
  margin-bottom: 50px;
  &:hover {
    background: #ffc500;
    transition: 0.2 ease-out;
    cursor: pointer;
    color: #000;
  }
`;


{/* <div>
    <PostContainer>
    <PostHeading>Here are your posts</PostHeading>
    <PostWrapper>
    
        <PostCard>
        <PostImage src="https://blush.design/api/download?shareUri=yXSUcsbf5JqvNRmh&bg=f7f3e3&w=800&h=800&fm=png" alt="plant" />
        <PostInfo>
        <PostItself>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum</PostItself>
        <BookAuthor>Date of post</BookAuthor>
        <ReadButton>Read</ReadButton> 
        </PostInfo>
        </PostCard>
      

   
    </PostWrapper>
    </PostContainer>
    
    </div> */}

    // import {
//   PostContainer,
//   PostWrapper,
//   BookAuthor,
//   ReadButton,
//   PostCard,
//   PostItself,
//   PostHeading,
//   PostImage,
//   PostInfo,
  
// } from './Readstyler'; 