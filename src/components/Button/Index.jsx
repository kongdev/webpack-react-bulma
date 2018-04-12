import React, { Component } from 'react';
import classNames from 'classNames';
import PropTypes from 'prop-types';

class Button extends Component {

    let defaultProps = {
        renderAs: 'a',
        className: '',
        color: null,
        size: null,
        outlined: false,
    };

    render() {

        const {
            renderAs,
            className,
            color,
            children,
            size,
            outlined,
        } = this.props;
        
        let Element = renderAs;

        let btnClass = classNames(className, {
            [`is-${color}`]: color,
            [`is-${size}`]: size,
            'is-outlined': outlined,
        });
       

        return (
            <Element className={btnClass}>{children}</Element>
        )
    }
}

Button.propTypes = {
    className: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    renderAs: PropTypes.oneOfType([
        PropTypes.oneOf(['a', 'button']),
    ]),
    outlined: PropTypes.bool,
}

export default Button;