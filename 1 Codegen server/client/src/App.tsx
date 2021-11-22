import styled from "styled-components";
import { Routes, Route, Link } from "react-router-dom";
import BlogList from "./components/BlogList";
import Blog from "./components/Blog";

const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background: #f1f1f1;
  padding: 30px 60px;
  box-sizing: border-box;
`;

const Header = styled.h1`
  text-align: center;
  margin: 0;
  margin-bottom: 30px;
`;

function App() {
  return (
    <Container>
      <Link to="/">
        <Header> 360 Degree GraphQL - Blog</Header>
      </Link>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="blog/:blogId" element={<Blog />} />
      </Routes>
    </Container>
  );
}

export default App;
