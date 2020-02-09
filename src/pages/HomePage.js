import React from 'react'
import { hot } from 'react-hot-loader/root'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { css } from '@emotion/core'

const HomePage = () => {
  return (
    <div css={style}>
      <div className="logo">
        <FontAwesomeIcon size="6x" icon={['fab', 'react']} />
      </div>
      Hello :D
    </div>
  )
}

const style = css`
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }

  margin-top: 64px;
  text-align: center;

  .logo {
    color: #61dafb;
    margin-bottom: 16px;

    svg {
      animation: spin 10s linear infinite;
    }
  }
`

export default hot(HomePage)
