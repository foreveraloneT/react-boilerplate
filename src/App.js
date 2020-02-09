import './setupIcon'

import { hot } from 'react-hot-loader/root'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import loadable from '@loadable/component'

const HomePage = loadable(() =>
  import('@/pages/HomePage' /* webpackChunkName: "HomePage" */)
)
// const isDevelop = process.env.NODE_ENV !== 'production'

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

const HotApp = hot(App)

ReactDOM.render(<HotApp />, document.getElementById('root'))
