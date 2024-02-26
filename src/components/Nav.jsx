import { styled } from "styled-components"

const Nav = () => {
  return (
    <NavWrapper>
        <Logo>
            <img 
                alt="logo"
                src="/images/apple-logo.png"
                onClick={() => (window.location.href="/")}
            />
        </Logo>
    </NavWrapper>
  )
}

const Logo = styled.a`
    padding: 0;
    width: 70px;
    font-size: 0;
    display: inline-block;
    margin-bottom: 10px;

    img {
        display: block;
        width: 100%;
    }
`

const NavWrapper = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #000000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    letter-spaceing: 16px;
    z-index: 3;
`

export default Nav