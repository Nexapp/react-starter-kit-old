/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import s from './App.css';
import Header from '../../components/Header';
import Feedback from '../../components/Feedback';
import Footer from '../../components/Footer';
import Helmet from 'react-helmet';
import { head } from '../../clientConfig';

class App extends Component {

    static propTypes = {
        children: PropTypes.element.isRequired,
        error: PropTypes.bool,
    };

    static contextTypes = {
        insertCss: PropTypes.func.isRequired,
    };

    componentWillMount() {
        const { insertCss } = this.context;
        this.removeCss = insertCss(s);
    }

    componentWillUnmount() {
        this.removeCss();
    }

    render() {
        if (this.props.error) {
            return (
                <div>
                    <Helmet {...head} />
                    {this.props.children}
                </div>);
        }

        return (
            <div>
                <Helmet {...head} />
                <Header />
                {this.props.children}
                <Feedback />
                <Footer />
            </div>
        );
    }

}

export default App;
