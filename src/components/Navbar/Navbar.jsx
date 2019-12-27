import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavbarHeader = styled.header`
  position: ${props => props.position};
  top: 0;
  left: 0;
  right: 0;
  color: ${props => (props.theme === 'dark' ? 'black' : 'white')};
  background-color: ${props =>
    props.isOpen && props.theme === 'dark' ? 'white' : 'transparent'};
`

const StyledLink = styled(Link)`
  border-color: ${props => (props.theme === 'dark' ? 'black' : 'white')};
  &:hover {
    color: ${props => (props.theme === 'dark' ? 'white' : 'black')};
    background-color: ${props => (props.theme === 'dark' ? 'black' : 'white')};
  }
`

const Navbar = ({ position, theme }) => {
  const [isOpen, setOpen] = useState(false)

  const renderSvgPath = () => {
    if (isOpen) {
      return (
        <path
          fillRule="evenodd"
          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
        />
      )
    }
    return (
      <path
        fillRule="evenodd"
        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
      />
    )
  }

  const renderNavbarButton = () => {
    return (
      <button
        onClick={() => setOpen(!isOpen)}
        type="button"
        className="block focus:outline-none"
      >
        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
          {renderSvgPath()}
        </svg>
      </button>
    )
  }

  return (
    <NavbarHeader
      position={position}
      theme={theme}
      isOpen={isOpen}
      className="sm:flex sm:justify-between sm:items-center px-2 sm:px-20 py-3"
    >
      <div className="flex items-center justify-between sm:block px-2">
        <Link to="/" className="text-2xl font-bold tracking-wide">
          Shortify
        </Link>
        <div className="sm:hidden">{renderNavbarButton()}</div>
      </div>
      <nav className={`sm:flex sm:items-center ${isOpen ? 'block' : 'hidden'}`}>
        <StyledLink
          theme={theme}
          to="/"
          className="block mt-1 p-2 sm:m-0 sm:ml-2 font-semibold rounded"
        >
          About
        </StyledLink>
        <StyledLink
          theme={theme}
          to="/signin"
          className="block mt-1 p-2 sm:m-0 sm:ml-2 font-semibold rounded"
        >
          Sign in
        </StyledLink>
        <StyledLink
          theme={theme}
          to="/signup"
          className="block mt-1 p-2 sm:px-5 sm:m-0 sm:ml-2 font-semibold rounded sm:rounded-lg border-2"
        >
          Sign Up
        </StyledLink>
      </nav>
    </NavbarHeader>
  )
}

export default Navbar
