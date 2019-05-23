import styled from "styled-components";

const Logo = styled.div`
  padding-top: 6px;
  text-align: center;
  height: 60px;
  background: #076eab;

  .logo {
    width: 80%;
    margin: auto;
    vertical-align: middle;
  }
`;

const SideNavWrapper = styled.div`
  .fas {
    margin-right: 12px;
    font-size: 19px;
  }
`;
const HeaderWrapper = styled.div`
  padding: 6px 20px;
  height: 61px;
  background: white;
  display: flex;
  border-bottom: 0.5px solid #e4e4e4;

  i {
    font-size: 34px;
    color: #e1e1e1;
  }

  input {
    border-radius: 20px;
    border: 1px solid #ccc;
    padding-left: 15px;
  }
  .avatar {
    border-radius: 50%;
    width: 44px;
    display: inline;
    border: 2px solid #00a1ff;
  }
  .username {
    display: inline;
    font-size: 1.77rem;
    margin-right: 20px;
    vertical-align: middle;
  }
`;

const EntryWrapper = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  border-radus: 5px;
  height: 100vh;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 999;
  text-align: center;

  h2 {
    margin: 0px;
  }
  img {
    margin: 35px 28px;
    border-radius: 50%;
    width: 150px;
  }
  img:hover {
    border: 2px solid #1266a2;
  }
  input {
    border-radius: 30px;
    padding: 10px 10px 10px 30px;
    font-size: 1.5rem;
    width: 50%;
    border: 2px solid #1266a2;
  }

  .inner {
    position: absolute;
    padding: 40px;
    border-radius: 6px;
    width: 80%;
    top: 10%;
    left: 10%;
    background: white;
  }
  button {
    margin-top: 30px;
    padding: 16px 60px;
    border-radius: 50px;
    color: white;
    font-size: 1.4rem;
    border: none;
    background: #00a1ff;
  }
`;

export { HeaderWrapper, EntryWrapper, Logo, SideNavWrapper };
