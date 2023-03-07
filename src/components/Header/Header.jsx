import React, { Component } from 'react';
import HeaderTop from './HeaderTop/HeaderTop.jsx';
import HeaderBottom from './HeaderBottom/HeaderBottom.jsx';
import styles from './Header.module.scss';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            header: 'unfixed',
            slider: 'slideUp'
        }

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        event.preventDefault();

        if (scrollY > 450 && this.state.header === 'unfixed') {
            this.setState({ header: 'fixed',
                            slider: 'slideDown' });
        } else if (scrollY < 450 && this.state.header === 'fixed') {
            this.setState({ slider: 'slideUp' });
            setTimeout(() => this.setState({ header: 'unfixed' }), 600)
        }
    }

    render() {
        return (
            <header className={styles.mainWrapper}>
                { this.state.header === 'fixed' && <HeaderTop data={this.props.data.headerTop} headerType='fixed' slider={this.state.slider} /> }
                <HeaderTop data={this.props.data.headerTop} headerType='unfixed'/>
                <HeaderBottom data={this.props.data.headerBottom}/>
            </header>
        )
    }
}